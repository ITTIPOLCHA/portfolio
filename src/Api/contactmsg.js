import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const addContact = async ({ name, email, message }) => {
  try {
    await addDoc(collection(db, "contact"), {
      name: name,
      email: email,
      message: message,
    });
  } catch (err) {
    console.log(err);
  }
};
