# Awesomity Frontend Challenge

Create a To-Do App. The To-Do App should allow the following operations on a todo item:

Create, Update, Read, Delete

### 🏗Object/Modal Structure

A todo item is made of:

- Title
- Description
- Priority (LOW,MEDIUM,HIGH)
- CreateDate(date of creation of the todo item)
- ModifiedDate(date of modification of the todo item)

### 🔖Requirements

- Someone can create / update a todo item by sending:

  - title
  - description
  - priority

  The date of creation & modification should be time stamped automatically when created

- All of the fields are required
- Someone can read one or many todo items
- Someone can delete a todo item
- THE DATA SHOULD BE STORED LOCALLY (local storage,...)
- Handle global state management of the data (todo item(s)) using redux
- Make use of the assets & mockups found in this repo in their respective folders 
- Your project should be on an online repository (Gitlab, Github,...)

### 📝Submission
- Send us your submission as an email to team@awesomity.rw.
- The subject of the email should be `Task Force Challenge-{NAME_OF_THE_CHALLENGE}` eg: Task Force Challenge-Frontend
- The content of the email should have your full names, personal phone number as well as the git repo link of the challenge
- Deadline: 24th Feb at noon, submit before then

### 👷🏽‍♀️Best Practices

- Document your methods. Tip: [JSDoc](https://jsdoc.app/)
- Test your components & redux(No need for 100% coverage)
- Handle validation of your form fields
- Use design system approach to style your components (re-usable styling)
- When possible, use re-usable components
- Write a good README file with the steps to Install & run your web platform

### ✨Bonus

- Have a Dockerized environment(Dockerfile, docker-compose.yml)
- Add a option to link a picture with a to-do item(File upload)
- Integrate with [Firestore](https://firebase.google.com/docs/firestore) where the todo items will be stored and retreived(Having same CRUD operations working with Firebase
- Add a search & filter option:
  - Search by todo's title
  - Filter by todos' priority or date of creation
