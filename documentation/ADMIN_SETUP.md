# Recipe Admin Setup Guide

## Direct File Saving Feature

The recipe admin interface now supports saving files directly to the repository without requiring manual download and upload. This feature uses the GitHub API to commit new recipe files directly to the `src/rezepte/` folder.

## Required Configuration

To enable the direct file saving feature, you need to configure the following environment variables in your Netlify deployment settings:

### Environment Variables

1. **GITHUB_OWNER** (required)
   - Your GitHub username or organization name
   - Example: `john-doe` or `my-organization`

2. **GITHUB_REPO** (required)
   - The name of your repository
   - Example: `ja24at-website`

3. **GITHUB_TOKEN** (required)
   - GitHub Personal Access Token with write permissions
   - How to create:
     1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
     2. Click "Generate new token (classic)"
     3. Give it a descriptive name like "Netlify Recipe Admin"
     4. Select the **repo** scope (Full control of private repositories)
     5. Copy the generated token

4. **GITHUB_BRANCH** (optional)
   - The branch to commit to
   - Defaults to `master` if not specified
   - Example: `main` or `master`

### Setting Up Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings > Environment variables**
3. Add the following variables:
   ```
   GITHUB_OWNER=your-github-username
   GITHUB_REPO=your-repo-name
   GITHUB_TOKEN=your-personal-access-token
   GITHUB_BRANCH=master
   ```
4. Click **Save**
5. Redeploy your site for the changes to take effect

### Security Notes

- Keep your GitHub token secure and never commit it to your repository
- The token should only have the minimum required permissions (repo scope)
- Consider using a dedicated GitHub account for automated commits if desired
- The recipe admin interface already has `noindex, nofollow` meta tags for SEO protection

## Features

Once configured, the recipe admin interface provides:

- **📋 In Zwischenablage kopieren**: Copy the generated markdown to clipboard
- **💾 Direkt speichern**: Save the file directly to the repository (new feature)
- **💾 Datei herunterladen**: Download the file manually (fallback option)

The direct save feature will:
- Save the file to `src/rezepte/filename.md`
- Create a proper commit message
- Trigger an automatic site rebuild
- Show the direct link to the new recipe page
- Offer to clear the form for the next recipe

## Troubleshooting

If the direct save feature doesn't work:
1. Check that all environment variables are set correctly in Netlify
2. Verify the GitHub token has the correct permissions
3. Ensure the repository name and owner are correct
4. Use the download button as a fallback
5. Check the Netlify function logs for error details

## Fallback Options

If the direct save feature is not configured or fails:
- The download button will always work as a fallback
- You can manually save the downloaded file to `src/rezepte/`
- The site will rebuild automatically once files are committed to the repository 