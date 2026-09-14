// =============== NAVIGATION ===============
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const path = window.location.pathname;
    const inSubfolder = path.includes("/pages/");

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
            <a href="pages/about.html#footer">Contact</a>
        `;
    }

    nav.innerHTML = `
        <div class="nav-logo">
            <a href="${homeLink}">
                <img src="${logoPath}" alt="RE logo">
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



// =============== FOOTER ===============
document.getElementById("footer").innerHTML = `

    <!-- Scrolling marquee -->
	<div class="footer-marquee" aria-hidden="true">
		<div class="footer-marquee-track">
			<span>ЯEdefine your path</span>
			<span class="dot">●</span>
			<span class="filled">ЯEline your story</span>
			<span class="dot">●</span>

			<span>ЯEdefine your path</span>
			<span class="dot">●</span>
			<span class="filled">ЯEline your story</span>
			<span class="dot">●</span>

			<span>ЯEdefine your path</span>
			<span class="dot">●</span>
			<span class="filled">ЯEline your story</span>
			<span class="dot">●</span>

			<span>ЯEdefine your path</span>
			<span class="dot">●</span>
			<span class="filled">ЯEline your story</span>
			<span class="dot">●</span>
		</div>
	</div>

	<div class="footer">

		<div class="footer-logo">
			<img src="../img/Logo/FULL NAME LOGO/reline-logo-white.png">
            <button onclick="copyText(this)" class="footer-mail" data-mail="relinecrew@gmail.com">relinecrew@gmail.com</button>
		</div>

		<div class="footer-nav">
			<h4>NAVIGATE</h4>
			<ul>
				<li><a href="../index.html">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="projects.html">Projects</a></li>
				<li><a href="gallery.html">Gallery</a></li>
			</ul>
		</div>

		<div class="footer-social">
			<h4>Socials</h4>
			<ul>
				<li><a href="https://www.youtube.com/@_RELINEcrew" target="_blank">YouTube</a></li>
				<li><a href="https://www.instagram.com/relineofficial__" target="_blank">Instagram</a></li>
				<li><a href="https://www.tiktok.com/@_relinecrew" target="_blank">TikTok</a></li>
				<li><a href="https://linktr.ee/relinecrew" target="_blank">Linktree</a></li>
			</ul>
		</div>

	</div>

	<div class="footer-bottom">

		<p>© 2026 ЯEL|NE</p>

		<p>Made by <a href="https://linktr.ee/zadravec_larisa" target="_blank">Larisa Zadravec</a></p>

	</div>
`;



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




// =============== GALLERY ===============
/* --- 1. LIGHTBOX LOGIC --- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
    // Set the source of the big image to the clicked image's source
    lightboxImg.src = element.src;
    // Add class to show the overlay
    lightbox.classList.add('active');
}

function closeLightbox() {
    // Remove class to hide overlay
    lightbox.classList.remove('active');
    // Clear source to save memory
    lightboxImg.src = "";
}

// Optional: Close lightbox if user clicks the dark background
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});


/* --- 2. PAGINATION LOGIC --- */
let currentPage = 1;
const totalPages = 9;

function changePage(direction) {
    if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else {
        return; // Do nothing if on first or last page
    }

    updateGalleryView();
}

function updateGalleryView() {
    // Update the number text
    document.getElementById('page-number').innerText = currentPage;

    // Hide all pages
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'none';
    document.getElementById('page-4').style.display = 'none';
    document.getElementById('page-5').style.display = 'none';
    document.getElementById('page-6').style.display = 'none';
    document.getElementById('page-7').style.display = 'none';
    document.getElementById('page-8').style.display = 'none';
    document.getElementById('page-9').style.display = 'none';

    // Show current page
    document.getElementById('page-' + currentPage).style.display = 'grid';
}





