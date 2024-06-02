import { UserFromClient, UserToRegist } from '../types/types'; // Import necessary types

export const createUserToRegist = (userDetails: UserFromClient): UserToRegist => {
  const now = new Date(); // Current date and time
  const planStartDate = now.toISOString(); // ISO string representation of the current date and time

  const planDurationMonths = parseInt(userDetails.planDuration, 10); // Duration in months

  // Calculate the expiration date by adding the duration in months to the current date
  const expirationDate = new Date(now.getFullYear(), now.getMonth() + planDurationMonths, now.getDate());

  // Adjust the expiration date if the target month exceeds 12
  if (expirationDate.getMonth() !== (now.getMonth() + planDurationMonths) % 12) {
    expirationDate.setDate(0); // Set to the last day of the previous month
  }

  const planExpirationDate = expirationDate.toISOString();

  // Create the user registration object
  const userToRegist: UserToRegist = {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    phoneNumber: userDetails.phoneNumber,
    email: userDetails.email,
    userSignature: userDetails.userSignature,
    planStartDate: planStartDate,
    planDuration: planDurationMonths.toString(),
    planExpirationDate: planExpirationDate,
    planPrice: userDetails.planPrice,
  };

  return userToRegist;
};
