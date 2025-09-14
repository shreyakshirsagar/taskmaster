# TaskMaster - Modern Todo List Application


## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shreyakshirsagar/taskmaster
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🏗️ Project Structure

```
todo-app/
├── public/
│   ├── favicon.svg          # Custom favicon
│   └── vite.svg            # Default Vite logo
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header component with app title
│   │   ├── ToDoItem.jsx    # Individual todo item component
│   │   └── ToDoList.jsx    # List container component
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── README.md              # This file
```
