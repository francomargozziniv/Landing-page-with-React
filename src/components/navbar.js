import React from 'react'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between p-3">
          
                <div>
                    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>


                    </ul>

                </div>
            
        </nav>

    )
}

export default NavBar