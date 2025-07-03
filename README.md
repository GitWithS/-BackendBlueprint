# 🚀 BackendBlueprint

> Instantly scaffold a production-ready MERN backend using JavaScript or TypeScript — complete with Express, MongoDB, Prettier, and more.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

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

You can scaffold a new backend project using this CLI tool in two ways:

### 🔹 Using `npx` (no global install needed)
```bash
npx create-mern-server

🔹 Or install globally
npm install -g create-mern-server

🚀 Getting Started
After running the CLI, follow the prompts:
- 📁 Enter your project name
- 🌐 Choose between JavaScript or TypeScript
- 🎨 Decide whether to use Prettier
Then:
cd your-project-name
npm install

🧪 Running the Server
For JavaScript projects:
npm run dev
# Starts server with nodemon and dotenv
🗂 Folder Structure
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



🔐 Environment Variables
A .env file is generated automatically. Example:
PORT=1604
MONGODB_URI=your-mongodb-url
CORS_ORIGIN=http://localhost:5173



🧰 Customization Tips
- Add routes in src/routes/
- Connect logic via controllers/, models/, and middlewares/
- Extend with JWT, authentication, file uploads, or any service
- Configure Prettier or ESLint to match your coding style

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a Pull Request or Issue.


⭐️ Show Your Support
If you found this helpful, please consider giving a ⭐️ on GitHub!

---



