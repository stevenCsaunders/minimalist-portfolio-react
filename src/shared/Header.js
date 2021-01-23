
const Header = ()  => {
  return(
<header>
        <nav class="top-nav">
          <a href="/index.html" class="logo" aria-label="Site Header Logo">
            <svg role="img" aria-labelledby="header-logo" xmlns="http://www.w3.org/2000/svg" width="61" height="32">
              <title id="header-lgoo" >Header Logo</title>
              <path fill="#33323D" fill-rule="evenodd"
                d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z" /></svg>
          </a>
          <button id='open'>
            <svg role="img" aria-labelledby="menu-open" xmlns="http://www.w3.org/2000/svg" width="24" height="13" title="">
              <title id="menu-open">Open Mobile Menu</title>
              <g fill="#33323D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
              </g>
            </svg>
          </button>
          <button class="hide" id="close">
            <svg role="img" aria-labelledby="menu-close" xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <title id="menu-close">Close Mobile Menu</title>
              <g fill="#33323D" fill-rule="evenodd">
                <path
                  d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z" />
            </g>
            </svg>
          </button>
          <ul class="menu" id="top-nav">
            <li class="menu-item"><a href="/index.html">Home</a></li>
            <li class="menu-item"><a href="/portfolio.html">Portfolio</a></li>
            <li class="menu-item"><a href="/contact.html">Contact Me</a></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;