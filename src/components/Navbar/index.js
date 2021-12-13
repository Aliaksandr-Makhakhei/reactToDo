import './style.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__title'>
        <div className='navbar__logo'>
          <img className='navbar__logo-img' src='/images/logo.svg' alt='logo' />
          <p className='navbar__logo-description'>To-Do</p>
        </div>
        <div>
          <h1 className='navbar__logo-text'>Tasks</h1>
        </div>
      </div>
      <div className='navbar__profile'>
        <p className='navbar__profile-username'>Leanne Graham</p>
        <img src='/images/avatar.svg' alt='logo' className='navbar__profile-avatar' />
        <img src='/images/profile-menu.svg' alt='profile-menu' className='navbar__profile-menu'/>
      </div>
    </div>
  );
};

export default Navbar;
