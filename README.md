# 🚀 Dev Stack

### Discover Technologies. Build Your Ideal Stack.

Dev Stack is a simple and user-friendly web application that helps developers explore different technologies and select their favorite tools to build their ideal technology stack.

The application displays technology information, including its name, description, category, difficulty level, and rating. Users can add technologies to their stack and manage their selections easily.

## ✨ Features

- **🔍 Explore Technologies:** Browse different technologies with their logos, descriptions, categories, difficulty levels, and ratings.
- **📚 Build Your Stack:** Add technologies to your personal stack, remove individual items, or clear all selections.
- **🔔 Interactive Experience:** Get toast notifications for adding, removing, or selecting duplicate technologies, with responsive layouts for mobile and desktop.

## 🛠️ Technologies Used

- **React.js** — Build reusable UI components.
- **Tailwind CSS** — Style the application with responsive designs.
- **JavaScript (ES6+)** — Handle application logic and interactions.
- **React Icons** — Display technology logos.
- **Lucide React** — Display clean and modern icons.
- **React Toastify** — Show notifications for user actions.
- **JSON** — Store technology information.
- **Vite** — Development server and build tool.

## 📦 Installation and Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/kamrul-explorer/DevStack.git
```

**2. Navigate to the project folder**

```bash
cd DevStack
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL shown in your terminal to view the application.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── MainLayout.jsx
│   ├── Allstacks.jsx
│   ├── StackCard.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
└── main.jsx

public/
└── technology_stack.json
```

*Note: The structure may vary depending on your project.*

---

# 📘 React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. We use JSX in React to describe what the user interface should look like.

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. **State** is data managed inside a component that can change over time and update the UI.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a component store and update data.

In this project, I used `useState` to manage the selected technologies in the user's stack and to track the JSON loading state.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets us perform side effects in a component. I used it to fetch technology data from the local JSON file when the component first loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to update the correct items efficiently when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

In this project, I used it to show an empty stack message when no technologies are selected.

```jsx
{selectedStacks.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <p>Technologies selected!</p>
)}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**. To let a child communicate an action back to the parent, the parent can pass a callback function as a prop, which the child calls when an event occurs.

In this project, `Allstacks` passes a technology to `StackCard` through props and passes an `onAdd` function so the child can notify the parent when the user clicks **Add to Stack**.

---

## 👨‍💻 Created By

**Mohammad Kamrul Hasan**

GitHub: [https://github.com/kamrul-explorer]
LinkdIn: [https://www.linkedin.com/in/runtime-errorx]

---

⭐ If you like this project, consider giving it a star!
