# 🎓 Sentiment-Driven Feedback System for College Events

A Django-based web application where students can submit feedback for college events and club activities. The system performs real-time sentiment analysis (using TextBlob or VADER), and presents admins with visual insights, feedback summaries, and even an AI-powered Q&A feature using Google's Gemini API.

---

## 🚀 Features

- 📝 **Student Feedback Submission** with sentiment detection  
- 📊 **Admin Dashboard** to view feedback and sentiment trends  
- 📈 **Interactive Charts** (Pie & Bar) for sentiment analysis  
- 📄 **CSV Export** of raw feedback data  
- 📬 **Email Alerts** to admins on new feedback (optional)  
- 🤖 **AI Summarization & Q&A** using Gemini API  
- 🎨 **Responsive Design** with Bootstrap  
- 🔒 **Secure Admin Panel** for authorized access only  
- 🧠 **Emoji-rich Sentiment Summary** for quick insights  

---

## 🧱 Project Structure

AI_Based_feedback_system_AKTU_Hackathon/
├── feedback/ # Core app logic
│ ├── templates/ # HTML templates
│ ├── static/ # CSS, JS, Bootstrap assets
│ ├── models.py # Feedback data model
│ ├── views.py # Main views & logic
│ ├── urls.py # App-specific URLs
│ └── utils.py # Sentiment & AI helper functions
├── feedback_system/ # Django project settings
│ ├── settings.py
│ └── urls.py
├── manage.py # Django CLI
├── requirements.txt # Python dependencies
└── README.md # You're reading it!

---

## 💻 How to Run the Project Locally

Follow these steps to set up and run the project on your machine:

### ✅ Prerequisites

Make sure the following are installed:

- Python 3.8+
- pip
- Git
- Virtualenv (optional but recommended)

---

### ⚙️ Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/Prabhatmaurya3239/AI-Based-feedback-system-AKTU-Hackathon
cd AI-Based-feedback-system-AKTU-Hackathon

# 2. Create and activate virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Apply database migrations
python manage.py migrate

# 5. Create a superuser (for admin access)
python manage.py createsuperuser

# 6. Run the server
python manage.py runserver
🧠 Gemini API Integration (Optional)
To enable the AI Summarizer & Q&A features:

Get access to Gemini API

Add your API key to .env or settings.py:

python
Copy
Edit
GEMINI_API_KEY = "your-api-key-here"
