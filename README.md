# Task Manager

<img src=https://i.imgur.com/JQeWudf.png width=500>

## Overview
Task Manager is a web application that allows users to manage their daily, weekly, and monthly tasks. The application is built using Flask.

## Features
- Add new tasks to daily, weekly, or monthly categories.
- Check off tasks as they are completed.
- Tasks are saved and loaded from a JSON file.

## Installation and Setup
1. Clone the repository.
  ```
  git clone https://github.com/Ashrick12/task-manager.git
  ```
2. Install the required dependencies:
    ```
    pip install -r requirements.txt
    ```
3. Run the application:
    ```
    python server.py
    ```
4. Open a web browser and navigate to `http://localhost:8000`.

## Usage
To add a task, enter the task name in the input field and select the category (daily, weekly, or monthly). Click the "Submit Task" button to add the task.

To mark a task as completed, click the checkbox next to the task name.

## Contributing
Contributions are welcome. Please open an issue or submit a pull request.

## License
This project is licensed under the terms of the [MIT license](LICENSE).
