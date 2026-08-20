# IntervAIQ

## Overview
IntervAIQ is an AI-powered technical interview practice platform designed to help developers prepare for technical interviews. Users can choose interview topics and difficulty levels, answer technical questions, receive instant AI-driven answer evaluations with semantic scores, and review their past performance.

I built this project to provide a structured, accessible way to practice technical questions with immediate feedback rather than relying on static question lists.

## Features
- **Technical Mock Interviews**: Interactive interview sessions covering technical topics and roles.
- **Question Selection by Topic/Difficulty**: Custom setup options allowing users to filter questions by topic and difficulty level.
- **AI-Based Answer Evaluation**: Automatic scoring and feedback on submitted responses.
- **Semantic Answer Scoring**: Evaluates conceptual accuracy beyond exact keyword matching.
- **Interview History**: Stores past interview attempts and performance breakdowns.
- **Analytics & Resource Views**: Dedicated views for reviewing history trends and accessing preparation resources.
- **Responsive Frontend**: Clean dark-themed interface built for desktop and mobile screens.
- **Backend API Integration**: Connects with a FastAPI backend to fetch questions and submit evaluations.

## Tech Stack

### Frontend
- React 19
- Vite
- JavaScript (ES6+)
- CSS

### Backend
- FastAPI
- Python
- AI / Semantic Evaluation Model

### Database
- Supabase (interview history & log storage)

### Deployment
- Render

## How It Works

User starts an interview 
→ Frontend requests questions from FastAPI 
→ User submits an answer 
→ Backend evaluates the answer 
→ Score/feedback is returned to the frontend 
→ Interview result is stored in Supabase 
→ User views history and analytics later

## Project Structure

```text
AI_INTERVIEW_FRONTEND/
├── index.html
├── package.json
├── vite.config.js
├── DECISIONS.md
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── HeroSection.jsx
    │   ├── InterviewSetup.jsx
    │   ├── InterviewScreen.jsx
    │   ├── QuestionCard.jsx
    │   ├── EvaluationResult.jsx
    │   ├── InterviewSummary.jsx
    │   ├── InterviewHistory.jsx
    │   ├── AnalyticsView.jsx
    │   ├── ResourcesHub.jsx
    │   └── AboutView.jsx
    ├── services/
    │   └── api.js
    └── utils/
        ├── interviewHistory.js
        └── questionSelector.js
```

## Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Setup & Installation

1. Navigate to the frontend directory:
   ```bash
   cd AI_INTERVIEW_FRONTEND
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variable by creating a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://127.0.0.1:8000
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```


## Environment Variables

The frontend uses the following environment variable to connect to the backend service:

| Variable | Description | Default / Example |
| --- | --- | --- |
| `VITE_API_URL` | Base URL of the backend API service | `http://127.0.0.1:8000` |

Do not commit real API keys, Supabase credentials, or secret tokens into public repositories.

## Deployment

The frontend is deployed on **Render** as a static site web service built using Vite (`npm run build`). The FastAPI backend is hosted separately, and `VITE_API_URL` is set in Render's environment settings to point to the live backend URL.

## Future Improvements

- **Better Accessibility**: Comprehensive ARIA attribute updates, screen reader audits, and improved keyboard focus navigation.
- **Detailed Analytics**: Advanced metrics tracking performance trends across specific topics over time.
- **Performance Optimization**: Code-splitting routes and optimizing bundle sizes for faster initial load.
- **Improved Evaluation Feedback**: Providing deeper conceptual feedback and suggested sample answers.
- **Additional Interview Modes**: Supporting timed speed-drills and custom user-defined question sets.
