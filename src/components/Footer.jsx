import './Footer.css';
import { useState, useEffect, useRef } from 'react';

function Footer({actualPage = 0}) {

    return (
        <footer id='footerAveB-firstContainer'>

            <ul id="footer-firstList">
                <li>
                    <a className="" href="/">
                        <img src="/logos/logo-Avenue-B-black.png" alt="Logo Avenue B" id="logo-img"/>
                    </a>
                </li>

                <li>Avenue B Productions</li>
                <li>14 Rue des Jeuneurs</li>
                <li>75002 Paris</li>
            </ul>

            <div id='footerAveB-secContainer'>

                <ul id="footer-secList">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/src/apropos/">À propos</a></li>
                    <li><a href="/src/films/">Films</a></li>
                    <li><a href="/src/Equipe/">Équipe</a></li>
                    <li><a href="/src/news/">News</a></li>
                </ul>

                <ul id='footer-thirdList'>
                    <li>
                        <a href="https://www.facebook.com/Avenuebprod">
                            <img src="/logos/facebook.png" className='socialMediaIcons'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/avenueb_productions/">
                            <img src="/logos/instagram.png" className='socialMediaIcons'/>
                        </a>
                    </li>
                </ul>

            </div>
            
        </footer>
    );
}

export default Footer;