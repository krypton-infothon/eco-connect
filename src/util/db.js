import { db } from "@/firebase";
import { collection, setDoc } from "firebase/firebase-firestore";
import { doc } from "firebase/firebase-firestore";
import { useUser } from "@clerk/nextjs";


const { user } = useUser();
ref = doc(db, "userdb", user.id)
setDoc(ref, {
    email
})





