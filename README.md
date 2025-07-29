# Course-Dashboard
An attractive and responsive Angular Dashboard UI built with Bootstrap. Features a welcoming landing card and navigational layout ready to be integrated with your course modules.

## Features

- Clean sidebar with navigation
- Centered welcome card with message
- Responsive design using Bootstrap
- Modular components (Progress Bar, Button, Card)
- Easy to customize and extend

---

## Tech Stack

- Angular CLI
- Bootstrap 5
- HTML5 & CSS

---

## Setup Instructions
###  1. Clone Repository
```
git clone https://github.com/Chetana-Bhanarkar/Course-Dashboard.git
```

###  2. Install dependencies
```
npm install
```

###  3. Run Project
```
ng serve
```

###  4. Run Test file
```
ng test
```
 
---
## Folder Structure
 
```
src/
└── app/
    ├── components/
    │   ├── button-component/
    │   ├── card-component/
    │   ├── progress-bar-component/
    │   └── layout-component/
    ├── data/
    │   └── courses.ts
    └── views/
        ├── dashboard-component/
        ├── my-course-component/
        └── setting-component/
```

### Components
Reusable UI elements shared across different views/pages.

##### - Button Component
Contains a custom-styled button used throughout the app. It ensures consistent design and can accept inputs like label, click event, type, etc.

##### - Card Component
A reusable card component that can display course information or dashboard summaries in a clean and modular way.

##### - Progress Bar Component
A component to visualize course completion progress or loading status, commonly used in course or dashboard views.

##### - Layout Component
Manages the general layout of the application including header, sidebar, and footer. This acts as the base wrapper for other routed components.

### Data

##### - courses.ts
A TypeScript file exporting a static list or structure of course data.

### Views
Contains feature-specific components or full-page views.

##### - Dashboard Component
The main landing page of the application. It may include summary cards, statistics, and shortcuts to other sections.

##### - My-course Component
Displays the list of enrolled or available courses for a user. It may include filtering, searching, and progress tracking features.

##### - Setting Component
Allows users to update their preferences, profile info, or application-level settings.


---

## UI Preview

### 1. Dashboard
<img width="1365" height="766" alt="image" src="https://github.com/user-attachments/assets/ddb158a3-16d6-4c11-af0f-7f9852a453c9" />


### 2. My Courses
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/ae645f44-d834-4b8c-8bea-b744ba29d003" />


### 3. Setting
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/1fd47dc5-6d78-4e52-b19a-370be649adce" />



