import { React, useState } from 'react';
import Button from './Button';
import Logo from '../Images/Logo.png'
import Modal from '../Components/Modal'

import HeaderWave from '../Images/HeaderWave.png'

import { HashLink as Link } from 'react-router-hash-link';
const Header = () => {

    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [LoginModalActive, setLoginModalActive] = useState(false);
    const [RegisterModalActive, setRegisterModalActive] = useState(false);

    const handleToggle = () => {
        setMobileMenuActive(!mobileMenuActive);

    };
    return (

        <nav className='flex justify-between relative ml-5 space-x-4 '>
            {/* Right side nav buttons with background image */}
            <div className="pr-3 bg-logo bg-contain bg-left-top bg-no-repeat max-h-24">
                <img className="object-contain" src={Logo} alt="Logo" style={{ visibility: 'hidden' }} />
            </div>
            <div className="px-3 bg-header-texture bg-contain bg-right-top bg-no-repeat max-h-36 relative ">
                <img className="object-auto py-5 px-5" src={HeaderWave} alt="Header" style={{ visibility: 'hidden' }} />

                <div className="hidden md:flex justify-center absolute top-0 right-0 pt-6 pr-3 md:gap-x-6 lg:gap-x-10 xl:gap-x-14">

                    <Button text="Logare"
                        btn_type="bg-primary text-white w-32 py-2 px-3"
                        func={() => setLoginModalActive(!LoginModalActive)} />

                    <Button text="Creeare Cont"
                        btn_type="bg-primary text-white w-32 py-2 px-3"
                        func={() => setRegisterModalActive(!RegisterModalActive)} />

                    <Link smooth to="/#Contact">
                        <Button text="Contact"
                            btn_type="bg-primary text-white w-32 py-2 px-3"
                        />
                    </Link>



                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center absolute top-0 right-0 pt-3 pr-3 md:pt-6 md:pr-6">
                    <button onClick={handleToggle}>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#494c4e" d="M23 6H1c-.552 0-1-.448-1-1s.448-1 1-1h22c.553 0 1 .448 1 1s-.447 1-1 1zM23 13H1c-.552 0-1-.447-1-1s.448-1 1-1h22c.553 0 1 .447 1 1s-.447 1-1 1zM23 20H1c-.552 0-1-.447-1-1s.448-1 1-1h22c.553 0 1 .447 1 1s-.447 1-1 1z" />
                        </svg>
                    </button>
                </div>

                <div className={(!mobileMenuActive ? "hidden " : "") + " md:hidden flex-col items-center absolute top-15 rounded-2xl right-0 pt-1 px-3 bg-primary text-white text-right "}>
                    <Link smooth to="/">
                        <div onClick={() => setLoginModalActive(!LoginModalActive)}>Logare</div>
                    </Link>
                    <Link smooth to="/">
                        <div onClick={() => setRegisterModalActive(!RegisterModalActive)}>Creeare Cont</div>
                    </Link>
                    <Link smooth to="/#Contact">
                        <div>Contact</div>
                    </Link>

                </div>
            </div>


            {/* MODALS */}
            <Modal title="Register"
                show={RegisterModalActive}
                func={() => { setRegisterModalActive(!RegisterModalActive) }} />

            <Modal title="Login"
                show={LoginModalActive}
                func={() => { setLoginModalActive(!LoginModalActive) }} />
        </nav>

    );
};

export default Header;