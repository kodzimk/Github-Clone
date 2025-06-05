from pydantic import BaseModel, Field
import google.generativeai as genai
from config import config

class HTTPSchema(BaseModel):
    url: str = Field(gt=0, description="The URL of the API")
    api_key:str = Field(gt=0, description="The API key of the API")

    @classmethod
    def __init__(self, url: str, api_key: str):
        self.url = url
        self.api_key = api_key

    @classmethod
    def get_url(self):
        return self.url
    
    @classmethod
    def get_api_key(self):
        return self.api_key

class Assistant(HTTPSchema):
    def __init__(self, url: str, api_key: str):
        super().__init__(url, api_key)
        

    @classmethod
    async def request(self,q:str):
        genai.configure(api_key=config.GOOGLE_API_KEY)
        client = genai.GenerativeModel(
            model_name="gemini-2.0-flash",
             generation_config={
                "temperature": 0.7,
                "max_output_tokens": 10,
                "top_p": 1,
                "top_k": 1,
            },
            )
        response = client.generate_content(contents=q)
        return response



