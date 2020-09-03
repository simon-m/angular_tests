from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
 
Base = declarative_base()
 
class BlogArticle(Base):
    __tablename__ = 'blog_article'
    id = Column(Integer, primary_key=True)
    text = Column(String(16384), nullable=False)
    author = Column(String(32), nullable=False)
    date = Column(String(8), nullable=False)
  

