const { Octokit } = require('@octokit/rest');

// GitHub repository configuration
const GITHUB_OWNER = process.env.GITHUB_OWNER || '';
const GITHUB_REPO = process.env.GITHUB_REPO || '';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const BRANCH = process.env.GITHUB_BRANCH || 'master';

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { filename, content } = JSON.parse(event.body);
    
    // Validate input
    if (!filename || !content) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Filename and content are required' })
      };
    }

    // Validate environment variables
    if (!GITHUB_OWNER || !GITHUB_REPO || !GITHUB_TOKEN) {
      console.error('Missing GitHub configuration:', {
        hasOwner: !!GITHUB_OWNER,
        hasRepo: !!GITHUB_REPO,
        hasToken: !!GITHUB_TOKEN
      });
      
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Server configuration error. Please check environment variables.' 
        })
      };
    }

    // Initialize Octokit
    const octokit = new Octokit({
      auth: GITHUB_TOKEN,
    });

    // File path in the repository
    const filePath = `src/rezepte/${filename}`;
    
    // Generate slug for response
    const slug = filename.replace('.md', '');

    try {
      // Check if file already exists
      let existingFile = null;
      try {
        const { data } = await octokit.rest.repos.getContent({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: filePath,
          ref: BRANCH
        });
        existingFile = data;
      } catch (error) {
        // File doesn't exist, which is fine for new recipes
        if (error.status !== 404) {
          throw error;
        }
      }

      // Prepare the commit
      const commitMessage = existingFile 
        ? `Update recipe: ${filename}`
        : `Add new recipe: ${filename}`;

      // Create or update the file
      const response = await octokit.rest.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        message: commitMessage,
        content: Buffer.from(content).toString('base64'),
        branch: BRANCH,
        ...(existingFile && { sha: existingFile.sha }) // Include SHA for updates
      });

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          success: true,
          message: 'Recipe saved successfully',
          filename,
          slug,
          commitSha: response.data.commit.sha,
          action: existingFile ? 'updated' : 'created'
        })
      };

    } catch (githubError) {
      console.error('GitHub API error:', githubError);
      
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Failed to save file to repository',
          details: githubError.message
        })
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        details: error.message
      })
    };
  }
}; 