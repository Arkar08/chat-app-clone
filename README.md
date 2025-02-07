# Chat App

## Project Overview
This is a real-time chat application that allows users to send messages, create private chats, and participate in group discussions.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
Make sure you have these installed:
- Node.js (version X.X.X)
- npm or yarn

### Steps to Set Up
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/chat-app.git
    cd chat-app
    ```

2. **Install dependencies**:
    - Using npm:
      ```bash
      npm install
      ```
    - Using yarn:
      ```bash
      yarn install
      ```

3. **Configure environment variables** (e.g., in `.env`):
    ```
    DB_URI=your-database-url
    JWT_SECRET=your-secret-key
    SOCKET_PORT=your-socket-port
    ```

4. **Start the app**:
    - To run the app:
      ```bash
      npm start
      ```

## Features
- Real-time messaging using WebSockets
- User authentication with JWT
- Private and group chats
- File sharing (images, documents)
- Push notifications for new messages

## Technology Stack
- **Frontend**: React, WebSockets
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Real-Time Communication**: Socket.IO

## Contributing
1. Fork this repository
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit:
    ```bash
    git commit -m "Add feature"
    ```
4. Push the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
