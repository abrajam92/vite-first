import {useState, useEffect, useRef} from 'react';
import '/src/App.css';
import './Films.css';

import filmList from '/src/films.json';
import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';
import CategorySelector from '/src/components/CategorySelector';

function Films() {
    // Film from the list
    const [filmSelected, setFilmSelected] = useState(0);
    // Type of film
    const [typeSel, setTypeSel] = useState(0);
    // Categorías: Producción, Catálogo, en postproducción, en afiche, etc. (no definitivo)
    const [categSel, setCategSel] = useState(0);

    return (
        <>
            <NavigationBar/>
            <div className="generalContainer">
                
                <div id="classification-container">
                    <h1 id="classification-container-h1">Films</h1>

                    <ul>
                        <h3>Par type:</h3>
                        <li onClick={() => {setTypeSel(0)} }>Tout</li>
                        <li onClick={() => {setTypeSel(1)} }>Long-métrages</li>
                        <li onClick={() => {setTypeSel(2)} }>Moyen-métrages</li>
                        <li onClick={() => {setTypeSel(3)} }>Court-métrages</li>
                    </ul>

                    <ul>
                        <h3>Par categorie:</h3>
                        <li onClick={() => {setCategSel(0)} }>Tout</li>
                        <li onClick={() => {setCategSel(1)} }>En production</li>
                        <li onClick={() => {setCategSel(2)} }>Catalogue</li>
                        <li onClick={() => {setCategSel(3)} }>En Devéloppement</li>
                    </ul>

                </div>
                <CategorySelector/>
                <MovieDetailsBigCard fs={filmSelected} setFs={setFilmSelected} />
                <div className="moviesListContainer">
                    <FilmsParser fs={filmSelected} setFs={setFilmSelected} typeSelected={typeSel} categSelected={categSel} />
                </div>
            </div>
            <Footer/>
        </>
    );
}

// Regresa array con films que contienen el tipo seleccionado
function FilmsParser({fs, setFs, typeSelected, categSelected}) {

    let nfList = new Array;
    let typeStr = "";
    let categStr = "";
    
    switch (typeSelected){

        case 1:
            typeStr = "Long-métrage";
            break;
        case 2:
            typeStr = "Moyen-métrage";
            break;
        case 3:
            typeStr = "Court-métrage";
            break;
        default:
            break;
    }

    // Categorías: Producción, Catálogo, en postproducción, en afiche, etc. (no definitivo)
    switch (categSelected){

        case 1:
            categStr = "En production";
            break;
        case 2:
            categStr = "Catalogue";
            break;
        case 3:
            categStr = "En développement";
            break;

        default:
            break;
    }


    for(let i = 0; i < filmList.length; i++){

        if (typeSelected && filmList[i].Type === typeStr){

            if (categSelected && filmList[i].EtatDuFilm === categStr){

                nfList.push(
                    <MovieCard
                        id={i}
                        key={filmList[i].Titre}
                        etatDuFilm={filmList[i].EtatDuFilm}
                        titre={filmList[i].Titre}
                        date={filmList[i].DateDeSortie}
                        director={filmList[i].Director}
                        writers={filmList[i].Writers}
                        posterUrl={filmList[i].PosterUrl}
                        filmSel={fs}
                        setFilmSel={setFs}
                    />
                )
            }

            else if (!categSelected){

                nfList.push(
                    <MovieCard
                        id={i}
                        key={filmList[i].Titre}
                        etatDuFilm={filmList[i].EtatDuFilm}
                        titre={filmList[i].Titre}
                        date={filmList[i].DateDeSortie}
                        director={filmList[i].Director}
                        writers={filmList[i].Writers}
                        posterUrl={filmList[i].PosterUrl}
                        filmSel={fs}
                        setFilmSel={setFs}
                    />
                )
            }
        }

        else if (!typeSelected){

            if (categSelected && filmList[i].EtatDuFilm === categStr){
                nfList.push(
                    <MovieCard
                        id={i}
                        key={filmList[i].Titre}
                        etatDuFilm={filmList[i].EtatDuFilm}
                        titre={filmList[i].Titre}
                        date={filmList[i].DateDeSortie}
                        director={filmList[i].Director}
                        writers={filmList[i].Writers}
                        posterUrl={filmList[i].PosterUrl}
                        filmSel={fs}
                        setFilmSel={setFs}
                    />
                )
            }

            else if (!categSelected){

                nfList.push(
                    <MovieCard
                        id={i}
                        key={filmList[i].Titre}
                        etatDuFilm={filmList[i].EtatDuFilm}
                        titre={filmList[i].Titre}
                        date={filmList[i].DateDeSortie}
                        director={filmList[i].Director}
                        writers={filmList[i].Writers}
                        posterUrl={filmList[i].PosterUrl}
                        filmSel={fs}
                        setFilmSel={setFs}
                    />
                )
            }
        }
    }

    return nfList; 
}


