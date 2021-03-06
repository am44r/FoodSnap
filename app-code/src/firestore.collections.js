// This is a small file that stores all the Collection References used in the Landing page
import { collection } from "firebase/firestore";
import { db} from "../src/config/firebase_init";

export const oilCollectionRef = collection(db, "oil");
export const beansCollectionRef = collection(db, "beans");
export const flourCollectionRef = collection(db, "flour");
export const peanutCollectionRef = collection(db, "peanutbutter");
export const tunaCollectionRef = collection(db, "tuna");
export const eggCollectionRef = collection(db, "eggs");
export const pastaCollectionRef = collection(db, "pasta");
export const riceCollectionRef = collection(db, "rice");
export const cornCollectionRef = collection(db, "corn");