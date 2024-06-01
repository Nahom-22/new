import '../../../UI/Styles/navbar.css'
const Navbar=()=>{
    return(
        <div className="navbar-holder">
            <ul className="navbar-list-holder">
                <li className="navbar-list-item">
                    <a href='www.google.com'><h4>Home</h4></a>
                </li>
                <li className="navbar-list-item">
                    <a href='www.google.com'><h4>Products</h4></a>
                </li>
                <li className="navbar-list-item">
                    <a href='www.google.com'><h4>About</h4></a>
                </li>
            </ul>
        </div>
    )
}


export default Navbar