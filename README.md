# Efficiency API

An API designed to automate workflows and enhance business operations by providing easy access to data. Built with Express.js and hosted on Render.

---

## Live API

You can access the live API here: [Efficiency API](https://efficiency-api-5be4.onrender.com/)

---

## API Endpoints

### 1. `/ping`
- **Method**: `GET`
- **Description**: Simple endpoint to check if the API is running.
- **Response**:
    ```json
    {
      "message": "API is running"
    }
    ```

### 2. `/data`
- **Method**: `GET`
- **Description**: Returns a list of items.
- **Response**:
    ```json
    [
      { "id": 1, "name": "Item 1" },
      { "id": 2, "name": "Item 2" },
      { "id": 3, "name": "Item 3" }
    ]
    ```

### 3. `/data/:id`
- **Method**: `GET`
- **Description**: Returns a specific item by its `id`.
- **Example**: `/data/1`
- **Response**:
    ```json
    {
      "id": 1,
      "name": "Item 1"
    }
    ```

---

## Technologies Used
- **Node.js** for server-side JavaScript runtime
- **Express.js** for building the API
- **Render** for hosting and deployment

---

## How to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/tiffanoh/efficiency-api.git
    cd efficiency-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    node server.js
    ```

4. The server will run on `http://localhost:3000`.

---

## How to Deploy on Render

1. **Create a new web service** in Render.
2. **Connect your GitHub repository** to the service.
3. **Set the build and start commands**:
    - Build Command: `npm install`
    - Start Command: `node server.js`
4. **Set the port environment variable**:
    - If needed, set the `PORT` environment variable to `3000` (or use the default provided by Render).

---

## Future Improvements
- Add more API routes for advanced business workflows.
- Implement database integration (e.g., MongoDB) for dynamic data storage.
- Add authentication and security features.

---

## License

This project is licensed under the MIT License.

---

## Author

- **Tiffanoh** (https://github.com/tiffanoh)
