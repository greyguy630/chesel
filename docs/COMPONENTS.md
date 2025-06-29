# Chesel Component Documentation

## Component Architecture

### Overview
All components in Chesel follow a consistent structure and naming convention. Each component is self-contained, reusable, and follows React best practices.

## Core Components

### 1. GenderSelection.tsx
**Purpose**: Initial onboarding step for gender selection

**Props**:
```typescript
interface GenderSelectionProps {
  onGenderSelect: (gender: string) => void;
}
```

**Features**:
- Three gender options: Male, Female, Other
- Progress bar indicator
- Language selector
- Smooth transitions between states

**State Management**:
- `selectedGender`: Currently selected option
- Validation before proceeding

**Usage**:
```tsx
<GenderSelection onGenderSelect={setSelectedGender} />
```

### 2. HeightWeightSelection.tsx
**Purpose**: Collects user's height and weight with scroll-based selectors

**Props**:
```typescript
interface HeightWeightSelectionProps {
  onComplete: (data: { height: string; weight: string; unit: string }) => void;
  onBack: () => void;
}
```

**Features**:
- Imperial/Metric toggle
- Scroll-based value selection
- Visual selection highlighting
- Separate height (feet/inches or cm) and weight selectors

**State Management**:
- `isMetric`: Unit system toggle
- `selectedHeightFeet/Inches/Cm`: Height values
- `selectedWeight`: Weight value

**Key Implementation**:
```tsx
const ScrollSelector = ({ values, selectedValue, onValueChange, unit }) => {
  // Renders scrollable list with visual selection
  // Highlights selected value with background
  // Provides smooth interaction feedback
}
```

### 3. DailyProtocol.tsx
**Purpose**: Main dashboard with daily tasks, quick actions, and overall score

**Features**:
- Search bar for AI questions
- Daily progress tracking with checkboxes
- Quick action shortcuts
- Overall performance radar chart
- Quit section modal

**State Management**:
- `dailyTasks`: Array of tasks with completion status
- `scannedFood`: Food scanning feedback
- `showQuitModal`: Modal visibility

**Layout Order**:
1. Search bar
2. Daily Progress section
3. Quick Actions grid
4. Overall Score chart

**Key Components**:
```tsx
// Task completion toggle
const toggleTaskCompletion = (index: number) => {
  setDailyTasks(prev => prev.map((task, i) => 
    i === index ? { ...task, completed: !task.completed } : task
  ));
};

// Radar chart for overall score
<RadarChart data={overallScoreData}>
  <Radar dataKey="score" stroke="#000000" fill="#000000" />
</RadarChart>
```

### 4. FitnessModule.tsx
**Purpose**: Comprehensive fitness tracking and planning

**Features**:
- Weekly workout plan display
- Photo upload for current/goal comparison
- Supplement stack recommendations
- Detailed diet planning with costs
- Budget tracking and calculations

**State Management**:
- `step`: Current view (plan, upload, results)
- `currentPhoto/goalPhoto`: Photo upload states
- `selectedGoal`: Fitness objective
- `showWeeklyScanner`: Scanner availability

**Key Sections**:
- **Weekly Plan**: Workout schedule with completion tracking
- **Photo Analysis**: Before/after comparison
- **Supplement Stack**: Personalized recommendations with costs
- **Diet Plan**: Meal-by-meal breakdown with nutritional info
- **Budget Summary**: Daily and monthly cost calculations

### 5. FashionModule.tsx
**Purpose**: Style analysis and fashion recommendations

**Features**:
- Outfit review with scoring
- Fabric care scanner
- Fragrance recommendations
- Style analysis breakdown

**State Management**:
- `mode`: Current view (select, review, results, scanner, fragrance)
- `showScanner`: Scanner availability

**Key Features**:
```tsx
// Style analysis with detailed breakdown
const styleAnalysis = [
  { category: "Color Harmony", score: 88, feedback: "Excellent coordination" },
  { category: "Fit Assessment", score: 76, feedback: "Good fit, minor adjustments" },
  // ...
];

// Fabric care data structure
const fabricCareData = {
  fabric: "Cotton Blend (60% Cotton, 40% Polyester)",
  washTemp: "30°C / 86°F",
  careInstructions: [...]
};
```

### 6. BodyModule.tsx
**Purpose**: Aesthetic analysis for different body features

**Features**:
- Multi-tab interface (Face, Skin, Hair, Oral, Beard)
- Photo upload and analysis
- Detailed scoring system
- Product recommendations
- Enhancement protocols

**State Management**:
- `activeTab`: Current analysis tab
- `uploadState`: Photo upload progress
- `showScanner`: Scanner availability

