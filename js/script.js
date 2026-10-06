
// =============== NAVIGATION ===============
document.addEventListener("DOMContentLoaded", function () {
    let nav = document.getElementById("nav");
    if (!nav) return;

    let path = window.location.pathname;
    let inSubfolder = path.includes("/pages/");

    let logoPath, homeLink, menuHTML;

    if (inSubfolder) {
        logoPath = "../img/Logo/RE short LOGO/RE-logo-reline-short-white-transperent-big.png";
        homeLink = "../index.html";
        menuHTML = `
            <a href="../index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="projects.html">Projects</a>
            <a href="gallery.html">Gallery</a>
            <a href="#footer">Contact</a>
        `;
    } else {
        logoPath = "img/Logo/RE short LOGO/RE-logo-reline-short-white-transperent-big.png";
        homeLink = "index.html";
        menuHTML = `
            <a href="index.html">Home</a>
            <a href="pages/about.html">About Us</a>
            <a href="pages/projects.html">Projects</a>
            <a href="pages/gallery.html">Gallery</a>
            <a href="#footer">Contact</a>
        `;
    }

    nav.innerHTML = `
        <div class="nav-logo">
            <a href="${homeLink}">
                <img src="${logoPath}" alt="Reline logo">
            </a>
        </div>

        <div class="nav-menu">
            <button class="burger-btn" onclick="openNav()">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </button>
        </div>

        <div class="nav-menu-text">
            ${menuHTML}
        </div>
    `;
});






// =============== NAVIGATION OVERLAY ===============
function openNav() {
    document.getElementById("overlay").classList.add("open");
}

function closeNav() {
    document.getElementById("overlay").classList.remove("open");
}



// =============== OVERLAY NAVIGATION ===============
document.addEventListener("DOMContentLoaded", function () {
    let overlay = document.getElementById("overlay");
    if (!overlay) return;

    let path = window.location.pathname;
    let inSubfolder = path.includes("/pages/");

    let logoPath, homeLink, aboutLink, projectsLink, galleryLink, contactLink;

    if (inSubfolder) {
        logoPath = "../img/Logo/RE short LOGO/RE-logo-reline-short-white-transperent-big.png";
        homeLink = "../index.html";
        aboutLink = "about.html";
        projectsLink = "projects.html";
        galleryLink = "gallery.html";
        contactLink = "#footer";
    } else {
        logoPath = "img/Logo/RE short LOGO/RE-logo-reline-short-white-transperent-big.png";
        homeLink = "index.html";
        aboutLink = "pages/about.html";
        projectsLink = "pages/projects.html";
        galleryLink = "pages/gallery.html";
        contactLink = "pages/about.html#footer";
    }

    overlay.innerHTML = `
        <div class="overlay-header">
            <img src="${logoPath}" class="overlay-h1" alt="reline logo">
            <button class="close-btn" onclick="closeNav()">
                <div class="close-line"></div>
                <div class="close-line"></div>
            </button>
        </div>

        <div class="overlay-content">
            <a href="${homeLink}" class="nav-link">
                <span class="nav-number">01</span>
                <span class="nav-name">HOME</span>
                <span class="nav-arrow">↗</span>
            </a>

            <a href="${aboutLink}" class="nav-link">
                <span class="nav-number">02</span>
                <span class="nav-name">ABOUT</span>
                <span class="nav-arrow">↗</span>
            </a>

            <a href="${projectsLink}" class="nav-link">
                <span class="nav-number">03</span>
                <span class="nav-name">PROJECTS</span>
                <span class="nav-arrow">↗</span>
            </a>

            <a href="${galleryLink}" class="nav-link">
                <span class="nav-number">04</span>
                <span class="nav-name">GALLERY</span>
                <span class="nav-arrow">↗</span>
            </a>

            <a href="${contactLink}" class="nav-link" onclick="closeNav()">
                <span class="nav-number">05</span>
                <span class="nav-name">CONTACT</span>
                <span class="nav-arrow">↗</span>
            </a>
        </div>

        <div class="overlay-footer">
            <p>cross the line to attach a new page to your story</p>

            <div class="overlay-socials">
                <a href="https://www.youtube.com/@_RELINEcrew" target="_blank" class="side-nav-a">
                    <img src="${inSubfolder ? '../' : ''}img/youtube.png" alt="youtube">
                </a>
                <a href="https://www.instagram.com/relineofficial__" target="_blank" class="side-nav-a">
                    <img src="${inSubfolder ? '../' : ''}img/instagram.png" alt="instagram">
                </a>
                <a href="https://www.tiktok.com/@_relinecrew" target="_blank" class="side-nav-a">
                    <img src="${inSubfolder ? '../' : ''}img/tiktok.png" alt="tiktok">
                </a>
                <a href="https://linktr.ee/relinecrew" target="_blank" class="side-nav-a">
                    <img src="${inSubfolder ? '../' : ''}img/linktree.png" alt="linktree">
                </a>
            </div>
        </div>
    `;
});



