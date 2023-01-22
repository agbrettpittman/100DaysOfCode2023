from typing import Union
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .database import schemas, connection
from .database.models import Movies, Music, Books
from sqlalchemy.orm import Session

app = FastAPI()

origins = ["*"]

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