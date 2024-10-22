from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

projects = [
    {
        "id": 1,
        "title": "Portfolio Website",
        "description": "A personal portfolio showcasing my skills and projects.",
        "image_url": "https://via.placeholder.com/150",
        "project_url": "https://example.com/portfolio"
    },
    {
        "id": 2,
        "title": "E-commerce Platform",
        "description": "An e-commerce website for buying and selling products.",
        "image_url": "https://via.placeholder.com/150",
        "project_url": "https://example.com/ecommerce"
    },
    {
        "id": 3,
        "title": "Social Media App",
        "description": "A social media platform to connect with friends and share updates.",
        "image_url": "https://via.placeholder.com/150",
        "project_url": "https://example.com/socialmedia"
    },
    {
        "id": 4,
        "title": "Task Management Tool",
        "description": "A tool to manage and track tasks for teams and individuals.",
        "image_url": "https://via.placeholder.com/150",
        "project_url": "https://example.com/taskmanagement"
    },
    {
        "id": 5,
        "title": "Blog Platform",
        "description": "A platform for users to write and share blog posts.",
        "image_url": "https://via.placeholder.com/150",
        "project_url": "https://example.com/blog"
    }
]

@app.get("/projects")
def get_projects():
    return projects

