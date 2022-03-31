import Link from "next/link";

const Navbar = () => {
    return (
        <nav style={{display: "flex", gap:"5px"}}>
            <Link href="/">Home</Link>
            <Link href="/homescreen">Homescreen</Link>
            <Link href="/profile">Profile</Link>
        </nav>
    )
}


export default Navbar;