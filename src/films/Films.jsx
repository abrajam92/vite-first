import React, {useState, useEffect, useRef} from 'react';
import './Films.css';

import filmList from '/src/films.json';
import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';
import IrArriba from '/src/components/IrArriba';


function Films() {
    // Film from the list
    const [filmSelected, setFilmSelected] = useState(0);
    // Type of film
    const [typeFilmSel, setTypeFilmSel] = useState(0);
    // Categorías: Producción, Catálogo, en postproducción, en afiche, etc. (no definitivo)
    const [categSel, setCategSel] = useState(0);

    // Referencias para tipos
    const toutRef = useRef(null);
    const longRef = useRef(null);
    const moyenRef = useRef(null);
    const courtRef = useRef(null);
    // Referencias para categorías
    const ttRef = useRef(null);
    const enProdRef = useRef(null);
    const catalogRef = useRef(null);
    const enDevRef = useRef(null);

    useEffect(() => {
        const refs = [toutRef, longRef, moyenRef, courtRef];

        refs.forEach((ref, index) => {
          if (index === typeFilmSel && ref.current) {
            ref.current.classList.add('activeType');
          } else if (ref.current) {
            ref.current.classList.remove('activeType');
          }
        });

        const otherRefs = [ttRef, enProdRef, catalogRef, enDevRef];

        otherRefs.forEach((ref, index) => {
            if (index === categSel && ref.current) {
              ref.current.classList.add('activeType');
            } else if (ref.current) {
              ref.current.classList.remove('activeType');
            }
          });

      }, [typeFilmSel, categSel]);
    

    return (
        <>
            <NavigationBar actualPage={2}/>
            <IrArriba/>

            <div className="generalContainer">
                
                <div id="classification-container">

                    <h1 id="classification-container-h1">Films</h1>

                    <ul className='selector-cat'>
                        <h3 className='selector-header'>Par type:</h3>
                        <li ref={toutRef} onClick={() => {setTypeFilmSel(0)} }>Tout</li>
                        <li ref={longRef} onClick={() => {setTypeFilmSel(1)} }>Long-métrages</li>
                        <li ref={moyenRef} onClick={() => {setTypeFilmSel(2)} }>Moyen-métrages</li>
                        <li ref={courtRef} onClick={() => {setTypeFilmSel(3)} }>Court-métrages</li>
                    </ul>

                    <ul className='selector-cat'>
                        <h3 className='selector-header'>Par categorie:</h3>
                        <li ref={ttRef} onClick={() => {setCategSel(0)} }>Tout</li>
                        <li ref={enProdRef} onClick={() => {setCategSel(1)} }>En production</li>
                        <li ref={catalogRef} onClick={() => {setCategSel(2)} }>Catalogue</li>
                        <li ref={enDevRef} onClick={() => {setCategSel(3)} }>En Devéloppement</li>
                    </ul>

                </div>

                <div id='classification-container-after'></div>

                <MovieDetailsBigCard fs={filmSelected} setFs={setFilmSelected} />

                <div className="moviesListContainer">
                    <FilmsParser fs={filmSelected} setFs={setFilmSelected} typeSelected={typeFilmSel} categSelected={categSel} />
                </div>

            </div>

            <Footer/>
        </>
    );
}

// Regresa array con films que contienen el tipo seleccionado y la categoría seleccionada
function FilmsParser({setFs, typeSelected, categSelected}) {

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

    let lastCateg = "";
    let actualCateg = "";

    console.log("Tipo de filmList es: " + typeof(filmList));
    console.log("Length de filmList es: " + filmList.length);

    for(let i = 0; i < filmList.length; i++){

        if (!categSelected){

            if (i == 0){
                lastCateg = filmList[i].EtatDuFilm;
                nfList.push(
                    <CategoryHeader headerName={lastCateg}/>
                )
            }
            
            actualCateg = filmList[i].EtatDuFilm;

            if (actualCateg != lastCateg){
                lastCateg = filmList[i].EtatDuFilm;
                nfList.push(
                    <CategoryHeader headerName={lastCateg}/>
                )
            }
        }

        else if (i == 0) {
            nfList.push(
                <CategoryHeader headerName={categStr}/>
            )
        }

        // Si hay tipo seleccionado 
        // y el tipo del elemento iterado es igual al tipo seleccionado
        if (typeSelected && filmList[i].Type === typeStr || !typeSelected){
            // Si hay categ seleccionada 
            // y la categ del elemento iterado es igual a la categ seleccionada
            if (categSelected && filmList[i].EtatDuFilm === categStr || !categSelected){

                nfList.push(
                    <MovieCard
                        id={i}
                        key={filmList[i].Titre}
                        titre={filmList[i].Titre}
                        director={filmList[i].Director}
                        posterUrl={filmList[i].PosterUrl}
                        setFilmSel={setFs}
                    />
                )
            }
        }
    }

    return nfList; 
}

function CategoryHeader({headerName}){

    return (<><h1 className='categoryHeader'>{headerName}</h1></>);
}

function MovieCard({ 
    id,
    titre,
    setFilmSel,
    director = 'inconnu',
    posterUrl,
    }) {

    const showMovDetBigCard = () => {
        setFilmSel(id);
        document.getElementById("overlay").style.display = "flex";
    }

    const url = !posterUrl ? '/affiches/Default.jpg' :
        '/affiches/' + posterUrl;

    let assignedClasses = "info-container";
    
    posterUrl 
    ? assignedClasses = assignedClasses + ' opacity0'
    : assignedClasses = assignedClasses + ' noPoster';

    return (
        <div className="movieCard" onClick={() => { 
            showMovDetBigCard(); }}>

            <img className="moviePosterImg" src={url}/>

            <div className={assignedClasses}>
                <h1 className='syllable'>{titre}</h1>
                <h2>{director}</h2>
            </div>
            
        </div>
    );
}

