# Amazon Shopping - Modern Redesign

A modern, AI-powered redesign of the Amazon shopping experience built with Next.js, Tailwind CSS, and Firebase.

## 🚀 Features

- **Modern UI/UX Design**: Sleek, responsive design with smooth animations
- **AI-Generated Branding**: Custom color schemes and visual elements
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects, animations, and micro-interactions
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Firebase Integration**: Backend services for authentication and data storage
- **Performance Optimized**: Fast loading times and smooth user experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amazon-shopping-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Color Palette
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Yellow accent (#eab308)
- **Accent**: Purple highlight (#d946ef)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Display Font**: Poppins (for headings)
- **Body Font**: Inter (for content)

### Components
- **Header**: Sticky navigation with search and cart
- **Hero**: Animated product showcase with CTA
- **Categories**: Interactive category grid
- **Products**: Product cards with hover effects
- **Deals**: Countdown timers and special offers
- **Newsletter**: Email subscription with benefits
- **Footer**: Comprehensive site links and social media

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
  },
  // ... other color palettes
}
```

### Content
Update product data, categories, and deals in their respective component files:
- `components/FeaturedProducts.tsx`
- `components/Categories.tsx`
- `components/Deals.tsx`

### Styling
Modify global styles in `app/globals.css` and component-specific styles in their respective files.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

## 🔒 Environment Variables

Make sure to set up these Firebase environment variables:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## 📄 License

This project is for educational and portfolio purposes. Please respect Amazon's trademarks and branding guidelines.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Firebase**