// =============== FOOTER ===============
document.addEventListener("DOMContentLoaded", function () {
    let footer = document.getElementById("footer");
    if (!footer) return;

    let path = window.location.pathname;
    let inSubfolder = path.includes("/pages/");

    let logoPath, homeLink, aboutLink, projectsLink, galleryLink, contactLink;

    if (inSubfolder) {
        logoPath = "../img/Logo/FULL NAME LOGO/reline-logo-white-1.png";
        homeLink = "../index.html";
        aboutLink = "about.html";
        projectsLink = "projects.html";
        galleryLink = "gallery.html";
    } else {
        logoPath = "img/Logo/FULL NAME LOGO/reline-logo-white-1.png";
        homeLink = "index.html";
        aboutLink = "pages/about.html";
        projectsLink = "pages/projects.html";
        galleryLink = "pages/gallery.html";
    }

    footer.innerHTML = `

        <!-- Scrolling marquee -->
        <div class="footer-marquee" aria-hidden="true">
            <div class="footer-marquee-track">
                <span>ЯEdefine your path</span>
                <span class="dot">▬</span>
                <span class="filled">ЯEline your story</span>
                <span class="dot">▬</span>

                <span>Where paths RELINE</span>
                <span class="dot">▬</span>
                <span class="filled">Where dancers RELINE</span>
                <span class="dot">▬</span>

                <span>ЯEdefine your path</span>
                <span class="dot">▬</span>
                <span class="filled">ЯEline your story</span>
                <span class="dot">▬</span>

                <span>Where paths RELINE</span>
                <span class="dot">▬</span>
                <span class="filled">Where dancers RELINE</span>
                <span class="dot">▬</span>
            </div>
        </div>

        <div class="footer">

            <div class="footer-logo">
                <img src="${logoPath}" alt="reline logo">
            </div>

            <div class="footer-nav">
                <h4>NAVIGATE</h4>
                <div class="footer-navigation">
                    <a href="${homeLink}" class="footer-nav-link">Home</a>
                    <a href="${aboutLink}" class="footer-nav-link">About</a>
                    <a href="${projectsLink}" class="footer-nav-link">Projects</a>
                    <a href="${galleryLink}" class="footer-nav-link">Gallery</a>
                </div>  
            </div>  

            <div class="footer-contact">
                <h4>Contact us</h4>
                <button onclick="copyText(this)" class="footer-mail" data-mail="relinecrew@gmail.com">relinecrew@gmail.com</button>
            </div>

            <div class="footer-social">
                <h4>Follow us</h4>
                <div class="footer-social-container">
                    <a href="https://www.youtube.com/@_RELINEcrew" target="_blank" class="footer-social-link">
                        <img src="${inSubfolder ? '../' : ''}img/youtube.png" alt="youtube">
                    </a>
                    <a href="https://www.instagram.com/relineofficial__" target="_blank" class="footer-social-link">
                        <img src="${inSubfolder ? '../' : ''}img/instagram.png" alt="instagram">
                    </a>
                    <a href="https://www.tiktok.com/@_relinecrew" target="_blank" class="footer-social-link">
                        <img src="${inSubfolder ? '../' : ''}img/tiktok.png" alt="tiktok">
                    </a>
                    <a href="https://linktr.ee/relinecrew" target="_blank" class="footer-social-link">
                        <img src="${inSubfolder ? '../' : ''}img/linktree.png" alt="linktree">
                    </a>
                </div>
            </div>

        </div>

        <div class="footer-bottom">

            <p>© 2026 ЯEL|NE</p>

            <p>Created with ♥ by <a href="https://linktr.ee/zadravec_larisa" target="_blank">Larisa Zadravec</a></p>

        </div>
    `

})


// =============== COPY MAIL IN FOOTER ===============
function copyText(btn) {
    const mail = btn.getAttribute("data-mail");

    const temp = document.createElement("textarea");
    temp.value = mail;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.focus();
    temp.select();

    try {
        document.execCommand("copy");
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = mail, 1500);
    } catch (e) {
        alert("Copy failed: " + e);
    }

    document.body.removeChild(temp);
}



// =============== FOOTER SCROLLING ANIMATION + NAV DARKENING ===============
const footerSection = document.getElementById('footer');
const navElement = document.getElementById('nav');

if (footerSection && navElement) {
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                navElement.classList.add('nav-dark');
            } else {
                navElement.classList.remove('nav-dark');
            }
        });
    }, { threshold: 0.6 });

    footerObserver.observe(footerSection);
}





// =============== TIMELINE SCROLL REVEAL ===============
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline .timeline-item");
    console.log("[timeline] items found:", items.length);

    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    items.forEach(el => observer.observe(el));
});



