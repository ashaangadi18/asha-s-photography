import "./App.css";

function App() {
  return (
    <div className="main_box">
      {/* Hidden Checkbox */}
      <input type="checkbox" id="check" />

      {/* Menu Button */}
      <div className="btn_one">
        <label htmlFor="check">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>

      {/* Sidebar */}
      <div className="sidebar_menu">
        <div className="logo">
          <a href="#">asha's Photography</a>
        </div>

        <div className="btn_two">
          <label htmlFor="check">
            <i className="fa-solid fa-xmark"></i>
          </label>
        </div>

        <div className="menu">
          <ul>
            <li><i className="fa-solid fa-image"></i> <a href="#">Gallery</a></li>
            <li><i className="fa-solid fa-arrow-up-right-from-square"></i> <a href="#">Shortcuts</a></li>
            <li><i className="fa-solid fa-file"></i> <a href="#">Files</a></li>
            <li><i className="fa-solid fa-calendar"></i> <a href="#">Events</a></li>
            <li><i className="fa-solid fa-store"></i> <a href="#">Store</a></li>
            <li><i className="fa-solid fa-phone"></i> <a href="#">Contact</a></li>
            <li><i className="fa-solid fa-comment"></i> <a href="#">Feedback</a></li>
          </ul>
        </div>

        <div className="social_media">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;