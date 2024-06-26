import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./Firebase";

export const uploadToFirebase = async (image) => {
  let downloadingURL = "";
  const imageRef = ref(storage, v4());

  try {
    const snapshot = await uploadBytes(imageRef, image);
    downloadingURL = await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Error uploading image:", error);
  }

  return downloadingURL;
};
