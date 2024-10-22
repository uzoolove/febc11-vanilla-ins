// 네비게이션 바 컴포넌트
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const menuItems = JSON.parse(this.getAttribute('menu-items') || '[]');
    this.shadowRoot.innerHTML = `
                    <style>                    
                       :host {
	display:block;
}
.top-menu {
	width:100%;
	height:36px;
	background:var(--F5F5F5,#F5F5F5);
	display:flex;
	justify-content:flex-end;
}
.top-menu ul {
	list-style-type:none;
	margin:0;
	padding:0;
	display:flex;
	justify-content:flex-end;
	padding-right:48px;
	display:flex;
	gap:12px;
	align-items:center;
}
.top-menu li {
	display:flex;
	align-items: center;
}
.top-menu a {
	color:var(--111111,#111);
	font-family:"Noto Sans KR";
	font-size:12px;
	font-style:normal;
	font-weight:500;
	line-height:21px;
	/* 175% */
	text-decoration:none;
}
.divider {
	width:1px;
	height:12px;
	background:var(--111111,#111);
}
@media (max-width:768px) {
	:host {
		// display:none;
	}
}
.navbar {
	display:flex;
	justify-content:space-between;
	align-items:center;
	background-color:white;
	padding:0 48px;
	height:60px;
	top:0px;
	left:0;
	right:0;
	transition:top 0.3s;
	z-index:1000;
}
.navbar.fixed {
	position:fixed;
}
.navbar.hidden {
	top:-60px;
}
.logo {
	width:78.48px;
	height:78.47px;
	background-image:url(../../assets/logo.svg);
}
.menu-list {
	display:flex;
	list-style-type:none;
	margin:0;
	padding:0;
}
.menu-list li {
	padding: 15px 12px;
}
.menu-list li a {
	color:var(--111111,#111);
	font-size:16px;
	font-style:normal;
	font-weight:500;
	line-height:28px;
	/* 175% */
	text-decoration:none;
}
.right-section {
	display:flex;
	align-items:center;
}
.right-section .extra-icon:nth-of-type(1),.right-section .extra-icon:nth-of-type(2),.right-section .extra-icon:nth-of-type(3) {
	display:none;
}
.search-box {
	display:flex;
	align-items:center;
	background-color:#f5f5f5;
	border-radius:100px;
	margin-right:16px;
	padding:6px;
}
.search-box input {
	border:none;
	outline:none;
	background:transparent;
	padding:0;
	width:140px;
	font-size:16px;
	color:var(--707072,#707072);
	font-size:16px;
	font-style:normal;
	font-weight:500;
	line-height:normal;
}
.search-icon,.extra-icon {
	color:#111;
	font-size:18px;
	margin:0 4px;
}
.hamburger {
	display:none;
	cursor:pointer;
	font-size:24px;
}
.side-menu {
	position:fixed;
	top:0;
	right:-100%;
	width:310px;
	height:100%;
	background-color:white;
	transition:right 0.3s ease;
	z-index:1002;
	overflow-y:auto;
	padding:18px;
}
.side-menu.open {
	right:0;
}
.close-btn {
	position:rel top:20px;
	right:20px;
	font-size:24px;
	cursor:pointer;
	background:none;
	border:none;
	float:right;
}
.auth-buttons {
	display:flex;
	justify-content:flex-start;
	gap:20px;
	margin-top:84px;
	margin-bottom:40px;
	margin-left: 20px;
}
.auth-button {
	padding:6px 16px;
	border-radius:999px;
	color:var(--FFFFFF,#FFF);
	text-align:center;
	font-family:"Noto Sans KR";
	font-size:16px;
	font-style:normal;
	font-weight:500;
	line-height:28px;
	/* 175% */
	text-decoration:none;
}
.signup {
	background-color:black;
	color:white;
}
.login {
	border:1px solid black;
	color:black;
}
.side-menu-list {
	list-style-type:none;
	padding:0;
	margin:0;
}
.side-menu-item {
	padding:15px 20px;
	display:flex;
	justify-content:space-between;
	align-items:center;
}
.side-menu-item a {
	text-decoration:none;
	color:var(--111111,#111);
	font-size:24px;
	font-style:normal;
	font-weight:500;
	line-height:28px;
	/* 116.667% */
}
.side-menu-item .arrow {
}
.additional-links {
	padding:20px;
}
.additional-link {
	display:flex;
	align-items:center;
	margin-bottom:15px;
	text-decoration:none;
	color:var(--111111,#111);
	font-family:"Noto Sans KR";
	font-size:16px;
	font-style:normal;
	font-weight:500;
	line-height:28px;
	/* 175% */
}
.additional-link img {
	width:20px;
	height:20px;
	margin-right:12px;
}
@media (max-width:768px) {
	.top-menu {
		display:none;
	}
	.navbar {
		top:0px;
		position:fixed;
		padding:0 24px;
	}
	.menu-list,.search-box {
		display:none;
	}
	.hamburger {
		display:block;
	}
	.right-section {
		gap:4px;
	}
	.right-section .extra-icon:nth-of-type(1),.right-section .extra-icon:nth-of-type(2),.right-section .extra-icon:nth-of-type(3) {
		display:block;
	}
	.right-section .extra-icon:nth-of-type(4),.right-section .extra-icon:nth-of-type(5) {
		display:none;
	}
	.logo {
		background-image:url(../../assets/logoMini.svg);
		width:76px;
		height: 60px;
	}
}
                    </style>
                    
                   <nav class="top-menu">
  <ul>
    <li><a href="../findStore/index.html">매장찾기</a></li>
    <li class="divider"></li>
    <li><a href="../customerService/index.html">고객센터</a></li>
    <li class="divider"></li>
    <li><a href="../signUp/index.html">가입하기</a></li>
    <li class="divider"></li>
    <li><a href="../signIn/index.html">로그인</a></li>
  </ul>
</nav>
                    <div id="navPlaceholder"></div>
                    <nav class="navbar" id="navbar">
                        <a href="../main/index.html" class="logo"></a>                      
                        
                        <ul class="menu-list">
                            ${menuItems.map(item => `<li><a href="../itemList/index.html">${item}</a></li>`).join('')}
                        </ul>
                        <div class="right-section">
                            <div class="search-box">
                                <span class="search-icon">
                                    <img src="../../assets/search.svg"/>
                                </span>
                                <input type="text" placeholder="검색">
                            </div>
                            <a class="extra-icon"><img src="../../assets/search.svg"/></a>
                            <a class="extra-icon"><img src="../../assets/user.svg"/></a>
                              <a class="extra-icon"><img src="../../assets/shop.svg"/></a>
                            <a href="../wishList/index.html" class="extra-icon"><img src="../../assets/heart.svg"/></a>
                              <a href="../myCart/index.html" class="extra-icon"><img src="../../assets/shop.svg"/></a>                            
                            <span class="hamburger" id="hamburger">
                                <img src="../../assets/hambuger.svg"/>
                            </span>
                        </div>
                    </nav>
                   <div>
                   <div class="side-menu" id="sideMenu">
                        <button class="close-btn" id="closeBtn">
                            <img src="../../assets/closeButton.svg"/>
                        </button>
                        <div class="auth-buttons">
                            <a href="#" class="auth-button signup">가입하기</a>
                            <a href="#" class="auth-button login">로그인</a>
                        </div>
                        <ul class="side-menu-list">
                            ${menuItems
                              .map(
                                item => `
                                <li class="side-menu-item">
                                    <a href="../itemList/index.html">${item}</a>
                                    <span class="arrow">
                                    <img src ="../../assets/rightButton.svg"/>
                                    </span>
                                </li>
                            `,
                              )
                              .join('')}
                        </ul>
                        <div class="additional-links">
                            <a href="../customerService/index.html" class="additional-link">
                                <img src="../../assets/help.svg" alt="고객센터">
                                고객센터
                            </a>
                            <a href="../myCart/index.html" class="additional-link">
                                <img src="../../assets/shop.svg" alt="장바구니">
                                장바구니
                            </a>
                            <a href="#" class="additional-link">
                                <img src="../../assets/order.svg" alt="주문">
                                주문
                            </a>
                            <a href="../findStore/index.html" class="additional-link">
                                <img src="../../assets/store.svg" alt="매장 찾기">
                                매장 찾기
                            </a>
                        </div>
                    </div>
                   </div>
                `;

    this.setupScrollBehavior();
    this.setupSideMenu();
    this.setupNavBarLayout();
  }

  setupNavBarLayout() {
    const placeholder = this.shadowRoot.getElementById('navPlaceholder');
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        placeholder.style.height = '60px';
      }
    });

    window.addEventListener('load', () => {
      if (window.innerWidth <= 768) {
        placeholder.style.height = '60px';
      }
    });
  }

  setupScrollBehavior() {
    let lastScrollTop = 0;
    const navbar = this.shadowRoot.getElementById('navbar');
    const placeholder = this.shadowRoot.getElementById('navPlaceholder');
    const navbarHeight = navbar.offsetHeight;
    const topBarHeight = 36; // 상단 바의 높이

    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > topBarHeight && window.innerWidth > 768) {
        navbar.classList.add('fixed');
        placeholder.style.height = '60px';
      } else if (window.innerWidth > 768) {
        navbar.classList.remove('fixed');
        placeholder.style.height = '0px';
      }

      if (
        scrollTop > lastScrollTop &&
        scrollTop > navbarHeight + topBarHeight
      ) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    });
  }

  setupSideMenu() {
    const hamburger = this.shadowRoot.getElementById('hamburger');
    const sideMenu = this.shadowRoot.getElementById('sideMenu');
    const closeBtn = this.shadowRoot.getElementById('closeBtn');

    hamburger.addEventListener('click', () => {
      sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      sideMenu.classList.remove('open');
    });
  }
}

customElements.define('nav-bar', NavBar);
