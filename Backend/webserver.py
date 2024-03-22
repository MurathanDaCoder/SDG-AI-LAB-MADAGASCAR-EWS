from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Insane mindblowing fabulous webapp is": "incoming (:"}

