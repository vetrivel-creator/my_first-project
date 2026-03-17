# 🚀 Futuristic QR Code Portfolio

A modern, professional portfolio website with QR code navigation featuring a dark futuristic theme with neon accents.

## 📋 Features

- **QR Code Landing Page** - Animated QR code with glow effects and floating animation
- **Interactive Menu** - Glass-morphism cards with hover effects and 3D tilt
- **Multi-Page Navigation** - Dedicated pages for each section
- **Futuristic Design** - Dark theme with electric blue (#00d4ff) and purple (#a855f7) neon accents
- **Animated Skill Bars** - Progress bars that animate on scroll
- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Scroll reveal, fade-in effects, and particle background

## 📁 File Structure

```
qr/
├── index.html        # Landing page with QR code
├── menu.html         # Main navigation menu
├── about.html        # About Me with photo
├── skills.html       # Technical skills with animated bars
├── education.html    # Education timeline and certifications
├── projects.html     # Project showcase
├── contact.html      # Contact information and social links
├── style.css         # All styling and animations
├── script.js         # JavaScript for interactivity
└── README.md         # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Electric Blue (#00d4ff)
- **Secondary Color**: Purple (#a855f7)
- **Background**: Dark Navy (#0a0e27)
- **Text**: White (#ffffff) and Light Gray (#b8c5d6)

### Effects
- Glass-morphism (frosted glass effect)
- Neon glow on hover
- Gradient backgrounds
- Particle animations
- Smooth page transitions
- 3D card tilt on menu

## 🚀 Getting Started

### 1. Open the Portfolio

Simply open `index.html` in your web browser:
- Double-click `index.html`, or
- Right-click and select "Open with" → Your browser

### 2. Test the QR Code

- The QR code on the landing page links to `menu.html`
- Scan it with your phone's camera or QR code scanner app
- It will open the menu page with all portfolio sections

### 3. Customize Your Content

Replace all `[REPLACE: ...]` markers with your actual information:

#### About Page (about.html)
- Replace profile photo URL with your photo
- Update name, field, career objective
- Add your personal information (age, location, languages)
- Customize strengths and interests

#### Skills Page (skills.html)
- Adjust skill percentages based on your proficiency
- Add/remove programming languages and frameworks
- Update tools you're familiar with
- Modify soft skills tags

#### Education Page (education.html)
- Update degree, university, years
- Add your GPA/percentage
- Customize coursework tags
- Add certifications and achievements

#### Projects Page (projects.html)
- Replace project images and descriptions
- Update GitHub links and live demo URLs
- Modify technology badges
- Add your GitHub username

#### Contact Page (contact.html)
- Update email address and phone number
- Add your location
- Update all social media links
- Remove platforms you don't use

### 4. Replace the Profile Photo

**Option 1: Use Your Own Photo**
```html
<!-- In about.html, replace: -->
<img src="https://via.placeholder.com/300x300/667eea/ffffff?text=Your+Photo" alt="Profile Photo">
<!-- With: -->
<img src="your-photo.jpg" alt="Your Name">
```

**Option 2: Keep Placeholder**
- The placeholder will work fine for testing
- Replace it later when you have a professional photo

### 5. Update Project Images

Replace placeholder images in `projects.html`:
```html
<!-- Replace: -->
<img src="https://via.placeholder.com/600x400/667eea/ffffff?text=Project+1" alt="Project 1">
<!-- With: -->
<img src="project1-screenshot.png" alt="Project Name">
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch and save
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: Netlify

1. Create account on [Netlify](https://www.netlify.com/)
2. Drag and drop the `qr` folder
3. Your site will be deployed instantly
4. Get a custom URL

### Option 3: Vercel

1. Create account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 📱 How the QR Code Works

1. **Landing Page (index.html)**
   - Displays animated QR code
   - QR code contains URL to menu.html

2. **Scan the QR Code**
   - Use your phone's camera
   - Or use any QR scanner app
   - It opens menu.html

3. **Menu Page (menu.html)**
   - Shows 5 clickable section cards
   - Each card navigates to its page

4. **Individual Pages**
   - About, Skills, Education, Projects, Contact
   - Each has floating navigation bar
   - Easy navigation between sections

## 🎯 Customization Tips

### Change Colors
Edit `style.css` root variables:
```css
:root {
    --primary-color: #00d4ff;      /* Change to your color */
    --secondary-color: #a855f7;     /* Change to your color */
    --dark-bg: #0a0e27;            /* Background color */
}
```

### Adjust Animations
- Speed: Modify animation durations in `style.css`
- Disable: Remove animation properties
- Add more: Copy existing animation patterns

### Modify Layout
- Change grid columns in `style.css`
- Adjust padding and margins
- Customize card sizes

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling, animations, and effects
- **JavaScript** - Interactivity and QR code generation
- **QRCode.js** - QR code generation library
- **Google Fonts** - Poppins font family

## 📝 Content Checklist

Before deploying, make sure you've updated:

- [ ] Profile photo in About page
- [ ] Personal information (name, location, age)
- [ ] Career objective and bio
- [ ] Skills and proficiency levels
- [ ] Education details (degree, university, GPA)
- [ ] Certifications and achievements
- [ ] Project descriptions and images
- [ ] Project links (GitHub, live demos)
- [ ] Contact information (email, phone)
- [ ] Social media profiles (LinkedIn, GitHub, etc.)
- [ ] Resume download link (if applicable)

## 💡 Tips for Freshers

1. **Skills Page**: Be honest about your skill levels
2. **Projects**: Quality over quantity (3-5 good projects)
3. **Education**: Highlight relevant coursework
4. **About**: Keep it professional yet personable
5. **Contact**: Make it easy for recruiters to reach you

## 🎨 Design Credits

- **Font**: Poppins (Google Fonts)
- **Icons**: Unicode Emoji
- **QR Library**: QRCode.js by davidshimjs
- **Design Style**: Futuristic Glass-morphism

## 📄 License

This portfolio template is free to use for personal and commercial purposes.

## 🤝 Support

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all files are in the same folder
3. Test QR code with different scanners
4. Verify all image paths are correct

---

**Remember**: Replace all placeholder content with your actual information before deploying!

Good luck with your job search! 🚀
