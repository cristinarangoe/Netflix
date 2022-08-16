import { useAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function MainPage() {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator();

  console.log(user, signOut);
  useEffect(() => {
    if (signOut && !user) {
      navigate("/");
    }
  }, [user, signOut]);
  return (
    <div>
      <h2>Welcome </h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
