import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (!session) {
    return (
      <>
        <Navbar />
        <p>You Are Not Authenticated</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <p>You Are Authenticated</p>
    </>
  );
};

export default Profile;
