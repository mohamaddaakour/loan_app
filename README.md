# Loan Application Form
- A modern, type-safe loan application form built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices for form handling, validation, and user experience design.

## Features

- Type-Safe Form Handling: Full TypeScript integration for robust code
- Real-Time Validation: Input validation with clear error messages
- Modern UI/UX: Beautiful gradient design with smooth animations
- Responsive Design: Works seamlessly on mobile, tablet, and desktop
- Modal Feedback: Success and error states with visual feedback
- Accessible Forms: Proper labels, ARIA attributes, and semantic HTML
- Controlled Components: React best practices for form state management

## Prerequisites
- Before you begin, ensure you have the following installed:
1. Node.js (version 16 or higher)
2. npm package manager

## Installation
1. Clone the repository (or create a new Vite project):

2. in terminal:

```bash
npm create vite@latest loan-app -- --template react-ts
cd loan-app
```

3. Install dependencies:

```bash
npm install
```

4. Install Tailwind CSS:

- Check the documentation of tailwindcss

5. Start the development server:

```bash
npm run dev
```

## Form Validation Rules

| Field           | Validation Rules                                  |
|-----------------|---------------------------------------------------|
| Name            | Required                                          |
| Phone Number    | Required, minimum 10 digits                       |
| Age             | Required, minimum 18 years                        |
| Employee Status | Optional (checkbox)                               |
| Salary          | Optional (dropdown selection)                     |

## Author
- Mohamad Daakour