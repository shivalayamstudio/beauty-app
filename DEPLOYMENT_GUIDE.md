# Deployment Guide for Shivalayam Makeup Studio Virtual Makeup Consultant

This guide will help you deploy both the backend and frontend of the Virtual Makeup Consultant application and integrate it with the existing Shivalayam Makeup Studio website at [https://shivalayammakeupstudio.netlify.app/](https://shivalayammakeupstudio.netlify.app/).

## Backend Deployment (Heroku)

### Prerequisites
- A [Heroku](https://heroku.com) account
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Git installed

### Deployment Steps

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Login to Heroku**:
   ```bash
   heroku login
   ```

3. **Create a new Heroku app**:
   ```bash
   heroku create shivalayam-makeup-consultant-api
   ```

4. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial backend deployment"
   ```

5. **Add Heroku remote**:
   ```bash
   heroku git:remote -a shivalayam-makeup-consultant-api
   ```

6. **Push to Heroku**:
   ```bash
   git push heroku master
   ```
   or if you're on the main branch:
   ```bash
   git push heroku main
   ```

7. **Set environment variables** (if needed):
   ```bash
   heroku config:set FLASK_ENV=production
   ```

8. **Verify deployment**:
   ```bash
   heroku open
   ```
   This should open your browser to the deployed backend.

## Frontend Deployment (Netlify)

### Prerequisites
- A [Netlify](https://netlify.com) account
- Git installed
- Your code pushed to a GitHub repository

### Deployment Steps

1. **Login to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in

2. **Create a new site**:
   - Click "New site from Git"
   - Select GitHub as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your repository

3. **Configure build settings**:
   - **Branch to deploy**: `main` (or `master`)
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

4. **Configure environment variables**:
   - Click "Advanced build settings"
   - Add the following environment variable:
     - Key: `REACT_APP_API_URL`
     - Value: `https://shivalayam-makeup-consultant-api.herokuapp.com` (or your Heroku app URL)

5. **Deploy the site**:
   - Click "Deploy site"
   - Wait for the build to complete

6. **Set up a custom domain** (optional):
   - Go to "Site settings" > "Domain management"
   - Click "Add custom domain"
   - Enter your domain (e.g., `makeup-consultant.shivalayammakeupstudio.com`)
   - Follow the instructions to configure your DNS settings

## Integration with Shivalayam Makeup Studio Website

Now that both your backend and frontend are deployed, you need to integrate the Virtual Makeup Consultant with the existing Shivalayam Makeup Studio website.

### Option 1: Navigation Menu Link

1. **Edit the integration-nav-snippet.html file**:
   - Replace `[YOUR_NETLIFY_URL]` with your actual Netlify deployment URL

2. **Add the snippet to the main website**:
   - Copy the HTML and CSS from `integration-nav-snippet.html`
   - Add it to the navigation menu of the Shivalayam Makeup Studio website

### Option 2: Floating Button

1. **Edit the integration-script.js file**:
   - Replace `[YOUR_NETLIFY_URL]` with your actual Netlify deployment URL

2. **Add the script to the main website**:
   - Add the following line just before the closing `</body>` tag in the HTML of the Shivalayam Makeup Studio website:
     ```html
     <script src="path/to/integration-script.js"></script>
     ```
   - Alternatively, you can copy the entire content of the script and include it directly in a `<script>` tag

### Option 3: iFrame Integration

If you want to embed the Virtual Makeup Consultant directly within a page on the main website:

1. **Create a new page** on the Shivalayam Makeup Studio website (e.g., `/makeup-consultant`)

2. **Add an iFrame** to the page:
   ```html
   <iframe 
     src="[YOUR_NETLIFY_URL]" 
     title="Virtual Makeup Consultant" 
     width="100%" 
     height="800px" 
     frameborder="0"
   ></iframe>
   ```
   Replace `[YOUR_NETLIFY_URL]` with your actual Netlify deployment URL

## Troubleshooting

### Backend Issues

- **Application Error on Heroku**:
  - Check logs: `heroku logs --tail`
  - Make sure all dependencies are in `requirements.txt`
  - Verify that the Procfile is correct

- **CORS Issues**:
  - Make sure Flask-CORS is properly configured to allow requests from your Netlify domain

### Frontend Issues

- **API Calls Failing**:
  - Check that the `REACT_APP_API_URL` environment variable is set correctly
  - Verify that your backend is accessible
  - Check for CORS issues in the browser console

- **Build Failing on Netlify**:
  - Check the build logs in the Netlify dashboard
  - Make sure all dependencies are in `package.json`
  - Verify that the build command and publish directory are correct

## Maintenance

### Updating the Backend

1. Make your changes locally
2. Commit them to Git
3. Push to Heroku:
   ```bash
   git push heroku master
   ```

### Updating the Frontend

1. Make your changes locally
2. Push to GitHub
3. Netlify will automatically rebuild and deploy your site

## Conclusion

Your Virtual Makeup Consultant application should now be deployed and integrated with the Shivalayam Makeup Studio website. Users can access it through the navigation menu, floating button, or dedicated page, depending on which integration option you chose. 