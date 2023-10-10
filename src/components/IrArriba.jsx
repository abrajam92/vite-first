import {useState, useEffect} from 'react';

import "./IrArriba.css";

function IrArriba(){
    
    const [visible, setVisible] = useState(false)

    useEffect(() => {

      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      window.addEventListener('scroll', toggleVisible);

      return () => {
        window.removeEventListener('scroll', toggleVisible);
      }
    }, []);
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    return (
      <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        <span id="ir-arriba-btn" ><span id='arrw'>{"▲"}</span>Aller tout en haut</span>
      </button>
    );
}

export default IrArriba;