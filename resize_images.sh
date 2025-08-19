#!/bin/bash

# Check for required arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <source_directory> <destination_base_directory>"
    exit 1
fi

SOURCE_DIR="$1"
DEST_BASE_DIR="$2"
DESKTOP_DIR="${DEST_BASE_DIR}/desktop"
MOBILE_DIR="${DEST_BASE_DIR}/mobile"
ORIGINAL_DIR="${DEST_BASE_DIR}/original" # Optional backup directory

# Validate source directory
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' not found."
    exit 1
fi

# Create output directories
mkdir -p "$DESKTOP_DIR"
mkdir -p "$MOBILE_DIR"
mkdir -p "$ORIGINAL_DIR" # Create backup dir if needed

# # Copy original files to preserve them - Modified to copy from source
# # Consider if backup is still needed or handled differently
# cp "${SOURCE_DIR}"/*.jpg "$ORIGINAL_DIR/" # Example if backup is desired

echo "Source directory: $SOURCE_DIR"
echo "Destination base: $DEST_BASE_DIR"
echo "Desktop output: $DESKTOP_DIR"
echo "Mobile output: $MOBILE_DIR"

# Process each image in the source directory
shopt -s extglob # Enable extended globbing for case-insensitivity if needed
# Use find for more robust handling of filenames with spaces, etc.
find "$SOURCE_DIR" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 | while IFS= read -r -d $'\0' img; do
# for img in "${SOURCE_DIR}"/*.@(jpg|jpeg|png|JPG|JPEG|PNG); do # Alternative globbing
  # [[ -f "$img" ]] || continue # Skip if not a file (for globbing)

  filename=$(basename "$img")
  name="${filename%.*}"
  
  echo "Processing $filename..."
  
  # Desktop version - JPEG (1200px wide)
  convert "$img" -resize 1200x -strip -quality 85 -sampling-factor 4:2:0 -interlace JPEG "${DESKTOP_DIR}/${name}.jpg"
  
  # Desktop version - WebP (1200px wide)
  convert "$img" -resize 1200x -strip -quality 85 "${DESKTOP_DIR}/${name}.webp"
  
  # Mobile version - JPEG (600px wide)
  convert "$img" -resize 600x -strip -quality 85 -sampling-factor 4:2:0 -interlace JPEG "${MOBILE_DIR}/${name}.jpg"
  
  # Mobile version - WebP (600px wide)
  convert "$img" -resize 600x -strip -quality 85 "${MOBILE_DIR}/${name}.webp"
  
  # Report compression stats
  orig_size=$(du -h "$img" | cut -f1)
  desktop_jpg_size=$(du -h "${DESKTOP_DIR}/${name}.jpg" 2>/dev/null | cut -f1 || echo "N/A")
  desktop_webp_size=$(du -h "${DESKTOP_DIR}/${name}.webp" 2>/dev/null | cut -f1 || echo "N/A")
  mobile_jpg_size=$(du -h "${MOBILE_DIR}/${name}.jpg" 2>/dev/null | cut -f1 || echo "N/A")
  mobile_webp_size=$(du -h "${MOBILE_DIR}/${name}.webp" 2>/dev/null | cut -f1 || echo "N/A")
  
  echo "  Original: $orig_size"
  echo "  Desktop JPG: $desktop_jpg_size"
  echo "  Desktop WebP: $desktop_webp_size"
  echo "  Mobile JPG: $mobile_jpg_size"
  echo "  Mobile WebP: $mobile_webp_size"
  echo "-----------------------------------"
done

shopt -u extglob # Disable extended globbing

echo "All images processed!"
echo "Images saved to:"
echo "  - ${DESKTOP_DIR}/ (1200px width)"
echo "  - ${MOBILE_DIR}/ (600px width)"
# echo "  - ${ORIGINAL_DIR}/ (backup of originals)" # Uncomment if backup enabled 