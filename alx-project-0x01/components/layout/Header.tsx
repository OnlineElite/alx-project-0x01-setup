

const Header : React.FC =()=>{
    return(
        <div>
            <nav>
                <div className="logo"></div>
                <ul className="navBar">
                    <li>Home</li>
                    <li>Posts</li>
                    <li>Users</li>
                </ul>
                <div className="buttons"></div>
            </nav>
        </div>
    )
}

export default Header;
