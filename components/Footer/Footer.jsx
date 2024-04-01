const Footer = () => {
  return (
    <footer>
        <div className="container d-flex flex-column">
            <div className="l-sm d-flex flex-wrap">
                <div className="logo m-1 p-2">
                    LOGO
                </div>

                <div className="social-media container">
                    <div className="flex">
                        <a href="https://facebook.com" className="m-1">icon</a>
                        <a href="" className="m-1">icon</a>
                        <a href="" className="m-1">icon</a>
                        <a href="" className="m-1">icon</a>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-around flex-wrap">
                <ul className="site-map custom-list m-1">
                    <li className="l-item l-item-title">Company</li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/about">About</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/services">Our Services</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/posts/all">Blog</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/team">Team</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/policy">Privacy Policy</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/terms">Terms &amp; Conditions</a></li>
                </ul>


                <ul className="site-map custom-list m-1">
                    <li className="l-item l-item-title">Navigate to</li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/user/login">Login</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/register">Register</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/properties/buy">Buy Property</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/properties/rent">Rent Property</a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/advertise">Sell Property</a></li>
                </ul>

                <ul className="site-map custom-list m-1">
                    <li className="l-item l-item-title">Contact Us</li>
                    <li className="l-item"><a href="tel:+76 967 804" className="flex-center">icon<span>76 967 804</span></a></li>
                    <li className="l-item"><a href="mailto:husseinkhalil420@gmail.com" className="flex-center"><span>icon husseinkhalil420@gmail.com</span></a></li>
                    <li className="l-item"><a href="http://127.0.0.1:8000/contact" className="flex-center">icon <span>Contact</span></a></li>
                </ul>
            </div>

            <div className="copy">
                <p className="text-capitalize float-start">
                    Khalil Real Estate 2024 © All Rights Reserved.
                </p>

                <p className="text-capitalize float-end">
                    Done By <a href="https://github.com/hussein112" className="developper">hussein khalil</a> © all Rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
