# React Travel Journal 🌍

A simple React project that displays travel entries using reusable components and dynamic data rendering.

## 🚀 Features

* Reusable `Entry` component
* Data-driven UI using `.map()`
* Clean component structure (Header + Entries)
* Props handling (multiple approaches)
* Basic styling with CSS

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* CSS

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── Entry.jsx
 ├── Header.jsx
 ├── data.js
 ├── main.jsx
 └── index.css
```

## ⚙️ How It Works

* Travel data is stored in `data.js`
* `.map()` is used to convert data → `<Entry />` components
* Props are passed using:

  * Individual props
  * Object prop
  * Spread operator (`...entry`)

## 🧠 Learnings

* React component structure
* Props (3 methods)
* `.map()` for rendering lists
* Importance of `key` prop

## 📌 Future Improvements

* Add responsive design
* Add animations
* Fetch data from API

## 📜 License

Free to use for learning purposes.
