#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CLAUDE_MD_PATH = path.join(process.cwd(), 'CLAUDE.md');

const defaultTemplate = {
  brandName: 'Klaude Blog',
  subtitle: 'AI-Powered Content Automation Template',
  contentCategories: [
    'Technology & AI',
    'Web Development', 
    'Productivity & Tools',
    'Industry Analysis',
    'Tutorial Guides'
  ],
  targetWordCount: '1500-2000',
  postsPerWeek: '2-3',
  tone: 'Professional yet conversational, authoritative but approachable'
};

function updateTemplate(brandName, topic, options = {}) {
  if (!fs.existsSync(CLAUDE_MD_PATH)) {
    console.error('CLAUDE.md not found in current directory');
    process.exit(1);
  }

  let content = fs.readFileSync(CLAUDE_MD_PATH, 'utf8');
  
  // Update brand name in title
  content = content.replace(
    /^# .+ - .+$/m,
    `# ${brandName} - ${options.subtitle || generateSubtitle(topic)}`
  );
  
  // Update content categories based on topic
  const categories = generateCategories(topic, options.categories);
  const categoriesSection = categories.map(cat => `- ${cat}`).join('\n');
  content = content.replace(
    /## Content Categories\n(- .+\n)+/,
    `## Content Categories\n${categoriesSection}\n`
  );
  
  // Update target word count if provided
  if (options.wordCount) {
    content = content.replace(
      /- Target word count: \d+-\d+ words/,
      `- Target word count: ${options.wordCount} words`
    );
  }
  
  // Update posting frequency if provided
  if (options.frequency) {
    content = content.replace(
      /- Main posts: \d+-\d+ per week/,
      `- Main posts: ${options.frequency} per week`
    );
  }
  
  // Update tone if provided
  if (options.tone) {
    content = content.replace(
      /- Tone: .+/,
      `- Tone: ${options.tone}`
    );
  }
  
  fs.writeFileSync(CLAUDE_MD_PATH, content);
  console.log(`✅ Updated CLAUDE.md for "${brandName}" with topic focus: ${topic}`);
}

function generateSubtitle(topic) {
  const subtitles = {
    'tech': 'Technology & Innovation Blog',
    'business': 'Business Strategy & Insights',
    'finance': 'Financial Analysis & Commentary',
    'health': 'Health & Wellness Content Hub',
    'education': 'Educational Resources & Guides',
    'lifestyle': 'Lifestyle & Personal Development',
    'travel': 'Travel Experiences & Guides',
    'food': 'Culinary Adventures & Recipes',
    'sports': 'Sports Analysis & Commentary',
    'gaming': 'Gaming Reviews & Industry News',
    'crypto': 'Cryptocurrency & Blockchain Analysis',
    'ai': 'AI & Machine Learning Insights',
    'startup': 'Startup Journey & Entrepreneurship',
    'marketing': 'Digital Marketing & Growth Strategies'
  };
  
  return subtitles[topic.toLowerCase()] || 'Content Automation Template';
}

function generateCategories(topic, customCategories) {
  if (customCategories) return customCategories;
  
  const categoryMaps = {
    'tech': [
      'Technology & Innovation',
      'Software Development',
      'Emerging Technologies',
      'Tech Industry Analysis',
      'Product Reviews'
    ],
    'business': [
      'Business Strategy',
      'Market Analysis',
      'Leadership & Management',
      'Industry Insights',
      'Case Studies'
    ],
    'finance': [
      'Market Analysis',
      'Investment Strategies',
      'Economic Commentary',
      'Financial Planning',
      'Industry News'
    ],
    'health': [
      'Wellness & Fitness',
      'Nutrition & Diet',
      'Mental Health',
      'Medical Research',
      'Healthy Living'
    ],
    'education': [
      'Learning Strategies',
      'Educational Technology',
      'Skill Development',
      'Career Guidance',
      'Study Techniques'
    ],
    'ai': [
      'Artificial Intelligence',
      'Machine Learning',
      'AI Applications',
      'Industry Impact',
      'Technical Tutorials'
    ],
    'startup': [
      'Entrepreneurship',
      'Startup Strategies',
      'Business Development',
      'Funding & Investment',
      'Growth Hacking'
    ]
  };
  
  return categoryMaps[topic.toLowerCase()] || defaultTemplate.contentCategories;
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
Usage: node update-template.js <brand-name> <topic> [options]

Examples:
  node update-template.js "TechCorp Blog" tech
  node update-template.js "FinanceHub" finance --word-count "2000-3000" --frequency "3-4"
  node update-template.js "StartupLife" startup --tone "Casual and inspiring"

Options:
  --word-count <range>     Target word count (e.g., "1500-2000")
  --frequency <range>      Posts per week (e.g., "2-3")
  --tone <description>     Content tone
  --categories <list>      Comma-separated categories
    `);
    process.exit(1);
  }
  
  const brandName = args[0];
  const topic = args[1];
  const options = {};
  
  // Parse additional options
  for (let i = 2; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    
    switch (flag) {
      case '--word-count':
        options.wordCount = value;
        break;
      case '--frequency':
        options.frequency = value;
        break;
      case '--tone':
        options.tone = value;
        break;
      case '--categories':
        options.categories = value.split(',').map(s => s.trim());
        break;
    }
  }
  
  updateTemplate(brandName, topic, options);
}

module.exports = { updateTemplate };