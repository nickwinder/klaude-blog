# Update Template

Updates the CLAUDE.md template with a new brand name and topic focus.

## Usage

This command will prompt you for:
1. Brand name (e.g., "TechCorp Blog", "StartupLife")
2. Topic focus (e.g., tech, business, finance, health, ai, startup, etc.)
3. Optional customizations (word count, posting frequency, tone, categories)

## What it does

- Updates the main heading with your brand name and topic-appropriate subtitle
- Replaces content categories with topic-relevant ones
- Allows customization of word count targets, posting frequency, and tone
- Preserves all other template structure and guidelines

## Supported Topics

- **tech**: Technology & Innovation
- **business**: Business Strategy & Insights  
- **finance**: Financial Analysis & Commentary
- **health**: Health & Wellness Content
- **education**: Educational Resources & Guides
- **ai**: AI & Machine Learning Insights
- **startup**: Startup Journey & Entrepreneurship
- **marketing**: Digital Marketing & Growth
- **lifestyle**: Lifestyle & Personal Development
- **travel**: Travel Experiences & Guides
- **food**: Culinary Adventures & Recipes
- **sports**: Sports Analysis & Commentary
- **gaming**: Gaming Reviews & Industry News
- **crypto**: Cryptocurrency & Blockchain Analysis

---

```bash
#!/bin/bash

echo "🎨 Template Updater for Claude Code Blog"
echo "========================================"
echo

# Get brand name
read -p "Enter your brand name (e.g., 'TechCorp Blog'): " brand_name
if [ -z "$brand_name" ]; then
    echo "❌ Brand name is required"
    exit 1
fi

# Get topic
echo
echo "Available topics: tech, business, finance, health, education, ai, startup, marketing, lifestyle, travel, food, sports, gaming, crypto"
read -p "Enter topic focus: " topic
if [ -z "$topic" ]; then
    echo "❌ Topic is required"
    exit 1
fi

# Optional customizations
echo
echo "Optional customizations (press Enter to skip):"

read -p "Word count range (e.g., '1500-2000'): " word_count
read -p "Posts per week (e.g., '2-3'): " frequency
read -p "Content tone (e.g., 'Professional yet approachable'): " tone
read -p "Custom categories (comma-separated): " categories

# Build command
cmd="node scripts/update-template.js \"$brand_name\" \"$topic\""

if [ ! -z "$word_count" ]; then
    cmd="$cmd --word-count \"$word_count\""
fi

if [ ! -z "$frequency" ]; then
    cmd="$cmd --frequency \"$frequency\""
fi

if [ ! -z "$tone" ]; then
    cmd="$cmd --tone \"$tone\""
fi

if [ ! -z "$categories" ]; then
    cmd="$cmd --categories \"$categories\""
fi

echo
echo "Running: $cmd"
echo

# Execute the command
eval $cmd

echo
echo "✅ Template updated! Check CLAUDE.md for the changes."
echo "💡 Tip: You can now start creating content with your new brand focus!"
```