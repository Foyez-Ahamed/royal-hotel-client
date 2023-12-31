import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import Container from "../Container/Container";
import logoImg from "../../../assets/logo/sharedLogo.png"


const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
          <Container>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              {/* Logo */}
              <Link to='/'>
                <img
                  className='hidden md:block -ml-5'
                  src={logoImg}
                  alt='logo'
                  width='170'
                  height='120'
                />
              </Link>
              {/* Dropdown Menu */}

              <MenuDropdown />
              
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Navbar;