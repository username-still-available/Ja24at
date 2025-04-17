#!/bin/bash

# Create output directories
mkdir -p assets/images/optimized/desktop
mkdir -p assets/images/optimized/mobile

# Desktop images - resizing to 800px width max while maintaining aspect ratio
# Also using progressive JPEGs and better compression
echo "Optimizing desktop images..."
for img in assets/images/desktop/*.jpg; do
  filename=$(basename "$img")
  echo "Processing $filename"
  convert "$img" -resize 800x -strip -interlace Plane -quality 80 "assets/images/optimized/desktop/$filename"
done

# WebP versions for desktop
for img in assets/images/desktop/*.webp; do
  filename=$(basename "$img")
  echo "Processing WebP $filename"
  convert "$img" -resize 800x -strip -quality 80 "assets/images/optimized/desktop/$filename"
done

# Mobile images - resizing to 480px width max
echo "Optimizing mobile images..."
for img in assets/images/mobile/*.jpg; do
  filename=$(basename "$img")
  echo "Processing $filename"
  convert "$img" -resize 480x -strip -interlace Plane -quality 75 "assets/images/optimized/mobile/$filename"
done

# WebP versions for mobile
for img in assets/images/mobile/*.webp; do
  filename=$(basename "$img")
  echo "Processing WebP $filename"
  convert "$img" -resize 480x -strip -quality 75 "assets/images/optimized/mobile/$filename"
done

# Check optimized file sizes
echo "Original sizes:"
du -sh assets/images/desktop assets/images/mobile
echo "Optimized sizes:"
du -sh assets/images/optimized/desktop assets/images/optimized/mobile

echo "Optimization complete!" 