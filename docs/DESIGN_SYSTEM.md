# Chesel Design System

## Overview
The Chesel design system emphasizes simplicity, elegance, and functionality with a monochromatic color scheme and clean typography.

## Color Palette

### Primary Colors
- **Black**: `#000000` - Primary actions, text, icons
- **White**: `#FFFFFF` - Background, cards, contrast elements

### Gray Scale
- **Gray 50**: `#F9FAFB` - Light backgrounds
- **Gray 100**: `#F3F4F6` - Subtle backgrounds
- **Gray 200**: `#E5E7EB` - Borders, dividers
- **Gray 300**: `#D1D5DB` - Disabled states
- **Gray 400**: `#9CA3AF` - Placeholder text
- **Gray 500**: `#6B7280` - Secondary text
- **Gray 600**: `#4B5563` - Body text
- **Gray 700**: `#374151` - Headings
- **Gray 800**: `#1F2937` - Dark text
- **Gray 900**: `#111827` - Primary text

### Accent Colors (Minimal Use)
- **Green**: `#10B981` - Success states, completed tasks
- **Red**: `#EF4444` - Error states, warnings
- **Blue**: `#3B82F6` - Information, links

## Typography

### Font Family
- **Primary**: System font stack for optimal performance
- **Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### Font Weights
- **Light**: 300 - Subtle text
- **Regular**: 400 - Body text
- **Medium**: 500 - UI elements
- **Semibold**: 600 - Subheadings
- **Bold**: 700 - Headings

### Font Sizes
- **xs**: 12px - Captions, labels
- **sm**: 14px - Secondary text
- **base**: 16px - Body text
- **lg**: 18px - Large body text
- **xl**: 20px - Small headings
- **2xl**: 24px - Section headings
- **3xl**: 30px - Page titles

### Line Heights
- **Body text**: 150% (1.5)
- **Headings**: 120% (1.2)
- **UI elements**: 100% (1.0)

## Spacing System

### Base Unit: 4px
All spacing follows an 8px grid system (multiples of 4px):

- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **5**: 20px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px
- **24**: 96px

### Component Spacing
- **Button padding**: 12px vertical, 24px horizontal
- **Card padding**: 24px all sides
- **Section margins**: 24px between sections
- **Element gaps**: 16px between related elements

## Border Radius

### Standard Radii
- **sm**: 4px - Small elements
- **md**: 8px - Buttons, inputs
- **lg**: 12px - Cards, containers
- **xl**: 16px - Large containers
- **2xl**: 24px - Modal dialogs
- **full**: 50% - Circular elements

## Shadows

### Elevation Levels
- **sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` - Subtle depth
- **md**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)` - Cards
- **lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)` - Modals
- **xl**: `0 20px 25px -5px rgba(0, 0, 0, 0.1)` - Overlays

## Component Specifications

### Buttons

#### Primary Button
- **Background**: Black
- **Text**: White
- **Padding**: 12px 24px
- **Border radius**: 12px
- **Font weight**: Medium
- **Hover**: Gray-800 background

#### Secondary Button
- **Background**: Gray-100
- **Text**: Gray-900
- **Padding**: 12px 24px
- **Border radius**: 12px
- **Font weight**: Medium
- **Hover**: Gray-200 background

#### Icon Button
- **Size**: 48px × 48px
- **Background**: Black
- **Icon**: White, 24px
- **Border radius**: 12px
- **Hover**: Gray-800 background

### Cards

#### Standard Card
- **Background**: White
- **Border**: 1px solid Gray-200
- **Border radius**: 16px
- **Padding**: 24px
- **Shadow**: md

#### Interactive Card
- **Background**: White
- **Border**: 1px solid Gray-200
- **Border radius**: 16px
- **Padding**: 24px
- **Shadow**: md
- **Hover**: Gray-50 background

### Forms

#### Input Fields
- **Background**: Gray-50
- **Border**: 1px solid Gray-200
- **Border radius**: 12px
- **Padding**: 12px 16px
- **Font size**: 16px
- **Focus**: Black border, ring shadow

#### Labels
- **Font weight**: Medium
- **Color**: Gray-700
- **Margin bottom**: 8px

### Navigation

#### Bottom Navigation
- **Height**: 80px
- **Background**: White
- **Border top**: 1px solid Gray-200
- **Item padding**: 12px 16px
- **Active state**: Black background, white text
- **Inactive state**: Gray-600 text

#### Tab Navigation
- **Background**: White
- **Border**: 1px solid Gray-200
- **Border radius**: 16px
- **Padding**: 8px
- **Active tab**: Black background, white text
- **Inactive tab**: Transparent background, gray text

## Layout Principles

### Grid System
- **Mobile**: Single column layout
- **Breakpoints**: Mobile-first approach
- **Margins**: 24px on mobile
- **Gutters**: 16px between elements

### Hierarchy
1. **Page title**: 3xl, bold
2. **Section headings**: 2xl, semibold
3. **Subsection headings**: xl, medium
4. **Body text**: base, regular
5. **Captions**: sm, regular

### White Space
- **Generous spacing**: Prevents cramped feeling
- **Consistent gaps**: 16px or 24px between sections
- **Breathing room**: Adequate padding in containers

## Interaction States

### Hover States
- **Buttons**: Darker background
- **Cards**: Light gray background
- **Links**: Underline appearance

### Active States
- **Buttons**: Slightly darker than hover
- **Tabs**: Black background, white text
- **Navigation**: Black background, white text

### Disabled States
- **Opacity**: 50%
- **Cursor**: Not-allowed
- **Background**: Gray-100
- **Text**: Gray-400

### Loading States
- **Skeleton**: Gray-200 background
- **Spinners**: Black color
- **Progress**: Black fill

## Accessibility

### Color Contrast
- **Text on white**: Minimum 4.5:1 ratio
- **Text on black**: White text for maximum contrast
- **Interactive elements**: Clear visual feedback

### Touch Targets
- **Minimum size**: 44px × 44px
- **Spacing**: 8px between targets
- **Clear boundaries**: Visible interaction areas

### Focus States
- **Ring**: 2px black outline
- **Offset**: 2px from element
- **Visible**: Clear indication of focus

## Animation Guidelines

### Timing
- **Fast**: 150ms - Hover states
- **Medium**: 300ms - Transitions
- **Slow**: 500ms - Page transitions

### Easing
- **Standard**: `ease-out` - Most transitions
- **Bounce**: `ease-in-out` - Playful interactions
- **Sharp**: `ease-in` - Exit animations

### Properties
- **Transform**: Preferred for performance
- **Opacity**: Smooth fade effects
- **Background**: Color transitions
- **Avoid**: Layout-affecting properties

This design system ensures consistency across the entire Chesel application while maintaining flexibility for future enhancements.