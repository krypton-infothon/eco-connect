"use client"
import { useRouter } from "next/navigation";

const Rbutton = () => {
  const router = useRouter();




  async function navigateToServerComponent(event) {
    console.log(event.target.value)
    req = fetch("/api/userdata", {
      method: "POST",
      body: event.target.value
    })

    router.push('/home'); // Navigate to the server-rendered page

  };

  return (
    <button type="submit" onClick={navigateToServerComponent} className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
      Save preferences
    </button>

  );
};

export default Rbutton;
