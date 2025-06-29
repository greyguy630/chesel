# Chesel - Personal Development Mobile App

## Project Overview

Chesel is a comprehensive personal development mobile application built with React, TypeScript, and Tailwind CSS. The app provides users with tools for fitness tracking, fashion analysis, body aesthetics, presence coaching, and daily protocol management.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── BodyModule.tsx   # Body aesthetics analysis
│   ├── DailyProtocol.tsx # Home page with daily tasks
│   ├── FashionModule.tsx # Fashion and style analysis
│   ├── FitnessModule.tsx # Fitness tracking and planning
│   ├── GenderSelection.tsx # Initial gender selection
│   ├── HeightWeightSelection.tsx # Height/weight input
│   ├── MobileDrawer.tsx # Navigation drawer
│   ├── PresenceModule.tsx # Presence coaching
│   └── RotatingDiscSelector.tsx # Removed (replaced with scroll selector)
├── pages/               # Page components
│   ├── Index.tsx        # Main app container
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── main.tsx            # App entry point

docs/                    # Documentation folder
├── README.md           # This file
├── DESIGN_SYSTEM.md    # Design guidelines
├── COMPONENTS.md       # Component documentation
└── FEATURES.md         # Feature specifications
```

## Key Features

### 1. Onboarding Flow
- **Gender Selection**: Users select their gender for personalized recommendations
- **Height & Weight Input**: Scroll-based selector interface matching the provided design
- **Progress tracking**: Visual progress bar throughout onboarding

### 2. Main Navigation
- **Bottom Navigation**: 5 main modules (Home, Fitness, Fashion, Body, Presence)
- **Swipe Navigation**: Users can swipe between modules
- **Drawer Menu**: Side navigation with categories and user profile

### 3. Daily Protocol (Home)
- **Search Bar**: AI-powered question interface
- **Daily Progress**: Checkbox-style task completion
- **Quick Actions**: Shortcuts to common activities
- **Overall Score**: Radar chart showing performance across all areas

### 4. Fitness Module
- **Weekly Planning**: Workout schedule with completion tracking
- **Photo Analysis**: Current vs goal physique comparison
- **Supplement Stack**: Personalized supplement recommendations
- **Diet Planning**: Meal plans with cost breakdown
- **Budget Tracking**: Daily and monthly cost calculations

### 5. Fashion Module
- **Outfit Review**: Photo-based style analysis
- **Fabric Care Scanner**: Care instruction detection
- **Fragrance Recommendations**: Occasion-based perfume suggestions
- **Style Scoring**: Detailed breakdown of outfit elements

### 6. Body Module
- **Multi-tab Analysis**: Face, Skin, Hair, Oral, Beard (gender-specific)
- **Photo Upload**: Analysis of different body features
- **Product Recommendations**: Targeted improvement suggestions
- **Enhancement Protocols**: Step-by-step improvement plans

### 7. Presence Module
- **Situation Analysis**: Upload scenarios for coaching
- **Chat Interface**: AI-powered presence coaching
- **Strategy Generation**: Winning tactics for specific situations
- **Confidence Scoring**: Performance metrics

## Technical Implementation

### State Management
- React hooks for local state
- Context for global app state
- No external state management library

### Styling
- Tailwind CSS for utility-first styling
- Shadcn/ui for consistent component library
- Custom components with proper responsive design

### Data Flow
- Props drilling for component communication
- Event handlers for user interactions
- Mock data for demonstration purposes

### Mobile Optimization
- Touch-friendly interface design
- Swipe gestures for navigation
- Responsive breakpoints
- Mobile-first approach

## Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: Gray shades
- **Background**: White (#FFFFFF)
- **Accent**: Various grays for depth

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, consistent sizing
- **UI Text**: Appropriate contrast ratios

### Components
- **Buttons**: Rounded, consistent padding
- **Cards**: Subtle shadows, rounded corners
- **Forms**: Clean, accessible inputs
- **Navigation**: Intuitive, thumb-friendly

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

### Development
- Hot reload enabled
- TypeScript for type safety
- ESLint for code quality

## File Organization Principles

### Component Structure
Each component follows a consistent pattern:
1. Imports (React, UI components, icons)
2. Interface definitions
3. Component logic
4. Render methods
5. Export statement

### Naming Conventions
- **Components**: PascalCase (e.g., `DailyProtocol.tsx`)
- **Files**: kebab-case for utilities
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### Code Organization
- One component per file
- Related functionality grouped together
- Clear separation of concerns
- Reusable components in `/ui` folder

## Key Implementation Details

### Height & Weight Selection
The scroll selector mimics a physical dial interface:
- Visual selection highlight
- Smooth scrolling behavior
- Touch-friendly interaction
- Imperial/Metric toggle

### Daily Protocol Layout
Ordered sections for optimal user flow:
1. Search bar (top)
2. Daily Progress (priority tasks)
3. Quick Actions (shortcuts)
4. Overall Score (performance overview)

### Module Architecture
Each module is self-contained:
- Independent state management
- Consistent UI patterns
- Modular functionality
- Easy to extend/modify

## Future Enhancements

### Planned Features
- Real AI integration
- Photo analysis APIs
- User authentication
- Data persistence
- Push notifications
- Social features

### Technical Improvements
- Performance optimization
- Offline functionality
- Progressive Web App features
- Advanced animations
- Accessibility enhancements

## Maintenance Guidelines

### Code Quality
- Regular TypeScript updates
- Consistent formatting
- Component testing
- Performance monitoring

### Design Consistency
- Follow established patterns
- Maintain color scheme
- Consistent spacing
- Responsive behavior

This documentation provides a complete overview of the Chesel application architecture, features, and implementation details. Use this as a reference for understanding, maintaining, and extending the application.