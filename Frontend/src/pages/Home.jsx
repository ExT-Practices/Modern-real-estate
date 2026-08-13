import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const Home = () => {
  const [backendProperties, setBackendProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTabId, setActiveTabId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propResponse = await axios.get('http://localhost:5000/api/public/properties');
        setBackendProperties(propResponse.data);

        const catResponse = await axios.get('http://localhost:5000/api/admin/categories');
        setCategories(catResponse.data);

        if (catResponse.data.length > 0) {
          setActiveTabId(catResponse.data[0].category_id);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filteredLuxProperties = backendProperties.filter(
    (property) => property.category_id === activeTabId
  );
  const slidesData = [
    {
      id: 1,
      image: "https://modernrealestate-workdo.myshopify.com/cdn/shop/files/slider.png?v=1685338078",
      leftTitle: "Modern houses for the few",
      leftDesc: "Discover a haven of refined urban living in our luxurious loft residences. Nestled in the vibrant heart of the city, these contemporary homes offer a seamless blend of modern design an...",
      location: "Utica, Pennsylvania 57867",
      rightTitle: "A modern home in the comfort of San Francisco",
      rightDesc: "Enjoy the breathtaking views of the city skyline, indulge in the finest amenities, and experience the unparalleled convenience of living within walking distance of trendy boutiques, gourmet dining, and cultural attractions."
    },
    {
      id: 2,
      image: "https://modernrealestate-workdo.myshopify.com/cdn/shop/files/slider.png?v=1685338078",
      leftTitle: "Luxurious Loft Living in the Heart of the City",
      leftDesc: "Embrace a serene lifestyle surrounded by lush green spaces, community gardens, and tranquil water features. From the organic architecture to the use of eco-friendly materials.",
      location: "Utica, Pennsylvania 57867",
      rightTitle: "Eco-Friendly Homes for Modern Living",
      rightDesc: "Experience a harmonious balance between sustainable living and modern comfort in our eco-friendly homes. Designed with a commitment to environmental consciousness, these residences seamlessly integrate energy-efficient features."
    }
  ];

  const propertySlides = [
    {
      id: 1,
      title: 'Bestseller',
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/files/cat-1.png?v=1685083232'
    },
    {
      id: 2,
      title: 'Royal House',
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/files/cat-2.png?v=1685083232'
    },
    {
      id: 3,
      title: 'Properties',
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/files/cat-1.png?v=1685083232'
    },
    {
      id: 4,
      title: 'Farm Villa',
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/files/cat-2.png?v=1685083232'
    }
  ];
  const findHomeSlides = [
    {
      id: 1,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_b5a8378b-d4cc-4d9e-9216-3de865d62827_337x219.png?v=1685009031',
      title: 'Noble Park B-106',
      size: '1400 sq ft',
      price: 'Rs. 680,800.00 INR',
      isActive: false
    },
    {
      id: 2,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_9f0b2eb5-ea31-44b5-8a57-c6d8339ee0ab_337x219.png?v=1685009038',
      title: 'Tannery Gardens House B-32',
      size: '1200 sq ft',
      price: 'Rs. 1,945,100.00 INR',
      isActive: true
    },
    {
      id: 3,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_37a9cf7c-0609-4e7a-9358-c00ba0bb57e7_337x219.png?v=1685009051',
      title: 'The White House J-54',
      size: '1800 sq ft',
      price: 'Rs. 291,800.00 INR',
      isActive: false
    },
    {
      id: 4,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_e02eada1-a7e9-4b6a-85a4-df6e4f913d79_337x219.png?v=1685009064',
      title: 'Town Place Walkups A-404',
      size: '1600 sq ft',
      price: 'Rs. 583,600.00 INR',
      originalPrice: 'Rs. 584,500.00 INR',
      isActive: false
    },
    {
      id: 5,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_12cea679-aec3-430e-95c1-55cb596b250a_337x219.png?v=1685009058',
      title: 'Town Place Apartments E-62',
      size: '1200 sq ft',
      price: 'Rs. 486,300.00 INR',
      isActive: false
    },
    {
      id: 6,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_f26220d0-23df-49cc-8ab9-2ef5f66b891a_337x219.png?v=1685009024',
      title: 'MiniPalais D-703',
      size: '1300 sq ft',
      price: 'Rs. 972,600.00 INR',
      originalPrice: 'Rs. 1,069,800.00 INR',
      isActive: false,
      tag: 'New'
    },
    {
      id: 7,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_337x219.png?v=1685008975',
      title: 'East Side Living',
      size: '1200 sq ft',
      price: 'Rs. 99,200.00 INR',
      isActive: false,
      tag: 'New'
    },
    {
      id: 8,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_129ecf94-3368-40aa-9076-eed03e4796d4_337x219.png?v=1685008982',
      title: 'Family Villas C-92',
      size: '1700 sq ft',
      price: 'Rs. 632,200.00 INR',
      originalPrice: 'Rs. 680,800.00 INR',
      isActive: false,
      tag: 'New',
      timer: '134 : 05 : 19 : 39'
    },
    {
      id: 9,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_f4b79814-9043-4021-bae2-9fdb152c6064_337x219.png?v=1685008989',
      title: 'Green Gardens A-72',
      size: '1200 sq ft',
      price: 'Rs. 1,069,800.00 INR',
      originalPrice: 'Rs. 1,167,300.00 INR',
      isActive: false,
      tag: 'New',
      timer: '134 : 05 : 17 : 56'
    }
  ];
  const resortSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      title: 'Family Villas C-92',
      tag: 'New',
      timer: '133 : 07 : 43 : 09',
      size: '1700 sq ft',
      price: 'Rs. 632,800.00 INR',
      oldPrice: 'Rs. 681,500.00 INR'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      title: 'Oceanview Retreat A-12',
      tag: 'Hot',
      size: '2000 sq ft',
      price: 'Rs. 850,000.00 INR',
      oldPrice: 'Rs. 900,000.00 INR'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
      title: 'Town Place Apartments E-62',
      tag: 'New',
      size: '1200 sq ft',
      price: 'Rs. 486,300.00 INR'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
      title: 'MiniPalais D-703',
      tag: 'New',
      size: '1300 sq ft',
      price: 'Rs. 972,600.00 INR',
    },
    {
      id: 5,
      image: 'https://modernrealestate-workdo.myshopify.com/cdn/shop/products/1_a0d187f1-b718-41be-9e2a-33fe676569fe_600x600.png?v=1685009017',
      title: 'Meadow View D -205',
      tag: 'Hot',
      size: '1500 sq ft',
      price: 'Rs. 1,200,000.00 INR'
    }
  ];

  const [bpPrevEl, setBpPrevEl] = React.useState(null);
  const [bpNextEl, setBpNextEl] = React.useState(null);
  const [fhPrevEl, setFhPrevEl] = React.useState(null);
  const [fhNextEl, setFhNextEl] = React.useState(null);




  return (
    <>
      <div className="hero-main-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.nav-btn-prev',
            nextEl: '.nav-btn-next'
          }}
          speed={800}
          loop={true}
          className="hero-swiper"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-slide-layout">
                <div className="hero-left-col" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="hotspot hotspot-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                  <div className="hotspot hotspot-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </div>

                  <div className="floating-info-card">
                    <div className="card-top-row">
                      <div className="card-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                      </div>
                      <h3>{slide.leftTitle}</h3>
                    </div>
                    <p>{slide.leftDesc}</p>
                  </div>
                </div>

                <div className="hero-right-col">
                  <div className="right-content-inner">
                    <p className="location-text">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {slide.location}
                    </p>

                    <h2 className="main-title">{slide.rightTitle}</h2>
                    <p className="main-desc">{slide.rightDesc}</p>

                    <button className="details-btn">
                      Show full details
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}


          <div className="hero-navigation-wrapper">
            <button className="nav-btn-prev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <div className="nav-line-separator"></div>
            <button className="nav-btn-next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </Swiper>
      </div>

      <section className="beachfront-section">
        <div className="beachfront-top-accent"></div>

        <div className="beachfront-container">
          <div className="beachfront-left">
            <h1 className="beachfront-title">
              <span className="title-line">Contemporary</span>
              <br />
              <span className="title-line">Beachfront Properties</span>
            </h1>

            <p className="beachfront-desc-top">
              From the organic architecture to the use of eco-friendly materials, these homes provide a
              sanctuary where you can live in harmony with nature without compromising on luxury or style.
            </p>

            <div className="beachfront-slider-wrapper">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: bpPrevEl,
                  nextEl: bpNextEl,
                }}
                slidesPerView={3}
                spaceBetween={18}
                speed={700}
                className="bp-swiper"
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 12 },
                  640: { slidesPerView: 2.2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 18 }
                }}
              >
                {propertySlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="bp-slide-card">
                      <div className="bp-img-card-border">
                        <div className="bp-img-wrapper">
                          <img src={slide.image} alt={slide.title} />
                        </div>
                      </div>
                      <div className="bp-card-info">
                        <h4>{slide.title}</h4>
                        <svg className="bp-card-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="bp-custom-nav">
                <button ref={(node) => setBpPrevEl(node)} className="bp-nav-prev" aria-label="Previous slide">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <div className="bp-nav-line"></div>
                <button ref={(node) => setBpNextEl(node)} className="bp-nav-next" aria-label="Next slide">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="beachfront-right">
            <div className="bp-large-image-wrapper">
              <img
                src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/cat-img.png?v=1685335604"
                alt="Contemporary Beachfront Property"
                className="bp-large-image"
              />
            </div>
            <p className="beachfront-desc-bottom">
              Immerse yourself in a welcoming community with top-rated schools, parks, and
              recreational facilities just moments away. Create lasting memories as you enjoy the
              comfort, convenience, and tranquility that these modern family homes offer.
            </p>
          </div>
        </div>
      </section>

      <section className="find-home-section">
        <div className="find-home-container">

          <div className="fh-header">
            <h2>Find your home place</h2>
            <div className="fh-header-line"></div>
          </div>

          <div className="fh-content-grid">
            <div className="fh-left-slider">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: fhPrevEl,
                  nextEl: fhNextEl,
                }}
                slidesPerView={2}
                spaceBetween={22}
                speed={700}
                className="fh-swiper"
                breakpoints={{
                  320: { slidesPerView: 1.1, spaceBetween: 14 },
                  768: { slidesPerView: 2, spaceBetween: 22 }
                }}
              >
                {findHomeSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className={`fh-card ${slide.isActive ? 'active-card' : ''}`}>
                      <div className="fh-card-img-wrapper">
                        {slide.tag && <div className="card-badge">{slide.tag}</div>}
                        {slide.timer && (
                          <div className="card-timer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            {slide.timer}
                          </div>
                        )}
                        {slide.isActive && (
                          <div className="fh-card-actions">
                            <button className="fh-action-btn" title="Wishlist">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </button>
                            <button className="fh-action-btn" title="Compare">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="8 21 3 21 3 16"></polyline><line x1="20" y1="4" x2="3" y2="21"></line></svg>
                            </button>
                            <button className="fh-action-btn" title="Quick View">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </button>
                          </div>
                        )}

                        <div className="fh-card-img">
                          <img src={slide.image} alt={slide.title} />
                        </div>
                      </div>

                      <div className="fh-card-body">
                        <div className="fh-card-tag">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
                          Home
                        </div>
                        <h3>{slide.title}</h3>
                        <div className="fh-select-wrapper">
                          <select defaultValue={slide.size}>
                            <option value="1200 sq ft">1200 sq ft</option>
                            <option value="1300 sq ft">1300 sq ft</option>
                            <option value="1400 sq ft">1400 sq ft</option>
                            <option value="1600 sq ft">1600 sq ft</option>
                            <option value="1700 sq ft">1700 sq ft</option>
                            <option value="1800 sq ft">1800 sq ft</option>
                          </select>
                        </div>
                        <div className="fh-price-container">
                          <div className="fh-price">{slide.price}</div>
                          {slide.originalPrice && <div className="fh-old-price">{slide.originalPrice}</div>}
                        </div>
                        <button className="fh-add-btn">
                          Add to Cart
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="fh-custom-nav">
                <button ref={(node) => setFhPrevEl(node)} className="fh-nav-prev" aria-label="Previous slide">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <div className="fh-nav-line"></div>
                <button ref={(node) => setFhNextEl(node)} className="fh-nav-next" aria-label="Next slide">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>

            <div className="fh-right-map">
              <img
                src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/best-pro.png?v=1685334569"
                alt="Map View"
                className="map-image-full"
              />
            </div>
          </div>

          <div className="fh-footer">
            <h3>Open the door for a spacious living</h3>
            <p>Indulge in the ultimate coastal lifestyle with our contemporary beachfront properties. Immerse yourself in the soothing sounds of the ocean and bask in the warm embrace of the sun, just steps.</p>
          </div>

        </div>
      </section>
      <section className="resort-section">
        <div className="resort-bg-large"></div>
        <div className="resort-bottom-bar">
          <div className="resort-container">

            <div className="resort-left-slider">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.resort-nav-prev',
                  nextEl: '.resort-nav-next'
                }}
                slidesPerView={1}
                speed={800}
                className="resort-swiper"
              >
                {resortSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="resort-card">
                      <div className="resort-card-img-wrapper">
                        {slide.tag && <div className="resort-card-badge">{slide.tag}</div>}
                        <img src={slide.image} alt={slide.title} />
                        {slide.timer && (
                          <div className="resort-card-timer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            {slide.timer}
                          </div>
                        )}
                      </div>

                      <div className="resort-card-content">
                        <div className="fh-card-tag">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
                          Home
                        </div>
                        <h3>{slide.title}</h3>

                        <div className="resort-select-wrapper">
                          <select defaultValue={slide.size}>
                            <option value={slide.size}>{slide.size}</option>
                            <option value="2000 sq ft">2000 sq ft</option>
                          </select>
                        </div>

                        <div className="resort-price-wrapper">
                          <span className="resort-current-price">{slide.price}</span>
                          {slide.oldPrice && <span className="resort-old-price">{slide.oldPrice}</span>}
                        </div>

                        <button className="resort-add-btn">
                          Add to Cart
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="resort-custom-nav">
                <button className="resort-nav-prev">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <div className="resort-nav-line"></div>
                <button className="resort-nav-next">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
            <div className="resort-right-text">
              <p>Experience the epitome of luxury and leisure in our resort-style private estates. Set within lush landscaped grounds, these exclusive properties offer a wealth of amenities to indulge your every desire.</p>
            </div>
          </div>
        </div>
      </section>
     <section className="lux-section">
        <div className="lux-container">
          
          <h2 className="lux-main-title">Luxurious properties</h2>
          
          <div className="lux-tabs-wrapper">
            {categories.map(cat => (
              <button 
                key={cat.category_id} 
                className={`lux-tab-btn ${activeTabId === cat.category_id ? 'active-tab' : ''}`}
                onClick={() => setActiveTabId(cat.category_id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          <div className="lux-slider-container">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.lux-nav-prev',
                nextEl: '.lux-nav-next'
              }}
              slidesPerView={4}
              spaceBetween={20}
              speed={800}
              className="lux-swiper"
            >
              {filteredLuxProperties.map((property, index) => {
                let imgUrl = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80';
                if (property.images_json && Array.isArray(property.images_json) && property.images_json.length > 0) {
                  imgUrl = property.images_json[0];
                }
                
                const sqftString = (property.description && property.description !== 'N/A') ? property.description : '1200';
                const sqftOptions = sqftString.split(',').map(item => item.trim());
                const isCardActive = index === 0; 

                return (
                  <SwiperSlide key={property.property_id}>
                    <div className={`lux-card ${isCardActive ? 'lux-card-light' : 'lux-card-dark'}`}>
                      <div className="lux-card-img-wrap">
                        <img src={imgUrl} alt={property.title} />
                      </div>
                      
                      <div className="lux-card-content">
                        <div className="lux-tag">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                          Home
                        </div>
                        
                        <h3 className="lux-title">{property.title}</h3>
                        
                        <div className="lux-select-box">
                          <select defaultValue={`${sqftOptions[0]} sq ft`}>
                            {sqftOptions.map((sq, i) => (
                              <option key={i} value={`${sq} sq ft`}>{sq} sq ft</option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="lux-price-box">
                          <div className="lux-current-price">Rs. {property.price} INR</div>
                        </div>
                        
                        <button className="lux-add-btn">
                          Add to Cart
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="lux-custom-nav">
            <button className="lux-nav-prev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <div className="lux-nav-line"></div>
            <button className="lux-nav-next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;