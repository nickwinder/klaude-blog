# Update Template

A comprehensive template update command that rebrands the entire blog for a new topic and brand.

## Usage

This command will prompt you for:
1. Brand name (e.g., "TechCorp Blog", "StartupLife", "you've been bearded")
2. Topic focus (e.g., tech, business, finance, health, ai, startup, lifestyle, etc.)
3. Optional customizations (word count, posting frequency, tone, categories)

## What it does

This command updates **all** necessary files to completely rebrand your blog:

1. **`CLAUDE.md`** - Project instructions and guidelines
2. **`src/consts.ts`** - Site title and description
3. **`package.json`** - Package name
4. **`src/pages/about.astro`** - About page content
5. **`src/components/Header.astro`** - Social media links

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

## Topic-Specific Content Categories

Each topic comes with predefined content categories, but you can customize them:

- **tech**: Technology & Innovation, Software Development, Emerging Technologies, Tech Industry Analysis, Product Reviews
- **business**: Business Strategy, Market Analysis, Leadership & Management, Industry Insights, Case Studies
- **finance**: Market Analysis, Investment Strategies, Economic Commentary, Financial Planning, Industry News
- **health**: Wellness & Fitness, Nutrition & Diet, Mental Health, Medical Research, Healthy Living
- **lifestyle**: Lifestyle & Personal Development, Health & Wellness, Fashion & Style, Personal Care, Life Tips
- **ai**: Artificial Intelligence, Machine Learning, AI Applications, Industry Impact, Technical Tutorials
- **startup**: Entrepreneurship, Startup Strategies, Business Development, Funding & Investment, Growth Hacking

---

```bash
#!/bin/bash

echo "🎨 Complete Blog Template Updater"
echo "=================================="
echo "This will update ALL files to rebrand your blog completely."
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

echo
echo "🤖 Delegating to Claude for complete template update..."
echo

# Create instruction message for Claude
cat << EOF

Please update the entire blog template with the following details:

**Brand Name:** $brand_name
**Topic Focus:** $topic
EOF

if [ ! -z "$word_count" ]; then
    echo "**Word Count:** $word_count"
fi

if [ ! -z "$frequency" ]; then
    echo "**Posting Frequency:** $frequency per week"
fi

if [ ! -z "$tone" ]; then
    echo "**Content Tone:** $tone"
fi

if [ ! -z "$categories" ]; then
    echo "**Custom Categories:** $categories"
fi

cat << EOF

Please update these files completely:

1. **CLAUDE.md** - Update project heading, content categories, and guidelines
2. **src/consts.ts** - Update SITE_TITLE and SITE_DESCRIPTION
3. **package.json** - Update package name (use kebab-case)
4. **src/pages/about.astro** - Rewrite about page content for the new brand/topic
5. **src/components/Header.astro** - Update social media links appropriate for the niche

Make sure all content is cohesive and aligned with the topic focus.
EOF

echo
echo "✅ Instructions provided to Claude. Claude will now update all files."
echo "💡 After completion, your blog will be fully rebranded!"
```