# Chat App

## Project Overview
This is a real-time chat application that allows users to send messages, create private chats.

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
- Node.js (version => 16)
- npm or yarn

### Steps to Set Up
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Arkar08/chat-app-clone.git (for frontend)
    git clone https://github.com/Arkar08/chat-app-clone-backend.git (for backend)
    cd chat-app
    ```

2. **Install dependencies**:
    - Using npm:
      ```bash
      npm install
      npm install -g @angular/cli
      ```
    - Using yarn:
      ```bash
      yarn install
      ```

3. **Start the app**:
    - To run the app:
      ```bash
      ng s
      ```

## Features
- Real-time messaging using WebSockets
- User authentication with JWT
- Private and group chats
- File sharing (images, documents)
- Push notifications for new messages

## Technology Stack
- **Frontend**: Angular, WebSockets
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Real-Time Communication**: Socket.IO

## Deployment
-To see the free hosting with vercel.
```bash
  https://chat-app-clone-three.vercel.app/auth/login
```

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
