from pydantic import BaseModel

class Books(BaseModel):
    id: int
    title: str
    author: str

    class Config:
        orm_mode = True

class Movies(BaseModel):
    id: int
    title: str
    director: str

    class Config:
        orm_mode = True

class Music(BaseModel):
    id: int
    songName: str
    artist: str

    class Config:
        orm_mode = True