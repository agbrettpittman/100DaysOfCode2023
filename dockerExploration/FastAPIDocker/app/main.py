from typing import Union
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .database import schemas, connection
from .database.models import Movies, Music, Books
from sqlalchemy.orm import Session
import os, re

app = FastAPI()

origins = []

if (os.getenv('ALLOWED_ORIGINS') == "*"):
    origins = ["*"]
else:
    ALLOWED_ORIGINS = os.getenv('ALLOWED_ORIGINS').split(",")
    for origin in ALLOWED_ORIGINS:
        hostPortCombinations = []
        protocolOptions = []
        protocol, host, port = re.search("^(.*//)?([^:]*)(:\d*)?$", origin).groups()
        if (port == None or port == ":80"):
            hostPortCombinations.append(f"{host}:80")
            hostPortCombinations.append(f"{host}")
        else:
            hostPortCombinations.append(f"{host}{port}")
            
        for combo in hostPortCombinations:
            if (protocol != None):
                origins.append(f"{protocol}{combo}")
            else:	
                origins.append(f"http://{combo}")
                origins.append(f"https://{combo}")

print(origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = connection.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"Hello": "World!!"}

@app.get("/movies/")
def get_movies(db: Session = Depends(get_db)):
    results = db.query(Movies).all()
    return results

@app.get("/movies/{id}")
def get_movie(id: int, db: Session = Depends(get_db)):
    return db.query(Movies).filter(Movies.id == id).one()

@app.get("/books/")
def get_books(db: Session = Depends(get_db)):
    results = db.query(Books).all()
    return results

@app.get("/books/{id}")
def get_book(id: int, db: Session = Depends(get_db)):
    return db.query(Books).filter(Books.id == id).one()

@app.get("/music/")
def get_music(db: Session = Depends(get_db)):
    results = db.query(Music).all()
    return results

@app.get("/music/{id}")
def get_song(id: int, db: Session = Depends(get_db)):
    return db.query(Music).filter(Music.id == id).one()