**Tab Structure**:
```tsx
const tabs = [
  { id: 'face', label: 'Face', icon: FaceIcon },
  { id: 'skin', label: 'Skin', icon: SkinIcon },
  { id: 'hair', label: 'Hair', icon: HairIcon },
  { id: 'oral', label: 'Oral', icon: ToothIcon },
  // Conditional beard tab for males
];
```

**Scoring System**:
```tsx
const scores = {
  face: { 
    score: 76, 
    details: [
      { metric: "Facial Symmetry", score: 82 },
      { metric: "Golden Ratio", score: 74 },
      // ...
    ],
    products: [...],
    routine: [...]
  }
};
```

### 7. PresenceModule.tsx
**Purpose**: Presence coaching and situation analysis

**Features**:
- Chat interface for coaching
- Situation upload and analysis
- Strategy generation
- Confidence scoring

**State Management**:
- `messages`: Chat conversation history
- `showAnalysis`: Analysis view toggle
- `situationMode`: Upload mode toggle

**Chat Implementation**:
```tsx
const handleSend = () => {
  setMessages([...messages, { text: inputText, sender: 'user' }]);
  // Simulate AI response
  setTimeout(() => {
    setMessages(prev => [...prev, { 
      text: "AI coaching response...", 
      sender: 'ai' 
    }]);
  }, 1000);
};
```

### 8. MobileDrawer.tsx
**Purpose**: Side navigation with user profile and categories

**Features**:
- User profile display
- Category navigation
- Menu items with icons
- Smooth slide animations

**State Management**:
- `showCategories`: Category view toggle
- Body scroll prevention when open
- Escape key handling

**Navigation Structure**:
```tsx
const categories = [
  { id: 'lips', label: 'Lips', module: 'body', tab: 'face' },
  { id: 'hair', label: 'Hair', module: 'body', tab: 'hair' },
  // ...
];
```

## UI Components (src/components/ui/)

### Button Variants
- **Primary**: Black background, white text
- **Secondary**: Gray background, dark text
- **Ghost**: Transparent background, hover effects
- **Icon**: Square button for icons only

### Card Components
- **Standard**: White background, subtle border
- **Interactive**: Hover effects, clickable
- **Elevated**: Enhanced shadow for modals

### Form Elements
- **Input**: Consistent styling with focus states
- **Switch**: Toggle component for binary choices
- **Select**: Dropdown with custom styling

### Layout Components
- **Container**: Max-width wrapper with padding
- **Grid**: Responsive grid system
- **Stack**: Vertical spacing utility

## Component Patterns

### State Management Pattern
```tsx
const [state, setState] = useState(initialValue);

const handleStateChange = (newValue) => {
  setState(newValue);
  // Optional: trigger side effects
};
```

### Props Interface Pattern
```tsx
interface ComponentProps {
  required: string;
  optional?: boolean;
  callback: (data: any) => void;
}

export const Component = ({ required, optional = false, callback }: ComponentProps) => {
  // Component implementation
};
```

### Conditional Rendering Pattern
```tsx
const renderContent = () => {
  switch (currentState) {
    case 'loading':
      return <LoadingSpinner />;
    case 'error':
      return <ErrorMessage />;
    case 'success':
      return <SuccessContent />;
    default:
      return <DefaultContent />;
  }
};
```

### Event Handling Pattern
```tsx
const handleUserAction = (event: React.MouseEvent) => {
  event.preventDefault();
  // Validate input
  if (!isValid) return;
  
  // Update state
  setState(newState);
  
  // Trigger callback
  onAction?.(data);
};
```

## Styling Conventions

### Tailwind Classes
- **Layout**: `flex`, `grid`, `space-y-4`
- **Sizing**: `w-full`, `h-screen`, `p-6`
- **Colors**: `bg-white`, `text-gray-900`, `border-gray-200`
- **Interactive**: `hover:bg-gray-50`, `transition-colors`

### Component Styling
```tsx
const baseClasses = "flex items-center justify-center";
const variantClasses = {
  primary: "bg-black text-white",
  secondary: "bg-gray-100 text-gray-900"
};

const className = cn(baseClasses, variantClasses[variant], additionalClasses);
```

## Performance Considerations

### Memoization
```tsx
const expensiveCalculation = useMemo(() => {
  return complexCalculation(data);
}, [data]);

const MemoizedComponent = React.memo(Component);
```

### Event Optimization
```tsx
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);
```

### Lazy Loading
```tsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

## Testing Patterns

### Component Testing
```tsx
import { render, screen, fireEvent } from '@testing-library/react';

test('component renders correctly', () => {
  render(<Component prop="value" />);
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});

test('handles user interaction', () => {
  const mockCallback = jest.fn();
  render(<Component onAction={mockCallback} />);
  
  fireEvent.click(screen.getByRole('button'));
  expect(mockCallback).toHaveBeenCalledWith(expectedData);
});
```

This documentation provides a comprehensive guide to understanding and working with Chesel's component architecture.