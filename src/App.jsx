import {useState} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function Homepage() {

    return (
        <>
            <NavigationBar/ >
            <div className="content">
                <h1 id='aLaUne'>Latest</h1>
                <iframe className="mx-auto" width="100%" height="720" src="https://www.youtube-nocookie.com/embed/Eo6c6iXXSK4?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1" title="Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="0"></iframe>
                <p>Description du video.</p>
                <button id="myBtn">Pause</button>
            </div>
            
            <Footer/ >
        </>
    )
}

export default Homepage;