import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Index() {
  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;

    const scroll = () => {
      if (container.scrollLeft < scrollWidth - containerWidth) {
        container.scrollLeft += 1; // Adjust the scroll speed by changing this value
      } else {
        container.scrollLeft = 0;
      }
    };

    const scrollInterval = setInterval(scroll, 55); // Adjust the interval for smoother or faster scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <img src={process.env.PUBLIC_URL + '/images/adidas.png'} alt="adidas" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/amul.png'} alt="amul" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/apollotyre.jpeg'} alt="apollotyre" className="image" />
            <img src={process.env.PUBLIC_URL + '/images/asianpaints.png'} alt="asianpaints" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/chanel.png'} alt="chanel" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/cipla.png'} alt="cipla" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/cococola.png'} alt="cococola" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/colgate.png'} alt="colgate" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/dior.png'} alt="dior" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/fasttrack.png'} alt="fasttrack" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/gucci.png'} alt="gucci" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/lakme.png'} alt="lakme"className="image" />
        <img src={process.env.PUBLIC_URL + '/images/lays.jpg'} alt="lays" className="image" />
        <img src={process.env.PUBLIC_URL + '/images/zara.png'} alt="zara" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/wow.png'} alt="wow" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/UNILIVER.png'} alt="UNILIVER" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/sugar_3.png'} alt="sugar" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/rolex.jpeg'} alt="rolex" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/redbull.png'} alt="redbull" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/rayban.png'} alt="rayban" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/puma.png'} alt="puma" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/prada.png'} alt="prada"className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/polycab.png'} alt="polycab" className="image" />
           <img src={process.env.PUBLIC_URL + '/images/peterengland.png'} alt="peterengland" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/nike.png'} alt="nike" className="image" />
           <img src={process.env.PUBLIC_URL + '/images/nestle.png'} alt="nestle" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/maybelline.png'} alt="maybelline" className="image"/>
           <img src={process.env.PUBLIC_URL + '/images/mac.png'} alt="mac" className="image"/>
            <img src={process.env.PUBLIC_URL + '/images/louis.png'} alt="louis" className="image" />
        <img src={process.env.PUBLIC_URL + '/images/loreal.png'} alt="loreal" className="image" />
         <img src={process.env.PUBLIC_URL + '/images/adidas.png'} alt="adidas" className="image" />
        </div>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

