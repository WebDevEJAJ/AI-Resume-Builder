# 🚀 AI Resume Builder

A modern, single-page web application that helps you build and enhance your resume using AI. Powered by React, Vite, and the Anthropic Claude API.

## ✨ Features

- **📋 Comprehensive Resume Form**
  - Personal information (name, email, phone, location)
  - Job title targeting
  - Work experience management
  - Education history
  - Skills section
  - Projects showcase

- **🤖 AI-Powered Enhancement**
  - Generate professional resume summaries using Claude Haiku 4.5
  - Get AI suggestions for improving descriptions
  - Professional tone and formatting recommendations

- **📄 Live Resume Preview**
  - Real-time resume preview as you fill the form
  - Clean, professional, printable layout
  - All resume sections formatted beautifully

- **🖨️ Download as PDF**
  - Print or save as PDF directly from your browser
  - Professional formatting for printing

- **🌙 Dark/Light Mode**
  - Toggle between dark and light themes
  - Persistent theme preference using localStorage

- **📱 Fully Responsive Design**
  - Works perfectly on desktop, tablet, and mobile
  - Mobile-optimized layout
  - Touch-friendly interface

- **💾 Auto-Save**
  - Form data automatically saved to browser storage
  - Resume data persists between sessions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Multiple AI Providers** - Supports Gemini, Claude, OpenAI, Cohere, Mistral
