// import { User } from '../models/user';
// import { v4 as uuidv4 } from 'uuid';

// // Example in-memory data store for users
// const users: User[] = [
//   {
//     id: '1',
//     email: 'user1@example.com',
//     password: 'password1', // In a real application, you should hash and salt the passwords
//     // Add other user-related fields here
//   },
//   {
//     id: '2',
//     email: 'user2@example.com',
//     password: 'password2',
//     // Add other user-related fields here
//   },
//   // Add more user objects here...
// ];


// // Get a user by email
// export function getUserByEmail(email: string): User | undefined {
//   return users.find((user) => user.email === email);
// }

// // Get a user by ID
// export function getUserById(id: string): User | undefined {
//   return users.find((user) => user.id === id);
// }

// // Create a new user
// export function createUser(newUser: User): User {
//   newUser.id = uuidv4();
//   users.push(newUser);
//   return newUser;
// }
