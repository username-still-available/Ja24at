document.addEventListener('DOMContentLoaded', function() {
    // Get references to the recipe gallery elements
    const desktopRecipeContainer = document.getElementById('recipe-gallery-container');
    const desktopRecipeThumbnails = document.getElementById('recipe-thumbnails');
    const mobileRecipeThumbnails = document.getElementById('mobile-recipe-thumbnails');
    const desktopSlideshowContainer = document.getElementById('slideshow-personenbetreuung');
    const mobileSlideshowContainer = document.getElementById('mobile-slideshow-personenbetreuung');
    
    // Check if all required elements are present
    if (!desktopRecipeContainer || !desktopRecipeThumbnails || !mobileRecipeThumbnails || 
        !desktopSlideshowContainer || !mobileSlideshowContainer) {
        console.warn('Some recipe gallery elements are missing, skipping initialization');
        return;
    }
    
    let desktopSlideshowInterval = null;
    let mobileSlideshowInterval = null;
    let currentImageIndex = 0;
    let activeRecipeId = 'delikate-lammrippen'; // Default recipe
    
    // Recipe data
    const recipes = [
        {
            id: 'delikate-lammrippen',
            name: 'Delikate Lammrippen mit Knoblauch und Oregano',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Delikate Lammrippen mit Knoblauch und Oregano/Bilder/20250426_171007.jpg',
                    alt: 'Delikate Lammrippen mit Knoblauch und Oregano 1'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Delikate Lammrippen mit Knoblauch und Oregano/Bilder/20250426_171203.jpg',
                    alt: 'Delikate Lammrippen mit Knoblauch und Oregano 2'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Delikate Lammrippen mit Knoblauch und Oregano/Bilder/20250426_171211.jpg',
                    alt: 'Delikate Lammrippen mit Knoblauch und Oregano 3'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Delikate Lammrippen mit Knoblauch und Oregano/Bilder/20250426_171217.jpg',
                    alt: 'Delikate Lammrippen mit Knoblauch und Oregano 4'
                }
            ]
        },
        {
            id: 'ananas-banana-cocktail',
            name: 'Erfrischender Ananas-Banana Cocktail',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Erfrischender Ananas-Banana Cocktail/Bilder/20250426_210836.jpg',
                    alt: 'Erfrischender Ananas-Banana Cocktail 1'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Erfrischender Ananas-Banana Cocktail/Bilder/20250426_210547.jpg',
                    alt: 'Erfrischender Ananas-Banana Cocktail 2'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Erfrischender Ananas-Banana Cocktail/Bilder/20250426_205950.jpg',
                    alt: 'Erfrischender Ananas-Banana Cocktail 3'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Erfrischender Ananas-Banana Cocktail/Bilder/20250426_210723.jpg',
                    alt: 'Erfrischender Ananas-Banana Cocktail 4'
                }
            ]
        },
        {
            id: 'kaesecracker',
            name: 'Käsecracker Demeter',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Käsecracker_ Demeter/20250425_212347.jpg',
                    alt: 'Käsecracker Demeter 1'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Käsecracker_ Demeter/20250425_212335.jpg',
                    alt: 'Käsecracker Demeter 2'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Käsecracker_ Demeter/20250425_212343.jpg',
                    alt: 'Käsecracker Demeter 3'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Käsecracker_ Demeter/20250425_212350.jpg',
                    alt: 'Käsecracker Demeter 4'
                }
            ]
        },
        {
            id: 'lammrippchen-honig',
            name: 'Marinierte pikante Lammrippchen mit Honig',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Marinierte pikante Lammrippchen mit Honig/Rezeptbilder_Marinierte pikante Lammrippchen mit Honig/20250426_192353.jpg',
                    alt: 'Marinierte pikante Lammrippchen mit Honig 1'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Marinierte pikante Lammrippchen mit Honig/Rezeptbilder_Marinierte pikante Lammrippchen mit Honig/20250426_192900.jpg',
                    alt: 'Marinierte pikante Lammrippchen mit Honig 2'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Marinierte pikante Lammrippchen mit Honig/Rezeptbilder_Marinierte pikante Lammrippchen mit Honig/20250426_192757.jpg',
                    alt: 'Marinierte pikante Lammrippchen mit Honig 3'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/_Marinierte pikante Lammrippchen mit Honig/Rezeptbilder_Marinierte pikante Lammrippchen mit Honig/20250426_193719.jpg',
                    alt: 'Marinierte pikante Lammrippchen mit Honig 4'
                }
            ]
        },
        {
            id: 'jause',
            name: 'Zuzanas Jausespezialitäten',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Jause/IMG-20250421-WA0000.jpg',
                    alt: 'Jausespezialitäten'
                }
            ]
        },
        {
            id: 'torten',
            name: 'Hausgemachte Torten',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Torten/IMG-20250420-WA0005.jpg',
                    alt: 'Hausgemachte Torten 1'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Torten/IMG-20250420-WA0008.jpg',
                    alt: 'Hausgemachte Torten 2'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Torten/20250420_132453.jpg',
                    alt: 'Hausgemachte Torten 3'
                }
            ]
        },
        {
            id: 'grillhendl',
            name: 'Saftiges Grillhendl',
            images: [
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_144108.webp',
                    alt: 'Saftiges Grillhendl 1'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_141212.webp',
                    alt: 'Saftiges Grillhendl 2'
                },
                {
                    src: '/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_132453.webp',
                    alt: 'Saftiges Grillhendl 3'
                }
            ]
        }
    ];
    
    // Function to update both slideshows with the same content
    function updateSlideshows(recipe) {
        if (!recipe) return;
        
        // Clear any existing intervals
        if (desktopSlideshowInterval) {
            clearInterval(desktopSlideshowInterval);
            desktopSlideshowInterval = null;
        }
        
        if (mobileSlideshowInterval) {
            clearInterval(mobileSlideshowInterval);
            mobileSlideshowInterval = null;
        }
        
        // Create slideshow content
        let slideshowContent = '';
        
        /* TODO: Future Recipe Image Optimization with Eleventy Image
         * For proper integration with the Eleventy Image optimization pipeline:
         * 
         * 1. Create a data file in src/_data/recipes.json with the image paths for all recipes
         * 2. In .eleventy.js, add code to process these images during build:
         *    
         *    // Process recipe images
         *    eleventyConfig.addJavaScriptFunction("processRecipeImages", async function() {
         *      const recipes = require('./src/_data/recipes.json');
         *      for(const recipe of recipes) {
         *        for(const image of recipe.images) {
         *          await Image(path.join("src", image.src), {
         *            widths: [320, 640, 960, 1280],
         *            formats: ["avif", "webp", "jpeg"],
         *            outputDir: "_site/img/"
         *          });
         *        }
         *      }
         *    });
         *    
         *    // Call this during build
         *    eleventyConfig.on('beforeBuild', () => {
         *      eleventyConfig.javascriptFunctions.processRecipeImages();
         *    });
         * 
         * 3. Then update this JavaScript to use the optimized image paths with the
         *    naming format used by Eleventy Image
         */
        
        recipe.images.forEach((image, index) => {
            // Use the original image paths directly
            // The images haven't been processed by the Eleventy Image plugin yet
            const originalSrc = image.src;
            
            // For WebP images, we can use them directly
            const isWebP = originalSrc.toLowerCase().endsWith('.webp');
            
            // Create responsive image markup using original images
            slideshowContent += `
                <picture class="slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}">
                    ${isWebP ? '' : `<source type="image/webp" srcset="${originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')}" media="(min-width: 640px)">`}
                    <img src="${originalSrc}" alt="${image.alt}" class="w-full h-full object-cover" loading="lazy">
                </picture>
            `;
        });
        
        // Add title overlay HTML to the slideshow content
        slideshowContent += `
            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 z-20">
                <h3 class="text-xl font-bold">${recipe.name}</h3>
            </div>
        `;
        
        // Update both slideshow containers
        desktopSlideshowContainer.innerHTML = slideshowContent;
        mobileSlideshowContainer.innerHTML = slideshowContent;
        
        // Start slideshow for desktop images
        const desktopImages = desktopSlideshowContainer.querySelectorAll('.slideshow-image');
        const mobileImages = mobileSlideshowContainer.querySelectorAll('.slideshow-image');
        
        if (desktopImages.length > 1 && mobileImages.length > 1) {
            currentImageIndex = 0;
            
            // Create desktop slideshow interval
            desktopSlideshowInterval = setInterval(() => {
                // Hide current image on desktop
                desktopImages[currentImageIndex].classList.remove('opacity-100', 'z-10');
                desktopImages[currentImageIndex].classList.add('opacity-0', 'z-0');
                
                // Hide current image on mobile
                mobileImages[currentImageIndex].classList.remove('opacity-100', 'z-10');
                mobileImages[currentImageIndex].classList.add('opacity-0', 'z-0');
                
                // Calculate next index
                currentImageIndex = (currentImageIndex + 1) % desktopImages.length;
                
                // Show next image on desktop
                desktopImages[currentImageIndex].classList.remove('opacity-0', 'z-0');
                desktopImages[currentImageIndex].classList.add('opacity-100', 'z-10');
                
                // Show next image on mobile
                mobileImages[currentImageIndex].classList.remove('opacity-0', 'z-0');
                mobileImages[currentImageIndex].classList.add('opacity-100', 'z-10');
            }, 3000);
        }
    }
    
    // Function to show a recipe
    function showRecipe(recipeId) {
        try {
            console.log(`Showing recipe: ${recipeId}`);
            
            // If selecting the same recipe, don't do anything
            if (recipeId === activeRecipeId) return;
            
            // Find the selected recipe
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) {
                console.warn(`Recipe with ID "${recipeId}" not found`);
                return;
            }
            
            // Update active button state for both desktop and mobile buttons
            document.querySelectorAll('.recipe-button').forEach(btn => {
                btn.classList.remove('bg-brand-green', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800');
            });
            
            // Update desktop button
            const desktopActiveButton = document.getElementById(`button-${recipeId}`);
            if (desktopActiveButton) {
                desktopActiveButton.classList.remove('bg-gray-200', 'text-gray-800');
                desktopActiveButton.classList.add('bg-brand-green', 'text-white');
            }
            
            // Update mobile button
            const mobileActiveButton = document.getElementById(`mobile-button-${recipeId}`);
            if (mobileActiveButton) {
                mobileActiveButton.classList.remove('bg-gray-200', 'text-gray-800');
                mobileActiveButton.classList.add('bg-brand-green', 'text-white');
            }
            
            // Update active recipe ID
            activeRecipeId = recipeId;
            
            // Update both slideshows
            updateSlideshows(recipe);
            
        } catch (error) {
            console.error('Error in showRecipe function:', error);
        }
    }
    
    // Create recipe buttons for both desktop and mobile
    let desktopButtonsHtml = '';
    let mobileButtonsHtml = '';
    
    // Generate HTML for both desktop and mobile recipe buttons
    recipes.forEach(recipe => {
        const isActive = recipe.id === 'delikate-lammrippen';
        const buttonClasses = isActive 
            ? 'bg-brand-green text-white' 
            : 'bg-gray-200 text-gray-800';
        
        // Desktop button HTML
        desktopButtonsHtml += `
            <button id="button-${recipe.id}" 
                    class="recipe-button w-full px-3 py-2 rounded-md text-sm font-medium ${buttonClasses}
                    hover:bg-brand-green hover:text-white transition-colors text-center">
                ${recipe.name}
            </button>
        `;
        
        // Mobile button HTML (same structure but different ID)
        mobileButtonsHtml += `
            <button id="mobile-button-${recipe.id}" 
                    class="recipe-button w-full px-3 py-2 rounded-md text-sm font-medium ${buttonClasses}
                    hover:bg-brand-green hover:text-white transition-colors text-center">
                ${recipe.name}
            </button>
        `;
    });
    
    // Add buttons to both thumbnail containers
    desktopRecipeThumbnails.innerHTML = desktopButtonsHtml;
    mobileRecipeThumbnails.innerHTML = mobileButtonsHtml;
    
    // Add click event listeners to the desktop buttons
    desktopRecipeThumbnails.querySelectorAll('.recipe-button').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = this.id.replace('button-', '');
            showRecipe(recipeId);
        });
    });
    
    // Add click event listeners to the mobile buttons
    mobileRecipeThumbnails.querySelectorAll('.recipe-button').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = this.id.replace('mobile-button-', '');
            showRecipe(recipeId);
        });
    });
    
    // Display the default recipe (Lammrippen) immediately on page load
    const defaultRecipe = recipes.find(r => r.id === 'delikate-lammrippen');
    if (defaultRecipe) {
        // Update both slideshows with the default recipe
        updateSlideshows(defaultRecipe);
    }
}); 