---
layout: default
title: Home
---


## 🧠 Learning Objectives

- Understand the concept of **databases** and **DBMS**
- Explore the **advantages** of using a DBMS
- Learn about the **database models**
- Study the **Entity-Relationship (ER) Model**
- Convert **ER Diagrams** to Relational Models

---

## 📖 1. What is a Database?

A **database** is an organized collection of structured data stored electronically in a computer system.

> 🔍 Example: Student records, library databases, etc.

---

## 🛠️ 2. What is a DBMS?

A **Database Management System (DBMS)** is software that interacts with end-users, applications, and the database itself to capture and analyze data.

### ✅ Features:
- Data security
- Backup & recovery
- Data independence

### 📊 Comparison Table

| Feature        | File System     | DBMS             |
|----------------|------------------|------------------|
| Data Redundancy | High             | Low              |
| Data Access     | Sequential       | Query-based      |
| Security        | Low              | High             |

---

## 🧩 3. Database Models

### 📁 1. Hierarchical Model
- Tree-like structure with parent-child relationships

### 📂 2. Network Model
- More flexible graph-like structure

### 🧱 3. Relational Model
- Data stored in **tables (relations)** with rows and columns

---

## 🎨 4. Entity-Relationship (ER) Model

The **ER Model** helps in designing a conceptual database by representing:

- **Entities**: Real-world objects (e.g., Student, Course)
- **Attributes**: Properties (e.g., Name, RollNo)
- **Relationships**: Connections between entities (e.g., Enrolls)

### ✏️ Notations:
- Rectangle: Entity
- Ellipse: Attribute
- Diamond: Relationship
- Line: Association

```mermaid
erDiagram
    STUDENT ||--o{ ENROLLS : registers
    COURSE ||--o{ ENROLLS : contains
