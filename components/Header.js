import Image from 'next/image';
import HeaderLogo from '../public/header-logo.png';


const Header = () => {
  return (
  <>
    <nav className="navbar navbar-fixed offcanvas-push">

      
      <button type="button" className="btn-offcanvas navbar-toggle">
        <i className="icon icon-menu"></i>
      </button>

      <ul className="nav navbar-nav navbar-right">
                      <li className="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://facebook.com/">
            <i className="icon icon-facebook"></i>
                      </a>
        </li>
                      <li className="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://twitter.com/">
            <i className="icon icon-twitter"></i>
                      </a>
        </li>
                      <li className="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://pinterest.com/">
            <i className="icon icon-pinterest"></i>
                      </a>
        </li>
                      <li className="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://instagram.com/">
            <i className="icon icon-instagram"></i>
                      </a>
        </li>
                      <li className="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://youtube.com/">
            <i className="icon icon-youtube"></i>
                      </a>
        </li>
                      <li className="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://tumblr.com/">
            <i className="icon icon-tumblr"></i>
                      </a>
        </li>
                          <li className="navbar-search menu-item"><a className="nav-link" href="#search"><i className="icon icon-search"></i></a></li>
      </ul>

      
              <div className="navbar navbar-primary">

          
                          {/* <a className="navbar-brand" href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/">
                <img className="logo-image" src="http://web.archive.org/web/20190121230204im_/http://josefinasomoza.com/wp-content/uploads/2017/09/js-logo-hr.png" alt="Josefina Somoza" />
              </a> */}
            
            
          
          <ul id="menu-main" className="nav navbar-nav hidden-md-down"><li id="menu-item-513" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/sobre-mi/">Sobre Mi</a></li>
<li id="menu-item-500" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/projects/">Proyectos</a></li>
<li id="menu-item-272" className="nav-logo menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-272">
  <a href="https://josefinasomoza.com/">
    <Image
      src={HeaderLogo}
      alt="Josefina Somoza Logo"
      placeholder="blur" 
    />
  </a>
  </li>
<li id="menu-item-637" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-637"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/press-page/">Prensa</a></li>
<li id="menu-item-188" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/contact/">Contacto</a></li>
</ul>
        </div>
      
      
    </nav>
    <div className="offcanvas-header">

      
      <nav className="navbar clearfix navbar-shadow">

        
                      <a className="navbar-brand" href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/">
              <img className="logo-image" src="http://web.archive.org/web/20190121230204im_/http://josefinasomoza.com/wp-content/uploads/2017/09/js-logo-hr.png" alt="Josefina Somoza" />
            </a>
          
          
        
        <button type="button" className="btn-offcanvas navbar-toggle">
          <i className="icon icon-cross"></i>
        </button>
      </nav>
    </div>
    <div className="offcanvas">
      <aside className="sidebar">
        <div className="widget nav_menu-3 widget_nav_menu">
          <div className="menu-main-container">
            <ul id="menu-main-1" className="menu">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"><a href="http://josefinasomoza.com/sobre-mi/">Sobre Mi</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a href="http://josefinasomoza.com/projects/">Proyectos</a></li>
              <li className="nav-logo menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-272">
                <a href="http://josefinasomoza.com/">
                  <Image
                    src={HeaderLogo}
                    alt="Josefina Somoza Logo"
                    placeholder="blur" 
                  />
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-637"><a href="http://josefinasomoza.com/press-page/">Prensa</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><a href="http://josefinasomoza.com/contact/">Contacto</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
    </>
  );
}
 
export default Header;
