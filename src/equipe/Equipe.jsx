import '/src/App.css';

import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';


function Equipe() {

    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque. Et sollicitudin ac orci phasellus egestas tellus. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Magna fringilla urna porttitor rhoncus dolor purus non enim. Risus ultricies tristique nulla aliquet enim tortor at. Suspendisse ultrices gravida dictum fusce. Orci porta non pulvinar neque.";

    return (
        <>
            <NavigationBar/ >

            <BiographyGen 
            name="Caroline Bonmarchard" 
            charge="Producer" 
            bio={bio} 
            picUrl='../affiches/Default.jpg' 
            posLeft={true} />

            <BiographyGen 
            name="Xenia Sulyma" 
            charge="Postproduction director" 
            bio={bio} 
            picUrl='../affiches/Default.jpg' 
            posLeft={false} />

            <BiographyGen 
            name="Margaux Boisrame" 
            charge="Assistant producer"
            bio={bio}
            picUrl='../affiches/Default.jpg'
            posLeft={true} />

            <BiographyGen 
            name="Thomas Ramon"
            charge="Assistant producer, legal assistant"
            bio={bio}
            picUrl='../affiches/Default.jpg'
            posLeft={false} />

            <BiographyGen 
            name="Audrey Smadja"
            charge="Legal assistant"
            bio={bio}
            picUrl='../affiches/Default.jpg'
            posLeft={true} />

            <Footer/ >
        </>
    );
}

function BiographyGen({name, charge, bio, picUrl, posLeft}) {

    return (
        <div className='bioContainer'>
            <img src={picUrl}/>
            <h2>{name}</h2>
            <h3>{charge}</h3>
            <p>{bio}</p>
        </div>
    );
}

export default Equipe;