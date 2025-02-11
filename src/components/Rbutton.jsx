"use client"
import { useRouter } from "next/navigation";

const Rbutton = () => {
  const router = useRouter();




  const navigateToServerComponent = (event) => {
    router.push('/home'); // Navigate to the server-rendered page
    console.log(event.target.value)
  };

  return (
    <button onClick={navigateToServerComponent} className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
      Save preferences
    </button>

  );
};

export default Rbutton;
