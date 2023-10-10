import './equipe.css';

import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';


function Equipe() {

    return (
        <>
            <NavigationBar actualPage={3}/>

            <section id='general-container'>

                <BiographyGen 
                name="BONMARCHAND Caroline" 
                charge="Productrice" 
                picUrl='/affiches/Default.jpg' 
                posLeft={true} />

                <BiographyGen 
                name="SULYMA Xenia" 
                charge="Postproduction director" 
                picUrl='/affiches/Default.jpg' 
                posLeft={false} />

                <BiographyGen 
                name="SMADJA Audrey"
                charge="Legal assistant"
                picUrl='/affiches/Default.jpg'
                mail="audrey@avenuebprod.com"
                posLeft={true} />

                <BiographyGen 
                name="Margaux Boisrame" 
                charge="Assistant producer"
                picUrl='/affiches/Default.jpg'
                mail="margaux@avenuebprod.com"
                posLeft={true} />

                <BiographyGen 
                name="Thomas Ramon"
                charge="Assistant producer, legal assistant"
                picUrl='/affiches/Default.jpg'
                mail="thomas@avenuebprod.com"
                posLeft={false} />

            </section>
            
            <Footer/>
        </>
    );
}

function BiographyGen({name, charge, picUrl, mail, posLeft}) {

    return (
        <div className='bioContainer'>
            <img src={picUrl}/>
            <h2>{name}</h2>
            <h3>{charge}</h3>
            {mail ? <a href={`mailto:${mail}`}>{mail}</a> : null}
        </div>
    );
}

export default Equipe;