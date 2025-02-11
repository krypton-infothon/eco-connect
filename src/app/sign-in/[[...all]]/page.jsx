import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('C:\Users\H K Puneet\Downloads\ggo.jpeg')" }}
        >
            <SignIn
                appearance={{
                    elements: {
                        card: "shadow-lg border border-[#A3D977] rounded-lg p-6 bg-[#E6F7D9]",
                        headerTitle: "text-2xl font-bold text-[#5B8C5A]",
                        formFieldInput: "border border-[#5B8C5A] focus:ring-[#5B8C5A]",
                        socialButtonsBlockButton: "bg-[#8BC34A] hover:bg-[#7CAF3C] text-white",
                        footerActionLink: "text-[#5B8C5A] hover:text-[#3E6D40]",
                    },
                }} signUpUrl="/sign-up" afterSignInUrl="/home"
            />
        </div>
    );
}
