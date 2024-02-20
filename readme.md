
---

# Star Wars API Viewer

This is a Node.js application that fetches data from the Star Wars API (SWAPI) and displays it in a web interface.

## Technologies Used

- Docker
- Express.js
- Node.js
- Axios

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

## Running with Docker

To run the application using Docker, follow these steps:

1. Make sure you have Docker installed on your machine. If not, you can download it from [https://www.docker.com/get-started](https://www.docker.com/get-started).

2. Build the Docker image using the following command:

    ```bash
    docker build -t my-star-wars-app .
    ```

    Replace `my-star-wars-app` with the desired name for your Docker image.

3. Once the image is built, you can run the Docker container using the following command:

    ```bash
    docker run -p 3000:3000 my-star-wars-app
    ```

    This will start the application, and you can access it in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate to `/people` to view a list of Star Wars characters.
- Navigate to `/films` to view a list of Star Wars films.


---

