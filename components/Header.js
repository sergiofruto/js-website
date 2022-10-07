import Image from 'next/image';
import HeaderLogo from '../public/header-logo.png';


const Header = () => {
  return (
  <>
    <nav class="navbar navbar-fixed offcanvas-push">

      
      <button type="button" class="btn-offcanvas navbar-toggle">
        <i class="icon icon-menu"></i>
      </button>

      <ul class="nav navbar-nav navbar-right">
                      <li class="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://facebook.com/">
            <i class="icon icon-facebook"></i>
                      </a>
        </li>
                      <li class="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://twitter.com/">
            <i class="icon icon-twitter"></i>
                      </a>
        </li>
                      <li class="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://pinterest.com/">
            <i class="icon icon-pinterest"></i>
                      </a>
        </li>
                      <li class="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://instagram.com/">
            <i class="icon icon-instagram"></i>
                      </a>
        </li>
                      <li class="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://youtube.com/">
            <i class="icon icon-youtube"></i>
                      </a>
        </li>
                      <li class="menu-item hidden-sm-down">
          <a href="http://web.archive.org/web/20190121230204/http://tumblr.com/">
            <i class="icon icon-tumblr"></i>
                      </a>
        </li>
                          <li class="navbar-search menu-item"><a class="nav-link" href="#search"><i class="icon icon-search"></i></a></li>
      </ul>

      
              <div class="navbar navbar-primary">

          
                          {/* <a class="navbar-brand" href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/">
                <img class="logo-image" src="http://web.archive.org/web/20190121230204im_/http://josefinasomoza.com/wp-content/uploads/2017/09/js-logo-hr.png" alt="Josefina Somoza" />
              </a> */}
            
            
          
          <ul id="menu-main" class="nav navbar-nav hidden-md-down"><li id="menu-item-513" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/sobre-mi/">Sobre Mi</a></li>
<li id="menu-item-500" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/projects/">Proyectos</a></li>
<li id="menu-item-272" class="nav-logo menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-272">
  <a href="https://josefinasomoza.com/">
    <Image
      src={HeaderLogo}
      alt="Josefina Somoza Logo"
      placeholder="blur" 
    />
  </a>
  </li>
<li id="menu-item-637" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-637"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/press-page/">Prensa</a></li>
<li id="menu-item-188" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><a href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/contact/">Contacto</a></li>
</ul>
        </div>
      
      
    </nav>
    <div class="offcanvas-header">

      
      <nav class="navbar clearfix navbar-shadow">

        
                      <a class="navbar-brand" href="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/">
              <img class="logo-image" src="http://web.archive.org/web/20190121230204im_/http://josefinasomoza.com/wp-content/uploads/2017/09/js-logo-hr.png" alt="Josefina Somoza" />
            </a>
          
          
        
        <button type="button" class="btn-offcanvas navbar-toggle">
          <i class="icon icon-cross"></i>
        </button>
      </nav>
    </div>
    <div class="offcanvas">
      <aside class="sidebar">
        <div class="widget nav_menu-3 widget_nav_menu">
          <div class="menu-main-container">
            <ul id="menu-main-1" class="menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"><a href="http://josefinasomoza.com/sobre-mi/">Sobre Mi</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a href="http://josefinasomoza.com/projects/">Proyectos</a></li>
              <li class="nav-logo menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-272">
                <a href="http://josefinasomoza.com/">
                  <Image
                    src={HeaderLogo}
                    alt="Josefina Somoza Logo"
                    placeholder="blur" 
                  />
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-637"><a href="http://josefinasomoza.com/press-page/">Prensa</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><a href="http://josefinasomoza.com/contact/">Contacto</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
    </>
  );
}
 
export default Header;
