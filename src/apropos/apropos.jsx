import {useState} from 'react';
import './apropos.css';

import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';
import IrArriba from '/src/components/IrArriba';


function Apropos() {

    return (
        <>
            <NavigationBar actualPage={1}/>
            <IrArriba/>

            <section className='sixtyFivePercentContainer'>
    
                <h1 className='header syllable'>La production</h1>

                <p className='syllable'>Après avoir tourné cinq films et sorti quatre longs-métrages en salles dont un unitaire sur ARTE entre 2021 et 2023, Avenue B Productions a connu son année la plus prolifique depuis sa création en 2002, et compte poursuivre sur ce rythme. Notre production s’est diversifie également avec le tournage d’un premier unitaire pour ARTE, Clèves de Rodolphe Tissot, expérience heureuse qui témoigne de l’intérêt de la société pour les unitaires audacieux. Notre activité grandement majoritaire restant la production de longs-métrages pour le cinéma, nous avons à cœur de poursuivre notre collaboration avec des auteurs « maison » (tels que Marc Fitoussi, Samuel Theis et Sébastien Marnier) tout en cherchant à découvrir de nouveaux talents (que ce soit Guillaume Bureau dont nous venons de sortir le premier long, C’est mon homme, ou Jérémie Sein dont le tournage de son premier film L’esprit Coubertin s’est achevé en avril dernier, ou bien Zoé Labasse avec son projet de long Les danseurs de Strasbourg qui a obtenu le coup de cœur de la Présidente du Jury des Prix du Scénario ex Sopadin en février 2023).
                </p>
                <p className='syllable'>Vingt ans après sa création, la ligne éditoriale d’Avenue B reste gouvernée par le même souhait de concilier exigence artistique et ouverture des films au public. Avec la volonté de produire des films aux genres variés abordant des sujets et thématiques pluriels.
                </p>

                <h1 className='header syllable'>Formulaire de Soumission de Projets</h1>
                <p>Si vous souhaitez nous faire parvenir vos projets, merci de nous envoyer un synopsis court, un traitement, un CV, et une note d'intention de l'auteur à l'adresse rsvp@avenuebprod.com</p>

                <form id="formAveB" action="mailto:rsvp@avenuebprod.com" method="post" enctype="text/plain">

                    <label for="synopsis">Synopsis court :</label>
                    <textarea id="synopsis" name="synopsis" rows="4" cols="50" required></textarea>

                    <label for="traitement">Traitement :</label>
                    <textarea id="traitement" name="traitement" rows="4" cols="50" required></textarea>

                    <label for="cv">CV :</label>
                    <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required></input>

                    <label for="note">Note d'intention de l'auteur :</label>
                    <textarea id="note" name="note" rows="4" cols="50" required></textarea>

                    <button type="submit">Envoyer</button>

                </form>

            </section>

            <Footer/>
¡        </>
    );
}

export default Apropos;