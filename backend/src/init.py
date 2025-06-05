from models import Assistant
from config import config

assistant = Assistant(url="https://api.github.com", api_key=config.GOOGLE_API_KEY)