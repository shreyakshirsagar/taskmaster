# TaskMaster - Modern Todo List Application

A beautiful, modern, and fully responsive todo list application built with React and Vite. TaskMaster helps you organize your life with an intuitive interface and powerful features.

![TaskMaster Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=TaskMaster+Preview)

## ✨ Features

- **Add Tasks**: Create new tasks with a simple input field
- **Mark Complete**: Toggle task completion with a single click
- **Edit Tasks**: In-place editing with keyboard shortcuts (Enter to save, Escape to cancel)
- **Delete Tasks**: Remove tasks you no longer need
- **Filter Tasks**: View all, active, or completed tasks
- **Task Statistics**: See your productivity at a glance
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, accessible design with smooth animations
- **Keyboard Shortcuts**: Full keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
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

## 🎨 Design System

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Accent**: #10b981 (Emerald)
- **Danger**: #ef4444 (Red)
- **Text**: #1f2937 (Gray-900)
- **Background**: #ffffff (White)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Icons
- **Icon Library**: Lucide React
- **Style**: Modern, consistent with color scheme

## 🛠️ Technical Details

### Built With
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Modern styling with custom properties
- **ES6+** - Modern JavaScript features

### Key Features Implementation
- **State Management**: React useState hook for local state
- **Props Passing**: Proper component composition and prop drilling
- **Event Handling**: Comprehensive event handlers for all interactions
- **List Rendering**: Dynamic rendering with map() and unique keys
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ⌨️ Keyboard Shortcuts

- **Enter**: Add new task or save edited task
- **Escape**: Cancel task editing
- **Tab**: Navigate between interactive elements
- **Space**: Toggle task completion

## 🧪 Testing

To run the application in development mode:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Vercel**: Connect your GitHub repository
2. **Netlify**: Drag and drop the `dist` folder
3. **GitHub Pages**: Use GitHub Actions for automatic deployment
4. **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ for the React Assignment-1

## 🎯 Assignment Requirements

This project fulfills all the requirements for React Assignment-1:

- ✅ **React Application**: Built with Vite
- ✅ **Components**: App, Header, ToDoList, ToDoItem
- ✅ **State & Props**: Proper state management and prop passing
- ✅ **Lists**: Dynamic rendering with map() and unique keys
- ✅ **Event Handling**: Add, complete, delete, and edit functionality
- ✅ **Styling**: Modern UI with consistent color scheme
- ✅ **Icons**: Modern icons matching the color scheme
- ✅ **Favicon**: Custom favicon included
- ✅ **Responsive**: Mobile-friendly design
- ✅ **Accessibility**: Keyboard navigation and ARIA labels

## 🔮 Future Enhancements

- [ ] Data persistence with localStorage
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task search functionality
- [ ] Dark mode toggle
- [ ] Drag and drop reordering
- [ ] Export/Import functionality
- [ ] User authentication
- [ ] Cloud synchronization

---

**Happy Tasking! 🎉**