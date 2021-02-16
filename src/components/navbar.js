import './navbar.css'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container">
                <div className="nav-left">
                    <i className="fab fa-opencart nav-icon"></i>
                    <a className="navbar-brand" href="#"> OpenCart </a> 
                </div>
                <form className="nav-middle col-xl-7 col-lg-7 col-md-6 col-sm-6 me-3">
                    <input className="form-control" type="text" placeholder="Search" />
                </form>
                <div className="nav-right">
                    <a className="navbar-brand" href="#"> <i className="fas fa-shopping-cart"></i> Cart </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;