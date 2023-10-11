import { useEffect } from 'react';
import './accueil.css';

import filmList from '/src/films.json';
import newsList from '/src/news.json';


import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer.jsx';
import IrArriba from '/src/components/IrArriba';
import Carousel from './components/Carousel.jsx';

import HeaderWDecoCentered from './components/HeaderWDecoCentered';

function Accueil() {

    useEffect(() => {
        const voirPlus = document.getElementById('voirPlus');
        const nosFilmsDiv = document.getElementById('nosFilmsDiv');

        function onMouseEnter(){
            nosFilmsDiv.style.backgroundColor = 'var(--gris-menosUno)';
        }
        function onMouseLeave(){
            nosFilmsDiv.style.backgroundColor = 'transparent';
        }

        // Agrega un evento de escucha para el evento 'mouseenter' (hover)
        voirPlus.addEventListener('mouseenter', onMouseEnter);
        // Agrega un evento de escucha para el evento 'mouseleave' (fuera del hover)
        voirPlus.addEventListener('mouseleave', onMouseLeave);

        return () => {
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
          };

    }, []);
    
    return (
        <>
            <NavigationBar/>

            <IrArriba/>

            {/* Sección A la Une */}

            <section className=''>

                <iframe id='aLaUneIFrame' src="https://www.youtube-nocookie.com/embed/Eo6c6iXXSK4?controls=0&amp;autoplay=1&amp;mute=0&amp;loop=1" title="Trailer" frameBorder={0} allowFullScreen="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            
            </section>

            {/* Sección Descripción */}

            <section id='briefDescription' className='sectionMargins'>
                
                <img id='logoBriefDescription' src='/logos/logo-Avenue-B-black.png'></img>
                <p>Vingt ans après sa création, la ligne éditoriale d’Avenue B reste gouvernée par le même souhait de concilier exigence artistique et ouverture des films au public. Avec la volonté de produire des films aux genres variés abordant des sujets et thématiques pluriels.
                    <br></br><a href='/src/apropos/'><span className='arrowVoirPlus'>▲</span>voir plus</a>
                </p>

            </section>

            {/* Sección Nos Films */}

            <section id='nosFilmsDiv' className='sectionMargins'>
                    
                <HeaderWDecoCentered title="Nos Films"/>
                
                {/*<Carousel></Carousel>*/}
                <FilmsParserAccueil noOfShowedCards={4}/>
                <div className='movieCard'>
                    <a id='voirPlus' href='/src/films/'><span className='arrowVoirPlus'>▲</span>Voir tous les films</a>
                </div>

            </section>

            {/* Sección Actualités */}

            <section className='sectionMargins'>

                <HeaderWDecoCentered title="Actualités"/>
                <Actualites/>

            </section>

            {/* Sección Prix et Nominations */}

            <section className='sectionMargins'>

                <HeaderWDecoCentered title="Prix et nominations"/>

                <ul id='prixUnordList'>
                    <li>Festival de la Fiction de La Rochelle 2021 - Prix de la meilleure réalisation, Prix jeune espoir féminin ADAMI pour Louisiane Gouverneu</li>
                    <li>Semaine de la Critique - Festival de Cannes 2021</li>
                    <li>Prix de la Critique Fictions, Festival de Rome, Prix du jury des étudiants, Festival de Valenciennes</li>
                    <li>Prix de la Meilleure Réalisation, Festival Mar Del Plata 2020</li>
                    <li> Prix de la meilleure jeune réalisatrice, Festival MINSK 2020</li>
                    <li>Prix pour l’élégance de la réalisation et du montage, Festival TIFF 2020</li>
                    <li>Prix Jean Vigo 2020</li>
                    <li> Prix du Jury Junior au Festival International du Film Francophone de Namur, Mention Spéciale du jury au Sitges International Film Festival, Mention spéciale dans la catégorie «NEXT WAVE FEATURES» au Austin Fantastic Fest</li>
                </ul>
                
            </section>

            <Footer/>
        </>
    );
}


// Regresa array con films que contienen el tipo seleccionado y la categoría seleccionada
function FilmsParserAccueil({noOfShowedCards = 5}) {

    let nfList = new Array;

    for(let i = 0; i < noOfShowedCards; i++){

        nfList.push(
            <MovieCardAccueil
                id={i}
                key={filmList[i].Titre}
                posterUrl={filmList[i].PosterUrl}
            />
        )
    }

    return nfList; 
}

function MovieCardAccueil({ 
    id,
    posterUrl,
    }) {

    const url = !posterUrl ? '/affiches/Default.jpg' :
        '/affiches/' + posterUrl;

    return (
        <div className="movieCard" key={id}>

            <img className="moviePosterImg" src={url}/>
            
        </div>
    );
}

function Actualites() {

    const arr = newsList.map( (item, index) => {const imglnk = item.imageLink; return(
            <div key={index} className='actualitesCard' style={{ backgroundImage:`url(${imglnk})`}}>
                <div className='item'>
                    <h1 className='actualites-title syllable'>{item.header}</h1>
                    <p className='actualites-paragraph'>{item.date}</p>
                </div>
            </div>
        )
    });

    return(
        <div id='actualitesContainer'>
            {arr}
            <a href='/src/news/' id='actualites-lirePlus'>Lire plus</a>
        </div>
    );
}

export default Accueil;