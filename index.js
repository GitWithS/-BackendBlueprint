#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Template imports (assuming they export strings)
import { typescript_index } from "./typescript_index.js";
import { javaScript_index } from "./javascript_index.js";
import { gitignore } from "./gitignore.js";
import { readme } from "./readme.js";
import { typescript_connectDB } from "./typescript_connectDB.js";
import { javascript_connectDB } from "./javascript_connectDB.js";
import { env } from "./env.js";
import { prettier } from "./prettier.js";

(async () => {
  const { projectName, language, usePrettier } = await inquirer.prompt([
    {
      name: "projectName",
      message: "Enter your project name:",
      default: "server",
    },
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["JavaScript", "TypeScript"],
    },
    {
      type: "confirm",
      name: "usePrettier",
      message: "Do you want to use Prettier for code formatting?",
      default: true,
    },
  ]);

  const isTS = language === "TypeScript";
  const ext = isTS ? "ts" : "js";
  const projectPath = path.join(process.cwd(), projectName);

  // -------------------------------
  // Create Project Directory & Structure
  // -------------------------------
  fs.mkdirSync(projectPath, { recursive: true });
  fs.mkdirSync(path.join(projectPath, "public", "temp"), { recursive: true });
  fs.mkdirSync(path.join(projectPath, "src"), { recursive: true });

  const srcSubDirs = [
    "controllers",
    "db",
    "middlewares",
    "models",
    "routes",
    "utils",
  ];
  srcSubDirs.forEach((dir) => {
    fs.mkdirSync(path.join(projectPath, "src", dir));
  });

  // -------------------------------
  // Write Template Files
  // -------------------------------
  fs.writeFileSync(
    path.join(projectPath, "src", `index.${ext}`),
    isTS ? typescript_index : javaScript_index
  );

  fs.writeFileSync(
    path.join(projectPath, "src", "db", `connectDB.${ext}`),
    isTS ? typescript_connectDB : javascript_connectDB
  );

  fs.writeFileSync(path.join(projectPath, ".gitignore"), gitignore);
  fs.writeFileSync(path.join(projectPath, ".env"), env);
  fs.writeFileSync(path.join(projectPath, "README.md"), readme);

  if (usePrettier) {
    fs.writeFileSync(path.join(projectPath, ".prettierrc"), prettier);
  }

  // -------------------------------
  // Initialize NPM Project
  // -------------------------------
  execSync(`cd ${projectName} && npm init -y`, { stdio: "inherit" });

  // Modify package.json
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  if (!isTS) packageJson.type = "module";
  packageJson.scripts = packageJson.scripts || {};

  if (isTS) {
    execSync(`cd ${projectName} && npm install typescript`, { stdio: "inherit" });
    execSync(`cd ${projectName} && npx tsc --init`, { stdio: "inherit" });

    packageJson.scripts.dev = "tsc -b && node ./dist/index.js";
    packageJson.scripts.build = "tsc";
    packageJson.scripts.start = "node dist/index.js";

    // Write tsconfig
    fs.writeFileSync(
      path.join(projectPath, "tsconfig.json"),
      JSON.stringify(
        {
          compilerOptions: {
            target: "es2016",
            module: "CommonJS",
            outDir: "./dist",
            rootDir: "./src",
            strict: true,
            esModuleInterop: true,
            skipLibCheck: true,
            forceConsistentCasingInFileNames: true,
          },
          include: ["src/**/*"],
          exclude: ["node_modules"],
        },
        null,
        2
      )
    );

  } else {
    packageJson.scripts.dev = "nodemon -r dotenv/config src/index.js";
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // -------------------------------
  // Install Dependencies
  // -------------------------------
  const baseDeps = ["express", "cors", "dotenv", "cookie-parser", "mongoose"];
  const devDeps = isTS
    ? [
        "ts-node",
        "@types/node",
        "@types/express",
        "@types/cors",
        "@types/cookie-parser",
      ]
    : ["nodemon"];

  execSync(`cd ${projectName} && npm install ${baseDeps.join(" ")}`, {
    stdio: "inherit",
  });

  execSync(`cd ${projectName} && npm install -D ${devDeps.join(" ")}`, {
    stdio: "inherit",
  });

  if (usePrettier) {
    execSync(`cd ${projectName} && npm install -D prettier`, {
      stdio: "inherit",
    });
  }

  // -------------------------------
  // Initialize Git
  // -------------------------------
  execSync(`cd ${projectName} && git init`, { stdio: "inherit" });

  console.log(`\n✅ ${language} MERN server created at ./${projectName}`);

  // -------------------------------
  // Initialize App
  // -------------------------------
  execSync(`cd ${projectName} && npm run dev`, { stdio: "inherit" });
})();
