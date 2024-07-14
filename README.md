# Mileto

Mileto is a web application built with Next.js, Styled Components, TypeScript, Jest, Zod, and React Testing Library. This project aims to provide a solid foundation for modern and scalable web applications.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Styled Components**: Library for CSS-in-JS styling.
- **TypeScript**: Typed superset of JavaScript for scalability and maintainability.
- **Jest**: Testing framework for JavaScript.
- **Zod**: TypeScript-first schema validation library.
- **React Testing Library**: Tool for effectively testing React components.

## Project Structure

The main project structure is as follows:

```bash
src/
├── app/
│ ├── components/
│ └── pages/
├── styles/
├── tests/
└── utils/
```

- **src/app/components**: Reusable components.
- **src/app/pages**: Next.js application pages.
- **src/styles**: Global styles and themes.
- **src/tests**: Unit and integration tests.
- **src/utils**: Utility functions.

## Installation

To get started with development, first clone the repository and then install the dependencies:

```bash
git clone https://github.com/your-username/mileto.git
cd mileto
npm install

Available Scripts

	•	npm run dev: Starts the development server.
	•	npm run build: Builds the application for production.
	•	npm start: Starts the production server.
	•	npm test: Runs unit tests with Jest.
	•	npm run lint: Lints the code for errors and best practices.

Testing Setup

The project is configured to use Jest and React Testing Library for testing. You can add new tests in the src/tests folder.

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '../app/components/MyComponent';

test('renders a message', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});

License

This project is licensed under the MIT License.
```
