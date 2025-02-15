// components/UserAvatar.jsx
"use client";
import { useUser } from "@clerk/nextjs";

const UserAvatar = () => {
    const { user } = useUser();

    if (!user) return null;

    return (
        <div className="flex items-center gap-2">
            {/* Profile Picture with fallback */}
            <div className="relative h-8 w-8">
                <img
                    src={user.imageUrl}
                    alt="User profile"
                    className="rounded-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>

            {/* Optional: Display username */}
            <span className="text-sm text-white">
        {user.fullName || user.username}
      </span>
        </div>
    );
};

export default UserAvatar;