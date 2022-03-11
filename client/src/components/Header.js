import { Forum, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../styles/Header.css";

function Header() {
  return (
    <div className='header'>
      <IconButton className=''>
        <Person fontSize='large' className='header__icon' />
      </IconButton>
      <img
        src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
        alt='logo'
        className='header__logo'
      />
      <IconButton>
        <Forum fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
}

export default Header;
