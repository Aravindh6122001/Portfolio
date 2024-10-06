from pydantic import BaseModel

class MessageBase(BaseModel):
    email: str
    message: str

class MessageCreate(MessageBase):
    pass

class Message(MessageBase):
    id: int

    class Config:
        orm_mode = True
