import './News.css';

import newsList from '/src/news.json';

import NavigationBar from '/src/components/NavigationBar';
import Footer from '/src/components/Footer';

function News() {

    console.log("Tipo de newsList es: " + typeof(newsList));
    console.log("Length de newsList es: " + newsList.length);

    const arr = newsList.map((item, index) => {
        console.log("Header es: ", item.header);
        return(
        <NewsIndividualGen
            key={index}
            header={item.header}
            imageLink={item.imageLink}
            date={item.date}
            paragraphContent={item.paragraphContent}
            link={item.link}
        />
        )})

    return (
        <>
            <NavigationBar actualPage={4}/>

            <div className='fiftyPercentContainer'>
                {arr}
            </div>

            <Footer/>
        </>
    );
}

function NewsIndividualGen({header, imageLink, date, paragraphContent, link}){

    return(
        <section className='news-section'>

            <h1 className='news-header'>{header}</h1>
            <h3 className='news-date' >{date}</h3>
            <img className='news-img' src={imageLink}></img>
            <p className='news-paragraph'>
                {paragraphContent}
                <br></br>
                <a href={link} className='news-ext-link' >Lire plus</a>
            </p>
            
        </section>
    );
}

export default News;