export default function Header() {
  return (
    <header className="navbar bg-light d-flex justify-content-between align-items-center p-3 position-fixed top-0 w-100">
      <div className="logo">
        <img src="https://csite.nicepage.com/Images/logo-w.png" alt="logo" />
      </div>
      <nav className="d-md-flex gap-3 d-none">
        <a href="#" className="active">
          <img
            src="https://csite.nicepage.com/Images/Site/responsive-desktop.png"
            alt="screen"
          />
        </a>
        <a href="#">
          <img
            src="https://csite.nicepage.com/Images/Site/responsive-laptop.png"
            alt="lapTop"
          />
        </a>
        <a href="#">
          <img
            src="https://csite.nicepage.com/Images/Site/responsive-tablet.png"
            alt="tablt"
          />
        </a>
        <a href="#">
          <img
            src="https://csite.nicepage.com/Images/Site/responsive-phone-horizontal.png"
            alt="phoneRonded"
          />
        </a>
        <a href="#">
          <img
            src="https://csite.nicepage.com/Images/Site/responsive-phone.png "
            alt="phone"
          />
        </a>
      </nav>
      <div className="x">
        <img
          src="https://csite.nicepage.com/Images/Site/icon-close.png"
          alt="X"
        />
      </div>
    </header>
  );
}
