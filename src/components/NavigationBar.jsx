import './NavigationBar.css';
import { useState, useEffect, useRef } from 'react';

function NavigationBar({actualPage = 0}) {

  const [menuShown, setMenuShown] = useState(true);

  const ceroRef = useRef(null);
  const unoRef = useRef(null);
  const dosRef = useRef(null);
  const tresRef = useRef(null);
  const cuatroRef = useRef(null);

  useEffect(() => {
    menuShown ?
    document.getElementById('site-links').style.display = "flex"
    :
      document.getElementById('site-links').style.display = "none";
  }, [menuShown])
  
  // Actualiza las clases de los elementos según la página actual
  useEffect(() => {
    const refs = [ceroRef, unoRef, dosRef, tresRef, cuatroRef];
    refs.forEach((ref, index) => {
      if (index === actualPage && ref.current) {
        ref.current.classList.add('active');
      } else if (ref.current) {
        ref.current.classList.remove('active');
      }
    });
  }, [actualPage]);

  // Si width del viewport es menor a 768 y not menuShown, setea menuShown.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && !menuShown) {
        setMenuShown(() => true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuShown]);

  // Si menuShown, muestra sitelinks como flex, si no, oculta siteLinks. 
  useEffect(() => {
    let siteLinks = document.getElementById("site-links").style.display;
    menuShown ? siteLinks = "flex" : siteLinks = "none";
  }, [menuShown]);

  function showMenu() {
    setMenuShown( menuShown => !menuShown);
} 

  return (
    <>
      <nav id="nvbar-2">

        <a id="logo-cont" href="/">
            <img src="/logos/logo-Avenue-B-black.png" alt="Logo Avenue B" id="logo-img"/>
            <div id='logo-down-bar'></div>
        </a>

        <ul id='site-links'>

            <li><a ref={ceroRef} href='/'>ACCUEIL</a></li>
            <li><a ref={unoRef} href="/src/apropos/">À PROPOS</a></li>
            <li><a ref={dosRef} href="/src/films/">FILMS</a></li>
            <li><a ref={tresRef} href="/src/equipe/">ÉQUIPE</a></li>
            <li><a ref={cuatroRef} href="/src/news/">ANNONCES</a></li>

        </ul>

        <div id='social-media-links'>
            <a href="https://www.facebook.com/Avenuebprod">
                <img src="/logos/facebook.png" className='socialMediaIcons'/>
            </a>
            <a href="https://www.instagram.com/avenueb_productions/">
                <img src="/logos/instagram.png" className='socialMediaIcons'/>
            </a>
        </div>



        <div id="menu-button-cont" onClick={ () => {showMenu()} }>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
        </div>

      </nav>

    </>
  );
}

export default NavigationBar;