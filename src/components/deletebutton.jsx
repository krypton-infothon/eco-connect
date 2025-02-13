"use client";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs"

export default function DeleteAccount() {
    const { user } = useUser();
    const { signOut } = useAuth()

    const handleDeleteAccount = async () => {
        if (!user) return;
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone."
        );
        if (!confirmDelete) return;

        try {
            await fetch("/api/delete-user", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id }),
            });
            alert("Your account has been deleted.");
            await signOut();
            window.location.href = "/"; // Redirect after deletion
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Failed to delete account. Please try again.");
        }
    };

    return (
        <button
            onClick={handleDeleteAccount}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Delete My Account
        </button>
    );
}