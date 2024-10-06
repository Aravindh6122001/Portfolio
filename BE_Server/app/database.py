import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models import Base 

from dotenv import load_dotenv


load_dotenv()

DATABASE_URL = os.getenv('DB_CONNECTION')


engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autoflush=False, bind=engine)
