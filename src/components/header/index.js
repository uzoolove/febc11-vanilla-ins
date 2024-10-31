const styles = `
<style>
  :host {
    display: block;
  }
  .top-menu {
    width: 100%;
    height: 36px;
    background: var(--F5F5F5, #f5f5f5);
    display: flex;
    justify-content: flex-end;
  }
  .top-menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    padding-right: 48px;
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .top-menu li {
    display: flex;
    align-items: center;
  }
  .top-menu a {
    color: var(--111111, #111);
    font-family: 'Noto Sans KR';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    /* 175% */
    text-decoration: none;
  }
  .divider {
    width: 1px;
    height: 12px;
    background: var(--111111, #111);
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 48px;
    height: 60px;
    top: 0px;
    left: 0;
    right: 0;
    transition: top 0.3s;
    z-index: 1000;
  }
  .navbar.fixed {
    position: fixed;
  }
  .navbar.hidden {
    top: -60px;
  }
  .logo {
    width: 78.48px;
    height: 78.47px;
    background-image: url(/icons/logo.svg);
  }
  .menu-list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .menu-list li {
    padding: 15px 12px;
  }
  .menu-list li a {
    color: var(--111111, #111);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 175% */
    text-decoration: none;
  }
  .right-section {
    display: flex;
    align-items: center;
  }
  .right-section .extra-icon:nth-of-type(1),
  .right-section .extra-icon:nth-of-type(2),
  .right-section .extra-icon:nth-of-type(3) {
    display: none;
  }
  .search-box {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 100px;
    margin-right: 16px;
    padding: 6px;
  }
  .search-box input {
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
    width: 140px;
    font-size: 16px;
    color: var(--707072, #707072);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .search-icon,
  .extra-icon {
    color: #111;
    font-size: 18px;
    margin: 0 4px;
  }
  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 24px;
  }
  .side-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 310px;
    height: 100%;
    background-color: white;
    transition: right 0.3s ease;
    z-index: 1002;
    overflow-y: auto;
    padding: 18px;
  }
  .side-menu.open {
    right: 0;
  }
  .close-btn {
    position: rel;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    float: right;
  }
  .auth-buttons {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 84px;
    margin-bottom: 40px;
    margin-left: 20px;
  }
  .auth-button {
    padding: 6px 16px;
    border-radius: 999px;
    color: var(--FFFFFF, #fff);
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 175% */
    text-decoration: none;
  }
  .signup {
    background-color: black;
    color: white;
  }
  .login {
    border: 1px solid black;
    color: black;
  }
  .side-menu-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .side-menu-item {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .side-menu-item a {
    text-decoration: none;
    color: var(--111111, #111);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 116.667% */
  }

  .additional-links {
    padding: 20px;
  }
  .additional-link {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    text-decoration: none;
    color: var(--111111, #111);
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 175% */
  }
  .additional-link img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  @media (max-width: 768px) {
    .top-menu {
      display: none;
    }
    .navbar {
      top: 0px;
      position: fixed;
      padding: 0 24px;
    }
    .menu-list,
    .search-box {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .right-section {
      gap: 4px;
    }
    .right-section .extra-icon:nth-of-type(1),
    .right-section .extra-icon:nth-of-type(2),
    .right-section .extra-icon:nth-of-type(3) {
      display: block;
    }
    .right-section .extra-icon:nth-of-type(4),
    .right-section .extra-icon:nth-of-type(5) {
      display: none;
    }
    .logo {
      background-image: url(/icons/logoMini.svg);
      width: 76px;
      height: 60px;
    }
  }

</style>`;

