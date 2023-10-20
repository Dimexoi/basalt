'use client'
import { signOut } from "next-auth/react"

const SignOut = () => {
  
  const handleSignOut = () => {
    signOut()
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="p-4 bg-red-200 border border-gray-200"
    >
      Se Déconnecter
    </button>
  );
};

export default SignOut