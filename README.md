# NYT Bestsellers Explorer

The project is a frontend application to explore New York Times (NYT) bestseller categories and books.

## Demo

Here's a quick demo of the application:

![NYT Bestsellers Explorer](assets/peek.gif)

You can explore it in production here: https://nytbestesellers.netlify.app/

## **How to Run the NYT Bestsellers Explorer**

1. **Clone the Repository**
    
    ```bash
    git clone https://github.com/jaenia/nyt-bestsellers.git
    cd nyt-bestsellers
    ```
    
2. **Install Dependencies**
    
    Make sure you have [Node.js](https://nodejs.org/) installed (preferably v20+ as per the project's configuration). Then, run:
    
    ```bash
    npm install
    ```
    
3. **Start the Development Server**
    
    To run the project locally:
    
    ```bash
    npm start
    ```
    
    This will start the application and make it accessible at `http://localhost:3000` in your browser.
    
---

### **How to Run Tests**

1. **Run All Tests**
    
    To execute all test cases and ensure the components function correctly:
    
    ```bash
    npm test
    ```
    
    This will run the tests in interactive watch mode by default. Press `a` to run all tests.
    
2. **Run a Specific Test File**
    
    To target a specific test file, provide its path:
    
    ```bash
    npm test src/components/Dropdown/Dropdown.test.js
    ```
---

## **Solution Design and Key Decisions**

### **1. Project Initialization and Setup**

- **Commits**: *Initialize project using Create React App*, *Enable absolute imports*, *Add global styles*, *Refactor code to work with Node 20*
- **Reasoning**:
    - I chose **Create React App** as it provides a robust starting point with essential features like Webpack configuration, Babel, and testing utilities, allowing me to focus on building features rather than setting up the environment.
    - Absolute imports were enabled to simplify module resolution, enhancing readability and maintainability by avoiding complex relative paths.
    - Global styles were implemented early to ensure consistent design throughout the app.
    - Updating the code to Node.js v20 addressed deprecation warnings and ensured compatibility with modern tools and libraries.

---

### **2. API Integration**

- **Commits**: *Implement service to fetch bestseller categories*, *Show categories from NYT API*, *Fetch books from API*
- **Reasoning**:
    - I implemented an **API service layer** to fetch data from the NYT API, following the **Separation of Concerns** principle. This abstraction makes the code more modular, reusable, and easier to test.
    - Initial focus was on fetching and displaying categories, followed by fetching books for a selected category to provide a seamless user experience.

---

### **3. Component Architecture**

- **Commits**: *Create BookList component*, *Create BookCard component*, *Add Dropdown component tests*
- **Reasoning**:
    - I broke down the UI into reusable and testable components like `BookList`, `BookCard`, and `Dropdown`, following **React's component-driven architecture**.
    - This modular approach ensures scalability and maintainability, as each component handles a specific part of the interface.
    - Testing components early in the process helped validate functionality and reliability.

---

### **4. User Interface Design**

- **Commits**: *Add main page style*, *Polish interface*, *Polish book list interface*, *Update book card style*, *Fix book image in the center*, *Polish error scenario interface*
- **Reasoning**:
    - UI design was iteratively improved to ensure a clean and intuitive user experience. For example:
        - Aligning the book images centrally for consistency.
        - Refining the `BookCard` design for better visual clarity and aesthetics.
        - Ensuring error states are clearly communicated to users.
    - I used **Prettier** to maintain consistent formatting, adhering to modern frontend development practices.

---

### **5. Loading and State Management**

- **Commits**: *Add loading for fetching categories and books*, *Fix loading state of category select*, *Resets to initial state when clicking on NYT Bestsellers Explorer in Header*
- **Reasoning**:
    - I prioritized **state management** to handle API calls and UI updates effectively.
    - Added loading indicators for fetching categories and books to enhance user feedback.
    - Ensured that clicking on the header resets the app state, providing a logical and predictable navigation flow.

---

### **6. Testing**

- **Commits**: *Add tests for components*, *Add Dropdown component tests*, *Update dependency due to warnings in tests*
- **Reasoning**:
    - Testing was a critical part of the development process. I wrote unit tests for key components like `Dropdown` to validate functionality and ensure robustness.

---

### **Challenges and Learnings**

- **Learning Curve**: Adjusting to the NYT API structure and crafting a polished UI in React required thoughtful planning and iteration.
- **Testing**: Writing meaningful tests for interactive components provided valuable insights into their behavior under different conditions.
- **Iterative Improvements**: I followed an iterative approach, focusing on core functionality first and refining the UI and error states as I progressed.

---

### **Final Thoughts**

This project was a rewarding experience that allowed me to demonstrate my ability to design scalable, user-friendly solutions while adhering to modern frontend development best practices. Each decision was aimed at creating a robust, maintainable, and visually appealing application.
