# MongoCRUD

## Overview

This project is an API for managing contacts. It includes CRUD (Create, Read, Update, Delete) operations for contact management.

### Contact REST API with MongoDB Integration

This project entails the development of a RESTful API for managing a contact collection using MongoDB as the database.

### Description

The primary objective of this project is to create a robust API to perform CRUD operations on a collection of contacts stored in a MongoDB database.

## Installation

1. Clone this repository.
2. Run npm install to install the necessary dependencies.
3. Start the server using npm start.

## Usage

## Project Accomplishments

Created a branch named MongoCRUD from the master branch.
Set up MongoDB Atlas for cloud database hosting.
Configured a new project in MongoDB Atlas and established a free cluster.
Installed MongoDB Compass for database management.
Created a database named contacts_crud using MongoDB Compass.
Imported contact data into the contacts collection within the contacts_crud database.
Integrated MongoDB and Mongoose into the existing source code from Contacts-API.
Implemented connection logic to MongoDB using Mongoose in the code.
Replaced contact storage logic with Mongoose methods for CRUD operations on the contacts collection.
Defined a model schema for the contacts collection:

const contactSchema = new mongoose.Schema(
{
name: {
type: String,
required: [true, "Please provide the contact's name."],
},
email: {
type: String,
required: [true, "Please provide the contact's email."],
},
phone: {
type: String,
required: [true, "Please provide the contact's phone number."],
},
favorite: {
type: Boolean,
default: false,
},
},
{ versionKey: false, timestamps: true }
);

Implemented a new route to update contact status using a PATCH request (/api/contacts/:id/favorite).

## Route Description

### PATCH /api/contacts/:contactId/favorite

Accepts contactId as a parameter.
Expects a JSON body with an update for the favorite field.
Handles scenarios:
If no body is provided, returns a JSON response with a 400 status and a message stating "missing field favorite".
If the body is valid, updates the contact in the database using the updateStatusContact(contactId, body) function.
Returns an updated contact object with a status of 200 upon successful update.
If the update fails, returns a JSON response with a 404 status and a message stating "Not found".

### Endpoints

- `GET /api/contacts`: - Get all contacts.
- `POST /api/contacts`: - Add a new contact.
- `GET /api/contacts/:id`: - Get a contact by ID.
- `PUT /api/contacts/:id`: - Update a contact by ID.
- `DELETE /api/contacts/:id`: - Remove a contact by ID.

### Examples

**Get all contacts**

GET /api/contacts

Add a contact
POST /api/contacts
Content-Type: application/json

{
"name": "Kennedy Lane",
"email": "mattis.Cras@nonenimMauris.net",
"phone": "(542) 451-7038"
}

## API Structure

- `models/contacts.js`: Contains functions to perform CRUD operations on contacts using a JSON file.
- `routes/api/contacts.js`: Defines API routes and their corresponding controllers.
- `controllers/contacts.js`: Implements functions to handle requests and interact with the contact model.
- `middlewares/validate.js`: Middleware functions for request body validation using Joi.
- `schemas/contacts.js`: Joi schemas for request body validation.

### Dependencies

- `express`: Web server framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `joi`: Schema validation library.

### Contributing

Feel free to contribute by opening issues or creating pull requests.
