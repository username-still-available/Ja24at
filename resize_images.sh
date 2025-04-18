#!/bin/bash

# Create output directories
mkdir -p assets/images/desktop
mkdir -p assets/images/mobile
mkdir -p assets/images/original

# Copy original files to preserve them
cp assets/stock/*.jpg assets/images/original/

# Process each image
for img in assets/stock/*.jpg; do
  filename=$(basename "$img")
  name="${filename%.*}"
  
  echo "Processing $filename..."
  
  # Desktop version - JPEG (1200px wide)
  convert "$img" -resize 1200x -strip -quality 85 -sampling-factor 4:2:0 -interlace JPEG "assets/images/desktop/${name}.jpg"
  
  # Desktop version - WebP (1200px wide)
  convert "$img" -resize 1200x -strip -quality 85 "assets/images/desktop/${name}.webp"
  
  # Mobile version - JPEG (600px wide)
  convert "$img" -resize 600x -strip -quality 85 -sampling-factor 4:2:0 -interlace JPEG "assets/images/mobile/${name}.jpg"
  
  # Mobile version - WebP (600px wide)
  convert "$img" -resize 600x -strip -quality 85 "assets/images/mobile/${name}.webp"
  
  # Report compression stats
  orig_size=$(du -h "$img" | cut -f1)
  desktop_jpg_size=$(du -h "assets/images/desktop/${name}.jpg" | cut -f1)
  desktop_webp_size=$(du -h "assets/images/desktop/${name}.webp" | cut -f1)
  mobile_jpg_size=$(du -h "assets/images/mobile/${name}.jpg" | cut -f1)
  mobile_webp_size=$(du -h "assets/images/mobile/${name}.webp" | cut -f1)
  
  echo "  Original: $orig_size"
  echo "  Desktop JPG: $desktop_jpg_size"
  echo "  Desktop WebP: $desktop_webp_size"
  echo "  Mobile JPG: $mobile_jpg_size"
  echo "  Mobile WebP: $mobile_webp_size"
  echo "-----------------------------------"
done

echo "All images processed!"
echo "Images saved to:"
echo "  - assets/images/desktop/ (1200px width)"
echo "  - assets/images/mobile/ (600px width)"
echo "  - assets/images/original/ (backup of originals)" 