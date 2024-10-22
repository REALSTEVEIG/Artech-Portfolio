from sqlalchemy.orm import Session
from main import Project, SessionLocal, engine

def seed_db():
    db: Session = SessionLocal()
    projects = [
        Project(
            title="Portfolio Website",
            description="A personal portfolio showcasing my skills and projects.",
            image_url="https://via.placeholder.com/150",
            project_url="https://example.com/portfolio"
        ),
        Project(
            title="E-commerce Platform",
            description="An e-commerce website for buying and selling products.",
            image_url="https://via.placeholder.com/150",
            project_url="https://example.com/ecommerce"
        ),
        Project(
            title= "Social Media App",
            description= "A social media platform to connect with friends and share updates.",
            image_url= "https://via.placeholder.com/150",
            project_url= "https://example.com/socialmedia"
        ),
        Project(
            title= "Task Management Tool",
            description= "A tool to manage and track tasks for teams and individuals.",
            image_url= "https://via.placeholder.com/150",
            project_url= "https://example.com/taskmanagement"
        ),
        Project(
            title= "Blog Platform",
            description= "A platform for users to write and share blog posts.",
            image_url= "https://via.placeholder.com/150",
            project_url= "https://example.com/blog"
        )
    ]
    db.bulk_save_objects(projects)
    db.commit()

if __name__ == "__main__":
    seed_db()
