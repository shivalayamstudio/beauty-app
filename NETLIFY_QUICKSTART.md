# Netlify Quick-Start Guide for Shivalayam Makeup Studio

This guide provides quick steps to deploy the Virtual Makeup Consultant to Netlify and integrate it with the existing Shivalayam Makeup Studio website.

## 1. Deploy to Netlify (One-Click Method)

The fastest way to deploy to Netlify is using the Deploy to Netlify button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/shivalayam-makeup-consultant)

Replace `YOUR_USERNAME` with your actual GitHub username where the repository is hosted.

## 2. Configure Environment Variables

After deploying, go to:
- Site settings > Build & deploy > Environment
- Add the following variable:
  - Key: `REACT_APP_API_URL`
  - Value: `https://shivalayam-makeup-consultant-api.herokuapp.com` (or your backend URL)

## 3. Integrate with Shivalayam Makeup Studio Website

### Method 1: Add a Navigation Link

Add this code to the navigation menu on the Shivalayam Makeup Studio website:

```html
<li class="nav-item">
  <a href="YOUR_NETLIFY_URL" class="nav-link" target="_blank">
    <span>💄</span> Virtual Makeup Consultant
  </a>
</li>
```

Replace `YOUR_NETLIFY_URL` with your actual Netlify URL (e.g., `https://shivalayam-makeup-consultant.netlify.app`).

### Method 2: Add a Floating Button

Add this code just before the closing `</body>` tag on the Shivalayam Makeup Studio website:

```html
<script>
(function() {
  const button = document.createElement('div');
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '9999';
  
  button.innerHTML = `
    <a href="YOUR_NETLIFY_URL" 
       style="display: flex; align-items: center; background-color: #d85a7f; color: white; 
              padding: 12px 20px; border-radius: 50px; text-decoration: none; 
              box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-weight: bold;" 
       target="_blank">
      <span style="font-size: 24px; margin-right: 8px;">💄</span>
      <span>Try Our Makeup Consultant</span>
    </a>
  `;
  
  document.body.appendChild(button);
})();
</script>
```

Replace `YOUR_NETLIFY_URL` with your actual Netlify URL.

### Method 3: Embed as iFrame

Add this code to any page where you want to embed the Virtual Makeup Consultant:

```html
<iframe 
  src="YOUR_NETLIFY_URL" 
  title="Virtual Makeup Consultant" 
  width="100%" 
  height="800px" 
  style="border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"
></iframe>
```

Replace `YOUR_NETLIFY_URL` with your actual Netlify URL.

## 4. Test the Integration

After adding one of the integration methods:
1. Visit the Shivalayam Makeup Studio website
2. Test the link, button, or embedded iFrame
3. Make sure it correctly opens or displays the Virtual Makeup Consultant

## 5. Troubleshooting

- If the link doesn't work, check that you've replaced `YOUR_NETLIFY_URL` with your actual Netlify URL
- If the styling doesn't match, adjust the CSS to match the Shivalayam Makeup Studio website's design
- If the iFrame doesn't display correctly, try adjusting the width and height

## Need More Help?

Refer to the full [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions. 