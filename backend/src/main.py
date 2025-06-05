from fastapi import FastAPI
from router import router
from fastapi.middleware.cors import CORSMiddleware

client = FastAPI()

client.include_router(router)

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

client.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