// 네비게이션 바 컴포넌트
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const menuItems = JSON.parse(this.getAttribute('menu-items'));
    let menu = [
      { title: 'New & Featured', url: '/src/pages/itemList/index.html?category=PC01' },
      { title: 'Men', url: '/src/pages/itemList/index.html?category=PC01' },
      { title: 'Women', url: '/src/pages/itemList/index.html?category=PC02' },
      { title: 'Kids', url: '/src/pages/itemList/index.html?category=PC03' },
      { title: 'Sale', url: '/src/pages/itemList/index.html?category=PC01' },
    ];

    // menuItems 순서대로 필터링
    if (menuItems) {
      menu = menuItems
        .map(itemTitle => menu.find(item => item.title === itemTitle)) // title이 일치하는 항목값 반환
        .filter(Boolean); // 일치하지 않는 항목(null)을 제거 
    }

    this.mainMenu = menu.map(item => `<li><a href="${item.url}">${item.title}</a></li>`).join('');
    this.sideMenu = menu.map(item => `
      <li class="side-menu-item">
        <a href="${item.url}">${item.title}</a>
        <span class="arrow">
        <img src ="/icons/rightButton.svg"/>
        </span>
      </li>
    `).join('');

    this.render();
  }

  // 화면에 네비게이션 바 렌더링
  render(){
    const templateHtml = `
<div id="nav-bar">
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
      ${ this.mainMenu }
    </ul>
    <div class="right-section">
      <div class="search-box">
        <span class="search-icon">
          <img src="/icons/search.svg" />
        </span>
        <input type="text" placeholder="검색">
      </div>
      <a class="extra-icon"><img src="/icons/search.svg" /></a>
      <a class="extra-icon"><img src="/icons/user.svg" /></a>
      <a class="extra-icon"><img src="/icons/shop.svg" /></a>
      <a href="../wishList/index.html" class="extra-icon"><img src="/icons/heart.svg" /></a>
      <a href="../myCart/index.html" class="extra-icon"><img src="/icons/shop.svg" /></a>
      <span class="hamburger" id="hamburger">
        <img src="/icons/hambuger.svg" />
      </span>
    </div>
  </nav>
  <div>
    <div class="side-menu" id="sideMenu">
      <button class="close-btn" id="closeBtn">
        <img src="/icons/closeButton.svg" />
      </button>
      <div class="auth-buttons">
        <a href="#" class="auth-button signup">가입하기</a>
        <a href="#" class="auth-button login">로그인</a>
      </div>
      <ul class="side-menu-list">
        ${ this.sideMenu }
      </ul>
      <div class="additional-links">
        <a href="../customerService/index.html" class="additional-link">
          <img src="/icons/help.svg" alt="고객센터">
          고객센터
        </a>
        <a href="../myCart/index.html" class="additional-link">
          <img src="/icons/shop.svg" alt="장바구니">
          장바구니
        </a>
        <a href="#" class="additional-link">
          <img src="/icons/order.svg" alt="주문">
          주문
        </a>
        <a href="../findStore/index.html" class="additional-link">
          <img src="/icons/store.svg" alt="매장 찾기">
          매장 찾기
        </a>
      </div>
    </div>
  </div>
</div>
`;

    this.shadowRoot.innerHTML = styles + templateHtml;

    this.setupScrollBehavior();
    this.setupSideMenu();
    this.setupNavBarLayout();
  }

  // 스크롤에 따라 네비게이션 바의 위치와 조정
  setupScrollBehavior() {
    let lastScrollTop = 0;
    const navbar = this.shadowRoot.querySelector('#navbar');
    const placeholder = this.shadowRoot.querySelector('#navPlaceholder');
    const navbarHeight = navbar.offsetHeight;
    const topBarHeight = 36;  // 상단 바의 높이

    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > topBarHeight && window.innerWidth > 768) {
        navbar.classList.add("fixed");
        placeholder.style.height = "60px";
      } else if (window.innerWidth > 768) {
        navbar.classList.remove("fixed");
        placeholder.style.height = '0px';
      }

      if (scrollTop > lastScrollTop && scrollTop > (navbarHeight + topBarHeight)) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    });
  }

  // 사이드 메뉴 클릭 이벤트 지정
  setupSideMenu() {
    const hamburger = this.shadowRoot.querySelector('#hamburger');
    const sideMenu = this.shadowRoot.querySelector('#sideMenu');
    const closeBtn = this.shadowRoot.querySelector('#closeBtn');

    hamburger.addEventListener('click', () => {
      sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      sideMenu.classList.remove('open');
    });
  }

  // 모바일 버전에서 메인 메뉴가 사이드 메뉴로 바뀔 때 메인 메뉴가 있던 자리의 높이 조정
  setupNavBarLayout() {
    const placeholder = this.shadowRoot.querySelector('#navPlaceholder');

    const resizePlaceholder = () => {
      if (window.innerWidth <= 768) {
        placeholder.style.height = "60px";
      }
    };

    window.addEventListener('resize', resizePlaceholder);
    window.addEventListener('load', resizePlaceholder);
  }
}

customElements.define('nav-bar', NavBar);