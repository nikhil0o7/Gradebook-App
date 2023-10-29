import { doc, setDoc } from "firebase/firestore";
import { app, database } from "./firebaseConfig";
import { students } from "./gradebook";

export const pushStudentsToFirebase = async () => {
  for (const student of students) {
    try {
      await setDoc(doc(database, "Students", student.name), student);
      //   console.log(`Document for ${student.name} written successfully.`);
    } catch (error) {
      //   console.error(`Error writing document for ${student.name}:`, error);
    }
  }
};
