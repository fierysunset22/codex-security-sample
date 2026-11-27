# Codex Security Sample

A minimal React and TypeScript counter app for evaluating Codex Security. It uses Vite with Node.js and npm.

---

## What we're testing

This project is a sample for evaluating how the Codex Security plugin detects common application security (AppSec) vulnerabilities and proposes fixes. The current counter app is the starting point. Example vulnerability classes for future test cases include the following:

- Cross-site scripting (XSS)
- SQL injection
- Broken access control, including insecure direct object references (IDOR)
- Cross-site request forgery (CSRF)
- Path traversal
- Hardcoded secrets and credentials

For each test case, we'll check whether the plugin flags the issue, explains the impact, and proposes a fix that addresses the root cause while preserving the intended behavior.

---

## Local development

### Install dependencies

```sh
npm ci
```

Run `npm ci` after cloning or when `package-lock.json` changes. It replaces any existing `node_modules` directory and installs the exact dependency versions recorded in the lockfile. It leaves the lockfile unchanged and fails if it disagrees with `package.json`.

### Run the development server

```sh
npm run dev
```

Open the local URL Vite prints. Vite serves the app from your source files and updates the page as you save changes. Use this command for everyday editing.

### Build and preview

```sh
npm run build
npm run preview
```

`npm run build` checks the TypeScript and uses Vite to bundle the app into static HTML, JavaScript, and CSS in `dist/`. Run it to verify the app builds, before previewing it, or as part of deployment. Your hosting service can run the build during deployment. You can push source changes to GitHub without building first.

`npm run preview` serves the files already built into `dist/` so you can check the production build locally. Rebuild after any source changes you want to see in the preview.

### Run the security examples locally

The example server intentionally exposes vulnerable handlers for security testing. Run it only in a disposable local environment with sample data. It listens on `127.0.0.1:4317` and requires Node.js 24 or later.

```sh
npm ci
npm run server
```

Visit these sample routes:

- `http://127.0.0.1:4317/comment?comment=Hello`
- `http://127.0.0.1:4317/search?name=Ada`
- `http://127.0.0.1:4317/document?filename=welcome.txt`

The server uses an in-memory database and a sample document. The React app can be run separately with `npm run dev`.
