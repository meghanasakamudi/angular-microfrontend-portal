# Angular Microfrontend Portal

A focused Angular UI portfolio project demonstrating enterprise-style component design, RxJS-driven state, responsive layouts, and accessibility basics.

## Tech Stack

- Angular
- TypeScript
- RxJS
- HTML/CSS

## Current Features

- Responsive enterprise portal layout
- Work queue with status filtering
- RxJS `BehaviorSubject` and derived observable state
- Reusable dashboard patterns
- Keyboard focus styling and semantic HTML
- Example feature-module boundaries for a micro-frontend architecture

## Architecture Concept

```text
Portal Shell
   |
   +-- Customer Experience feature
   +-- Operations feature
   +-- Shared Design System
```

The current repository keeps the implementation intentionally small. The feature areas illustrate boundaries that can be independently developed or later exposed through Module Federation; it does not claim that runtime federation is already configured.

## Run Locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Purpose

This project demonstrates practical Angular UI architecture without unnecessary backend complexity. It focuses on the front-end skills commonly used in large enterprise applications: TypeScript, reactive state, reusable UI patterns, responsive design, and accessibility.

## License

MIT
