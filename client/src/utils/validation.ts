export interface UserDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface Errors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
}

export const validateInput = (name: keyof UserDetails, value: string): string | undefined => {
  switch (name) {
    case 'firstName':
    case 'lastName':
      if (!value) {
        return 'שדה זה הוא חובה';
      } else if (value.length < 2) {
        return 'השם צריך להיות לפחות שני תווים';
      }
      break;
    case 'phoneNumber':
      if (!value) {
        return 'שדה זה הוא חובה';
      } else if (!/^\d{10}$/.test(value)) {
        return 'מספר טלפון לא תקין';
      }
      break;
    case 'email':
      if (!value) {
        return 'שדה זה הוא חובה';
      } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
        return 'כתובת מייל לא תקינה';
      }
      break;
    default:
      return '';
  }
};
