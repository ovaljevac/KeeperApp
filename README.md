# 📝 KeeperApp

A simple note-taking web application built with **React**.  
Users can create and delete notes dynamically.  

This project demonstrates core React concepts such as component composition, state management with Hooks, props, and dynamic rendering.

---

## 🚀 Features

- Add notes with a **title** and **content**
- Delete individual notes
- Unique ID generation using `uuid`
- Controlled form inputs
- Dynamic rendering using `.map()`
- Immutable state updates with functional `setState`
- Clean component-based architecture

---

## 🛠️ Technologies Used

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- UUID (for unique identifiers)
- CSS

---

## 🔄 How It Works

1. The user enters a title and content.
2. On form submission:
   - A unique ID is generated.
   - The note is added to the `noteList` state.
3. Notes are rendered dynamically using `.map()`.
4. Clicking the **DELETE** button removes the selected note using `filter()`.


