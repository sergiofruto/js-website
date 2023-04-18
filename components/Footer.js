// import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-info">
            <a href="http://josefinasomoza.com/" className="footer-logo">
                <img src="http://web.archive.org/web/20190121230204im_/http://josefinasomoza.com/wp-content/uploads/2017/09/footer-logo.png" alt="Josefina Somoza" />
            </a>
            <div className="footer-submenu">
              <h3>Contactanos</h3>
              <ul>
                <li>-</li>
                <li>
                  <span className="footer-icon">
                    <svg viewBox="0 0 24 24">
                      <path fill="#a5a5a5" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
                    </svg>
                  </span>
                  <a className="footer-inner-item" href="">www.josefinasomoza.com</a>
                </li>
                <li>
                  <span className="footer-icon">
                    <svg viewBox="0 0 24 24">
                        <path fill="#a5a5a5" d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"/>
                    </svg>
                  </span>
                  <a className="footer-inner-item" href="mailto:js@josefinasomoza.com">js@josefinasomoza.com</a>
                </li>
                <li>
                  <span className="footer-icon">
                    <svg viewBox="0 0 24 24">
                        <path fill="#a5a5a5" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                    </svg>
                  </span>
                  <span className="footer-inner-item">+54 9 11 44255043</span>
                </li>
              </ul>
            </div>
            <div className="footer-submenu">
              <h3>Seguinos</h3>
              <ul>
                <li>-</li>
                <li>
                  <span className="footer-icon">
                    <svg viewBox="0 0 24 24">
                      <path fill="#a5a5a5" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                    </svg>
                  </span>
                  <a className="footer-inner-item" target="_blank" href="https://www.instagram.com/josefinasomozainteriorismo/">/josefinasomozainteriorismo</a>
                </li>
                </ul>
            </div>
            <div className="footer-submenu">
              <h3>Codigo QR</h3>
              <ul>
                <li>-</li>
                <li>
                  <a className="footer-inner-item qr-code" href="">
                    <img src="http://web.archive.org/web/20190121230204im_/https://http2.mlstatic.com/resources/frontend/web-homes/ui-dist/images/data-fiscal-6dc7613071.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
