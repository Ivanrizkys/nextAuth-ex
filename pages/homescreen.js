import { getSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Homescreen({ user }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Dashboard(Protected Route)</h1>
        <p>
          Welcome to dashboard: <b>{user.name}</b>
        </p>
        <p>{user.email}</p>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}
