<p align="center"> Books Reviews Web Application </p>

![Thumbnail](https://github.com/mman9our/Books-Reviews/assets/72463762/e519f553-aecc-48b2-9944-b4bfe101b379)

Demo
---
🌍 Live Demo : 


How to run
---
* Install dependencies: ```npm install```
* Run the app: npm run dev
* Build the app: npm run build
* Test the app: npm run test

Features
---
* ✅ Browse Categories Grid Section.
* ✅ HTML Semantics.
* ✅ Following Design Guidelines.
* ✅ SEO Practices Implementation.
* ✅ Usage of TypeScript.
* ✅ Responsive  Design.
* ✅ Single Book Page.
  
Technologies Used
---
* 🖥️ Front-end Development: Using ReactJs, TypeScript and MUI Library to create an interactive and user-friendly web app design.
* 🛸 Version Control: Using Git and GitHub to manage the source code and track changes made to the project.
* ♿ Accessibility: Ensuring that the web app is accessible to users with disabilities by following web accessibility guidelines and best practices.
* 🌐 SEO: Implementing search engine optimization techniques to improve the web app's visibility and ranking on search engines.
* 📱 Responsive Design: Creating a responsive design that works seamlessly across different devices and screen sizes.
* 📡 PWA support: Adding progressive web app functionality to allow users to install the app on their mobile devices and use it offline.


Authors
---
* 🧑‍💻Mohamed Mansour

Contributors
---
Contributions are always welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

Thank you for supporting
---
![download](https://www.xngage.com/xngage-logo_og.png)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
