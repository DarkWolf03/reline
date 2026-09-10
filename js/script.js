// NAVIGATION
document.getElementById("nav").innerHTML = `
    <div class="nav-logo">
        <a href="../index.html">
            <img src="../img/Logo/FULL NAME LOGO/reline-logo-white.png">
        </a>
    </div>
    <div class="nav-menu">
        <button class="burger-btn" onclick="openNav()">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </button>
    </div>
`;

// SOCIALS ON THE RIGHT
document.getElementById("side-nav").innerHTML = `
    <a href="https://www.youtube.com/@_RELINEcrew" target="_blank" class="side-nav-a">
        <img src="../img/youtube.png" alt="YouTube">
    </a>

    <a href="https://www.instagram.com/relineofficial__" target="_blank" class="side-nav-a">
        <img src="../img/instagram.png" alt="Instagram">
    </a>

    <a href="https://www.tiktok.com/@_relinecrew" target="_blank" class="side-nav-a">
        <img src="../img/tiktok.png" alt="TikTok">
    </a>

    <a href="https://linktr.ee/relinecrew" target="_blank" class="side-nav-a">
        <img src="../img/linktree.png" alt="Linktree">
    </a>
`;


// SOCIALS ON THE RIGHT
document.getElementById("overlay").innerHTML = `

    <div class="overlay-header">
        <img src="../img/Logo/FULL NAME LOGO/reline-logo-white.png" class="overlay-h1">
        <button class="close-btn" onclick="closeNav()">
            <div class="close-line"></div>
            <div class="close-line"></div>
        </button>
    </div>

    <div class="overlay-content">

        <a href="../index.html" class="nav-link">
            <span class="nav-number">01</span>
            <span class="nav-name">HOME</span>
            <span class="nav-arrow">↗</span>
        </a>

        <a href="about.html" class="nav-link">
            <span class="nav-number">02</span>
            <span class="nav-name">ABOUT</span>
            <span class="nav-arrow">↗</span>
        </a>

        <a href="projects.html" class="nav-link">
            <span class="nav-number">03</span>
            <span class="nav-name">PROJECTS</span>
            <span class="nav-arrow">↗</span>
        </a>

        <a href="gallery.html" class="nav-link">
            <span class="nav-number">04</span>
            <span class="nav-name">GALLERY</span>
            <span class="nav-arrow">↗</span>
        </a>

        <a href="#footer" class="nav-link">
            <span class="nav-number">05</span>
            <span class="nav-name">CONTACT</span>
            <span class="nav-arrow">↗</span>
        </a>

    </div>

    <div class="overlay-footer">
        <p>cross the line to attach a new page to your story</p>

        <div class="overlay-socials">
            <a href="https://www.youtube.com/@_RELINEcrew" target="_blank"  class="side-nav-a">
                <img src="../img/youtube.png">
            </a>
            <a href="https://www.instagram.com/relineofficial__" target="_blank"  class="side-nav-a">
                <img src="../img/instagram.png">
            </a>
            <a href="https://www.tiktok.com/@_relinecrew" target="_blank"  class="side-nav-a">
                <img src="../img/tiktok.png">
            </a>
            <a href="https://linktr.ee/relinecrew" target="_blank"  class="side-nav-a">
                <img src="../img/linktree.png">
            </a>
        </div>
    </div>

`;



// NAVIGATION OVERLAY
function openNav() {
    document.getElementById("overlay").classList.add("open");
}

function closeNav() {
    document.getElementById("overlay").classList.remove("open");
}



// FOOTER
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
			<a href="" class="footer-mail">relinecrew@gmail.com</a>
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

		<p>Made by <a href="">Larisa Zadravec</a></p>

	</div>
`;

