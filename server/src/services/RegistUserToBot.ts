const sereverUrl = process.env.SERVER_URL;

const params = {
  
}

export const RegistUserToBot = async (phone: string) => {
  try {
    const response = await fetch(sereverUrl + `?customerPhone=${phone}&status=paying&userPhone=972503908171`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}