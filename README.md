# OptiCode

A web-based **Code Reviewer** that takes user-submitted code as input, processes it using the **Google Gemini API**, and provides **detailed reviews and suggestions** to improve the code.

##  Features
-  **Code Input**: Users can submit code snippets in various languages.
-  **AI-Powered Review**: Uses **Google Gemini API** to analyze and review the code.
-  **Quality Feedback**: Provides suggestions on **performance, security, readability, and best practices**.
-  **Real-time Processing**: Instant analysis and review with AI-powered insights.

##  Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js & Express.js
- **AI Model**: Google Gemini API
- **Styling**: CSS3

## UI
![Alt Text](https://github.com/jagrat-phugat/OptiCode/blob/main/images/image.png)

### ** Clone the Repository**
```sh
git clone https://github.com/yourusername/code-reviewer.git
cd code-reviewer
```
### ** Set Up Google Gemini API**
1. Get an API key from [Google AI Studio](https://ai.google.dev/).
2. Create a `.env` file in the server folder:
```sh
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

### ** Start the Project**
```sh
# Start the backend
cd server
npm start

# Start the frontend
cd client
npm start
```

##  API Endpoints
| Method | Endpoint     | Description            |
|--------|-------------|------------------------|
| `POST` | `/ai/get-review/` | Takes code as input, sends it to Gemini API, and returns feedback. |


##  Future Enhancements
-  Detailed reports with syntax highlighting.
-  User authentication & review history.
-  User types the prompt and gets the desired code in desired language.

##  Contributing
Pull requests are welcome! Feel free to fork this repo and submit improvements.


