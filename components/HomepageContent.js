import Image from 'next/image';
import HomeSlide1 from '../public/Home_3Fotos_Slider_01.jpeg';
import HomeSlide2 from '../public/Home_3Fotos_Slider_02.jpeg';
import HomeGrid1 from '../public/home-grid-1.jpeg';
import HomeGrid2 from '../public/home-grid-2.png';
import HomeGrid4 from '../public/home-grid-4.png';
import HomeGrid5 from '../public/home-grid-5.png';
import HomeGrid6 from '../public/home-grid-6.png';
import HomeGrid7 from '../public/home-grid-7a.png';
import HomeGrid9 from '../public/home-grid-9.jpg';
import HomeGrid10 from '../public/FotoHome10.png';
import HomeGrid11 from '../public/FotoHome11.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './HomepageContent.module.css'



const HomepageContent = () => {
  return ( 
  <>
  <div className="home page-template page-template-js-homepage page-template-js-homepage-php page page-id-239 layout-fullwidth layout-cover-center parallax-enabled sticky-sidebar-enabled navbar-scroll-enabled">
    <div className="site-overlay"></div>
    <div className="site-container">
      <div className="site-content homepage-content">
        <div className="container-wide">
          <div className="content">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Image
                  src={HomeSlide2}
                  alt="Homepage Slider"
                  placeholder="blur"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={HomeSlide1}
                  alt="Homepage Slider"
                  placeholder="blur"
                />
              </SwiperSlide>
            </Swiper>
        </div>
    <div className="flex-row">
      <div className="flex-item flex-item-4 height-2">
        <div className={styles["hp-item-content"]}>
          <div className="shade-overlay"></div>
            <Image
              src={HomeGrid1}
              alt="Picture of the author"
              placeholder="blur" 
            />
          </div>
      </div>
      <div className="flex-item flex-item-4 height-2">
        <div className="hp-item-content">
          <div className="item-copy center bg-grey-2">
            <p> - </p>
            <h2>Armonia. Funcionalidad.<br/> Revaloracion</h2>
          </div>
        </div>
      </div>
      <div className="flex-item flex-item-4 height-2 w-reveal">
        <div className={styles["hp-item-content"]}>
          {/* <img src="https://i.imgur.com/Dhqmrqn.png" alt="" /> */}
          <Image
            src={HomeGrid2}
            alt="Picture of the author"
            placeholder="blur"
          />
          {/* <Image
            src={FotoHome2}
            alt="Picture of the author"
            placeholder="blur" 
          /> */}
          {/* <img src="http://josefinasomoza.com/wp-content/uploads/2017/09/FotoHome1.png" alt="" /> */}
          {/* <img src="http://josefinasomoza.com/wp-content/uploads/2017/09/FotoHome2.png" alt="" /> */}
        </div>
      </div>
    </div>
    <div className="flex-row">
      <div className="flex-item flex-item-4 height-1 mobile-hidden">
        <div className="hp-item-content">
          <div className="box-fill bg-grey-3 "></div>
        </div>
      </div>
      <div className="flex-item flex-item-8 height-1">
        <div className="hp-item-content">
          <div className="shade-overlay"></div>
            <Image
              src={HomeGrid4}
              alt="Josefina Somoza Proyecto 4"
              placeholder="blur" 
            />
          </div>
      </div>
    </div>
    <div className="flex-row">
      <div className="flex-item flex-item-4 height-1">
        <div className="hp-item-content">
          <div className="shade-overlay"></div>
          <Image
            src={HomeGrid5}
            alt="Picture of the author"
            placeholder="blur" 
          />
          </div>
      </div>
      <div className="flex-item flex-item-4 height-1 mobile-hidden">
        <div className="hp-item-content">
          <div className="box-fill bg-grey-4"></div>
        </div>
      </div>

      <div className="flex-item flex-item-4 height-1">
        <div className="hp-item-content">
          <div className="shade-overlay"></div>
                        {/* <img src="http://josefinasomoza.com/wp-content/uploads/2017/09/FotoHome6.jpg" alt="Josefina Somoza Image 08"/> */}
          <Image
            src={HomeGrid6}
            alt="Picture of the author"
            placeholder="blur" 
          />
          </div>
      </div>
    </div>
    <div className="flex-row">
      <div className="flex-item flex-item-4 height-2">
        <div className="hp-item-content">
          <div className="item-copy center bg-grey-1">
            <p> - </p>
            <h2>“Mejorar la calidad de vida, haciendo un mejor uso visual  y físico de un espacio"</h2>
          </div>
        </div>
      </div>
      <div className="flex-item flex-item-8 height-2">
        <div className="hp-item-content">
          <div className="shade-overlay"></div>
            <Image
              src={HomeGrid7}
              alt="Picture of the author"
              placeholder="blur" 
            />
          </div>
      </div>
    </div>
    <div className="flex-row">
      <div className="flex-item flex-item-4 height-2">
        <div className="hp-item-content">
          <div className="shade-overlay"></div>
                        {/* <img src="http://josefinasomoza.com/wp-content/uploads/2017/09/FotoHome8-1.png" alt="Josefina Somoza Image 11" /> */}
            <Image
              src={HomeGrid9}
              alt="Picture of the author"
              placeholder="blur" 
            />
          </div>
      </div>
      <div className="flex-item flex-item-4 height-2 w-reveal">
        <div className="hp-item-content">
            <Image
              src={HomeGrid10}
              alt="Picture of the author"
              placeholder="blur" 
            />
          {/* <img src="http://josefinasomoza.com/wp-content/uploads/2017/09/FotoHome10.png" alt="" /> */}
          {/* <img src="http://josefinasomoza.com/wp-content/uploads/2017/09/FotoHome9.png" alt="" /> */}
        </div>
      </div>
      <div className="flex-item flex-item-4 height-2">
        <div className="hp-item-content">
          <div className="shade-overlay"></div>
            {/* <Image
              src={HomeGrid11}
              alt="Picture of the author"
              placeholder="blur" 
            /> */}
          </div>
      </div>
    </div>
  </div>
</div>

    </div>

    {/* <div className="site-search" id="search">
      <button type="button" className="close"></button>
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form role="search" method="get" className="search-form form" action="http://web.archive.org/web/20190121230204/http://josefinasomoza.com/">
  <label className="sr-only">Search for:</label>
  <div className="input-group">
    <input type="search" value="" name="s" className="search-field form-control" placeholder="Search Josefina Somoza" required />
    <span className="input-group-btn">
      <button type="submit" className="search-submit btn btn-primary">Search</button>
    </span>
  </div>
</form>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <a href="#top" className="scroll-to-top hidden-sm-down"></a>
    </div>
  </>
  );
}
 
export default HomepageContent;