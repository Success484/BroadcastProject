import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import NavLinks from './NavLinks';



const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='absolute top-7 '>
      <div onClick={toggleMenu}>
        {isOpen ? (
          <IoIosCloseCircleOutline size={25} />
        ) : (
          <RxHamburgerMenu size={25} />
        )}
      </div>
      {isOpen && (
        <div className='bg-gray-300  border border-black relative p-2.3 text-left'>
          {<NavLinks/>}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
