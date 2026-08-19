# Project Decisions - IntervAIQ Frontend

## 1. Why did I choose this approach instead of the obvious alternative?

For IntervAIQ, I chose React with Vite structured around reusable components instead of building a static HTML site or writing one large monolithic component.

While static HTML might seem like the obvious quick choice for a challenge submission, IntervAIQ has several dynamic UI states: handling live interview transitions, rendering real-time AI answer evaluations, toggling tab views (History, Analytics, Resources, About), and interacting with back-end APIs. React's state management made handling interview progression, recording state, and score displays predictable and easy to manage.

Using Vite gave me an extremely fast local dev server and lightweight production builds without the unnecessary complexity or setup overhead of Next.js, as server-side rendering wasn't required for this project. Organizing the UI into modular React components—such as navbar elements, question cards, metric badges, and history tables—kept the codebase maintainable and allowed me to establish a consistent dark SaaS style across the application.

## 2. What trade-off did I make because of the time limit?

Because of the limited time, I prioritized building a polished, fully working core user flow over adding a large number of extra features.

I focused my time on the essential experience: a clean landing page, responsive dark-mode design, the core interview practice flow, real-time answer evaluation via our FastAPI backend, product previews, Supabase integration for history tracking, and visual polish (cards, subtle gradients, clean typography, and restrained interactions). I wanted the app to look and feel like a real production SaaS product rather than a rough prototype.

The trade-off was leaving out more complex features like full video/audio recording controls, web sockets for real-time speech streaming, and heavy page transition animations. Rather than shipping incomplete or buggy advanced features, I chose to make sure the primary user journey was solid, reliable, responsive, and working in production.

## 3. Where did I use AI?

I used AI tools as a pair programming assistant during development to iterate faster and troubleshoot effectively.

Specifically, AI was useful for:
- Exploring dark SaaS UI layout patterns, color schemes, and component hierarchy ideas.
- Generating draft copywriting and sample interview question categories.
- Debugging specific CSS layout issues (like responsive grid alignment and overflow handling) and refining fetch error handling.
- Suggesting clean ways to structure component state during multi-step interview transitions.

All AI suggestions were reviewed, customized to match IntervAIQ's design and logic, manually tested across screen sizes, and integrated into the project by me. AI helped accelerate boilerplate creation and problem-solving, but the implementation, state logic, styling choices, backend integration, and final testing were completed manually.
