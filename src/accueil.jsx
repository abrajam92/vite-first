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

        const fn = () => {

            const elementosAnimadosIzq = document.querySelectorAll(".animable-left");
            const elementosAnimadosDer = document.querySelectorAll(".animable-right");

            elementosAnimadosIzq.forEach((elemento) => {

                const posicionElemento = elemento.getBoundingClientRect();
            
                if (posicionElemento.top < window.innerHeight)
                    elemento.classList.add("anim-entering-left");
            });

            elementosAnimadosDer.forEach((elemento) => {

                const posicionElemento = elemento.getBoundingClientRect();
            
                if (posicionElemento.top < window.innerHeight)
                    elemento.classList.add("anim-entering-right");
            });
        }

        window.addEventListener("scroll", fn);

        return () => {
            window.removeEventListener(scroll, fn);
        }
    });

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

            <section id='briefDescription' className='sectionMargins animable-left'>
                
                <img id='logoOnBriefDescription' src='/logos/logo-Avenue-B-black.png'></img>
                <p className='syllable' id='paragraphDescription'>
                    Avenue B célèbre ses 20 ans d’existence avec un catalogue de plus d’une vingtaine de longs-métrages, une dizaine de courts-métrages et une variété de documentaires aux formats divers. La ligne éditoriale de la société embrasse un large éventail cinématographique, allant de films d’auteurs pointus (aux succès commerciaux plus étendus).
                    <br></br>
                </p>
                
                <p id='brief-lirePlus'><a href='/src/apropos/'>Lire plus</a></p>

            </section>

            {/* Sección Nos Films */}

            <section id='nosFilmsSection' className='sectionMargins animable-right'>
                    
                <HeaderWDecoCentered title="Nos Films"/>
                
                {/*<Carousel></Carousel>*/}
                <FilmsParserAccueil noOfShowedCards={5}/>

                <p id='voirPlus' className='syllable'><a href='/src/films/'>
                    Voir tous les films
                    </a></p>

            </section>

            {/* Sección Actualités */}

            <section className='sectionMargins animable-left'>

                <HeaderWDecoCentered title="Actualités"/>
                <Actualites/>
                <p id='actualites-lirePlus'><a href='/src/news/'>Lire plus</a></p>

            </section>

            {/* Sección Prix et Nominations */}

            {/*
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
            */}

            {/* Sección Contactez nous */}

            <section className='sectionMargins anim-blinking' id='contactezNous'>
                <h2>Contactez nous:</h2>
                <p><a href='/src/apropos/'>{">"} Si vous souhaitez nous envoyer votre projet</a></p>
                <div className='line'></div>
                <p><a href='/src/equipe/'>{">"} ou que vous voulez nous contacter sur d'autre propos</a></p>
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
        </div>
    );
}

export default Accueil;