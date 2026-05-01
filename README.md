# Portfolio Website

A modern, responsive portfolio website built with React and ready for deployment on Render.

## Features

✨ **Modern Design** - Clean and professional portfolio layout  
📱 **Fully Responsive** - Works perfectly on all devices  
🔗 **Social Media Links** - Quick links to CodeChef, LinkedIn, and GitHub  
⚡ **Fast Performance** - Built with Vite for optimal speed  
🎨 **Beautiful UI** - Gradient backgrounds and smooth animations  

## Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with animations and gradients
- **Build Tool**: Vite
- **Deployment**: Render

## Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## Customization

### Update Personal Information
Edit [`src/components/Portfolio.jsx`](src/components/Portfolio.jsx) and replace:
- `John Doe` with your name
- `Full Stack Developer` with your title
- Update the About Me section
- Add your projects in the Projects section
- Update contact email and phone

### Add Social Media Links
Update the social links section in [`src/components/Portfolio.jsx`](src/components/Portfolio.jsx):

```jsx
<a 
  href="https://www.linkedin.com/in/your-profile" 
  target="_blank" 
  rel="noopener noreferrer"
  className="social-link linkedin"
>
  LinkedIn
</a>
```

Replace:
- `https://www.linkedin.com/in/your-profile` with your LinkedIn profile URL
- `https://github.com/yourprofile` with your GitHub profile URL
- `https://www.codechef.com/users/yourprofile` with your CodeChef profile URL

### Customize Styling
- Main color scheme: Edit [`src/index.css`](src/index.css)
- Component styles: Edit [`src/components/Portfolio.css`](src/components/Portfolio.css)
- Current colors: Purple gradients (you can change the hex codes)

## Deployment on Render

### Option 1: Using render.yaml (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Sign up or login
   - Click "New" → "Web Service"
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account and select this repository

3. **Deploy**
   - Render will automatically detect `render.yaml`
   - Click "Create Web Service"
   - Your portfolio will be deployed! 🎉

### Option 2: Manual Deployment

1. **Create a new Web Service on Render**
   - Go to [render.com](https://render.com)
   - Create a new Web Service

2. **Configure settings**
   - Runtime: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run preview`
   - Node Version: 18

3. **Deploy**
   - Connect your GitHub repository
   - Render will automatically deploy on every push

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Portfolio.jsx      # Main portfolio component
│   │   └── Portfolio.css      # Component styles
│   ├── App.jsx                # App wrapper
│   ├── App.css                # App styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
├── render.yaml                # Render deployment config
└── README.md                  # This file
```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm start` - Build and preview

## Environment Variables

No environment variables are required for the basic portfolio. All configuration is in the component files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Built with Vite for fast builds
- Optimized for Lighthouse scores
- Minimal bundle size
- Fast page load times

## License

MIT License - feel free to use this template for your portfolio.

## Support

For issues or questions:
1. Check the Render documentation: https://render.com/docs
2. Review React documentation: https://react.dev
3. Visit Vite docs: https://vitejs.dev

## Next Steps

After deployment:
1. ✅ Update your personal information in Portfolio.jsx
2. ✅ Add your social media links
3. ✅ Customize colors and styling to match your brand
4. ✅ Add more projects to the portfolio
5. ✅ Test on mobile devices
6. ✅ Share your portfolio URL!

---

**Happy coding! 🚀**
