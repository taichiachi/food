class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #111827;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }
        .footer-logo-icon {
          color: #ef4444;
        }
        .footer-description {
          color: #9ca3af;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: #9ca3af;
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: #ef4444;
        }
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #ef4444;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #374151;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
          color: #9ca3af;
        }
        .payment-methods {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .payment-icon {
          width: 40px;
          height: 25px;
          background: #374151;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <a href="index.html" class="footer-logo">
              <i data-feather="coffee" class="footer-logo-icon"></i>
              FoodieFiesta
            </a>
            <p class="footer-description">
              Delivering delicious food to your doorstep since 2015. 
              Our mission is to provide quality meals with fast service.
            </p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          
          <div class="footer-links-section">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </ul>
          </div>
          
          <div class="footer-links-section">
            <h3 class="footer-heading">Categories</h3>
            <ul class="footer-links">
              <li><a href="menu.html?category=pizza">Pizza</a></li>
              <li><a href="menu.html?category=burgers">Burgers</a></li>
              <li><a href="menu.html?category=pasta">Pasta</a></li>
              <li><a href="menu.html?category=salads">Salads</a></li>
              <li><a href="menu.html?category=desserts">Desserts</a></li>
              <li><a href="menu.html?category=drinks">Drinks</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h3 class="footer-heading">Contact Us</h3>
            <ul class="footer-links">
              <li><i data-feather="map-pin" style="margin-right: 0.5rem;"></i>123 Food St, City</li>
              <li><i data-feather="phone" style="margin-right: 0.5rem;"></i>(123) 456-7890</li>
              <li><i data-feather="mail" style="margin-right: 0.5rem;"></i>contact@foodiefiesta.com</li>
              <li><i data-feather="clock" style="margin-right: 0.5rem;"></i>Mon-Sun: 10AM - 10PM</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="payment-methods">
            <div class="payment-icon"><i data-feather="credit-card"></i></div>
            <div class="payment-icon"><i data-feather="dollar-sign"></i></div>
            <div class="payment-icon"><i data-feather="paypal"></i></div>
            <div class="payment-icon"><i data-feather="bitcoin"></i></div>
          </div>
          <p>&copy; ${new Date().getFullYear()} FoodieFiesta. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);