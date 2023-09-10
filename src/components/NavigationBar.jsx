import './NavigationBar.css';
import { useState, useEffect } from 'react';

function NavigationBar() {

    const [menuShown, setMenuShown] = useState(true);

    /*
    // TODO: if screen is bigger than certainSize setMenuShown(true);

      useEffect(() => {
    // Check the window width when the component mounts
    const handleResize = () => {
      if (window.innerWidth > 1024 && !menuShown) {
        console.log("Window inner width is more than 1024");
        setMenuShown(true);
      }
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuShown]);

  useEffect(() => {
    // Update the style when menuShown changes
    if (menuShown) {
      document.getElementById("site-links").style.display = "flex";
    } else {
      document.getElementById("site-links").style.display = "none";
    }
  }, [menuShown]);
    */

    function showMenu() {

        setMenuShown( menuShown => !menuShown);

        console.log("El valor de setMenuShown ahora es: ", menuShown);

        if (menuShown){
            document.getElementById('site-links').style.display = "flex";
        }
        else {
            document.getElementById('site-links').style.display = "none";
        }
    }

    return (
        <nav id="nvbar-1">
            <a id="logo-cont" href="/main/">
                <img src="/src/assets/logos/Logo-Avenue-B-black.png" alt="Logo Avenue B" id="logo-img"/>
            </a>

            <div id='site-links'>
                <a href='/main/'>ACCUEIL</a>
                <a href="/src/apropos/">À PROPOS</a>
                <a href="/src/films/">FILMS</a>
                <a href="/src/equipe/">ÉQUIPE</a>
                <a href="/src/news/">NEWS</a>
            </div>

            <div id='social-media-links'>
                <a href="https://www.facebook.com/Avenuebprod">
                    <img src="/src/assets/logos/facebook.png" className='socialMediaIcons'/>
                </a>
                <a href="https://www.instagram.com/avenueb_productions/">
                    <img src="/src/assets/logos/instagram.png" className='socialMediaIcons'/>
                </a>
            </div>

            <div id="menu-button-cont" onClick={ () => {showMenu()} }>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
            </div>
        </nav>
    );
}

export default NavigationBar;