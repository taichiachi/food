class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .logo {
          color: #ef4444;
          font-weight: 800;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          color: #ef4444;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }
        .nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-links a:hover {
          color: #ef4444;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #ef4444;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-links a:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .nav-buttons {
          display: flex;
          gap: 1rem;
        }
        .btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .btn-login {
          color: #333;
          border: 1px solid #ddd;
        }
        .btn-login:hover {
          background: #f5f5f5;
        }
        .btn-signup {
          background: #ef4444;
          color: white;
        }
        .btn-signup:hover {
          background: #dc2626;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 5rem;
          left: 0;
          right: 0;
          background: white;
          padding: 1rem;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          z-index: 999;
        }
        .mobile-menu.active {
          display: block;
        }
        .mobile-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem;
          display: block;
          border-radius: 0.5rem;
        }
        .mobile-links a:hover {
          background: #f5f5f5;
          color: #ef4444;
        }
        .mobile-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        @media (max-width: 768px) {
          .nav-links, .nav-buttons {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="coffee" class="logo-icon"></i>
          FoodieFiesta
        </a>
        
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        
        <div class="nav-buttons">
          <a href="login.html" class="btn btn-login">Log In</a>
          <a href="signup.html" class="btn btn-signup">Sign Up</a>
        </div>
        
        <button class="mobile-menu-btn" id="mobile-menu-toggle">
          <i data-feather="menu"></i>
        </button>
      </nav>
      
      <div class="mobile-menu hidden" id="mobile-menu">
        <ul class="mobile-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="mobile-buttons">
          <a href="login.html" class="btn btn-login">Log In</a>
          <a href="signup.html" class="btn btn-signup">Sign Up</a>
        </div>
      </div>
    `;
    
    // Add mobile menu toggle functionality
    const mobileMenuToggle = this.shadowRoot.getElementById('mobile-menu-toggle');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // Change icon based on menu state
      const icon = mobileMenuToggle.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-feather', 'menu');
      } else {
        icon.setAttribute('data-feather', 'x');
      }
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);