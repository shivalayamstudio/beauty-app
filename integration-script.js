/**
 * Shivalayam Makeup Studio - Virtual Makeup Consultant Integration
 * 
 * This script adds a floating button to the Shivalayam Makeup Studio website that links to the
 * Virtual Makeup Consultant tool. Add this script to the main website to
 * integrate the two applications.
 * 
 * How to use:
 * 1. Replace [YOUR_NETLIFY_URL] with your actual Netlify deployment URL
 * 2. Add this script to the bottom of your Shivalayam Makeup Studio website's HTML, just before the closing </body> tag:
 *    <script src="path/to/integration-script.js"></script>
 */

(function() {
  // Create the button element
  const button = document.createElement('div');
  button.className = 'makeup-consultant-button';
  button.innerHTML = `
    <a href="[YOUR_NETLIFY_URL]" target="_blank">
      <span class="icon">💄</span>
      <span class="text">Try Our Virtual Makeup Consultant</span>
    </a>
  `;
  
  // Create the styles
  const styles = document.createElement('style');
  styles.textContent = `
    .makeup-consultant-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
    }
    
    .makeup-consultant-button a {
      display: flex;
      align-items: center;
      background-color: #d85a7f;
      color: white;
      padding: 12px 20px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      font-family: 'Arial', sans-serif;
      font-weight: bold;
    }
    
    .makeup-consultant-button a:hover {
      background-color: #c04b6e;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    .makeup-consultant-button .icon {
      font-size: 24px;
      margin-right: 8px;
    }
    
    .makeup-consultant-button .text {
      font-size: 14px;
    }
    
    @media (max-width: 768px) {
      .makeup-consultant-button .text {
        display: none;
      }
      
      .makeup-consultant-button a {
        padding: 12px;
      }
      
      .makeup-consultant-button .icon {
        margin-right: 0;
      }
    }
  `;
  
  // Add the button and styles to the document
  document.head.appendChild(styles);
  document.body.appendChild(button);
})(); 