- **Vanilla CSS** - Styling (no frameworks)
- **JavaScript (ES6+)** - No TypeScript

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn
- An API key from at least one of the supported AI providers:
  - **Google Gemini** (Free: 60 req/min) - [Get key](https://aistudio.google.com/app/apikey)
  - **Anthropic Claude** (Free trial: $5 credit) - [Get key](https://console.anthropic.com)
  - **OpenAI** (Free trial: $5 credit) - [Get key](https://platform.openai.com)
  - **Cohere** (Free: 100 req/min) - [Get key](https://dashboard.cohere.com)
  - **Mistral** (Free tier available) - [Get key](https://console.mistral.ai)

## 🚀 Installation

1. **Clone or download this repository**
   ```bash
   cd AI\ Resume\ Builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a .env file**
   ```bash
   cp .env.example .env
   ```

4. **Configure your AI provider**
   
   Choose one of the supported AI providers and add your API key to `.env`:
   
   **For Gemini (Recommended):**
   ```
   VITE_AI_PROVIDER=gemini
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
   
   **For Anthropic Claude:**
   ```
   VITE_AI_PROVIDER=anthropic
   VITE_ANTHROPIC_API_KEY=your_api_key_here
   ```
   
   **For OpenAI:**
   ```
   VITE_AI_PROVIDER=openai
   VITE_OPENAI_API_KEY=your_api_key_here
   ```
   
   **For Cohere:**
   ```
   VITE_AI_PROVIDER=cohere
   VITE_COHERE_API_KEY=your_api_key_here
   ```
   
   **For Mistral:**
   ```
   VITE_AI_PROVIDER=mistral
   VITE_MISTRAL_API_KEY=your_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in your browser**
   - The app will automatically open at `http://localhost:5173`

## 🤖 Supported AI Providers

This application supports multiple AI providers. Choose one and configure it below:

### Option 1: Google Gemini (Recommended for Free Tier)
- **Free Tier**: 60 requests per minute
- **Setup**:
  1. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
  2. Click "Create API Key"
  3. Copy the API key
  4. Paste it in `.env` file:
     ```
     VITE_AI_PROVIDER=gemini
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

### Option 2: Anthropic Claude (Free Trial)
- **Free Trial**: $5 credit for testing
- **Setup**:
  1. Go to [https://console.anthropic.com](https://console.anthropic.com)
  2. Sign up and create an API key
  3. Add to `.env` file:
     ```
     VITE_AI_PROVIDER=anthropic
     VITE_ANTHROPIC_API_KEY=your_api_key_here
     ```

### Option 3: OpenAI GPT (Free Trial)
- **Free Trial**: $5 credit for 3 months
- **Setup**:
  1. Go to [https://platform.openai.com](https://platform.openai.com)
  2. Create account and get API key
  3. Add to `.env` file:
     ```
     VITE_AI_PROVIDER=openai
     VITE_OPENAI_API_KEY=your_api_key_here
     ```

### Option 4: Cohere (Generous Free Tier)
- **Free Tier**: 100 requests/minute, 50 builds/month
- **Setup**:
  1. Go to [https://dashboard.cohere.com](https://dashboard.cohere.com)
  2. Create account and get API key
  3. Add to `.env` file:
     ```
     VITE_AI_PROVIDER=cohere
     VITE_COHERE_API_KEY=your_api_key_here
     ```

### Option 5: Mistral AI (Free Tier)
- **Free Tier**: Available with credits
- **Setup**:
  1. Go to [https://console.mistral.ai](https://console.mistral.ai)
  2. Create account and get API key
  3. Add to `.env` file:
     ```
     VITE_AI_PROVIDER=mistral
     VITE_MISTRAL_API_KEY=your_api_key_here
     ```

### Switching Providers

Simply change the `VITE_AI_PROVIDER` variable in your `.env` file and restart the development server:

```env
VITE_AI_PROVIDER=gemini  # or anthropic, openai, cohere, mistral
```

## 📖 Usage

### Building Your Resume

1. **Fill in Personal Information**
   - Enter your full name, email, phone, and location
   - Specify the job title you're applying for

2. **Add Work Experience**
   - Enter company name, role, years, and description
   - Click "Add Work Experience" to add each entry
   - Remove entries you don't need

3. **Add Education**
   - Enter degree, college/university, and graduation year
   - Click "Add Education" for each degree

4. **Add Skills**
   - Enter skills separated by commas
   - Example: "React, JavaScript, Node.js, Python"

5. **Add Projects**
   - Enter project name and description
   - Click "Add Project" to add each project

6. **Generate AI Enhancement**
   - Click the "Generate AI Enhancement" button
   - Claude will create a professional summary and suggestions
   - Results appear in the resume preview

7. **Download as PDF**
   - Click "Print / Download as PDF"
   - Use your browser's print dialog to save as PDF

### Theme Toggle
- Click the "Light/Dark Mode" button in the header to switch themes
- Your preference is automatically saved

## 🏗️ Project Structure

```
AI Resume Builder/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Top header with theme toggle
│   │   ├── ResumeForm.jsx       # Main form component
│   │   ├── AIEnhance.jsx        # AI enhancement button & logic
│   │   └── ResumePreview.jsx    # Resume display component
│   ├── services/
│   │   └── claudeService.js     # API calls to Anthropic Claude
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global styles
│   └── main.jsx                 # React entry point
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json                # Project metadata & dependencies
├── .env.example                # Environment variables template
├── .env                        # Environment variables (add your API key)
└── README.md                   # This file
```

## 🔑 Environment Variables

The application supports multiple AI providers. Configure one or more of the following:

```env
# Select which provider to use
VITE_AI_PROVIDER=gemini

# Supported providers: gemini, anthropic, openai, cohere, mistral

# Google Gemini
VITE_GEMINI_API_KEY=your_gemini_api_key

# Anthropic Claude
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key

# OpenAI
VITE_OPENAI_API_KEY=your_openai_api_key

# Cohere
VITE_COHERE_API_KEY=your_cohere_api_key

# Mistral
VITE_MISTRAL_API_KEY=your_mistral_api_key
```

You only need to configure the provider you're using, but you can add all keys and switch between providers by changing `VITE_AI_PROVIDER`.

## 🎨 Features in Detail

### Resume Form
- Multi-step form with organized sections
- Real-time form validation
- Add/remove functionality for repeating sections
- Auto-saves to localStorage

### AI Enhancement
- Sends resume data to Claude Haiku 4.5 API
- Generates professional summary
- Provides enhancement suggestions
- Includes loading states and error handling

### Resume Preview
- Live preview updates as you type
- Professional formatting
- Responsive to theme changes
- Print-optimized layout

### Printing & PDF Export
- Uses browser's native print functionality
- Optimized CSS for printing
- Clean, professional output
- Works with all modern browsers

## 🌙 Dark Mode

The application includes a built-in dark mode:
- Click the theme toggle button in the header
- Your theme preference is saved to localStorage
- All components adapt to the selected theme

## 💾 Data Persistence

All form data is automatically saved to your browser's localStorage:
- No server required
- Data persists between sessions
- Completely private (stays on your computer)

## 🐛 Troubleshooting

### API Key Not Working
- Verify your API key is correct in `.env`
- Ensure you've selected the correct provider with `VITE_AI_PROVIDER`
- Check that you have API credits or haven't exceeded your free tier limits
- For **Gemini**: Free tier limits are 60 requests/minute
- For **Anthropic**: Make sure your free trial credits haven't expired
- For **OpenAI**: Check that your free trial credits are available ($5)
- For **Cohere**: Verify you haven't exceeded 100 requests/minute limit
- For **Mistral**: Check your account has available credits

### "Unknown AI provider" Error
- Verify `VITE_AI_PROVIDER` is set to one of: `gemini`, `anthropic`, `openai`, `cohere`, `mistral`
- Restart the development server after changing this value

### Features Not Loading
- Clear browser cache and localStorage
- Delete `node_modules` and run `npm install` again
- Restart the development server

### PDF Not Printing Correctly
- Use Chrome/Edge for best results
- Ensure print margins are set in print dialog
- Check that "Background graphics" is enabled in print settings

### Dark Mode Not Persisting
- Check browser's localStorage is enabled
- Try clearing and re-enabling dark mode

## 📚 How It Works

1. **Form Submission**
   - You fill in your resume information
   - Data is stored in React state and browser storage

2. **AI Enhancement**
   - Click "Generate AI Enhancement"
   - Form data is sent to Claude API
   - Claude generates professional suggestions

3. **Resume Preview**
   - Component displays all form data
   - Includes AI-generated professional summary
   - Updates in real-time

4. **Export**
   - Click "Print / Download as PDF"
   - Browser's print dialog opens
   - Save as PDF with Ctrl+P/Cmd+P

## 🔒 Privacy & Security

- **No Backend Server**: All processing happens in your browser
- **API Key Security**: Your API key is stored locally in `.env`
- **Data Privacy**: Your resume data never leaves your computer (except when sent to Claude)
- **No Tracking**: No analytics, no tracking, no data collection

## 📱 Responsive Design

The application is fully responsive:
- **Desktop**: Full 2-column layout (form + preview)
- **Tablet**: Single column with optimized spacing
- **Mobile**: Optimized touch interface with appropriate sizing

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

Creates optimized build in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

Feel free to fork, modify, and improve this application!

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

Potential features for future versions:
- Multiple resume templates
- Undo/Redo functionality
- Resume scoring
- Real-time grammar checking
- Export to different formats (.docx, .txt)
- Custom color schemes
- Keyboard shortcuts
- Internationalization (i18n)

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Review the code comments in components
3. Check browser console for error messages

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Powered by [Vite](https://vitejs.dev)
- AI enhancement by [Anthropic Claude](https://www.anthropic.com)

---

**Happy Resume Building! 🎉**

Made with ❤️ for job seekers and career changers.
