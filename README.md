# **Loan Application Form**
- A modern, type-safe loan application form built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices for form handling, validation, and user experience design.

## **Prerequisites**
- Before you begin, ensure you have the following installed:
1. Node.js (version 16 or higher)
2. npm package manager

## **Installation**
1. Clone the repository (or create a new Vite project):

```shell
git clone repo_url .
```

```bash
npm install
```

2. Install Tailwind CSS:

- Check the documentation of tailwindcss

5. Start the development server:

```bash
npm run dev
```

## **Form Validation Rules**

| Field           | Validation Rules                                  |
|-----------------|---------------------------------------------------|
| Name            | Required                                          |
| Phone Number    | Required, minimum 10 digits                       |
| Age             | Required, minimum 18 years                        |
| Employee Status | Optional (checkbox)                               |
| Salary          | Optional (dropdown selection)                     |

## **Author**
- Mohamad Daakour

## **Code Explanation**

```ts
// in package.json file these are commands we can use in the terminal
// per example to apply the first one we put this command:
// npm run dev

"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
},
```