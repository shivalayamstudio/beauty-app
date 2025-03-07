# Shivalayam Makeup Studio And Academy - Virtual Makeup Consultant

A web application that analyzes facial features and provides personalized makeup recommendations.

## Website Integration

This application is integrated with the main [Shivalayam Makeup Studio And Academy website](https://shivalayammakeupstudio.netlify.app/). Users can navigate between the main website and this virtual makeup consultant tool.

## Features

- **Face Detection**: Detects whether an uploaded or captured image contains a face.
- **Gender Detection**: Classifies the detected face as male or female.
- **Facial Feature Analysis**: Analyzes the face for skin type, eye color, and ~20 facial features.
- **Makeup Recommendations**: Provides personalized makeup recommendations based on facial features.
- **Celebrity Lookalike**: Suggests a celebrity lookalike and their makeup style.
- **Report Generation**: Generates a PDF report with all the analysis and recommendations.

## Tech Stack

### Frontend
- React.js
- Styled Components
- React Webcam (for camera capture)
- Axios (for API requests)

### Backend
- Flask (Python web framework)
- OpenCV (for image processing)
- DeepFace (for gender detection)
- MediaPipe (for facial feature extraction)
- ReportLab (for PDF generation)

## Project Structure

```
├── backend/
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   ├── static/                # Static files
│   │   ├── celebrities/       # Celebrity images
│   │   ├── reports/           # Generated reports
│   │   └── uploads/           # Uploaded images
│   └── templates/             # HTML templates
│       └── index.html         # Backend index page
│
└── frontend/
    ├── public/                # Public assets
    │   ├── index.html         # HTML entry point
    │   └── manifest.json      # Web app manifest
    ├── src/                   # React source code
    │   ├── components/        # React components
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   ├── ImageUpload.js
    │   │   ├── NameInput.js
    │   │   ├── Results.js
    │   │   └── WebcamCapture.js
    │   ├── App.js             # Main React component
    │   ├── App.css            # App styles
    │   ├── index.js           # JavaScript entry point
    │   └── index.css          # Global styles
    └── package.json           # Node.js dependencies
```

## Setup and Installation

### Prerequisites
- Node.js and npm
- Python 3.7+
- pip

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```
   python app.py
   ```
   The backend will be available at http://localhost:5000

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The frontend will be available at http://localhost:3000

## Usage

1. Upload an image or capture one using your webcam.
2. The application will detect if there's a face in the image and determine the gender.
3. If a female face is detected, you'll be prompted to enter your name.
4. The application will analyze your facial features and provide personalized makeup recommendations.
5. You can download a PDF report with all the analysis and recommendations.
6. You can navigate to the main Shivalayam Makeup Studio website at any time using the links in the header and footer.

## Deployment

### Backend Deployment
The backend can be deployed to platforms like Heroku, AWS, or Google Cloud Platform.

### Frontend Deployment
The frontend can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

## Integration with Main Website
To integrate this application with the main Shivalayam Makeup Studio website:

1. Add a link to this application on the main website's navigation menu.
2. Ensure consistent branding and styling between both websites.
3. Consider using a subdomain (e.g., makeup-consultant.shivalayammakeupstudio.netlify.app) for this application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [OpenCV](https://opencv.org/)
- [DeepFace](https://github.com/serengil/deepface)
- [MediaPipe](https://mediapipe.dev/)
- [React](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Shivalayam Makeup Studio And Academy](https://shivalayammakeupstudio.netlify.app/) 