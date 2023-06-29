document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
  
    const pages = [
      { name: "Home", url: "index.html" },
      { name: "Login", url: "login.html" },
      { name: "Profile", url: "profile.html" },
      { name: "Registration", url: "registration.html" }
    ];
  
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const link = document.createElement("a");
      link.href = page.url;
      link.textContent = page.name;
      if (window.location.pathname.endsWith(page.url)) {
        link.classList.add("active");
      }
      navbar.appendChild(link);
    }
  
    const style = document.createElement("style");
    style.textContent = `
      .navbar {
        background-color: #f9f9f9;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      .navbar a {
        margin: 0 10px;
        padding: 5px 10px;
        color: #333;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }
    
      .navbar a:hover {
        background-color: #e3e3e3;
      }
    
      .navbar a.active {
        font-weight: bold;
        background-color: #ddd;
      }
    `;
    document.head.appendChild(style);
    document.body.insertBefore(navbar, document.body.firstChild);
  });
  