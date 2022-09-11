import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Navbar List</h1>
            </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/homepage"><a>Homepage</a></Link>
                <Link href="/login"><a>Login Page</a></Link>
        </nav>
     );
}
 
export default Navbar;