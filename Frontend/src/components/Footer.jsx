import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-col footer-newsletter">
                        <h3>Subscribe newsletter and get -20% off</h3>
                        <p>
                            Discover the perfect family haven in our spacious suburban residences.
                            These thoughtfully designed homes provide ample room for your growing family to thrive.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h3>Shop:</h3>
                        <ul>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">All collections</a></li>
                            <li><a href="#">All products</a></li>
                            <li><a href="#">My Cart</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Account:</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact with us</a></li>
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Share:</h3>
                        <ul>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © 2026, Modernrealestate WorkDo, Powered by WorkDo.io
                    </div>
                    <div className="footer-payments">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ed5ckmfIHsX792HZnJ4VAi4Dt_WvGZvdtTp4eK4yhQ&s=10" alt="Visa" />
                        <img src="https://cdn.shopify.com/s/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="Mastercard" />
                        <img src="https://cdn.shopify.com/s/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="Amex" />
                        <img src="https://cdn.shopify.com/s/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="PayPal" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh6Ya4NtWUgyS-hv-32F7MLNREQ3-kzyXarrMAfjBe6EtWPkd-sgKRFY&s=10" alt="Diners Club" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSweeRUqMFtxBXnsR8Lp0W4XiL2ADJADCU75sPDB2qRug&s=10" alt="Discover" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;