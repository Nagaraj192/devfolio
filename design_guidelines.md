# Developer Portfolio Design Guidelines

## Design Approach: Reference-Based (GitHub/Linear Inspired)
Drawing inspiration from developer-focused platforms like GitHub and Linear for a clean, professional aesthetic that resonates with the tech community.

## Core Design Elements

### Color Palette
**Dark Mode Primary:**
- Background: 210 15% 8% (deep navy-black)
- Surface: 210 12% 12% (elevated dark surface)
- Primary: 210 100% 70% (bright blue for CTAs)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 210 8% 65% (muted gray)
- Accent: 150 60% 55% (subtle green for success states)

**Light Mode (optional toggle):**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 50%
- Text Primary: 210 15% 15%

### Typography
- **Primary Font:** Inter (Google Fonts) - clean, technical feel
- **Monospace:** JetBrains Mono for code snippets
- **Hierarchy:** 
  - Hero: text-5xl font-bold
  - Section headers: text-3xl font-semibold
  - Body: text-base font-normal
  - Captions: text-sm font-medium

### Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 6, 8, 12, 16, 24
- Component padding: p-6 or p-8
- Section spacing: space-y-24
- Grid gaps: gap-6 or gap-8

### Component Library

**Navigation:**
- Sticky header with subtle backdrop blur
- Logo/name on left, navigation links on right
- Smooth scroll behavior with active section highlighting

**Hero Section:**
- Full viewport height with centered content
- Name in large typography with animated typing effect
- Professional tagline below
- Social media icons (GitHub, LinkedIn, Dev.to, Medium) as subtle buttons
- Scroll indicator at bottom

**Skills Section:**
- Grid layout showcasing tech stack
- Technology badges with icons and labels
- Subtle hover animations with scale transforms
- Progress indicators or experience levels

**Projects Gallery:**
- Card-based layout in responsive grid
- Each project card includes:
  - Screenshot placeholder with overlay
  - Project title and brief description
  - Tech stack badges
  - Live demo and GitHub links as outline buttons

**Work Experience:**
- Timeline-style layout with left-aligned dates
- Company logos as small avatars
- Role titles and achievement bullet points
- Expandable descriptions for detailed view

**Contact Form:**
- Clean form design with floating labels
- Input validation with subtle error states
- Submit button with loading state
- Success message after submission

### Images
**Profile Photo:** Professional headshot in About section (circular, medium size)
**Project Screenshots:** 3 placeholder images for project gallery (16:9 aspect ratio)
**Company Logos:** Small avatar-style logos for work experience timeline
**No large hero image** - focus on typography and clean layout

### Visual Enhancements
- Subtle gradient backgrounds on cards
- Gentle box shadows for depth
- Minimal use of animations (fade-ins, subtle hovers)
- Consistent border radius (rounded-lg)
- Focus states for accessibility

### Resume Integration
- Prominent download button in hero or navigation
- PDF icon with clear "Download Resume" label
- Optional resume preview modal

This design emphasizes professionalism, readability, and technical credibility while maintaining visual interest through thoughtful spacing, typography, and subtle interactive elements.