function MovieCard({ 
    id,
    titre,
    etatDuFilm,
    date,
    setFilmSel,
    director = 'inconnu',
    writers = 'inconnu',
    posterUrl,
    }) {

    const showMovDetBigCard = () => {
        setFilmSel(id);
        document.getElementById("overlay").style.display = "flex";
    }

    const url = !posterUrl ? '/affiches/Default.jpg' :
        '/affiches/' + posterUrl;

    let assignedClasses = "info-container";
    
    !posterUrl 
    ? assignedClasses = assignedClasses + ' opacity1'
    : assignedClasses = assignedClasses + ' opacity0' ;

    return (
            <div className="movieCard" onClick={() => { 
                showMovDetBigCard(); }}>

                <img className="moviePosterImg" src={url}/>

                <div className={assignedClasses}>
                    <h1>{titre}</h1>
                    <h2>{etatDuFilm}</h2>
                    { (date) ? <h3>{date}</h3>: ""}
                    <p>{director}</p>
                </div>
                
            </div>
    );
}

function MovieDetailsBigCard({fs, setFs}) {

    const url = filmList[fs].PosterUrl === undefined ? '/affiches/Default.jpg' :
        '/affiches/' + filmList[fs].PosterUrl;

    const myDivRef = useRef(null);
    

    useEffect(() => {

        const overlay = document.getElementById("overlay");
        const cardContainer = document.getElementById("cardContainer");

        function handleClickOutside(event) {

          if (overlay.style.display == "flex" && myDivRef.current && !myDivRef.current.contains(event.target)) {
            document.getElementById("overlay").style.display = "none";
            setFs(0);
            /* Remover todos los .toggled-content para que no regresen a estar desplegados por defecto
            document.getElementsByClassName("toggled-content");
            document.removeChild();
            */
          }

          if (cardContainer.style.transform == "rotateY(180deg)"){
            cardContainer.style.transform = "rotateY(0deg)";
          }

        }
    
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div id="overlay">
            <div id="cardContainer">

                <div id="backCard-trailer">
                    <iframe id="vidIframe" src={filmList[fs].Trailer} width="100%" height="720" allowFullScreen="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                    
                <div id="movieDetailsBigCard" ref={myDivRef}>

                    <img id="movieDetailsBigPoster" src={url}/>

                    <div id="bigCardInfo">

                        <h1 id="mainHeader"><b>{filmList[fs].Titre}</b></h1>
                        <div id='hr-title'></div>
                        <h2 id="etatDuFilm"><b>{filmList[fs].EtatDuFilm}</b></h2>

                        <div id="BCI-group-1">
                            <p>
                            { (filmList[fs].Type) ? <span> {filmList[fs].Type} | </span> : ""}
                            { (filmList[fs].Genre) ? <span> {filmList[fs].Genre} | </span> : ""}
                            { (filmList[fs].DurationTime) ? <span> {filmList[fs].DurationTime} | </span> : ""}
                            { (filmList[fs].DateDeSortie) ? <span><b>Sortie: </b> {filmList[fs].DateDeSortie} </span> : ""}
                            </p>
                        </div>

                        <div id="BCI-group-2">
                            { (filmList[fs].Director) ? <h3><b>Director:</b> {filmList[fs].Director}</h3> : ""}
                            { (filmList[fs].Writers) ? <h3><b>Writers:</b> {filmList[fs].Writers}</h3> : ""}
                            { (filmList[fs].CoProducers) ? <h3><b>Co-producers:</b> {filmList[fs].CoProducers}</h3> : ""}
                            { (filmList[fs].MainCast) ? <h3><b>Main cast:</b> {filmList[fs].MainCast}</h3> : ""}
                        </div>

                        <ToggableGroup 

                        arrayTitulos={[

                            "Synopse" , 
                            "Partners et distribution",
                            "Festivals"
                        ]}

                        arrayContenidos={[

                            (filmList[fs].Synopsis) ? <p id='content-1' className='content'>{filmList[fs].Synopsis}</p> : "",

                            <div id="BCI-group-3" className='content'>
                                { (filmList[fs].FinancialPartners) ? <p><b>Financial partners:</b> {filmList[fs].FinancialPartners}</p> : ""}
                                { (filmList[fs].CompaniesDistribution) ? <p><b>Companies distribution:</b> {filmList[fs].CompaniesDistribution}</p> : ""}
                                { (filmList[fs].InternationalSales) ? <p><b>International sales:</b> {filmList[fs].InternationalSales}</p> : ""}
                            </div>,

                            <div id="BCI-group-4" className='content'>
                                { (filmList[fs].Festivals) ? <p>{filmList[fs].Festivals}</p> : ""}
                            </div>

                        ]}></ToggableGroup>

                        <button id="closeButton" onClick={ () => {
                            document.getElementById("overlay").style.display = "none";
                            setFs(0);
                        }}>&times;</button>

                        { (filmList[fs].Trailer) ? <button id="trailerButton" 
                                                    onClick={ () => { 
                                                        document.getElementById('cardContainer').style.transform = "rotateY(180deg)";
                                                    } }>Bande annonce
                                                </button> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

// @param1: Array de contenidos en JSX
// @param2: Array de strings de títulos
function ToggableGroup({arrayContenidos, arrayTitulos}){

    let returned = [];

    for (let i = 0; i < arrayContenidos.length; i++){

        returned.push(
            <ContentArrowToggable key={i} arrowid={i} buttonTitle={arrayTitulos[i]}>
                {arrayContenidos[i]}
            </ContentArrowToggable> 
        )
    }

    return( 
        <>
            {...returned}
        </>
    );
}

function ContentArrowToggable({arrowid, buttonTitle, children}) {

    const arrowId = "arrow-" + arrowid;

    function handleClick(){

        const arrow = document.getElementById(arrowId);
        const elemSib = arrow.parentElement.nextElementSibling;

        if (arrow.classList.contains("rotated-arrow")){
            arrow.classList.remove("rotated-arrow")
        } else {
            arrow.classList.add("rotated-arrow");
        }

        if (elemSib.classList.contains("toggled-content")){
            elemSib.classList.remove("toggled-content")
        } else {
            elemSib.classList.add("toggled-content");

            const colection = [...document.getElementsByClassName("toggled-content")];
            const others = colection.filter((el) => el !== elemSib);
    
            others.map((e) => {
                e.classList.remove("toggled-content");
                e.previousElementSibling.firstElementChild.classList.remove("rotated-arrow");
            })   
        }
    }

    return (<>
            <a className="toggle-button" 
                onClick={handleClick}><span id={arrowId} className="toggle-arrow">▲</span>{buttonTitle}</a>
            {children}
            </>);
}

export default Films;