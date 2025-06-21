
# create-mern-server

> 🚀 Instantly scaffold a production-ready MERN backend using JavaScript or TypeScript — complete with Express, MongoDB, Prettier, and more.

---

## ✨ Features

- ✅ Clean folder structure (MVC pattern)
- ⚙️ Express + MongoDB with Mongoose setup
- 🎯 Choose between **JavaScript** or **TypeScript**
- 🔧 Optional Prettier configuration
- 🧪 Environment configuration via `.env`
- 🔁 Nodemon for development (JS) / `tsc` build (TS)
- 📁 Ready-to-use folders: `controllers`, `routes`, `models`, `middlewares`, `utils`, etc.
- 📦 Auto-installs dependencies & sets up Git
- 📜 Generates `README.md`, `.gitignore`, `.prettierrc`, and `tsconfig.json`

---

## 📦 Installation

You can use `npx` (no install needed):

```bash
npx create-mern-server
````

Or install globally:

```bash
npm install -g create-mern-server
```

---

## 🚀 Getting Started

Run the CLI tool:

```bash
npx create-mern-server
```

### You'll be prompted to:

1. 📁 Enter your **project name**
2. 🌐 Choose **JavaScript** or **TypeScript**
3. 🎨 Decide whether to use **Prettier**

---

## 🗂 Folder Structure

The tool generates this clean folder structure:

```
server/
├── public/
│   └── temp/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.ts|js
├── .env
├── .gitignore
├── .prettierrc (optional)
├── .prettierignore (optional)
├── tsconfig.json (for TypeScript)
├── README.md
└── package.json
```

---

## ⚙️ Scripts

For JavaScript projects:

```bash
npm run dev
# Uses nodemon + dotenv
```

For TypeScript projects:

```bash
npm run dev
# Compiles with tsc, runs built code with dotenv
```

---

## 🔐 Environment Variables

A `.env` file is generated:

```env
PORT = 1604
MONGODB_URI = your-mongodb-url
CORS_ORIGIN = http://localhost:5173
```

---

## 📘 Example Output

A minimal working Express server (`index.js` or `index.ts`) and MongoDB connector (`connectDB.ts|js`) are created. Example:

```ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  );
});
```

---

## 🔧 Customization

Once generated, you can:

* Add new routes under `src/routes/`
* Connect controllers, models, and middleware
* Configure Prettier or ESLint
* Extend with JWT, auth, or any additional service

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a [Pull Request](https://github.com/Naman-Tulsyan/create-mern-server/pulls) or [Issue](https://github.com/Naman-Tulsyan/create-mern-server/issues).

---


## 👨‍💻 Author

Developed and maintained by [**Naman Tulsyan**](https://github.com/Naman-Tulsyan)

---

## ⭐️ Show Your Support

If you found this helpful, please consider giving a ⭐️ on [GitHub](https://github.com/Naman-Tulsyan/create-mern-server.git)!

