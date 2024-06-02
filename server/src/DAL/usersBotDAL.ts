import { UserToRegist, User } from "../types/types";
import { executeQuery } from "../configs/PostgresConfig";

export const getAllUsersDal = async () => {
  try {
    const result = await executeQuery(
      `
      SELECT * FROM Users
      `
    );
    return result.rows;
  } catch (error) {
    console.error("Error getting users:", error);
    throw new Error("Failed to get users");
  }
};

export const getAllRegistredUsersDal = async () => {
  try {
    const result = await executeQuery(
      `
      SELECT * FROM registered_users
      `
    );
    return result.rows;
  } catch (error) {
    console.error("Error getting registered users:", error);
    throw new Error("Failed to get registered users");
  }
};

export const addUserDetailsDal = async (userDetails: User) => {
  const { firstName, lastName, phoneNumber, email } = userDetails;
  try {
    // Insert user details using parameterized query
    const newUser = await executeQuery(
      `
      INSERT INTO Users (first_name, last_name, phone, email)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      [firstName, lastName, phoneNumber, email]
    );
    return newUser.rows[0];
  } catch (error) {
    console.error("Error saving user details:", error);
    throw new Error("Failed to save user details");
  }
};

export const updateUserDetailsDal = async (data: any) => {
  const { userId, firstName, lastName, phoneNumber, email } = data;

  try {
    const result = await executeQuery(
      `
      UPDATE Users
      SET first_name = $1, last_name = $2, phone = $3, email = $4
      WHERE user_id = $5
      `,
      [userId, firstName, lastName, phoneNumber, email] // Add more parameters as needed
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user details:", error);
    throw new Error("Failed to update user details");
  }
}

export const getUserDetailsDal = async (userId: string) => {
  try {
    const result = await executeQuery(
      `
      SELECT * FROM Users WHERE user_id = $1
      `,
      [userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error getting user details:", error);
    throw new Error("Failed to get user details");
  }
};

export const deleteUserDal = async (userId: string) => {
  try {
    const result = await executeQuery(
      `
      DELETE FROM Users WHERE user_id = $1
      `,
      [userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
}

export const saveUserRegistrationDetailsDal = async (data: UserToRegist) => {
  const { userId, firstName, lastName, phoneNumber, email, userSignature, planPrice, planDuration, planStartDate, planExpirationDate } = data;
  try {
    const result = await executeQuery(
      `
      INSERT INTO registered_users (user_id, first_name, last_name, phone, email, health_declaration, plan_price, plan_duration, plan_start_date, plan_expiration_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `,
      [userId, firstName, lastName, phoneNumber, email, userSignature, planPrice, planDuration, planStartDate, planExpirationDate]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error adding registered user:", error);
    throw new Error("Failed to add registered user");
  }
}

export const updateRegisteredUserDal = async (data: any) => {
  const { userId, healthDeclaration, selectedProgram, planStartDate, planExpirationDate } = data;
  try {
    const result = await executeQuery(
      `
      UPDATE registered_users
      SET health_declaration = $1, selected_program = $2, plan_start_date = $3, plan_expiration_date = $4
      WHERE user_id = $5
      `,
      [healthDeclaration, selectedProgram, planStartDate, planExpirationDate, userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error updating registered user:", error);
    throw new Error("Failed to update registered user");
  }
}

export const getRegisteredUserDal = async (userId: string) => {
  try {
    const result = await executeQuery(
      `
      SELECT * FROM registered_users WHERE user_id = $1
      `,
      [userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error getting registered user:", error);
    throw new Error("Failed to get registered user");
  }
}

export const deleteRegisteredUserDal = async (userId: string) => {
  try {
    const result = await executeQuery(
      `
      DELETE FROM registered_users WHERE user_id = $1
      `,
      [userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting registered user:", error);
    throw new Error("Failed to delete registered user");
  }
}

// export const addHealthDeclarationDal = async (data: any) => {
//   const { healthDeclaration } = data;
//   try {
//     const result = await executeQuery(
//       `
//       INSERT INTO UserDetails (health_declaration)
//       VALUES ($1)
//       `,
//       [healthDeclaration]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Error adding health declaration:", error);
//     throw new Error("Failed to add health declaration");
//   }
// };

// export const addSelectedProgramDal = async (data: any) => {
//   const { selectedProgram } = data;
//   try {
//     const result = await executeQuery(
//       `
//       INSERT INTO UserDetails (selected_program)
//       VALUES ($1)
//       `,
//       [selectedProgram]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Error adding selected program:", error);
//     throw new Error("Failed to add selected program");
//   }
// };

// export const addPlanDetailsDal = async (data: any) => {
//   const { planStartDate, planExpirationDate } = data;
//   try {
//     const result = await executeQuery(
//       `
//       INSERT INTO UserDetails (plan_start_date, plan_expiration_date)
//       VALUES ($1, $2)
//       `,
//       [ planStartDate, planExpirationDate ]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Error adding plan details:", error);
//     throw new Error("Failed to add plan details");
//   }
// };

// export const addPaymentDetailsDal = async (data: any) => {
//   const { paymentId } = data;
//   try {
//     const result = await executeQuery(
//       `
//       INSERT INTO UserDetails (payment_id)
//       VALUES ($1)
//       `,
//       [paymentId]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Error adding payment details:", error);
//     throw new Error("Failed to add payment details");
//   }
// };
