# 🚀 QuickAI - AI SaaS Platform

<p align="center">
  <img src="https://socialify.git.ci/fenkur/QuickAI/image?language=1&name=1&owner=1&stargazers=1&theme=Dark" alt="QuickAI Banner" width="700" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/stack-PERN-green" alt="Stack" />
  <img src="https://img.shields.io/badge/powered%20by-Google%20Gemini-orange" alt="AI" />
  <img src="https://img.shields.io/badge/status-active-success" alt="Status" />
</p>

## 📖 About

QuickAI is a full-stack AI-powered SaaS platform built with the PERN stack (PostgreSQL, Express.js, React, Node.js). The platform provides a unified dashboard for multiple AI-powered tools including content generation, image manipulation, and resume analysis.

**🔗 Live Demo:** [quick-ai-one-green.vercel.app](https://quick-ai-one-green.vercel.app/)

## ✨ Key Features

### AI-Powered Tools
- **📝 Text Generation** – Create articles, blog posts, and headlines using Google Gemini AI
- **🎨 Image Generation** – Generate custom images from text prompts
- **🧼 Background Removal** – Remove backgrounds or specific objects from images
- **📄 Resume Reviewer** – Get AI-powered feedback and suggestions for resume improvement

### Platform Features
- **💎 Subscription Tiers** – Free and Premium plans with feature-based access control
- **🔐 Secure Authentication** – User management powered by Clerk
- **📊 Usage Tracking** – Real-time monitoring of feature usage and limits
- **⚡ Responsive UI** – Modern, mobile-friendly interface built with React and TailwindCSS

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React, Vite, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (Neon) |
| **AI Services** | Google Gemini API |
| **Authentication** | Clerk |
| **Deployment** | Vercel |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- Google Gemini API key
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fenkur/QuickAI.git
   cd QuickAI
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env` files in both `server` and `client` directories:
   
   **Server `.env`:**
   ```env
   DATABASE_URL=your_postgresql_connection_string
   GEMINI_API_KEY=your_google_gemini_api_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   PORT=5000
   ```

   **Client `.env`:**
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development servers**
   ```bash
   # Terminal 1 - Backend
   cd server
   npm run dev

   # Terminal 2 - Frontend
   cd client
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application.

## 📁 Project Structure

```
QuickAI/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   └── App.jsx       # Main app component
│   └── package.json
│
├── server/                # Backend Express application
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── controllers/      # Route controllers
│   ├── configs/          # Configuration files
│   └── package.json
│
└── README.md
```

## 🎯 Usage

1. **Sign up/Login** – Create an account or sign in using Clerk authentication
2. **Choose a Tool** – Select from text generation, image generation, background removal, or resume review
3. **Generate Content** – Input your prompts and let AI do the work
4. **Track Usage** – Monitor your usage limits in the dashboard
5. **Upgrade** – Switch to Premium for unlimited access to all features

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/generate-article` | Generate article content |
| POST | `/api/ai/generate-blog-titles` | Generate blog titles from text prompts |
| POST | `/api/ai/generate-image` | Create images from text prompts |
| POST | `/api/ai/remove-image-background` | Remove image backgrounds |
| POST | `/api/ai/remove-image-object` | Remove specific objects from images |
| POST | `/api/ai/resume-review` | Get AI resume feedback |
| GET | `/api/user/get-user-creations` | Fetch user's AI generated creations |
| GET | `/api/user/get-published-creations` | Fetch published AI generated creations |
| POST | `/api/user/toggle-like-creation` | Update likes on AI generated creations |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Fenkur**

- GitHub: [@fenkur](https://github.com/fenkur)

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Clerk for authentication services
- Neon for PostgreSQL hosting
- Vercel for deployment platform

---

<p align="center">Made with ❤️ by Fenkur</p>
