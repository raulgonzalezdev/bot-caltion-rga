#!/bin/bash

# Define source and destination directories
SOURCE_DIR="$HOME/.local/share/weaviate"
DEST_DIR="./data/weaviate_data"

# Check if the source directory exists
if [ -d "$SOURCE_DIR" ]; then
    # Create the destination directory if it doesn't exist
    mkdir -p "$DEST_DIR"

    # Copy all content from the source directory to the destination directory
    cp -r "$SOURCE_DIR"/* "$DEST_DIR"

    echo "Content copied successfully from $SOURCE_DIR to $DEST_DIR."
else
    echo "Source directory $SOURCE_DIR does not exist."
fi
