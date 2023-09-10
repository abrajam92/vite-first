import './Footer.css';

function Footer() {

    return (
        <footer>
            <ul id="footer-firstList">
                <li>
                    <a className="" href="/main/">
                        <img src="/src/assets/logos/Logo-Avenue-B-black.png" alt="Logo Avenue B" id="logo-img"/>
                    </a>
                </li>

                <li>Avenue B Productions</li>
                <li>14 Rue des Jeuneurs</li>
                <li>75002 Paris</li>
            </ul>

            <ul id="footer-secList">
                <li><a href="/src/main/">Accueil</a></li>
                <li><a href="/src/apropos/">À propos</a></li>
                <li><a href="/src/films/">Films</a></li>
                <li><a href="/src/Equipe/">Équipe</a></li>
                <li><a href="/src/news/">News</a></li>
            </ul>

            <ul id='footer-thirdList'>
                <li>
                <a href="https://www.facebook.com/Avenuebprod">
                    <img src="/src/assets/logos/facebook.png" className='socialMediaIcons'/>
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com/avenueb_productions/">
                    <img src="/src/assets/logos/instagram.png" className='socialMediaIcons'/>
                </a>
                </li>
            </ul>
            
        </footer>
    );
}

export default Footer;