import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="dropdown mega">
          <button className="dropbtn">
            Apartments 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className="dropdown-content mega-content">
            <div className="mega-container">
              <div className="mega-col">
                <h3>Farm Vila</h3>
                <a href="#">Wheelright Cottage House D-55</a>
                <a href="#">Town Place Apartments E-62</a>
                <a href="#">Meadow View D-205</a>
                <a href="#">Luxury Landing E-87</a>
                <a href="#">Heavenly Homes B-64</a>
                <a href="#">Heart and Soul Apartments D-604</a>
                <a href="#">Green Gardens A-72</a>
                <a href="#">Family Villas C-92</a>
              </div>
              <div className="mega-col">
                <h3>Luxury Properties</h3>
                <a href="#">Town Place Walkups A-404</a>
                <a href="#">Town Place Apartments E-62</a>
                <a href="#">The White House J-54</a>
                <a href="#">Tannery Gardens House B-32</a>
                <a href="#">Noble Park B-106</a>
                <a href="#">MiniPalais D-703</a>
                <a href="#">Heart and Soul Apartments D-604</a>
                <a href="#">Family Villas C-92</a>
                <a href="#">East Side Living</a>
              </div>
              <div className="mega-col">
                <h3>Royal House</h3>
                <a href="#">Wheelright Cottage House D-55</a>
                <a href="#">Town Place Walkups A-404</a>
                <a href="#">The White House J-54</a>
                <a href="#">The Never-Ending Story C-52</a>
                <a href="#">Tannery Gardens House B-32</a>
                <a href="#">MiniPalais D-703</a>
                <a href="#">Meadow View D-205</a>
                <a href="#">Heavenly Homes B-64</a>
                <a href="#">Heart and Soul Apartments D-604</a>
              </div>
              <div className="mega-col img-col">
                <img src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/menu-product.png?v=1685339663" alt="Apartment" />
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown mega">
          <button className="dropbtn">
            Collections 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className="dropdown-content mega-content">
            <div className="collection-container">
              <div className="collection-card">
                <img src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/1567937_174_1.jpg?v=1739773149" alt="Bestseller" />
                <h3>Bestseller</h3>
              </div>
              <div className="collection-card">
                <img src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/3d-rendering-house-model.png?v=1739773149" alt="Farm Vila" />
                <h3>Farm Vila</h3>
              </div>
              <div className="collection-card">
                <img src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/3d-rendering-flat-building_1.jpg?v=1739773149" alt="Properties" />
                <h3>Properties</h3>
              </div>
              <div className="collection-card">
                <img src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/3d-rendering-house-model_1.png?v=1739773149" alt="Royal House" />
                <h3>Royal House</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Pages 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className="dropdown-content simple-dropdown">
            <a href="#">About us</a>
            <a href="#">Contact with us</a>
            <a href="#">Faq</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Wishlist</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Blog 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className="dropdown-content simple-dropdown">
            <Link to="/blog">Blog Page</Link>
            <a href="#">Article Page</a>
          </div>
        </div>
      </div>

      <div className="nav-center">
        <div className="logo">
            <img src="https://modernrealestate-workdo.myshopify.com/cdn/shop/files/Logo.png?v=1685077225" alt="Logo" />
        </div>
      </div>

      <div className="nav-right">
        <div className="dropdown">
          <button className="icon-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            English 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className="dropdown-content simple-dropdown right-align">
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="EN" className="flag-icon" /> English
            </a>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" alt="AR" className="flag-icon" /> العربية
            </a>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="DE" className="flag-icon" /> Deutsch
            </a>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="ES" className="flag-icon" /> Español
            </a>
          </div>
        </div>

        <div className="dropdown">
          <button className="icon-btn">
            <span className="flag-circle inr-flag"></span>
            INR 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div className="dropdown-content simple-dropdown right-align">
            <a href="#">AUD $</a>
            <a href="#">CAD $</a>
            <a href="#">INR ₹</a>
            <a href="#">USD $</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="icon-btn round-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <div className="dropdown-content simple-dropdown right-align">
            <a href="#">Log in</a>
            <a href="#">Create Account</a>
            <a href="#">Wishlist (0)</a>
          </div>
        </div>

        <div className="cart-section">
          <span className="cart-text">My Cart: Rs. 0.00</span>
          <div className="cart-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <span className="cart-badge">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;