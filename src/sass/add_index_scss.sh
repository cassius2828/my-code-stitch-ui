#!/bin/bash

# Navigate to the root directory of your project


# Find all directories, then loop through them
find . -type d | while read -r dir; do
  # Check if '_index.scss' does not exist in the directory
  if [[ ! -f "$dir/_index.scss" ]]; then
    # If '_index.scss' is not found, create the file in the directory
    touch "$dir/_index.scss"
    echo "Created _index.scss in $dir"
  fi
done