function MovieDetailsBigCard({fs, setFs}) {

    const url = filmList[fs].PosterUrl === undefined 
        ? '/affiches/Default.jpg' 
        : '/affiches/' + filmList[fs].PosterUrl;

    const myDivRef = useRef(null);

    const [videoHeight, setVideoHeight] = useState(720);

    useEffect(() => {

        const overlay = document.getElementById("overlay");
        const cardContainer = document.getElementById("cardContainer");

        function handleClickOutside(event) {

            const closeButtonBack = document.getElementById("closeButtonBack");
            const returnButton = document.getElementById("returnButton");

            if (closeButtonBack.contains(event.target) || returnButton.contains(event.target)){
                return;
            }

            // Si overlay display es flex y movieDetailsBigCard es cuerrent y movieDetailsBigCard contiene dentro de su área 
          if (overlay.style.display == "flex" && myDivRef.current && !myDivRef.current.contains(event.target)) {
            document.getElementById("overlay").style.display = "none";
            console.log("fn handleClickOutside");
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


    useEffect(() => {

        const changeIframeHeight = () => {
            if (window.innerWidth < 768){
                setVideoHeight("100%");
            }
            else if (window.innerWidth > 768){
                setVideoHeight("720");
            }
        };

        window.addEventListener("resize", changeIframeHeight);
        return () => {
          window.removeEventListener("resize", changeIframeHeight);
        };

    }, [videoHeight])

    return (
        <div id="overlay">
            <div id="cardContainer">

                <div id="backCard-trailer">

                    <button id="closeButtonBack" onClick={ (e) => {
                        document.getElementById("overlay").style.display = "none";
                        setFs(0);
                        console.log("botón closeButtonBack");
                    }}>&times;</button>

                    <button id="returnButton" onClick={ (e) => {
                        document.getElementById('cardContainer').style.transform = "rotateY(0deg)";
                        console.log("Funcion rotando de vuelta");
                    }}>Retourner a l'info</button>

                    <iframe id="vidIframe" src={filmList[fs].Trailer} width="100%" height={window.innerWidth < 768 ? "100%" : "720"} allowFullScreen="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                </div> 
                    
                <div id="movieDetailsBigCard" ref={myDivRef}>

                    <button id="closeButtonFront" onClick={ () => {
                        document.getElementById("overlay").style.display = "none";
                        console.log("botón closeButtonFront");
                        setFs(0);
                    }}>&times;</button>

                    <img id="movieDetailsBigPoster" src={url}/>

                    { (filmList[fs].Trailer) ? 
                    <button id="trailerButton" onClick={ () => { 
                            document.getElementById('cardContainer').style.transform = "rotateY(180deg)";
                            console.log("Rotating from front to back");
                        } }>Voir la Bande annonce
                    </button> : ""
                    }

                    <div id="bigCardInfo">

                        <h1 id="mainHeader">{filmList[fs].Titre}</h1>
                        {/* Horizonal ruler */}
                        <div id='hr-title'></div>

                        <div id="BCI-group-1">
                            <h2 id="etatDuFilm">{filmList[fs].EtatDuFilm}</h2>
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

                            "Synopse",
                            "Partners et distribution",
                            "Festivals"
                        ]}

                        arrayContenidos={[

                            <div className='content toggled-content'>
                                <p>{filmList[fs]?.Synopsis}</p>
                            </div>,

                            <div className='content'>
                                { (filmList[fs].FinancialPartners) ? <p><b>Financial partners:</b> {filmList[fs].FinancialPartners}</p> : ""}
                                { (filmList[fs].CompaniesDistribution) ? <p><b>Companies distribution:</b> {filmList[fs].CompaniesDistribution}</p> : ""}
                                { (filmList[fs].InternationalSales) ? <p><b>International sales:</b> {filmList[fs].InternationalSales}</p> : ""}
                            </div>,

                            <div className='content'>
                                { (filmList[fs].Festivals) ? <p>{filmList[fs].Festivals}</p> : ""}
                            </div>
                        ]}

                        />

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

        const opnByDf = i == 0 ? 1 : 0 ;

        returned.push(
            <ContentArrowToggable key={i} arrowid={i} openByDef={opnByDf} buttonTitle={arrayTitulos[i]}>
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
// Regresa link con flecha para desplegar contenido hijo
function ContentArrowToggable({arrowid, buttonTitle, openByDef = 0, children}) {

    const arrowId = "arrow-" + arrowid;

    let arrowClasses = openByDef ? "toggle-arrow rotated-arrow" : "toggle-arrow" ;

    function handleClick(){

        const arrow = document.getElementById(arrowId);
        const elemSib = arrow.parentElement.nextElementSibling;

        // Si flecha está rotada, desrotar, si está desrotada, rotar.
        if (arrow.classList.contains("rotated-arrow")){
            arrow.classList.remove("rotated-arrow")
        } else {
            arrow.classList.add("rotated-arrow");
        }

        // Si el elemento children está oculto, desocultar, si está mostrado, ocultar.
        // Obtener todos los elementos con clase ocultos en el documento
        // De ellos, filtrar en others todos los elementos que no sean el children actual
        // A todos los elementos en others, desocultar y dar la vuelta a su flecha 
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

    return (
        <>
            <a className="toggle-button" onClick={handleClick}>
                <span id={arrowId} className={arrowClasses}>▲</span>
                {buttonTitle}
            </a>
            {children}
        </>
    );
}

export default Films;