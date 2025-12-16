# React Quiz Application

An interactive quiz application built with React and Vite that tests your React knowledge. The app features a clean UI, progress tracking, scoring system, and high score management.

## Features

- 🎯 **Interactive Quiz**: Answer multiple-choice questions about React
- 📊 **Progress Tracking**: Visual progress bar showing current question and completion status
- 💯 **Scoring System**: Points-based scoring with different point values per question
- 🏆 **High Score**: Tracks and displays your best score
- ⏱️ **Timer**: Countdown timer (15 seconds per question) that automatically finishes the quiz when time runs out
- ⚡ **State Management**: Uses React's `useReducer` hook for efficient state management
- 🎨 **Modern UI**: Clean and responsive design
- 🔄 **Error Handling**: Graceful error handling for API failures
- ⏳ **Loading States**: Loading indicators while fetching questions
- 🔁 **Restart Functionality**: Easy quiz restart to try again

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **JSON Server** - Mock API server for questions data
- **ESLint** - Code linting

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-quiz
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

The application requires two processes to run:

1. **Start the JSON Server** (in one terminal):

```bash
npm run server
```

This starts the JSON server on `http://localhost:8000` to serve the quiz questions.

2. **Start the Development Server** (in another terminal):

```bash
npm run dev
```

This starts the Vite dev server, typically on `http://localhost:5173`.

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality
- `npm run server` - Start the JSON server for the questions API

## Project Structure

```
react-quiz/
├── data/
│   └── questions.json      # Quiz questions data
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Error.jsx        # Error display component
│   │   │   └── Loader.jsx        # Loading indicator
│   │   ├── layout/
│   │   │   ├── Header.jsx        # App header
│   │   │   ├── Footer.jsx        # Footer container for timer and next button
│   │   │   └── Main.jsx          # Main container
│   │   ├── quiz/
│   │   │   ├── Question.jsx      # Question display
│   │   │   ├── Options.jsx      # Answer options component
│   │   │   ├── Progress.jsx     # Progress bar and stats
│   │   │   ├── Timer.jsx        # Countdown timer component
│   │   │   └── NextQuestion.jsx  # Next/Finish button
│   │   └── results/
│   │       ├── StartScreen.jsx  # Welcome screen
│   │       └── FinishScreen.jsx # Quiz completion screen
│   ├── config/
│   │   └── constants.js          # App constants (SECONDS_PER_QUESTION, initialState)
│   ├── hooks/                    # Custom React hooks (empty for now)
│   ├── services/                 # API services and external integrations (empty for now)
│   ├── utils/                    # Utility functions (empty for now)
│   ├── App.jsx                   # Main app component with state management
│   ├── index.css                 # Global styles
│   └── main.jsx                  # App entry point
├── package.json
└── README.md
```

## How It Works

### State Management

The application uses React's `useReducer` hook to manage complex state. The initial state and constants are defined in `config/constants.js`. The state includes:

- `questions`: Array of quiz questions
- `status`: Current app status (`loading`, `error`, `ready`, `active`, `finished`)
- `index`: Current question index
- `answer`: Selected answer for current question
- `points`: Current score
- `highScore`: Best score achieved
- `secondsRemaining`: Time remaining in seconds (15 seconds per question, defined in `SECONDS_PER_QUESTION` constant)

### Application Flow

1. **Loading**: Fetches questions from the JSON server API
2. **Ready**: Displays start screen with question count
3. **Active**: Shows questions one at a time with:
   - Progress bar
   - Question text
   - Multiple choice options (with visual feedback for correct/incorrect)
   - Countdown timer (MM:SS format)
   - Next/Finish button
   - Timer automatically finishes the quiz when it reaches zero
4. **Finished**: Displays final score, percentage, high score, and restart option

### Key Components

**UI Components** (`components/ui/`):

- **Error**: Error display component for API failures
- **Loader**: Loading indicator while fetching questions

**Layout Components** (`components/layout/`):

- **Header**: App header with logo and title
- **Footer**: Container component that wraps the timer and next button
- **Main**: Main container for app content

**Quiz Components** (`components/quiz/`):

- **Question**: Displays the current question
- **Options**: Renders answer options with interactive buttons that show correct/incorrect feedback
- **Progress**: Shows current question number, progress bar, and points
- **Timer**: Displays countdown timer (15 seconds per question) in MM:SS format, automatically finishes quiz when time expires
- **NextQuestion**: Conditionally renders "Next" or "Finish" button

**Results Components** (`components/results/`):

- **StartScreen**: Welcome screen with quiz information and start button
- **FinishScreen**: Displays results, percentage score, high score, and restart button

## Data Format

Questions are stored in `data/questions.json` with the following structure:

```json
{
  "questions": [
    {
      "question": "Question text?",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctOption": 0,
      "points": 10
    }
  ]
}
```

## Development

This project was created using Vite's React template. The React Compiler is not enabled by default. To add it, see the [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

For production applications, consider using TypeScript with type-aware lint rules. Check out the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more information.

## License

This project is part of "The Ultimate React Course 2025" learning materials.
