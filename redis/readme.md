## API Features
```
1. Create User
2. Get all Users
3. Get Each User by ID
4. Delete User
5. Update User
```

## API Endpoints

All API endpoints return a status code of 200 for successful calls and 400 including an error object for unsuccessful calls.

| EndPoint                                |   Functionality                      |
| --------------------------------------- | ------------------------------------:|
| POST /user/new                          | Create User                          |
| GET /user/:userId                       | Get User                             |
| GET /users/                             | Get all Users                        |
| PUT /user/:userId                       | Update User                          |
| DELETE /user/:userId                    | Delete User                          |