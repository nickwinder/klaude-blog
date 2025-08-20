# New Post Creation Command

Create a comprehensive new blog post with full automation pipeline.

## Usage
`/new-post "[Topic]" [optional: target-keyword]`

## Process

1. **Research Phase** (Research Specialist Agent)
   - Conduct comprehensive topic research
   - Gather authoritative sources and statistics
   - Identify unique angles and perspectives
   - Create detailed research brief

2. **Content Creation** (Content Writer Agent)
   - Develop engaging headline options
   - Write full blog post (1500-2000 words)
   - Include proper structure and formatting
   - Add internal/external links
   - Create compelling introduction and conclusion

3. **SEO Optimization** (SEO Optimizer Agent)
   - Optimize title and meta description
   - Ensure proper keyword integration
   - Validate heading structure
   - Add alt text suggestions for images
   - Generate schema markup recommendations

4. **Social Media Preparation** (Social Media Manager Agent)
   - Create Twitter thread breakdown
   - Write LinkedIn post version
   - Prepare Reddit community posts
   - Generate engaging quotes for social sharing
   - Design hashtag strategy

5. **File Creation & Organization**
   - Generate filename with date and slug
   - Create markdown file with proper frontmatter
   - Add to appropriate category in content collection
   - Update internal linking structure

## Example Usage

```bash
# Basic topic research and post creation
/new-post "The Future of Web Development in 2025"

# With specific keyword targeting
/new-post "React Server Components Guide" "react server components"

# Industry analysis post
/new-post "AI Tools Transforming Development Workflows"
```

## Output Structure

The command will create:
- `src/content/blog/YYYY-MM-DD-post-slug.md` - Main blog post
- `.claude/research/[topic]-research.md` - Research brief
- `.claude/social/[topic]-social-content.md` - Social media content

## Quality Standards
- Minimum 1500 words
- 3+ authoritative sources cited
- Proper SEO optimization
- Engaging, actionable content
- Platform-ready social content