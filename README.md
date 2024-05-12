# Census Application

## Overview
This Census Application is designed to capture and manage participant data securely and efficiently. It provides a robust set of API endpoints that allow for CRUD operations on participant data. The application is built using Express.js and is hosted on Render.com.

## Features
- **Authentication**: Secure access with basic authentication for an admin user.
- **CRUD Operations**: Create, read, update, and delete participant data through RESTful endpoints.
- **Data Validation**: Ensures all data entered is valid and in the correct format before saving.

## API Endpoints
The following endpoints are available in the Census Application:

### Environment Variables
To run the application correctly, you need to set the following environment variables in your `.env` file:
- `PORT`: The port number on which the server will run (default is 3000).
- `ADMIN_USER`: The username for the admin authentication.
- `ADMIN_PASSWORD`: The password for the admin authentication.

Ensure that these variables are set correctly to avoid runtime errors.


### Authentication
All endpoints require basic authentication with the admin credentials.

### Create Participant
- **POST /participants/add**
  - Adds a new participant's data to the system.
  - Request body must include: `email`, `firstname`, `lastname`, `dob`, `work`, and `home` details.

### Get All Participants
- **GET /participants**
  - Retrieves a list of all participants.

### Get Participant Details
- **GET /participants/details/:email**
  - Retrieves detailed information for a specified participant.

### Update Participant
- **PUT /participants/:email**
  - Updates the data for a participant specified by email.
  - Request body should have the same structure as the POST request.

### Delete Participant
- **DELETE /participants/:email**
  - Deletes a participant specified by email.

## Setup and Installation
1. **Clone the repository:**
git clone [https://github.com/torhodhog/census-app]
cd [https://github.com/torhodhog/census-app]


2. **Install dependencies:**
npm install


3. **Set up environment variables:**
- Copy the `.env.example` file to a new file called `.env`.
- Modify the `.env` file to include the correct environment settings.

4. **Run the application:**


5. **Deploy on Render.com:**
- Follow Render's documentation to deploy the application based on your repository.

## Testing
Use Postman or any similar API client to test the endpoints. Ensure that you have set the correct authorization headers to simulate admin access.

## Contributing
Contributions to the Census Application are welcome. Please ensure to follow the project's code style and submit a pull request for any enhancements.

## License
Specify the license under which the project is released.

---
