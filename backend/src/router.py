from fastapi import APIRouter
from init import assistant
import asyncio

router = APIRouter(
    prefix="/assistant",
)

@router.get("/{q}")
def get_responce(q:str):
    return asyncio.run(assistant.request(q)).text
