## Overview

This is a React.js project that includes various features such as dashboards, widget management, and persistent state handling. It leverages Redux for state management and integrates local storage to ensure state persistence across page refreshes.

## Features

- **Dashboard Management**: Includes various categories and widgets.
- **Widget Operations**: Add, remove, and manage widgets.
- **Customizable Layout**: Allows personalization of the dashboard layout.
- **Persistent State**: Utilizes local storage to save and retrieve state.

##Live Demo

You can view the deployed application at: [Project Deployment](https://assignment-project-lucky-virani.vercel.app/)

## Prerequisites

Ensure you have the following software installed on your local machine:

- **Node.js** (version 14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn** - [Yarn Installation](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Clone the repository to your local machine using the command:

```bash
git clone https://github.com/iluckyvirani/Assignment_Project_Lucky_Virani.git
cd your-repo-name
```

### 2. Install Dependencies

Install the project dependencies with npm or Yarn:

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn install
```

### 3. Start the Development Server

Run the development server with npm or Yarn:

Using npm:

```bash
npm start
```

Using Yarn:

```bash
yarn start
```

The application will open in your default web browser at `http://localhost:3000`.

### 4. Build for Production

To create a production build of the project, use:

Using npm:

```bash
npm run build
```

Using Yarn:

```bash
yarn build
```

This command generates optimized production-ready files in the `build` directory.

## Project Structure

The project structure is as follows:

- `src/`: Contains the source code of the application.
  - `components/`: Reusable React components.
  - `redux/`: Redux actions, reducers, and store configuration.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.
- `public/`: Static assets and the `index.html` file.
- `package.json`: Project dependencies and scripts.

## Available Scripts

In the project directory, you can use the following scripts:

- **`npm start`** or **`yarn start`**: Runs the app in development mode.
- **`npm run build`** or **`yarn build`**: Builds the app for production.
- **`npm test`** or **`yarn test`**: Runs tests (if configured).
- **`npm run eject`** or **`yarn eject`**: Ejects the project configuration (use with caution).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:

- **Name**: Lucky Virani
- **Email**: [luckyvirani555@gmail.com]
