import { db } from "@/firebase";
import { currentUser } from "@clerk/nextjs/server";
import { collection, getDoc, setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";



export async function Dashboard(body) {
    const user = await currentUser();


    if (user) {
        () => {
            if (user) {
                const userRef = doc(db, "userdb", user.id);
                setDoc(userRef, {
                    name: user.fullName,
                    age: body.age,
                    preferences: body.preferences,
                    gender: body.gender,
                    email: user.primaryEmailAddress?.emailAddress,
                    phone: user.primaryPhoneNumber?.phoneNumber
                }, { merge: true });
            }
        };
        return ("user logged in")
    }


    else { return ("user not logged in"); }


}

export async function getdoc() {
    const user = await currentUser();
    const userRef = doc(db, "userdb", user.id);
    const userdoc = await getDoc(userRef)
    console.log(user)
    return userdoc.data()

}



