import {useState} from 'react';
import '/src/App.css';

import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';


function Apropos() {

    return (
        <>
            <NavigationBar/ >
            <h1>Avenue B Productions</h1>
            <img src=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Suscipit tellus mauris a diam maecenas sed enim ut. Egestas 
                pretium aenean pharetra magna ac placerat vestibulum. Ante in 
                nibh mauris cursus.</p>
            <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. 
                Augue lacus viverra vitae congue eu consequat ac. Vitae justo 
                eget magna fermentum iaculis eu non. Mattis molestie a iaculis 
                at erat pellentesque adipiscing. Purus faucibus ornare 
                suspendisse sed. Vitae aliquet nec ullamcorper sit amet risus 
                nullam.</p>

            <Footer/ >
        </>
    );
}

export default Apropos;