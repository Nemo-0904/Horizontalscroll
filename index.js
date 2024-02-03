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
          <img src={process.env.PUBLIC_URL + '/images/amul.png'} alt="amul" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/apollotyre.jpeg'} alt="apollotyre" className="image" />
            <img src={process.env.PUBLIC_URL + '/images/asianpaints.png'} alt="asianpaints" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/chanel.png'} alt="chanel" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/cipla.png'} alt="cipla" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/cococola.png'} alt="cococola" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/colgate.png'} alt="colgate" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/dior.png'} alt="dior" className="image"/>
          <img src={process.env.PUBLIC_URL + '/images/fasttrack.png'} alt="fasttrack" className="image" />
          <img src={process.env.PUBLIC_URL + '/images/gucci.png'} alt="gucci" className="image"/>
          {/* <img src={process.env.PUBLIC_URL + '/images/hnm.png'} alt="hnm" className='hnm' />
          <img src={process.env.PUBLIC_URL + '/images/haldiram.png'} alt="haldiram" className='haldiram' /> */}
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



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Index() {
//   return (
//     <>
//       <div className="scroll-right">
//         <div className="m-scroll-right">
//           <img src={process.env.PUBLIC_URL + '/images/adidas.png'} alt="adidas" className="adidas" />
//           <img src={process.env.PUBLIC_URL + '/images/amul.png'} alt="amul" className='Amul' />
//           <img src={process.env.PUBLIC_URL + '/images/apollotyre.jpeg'} alt="apollotyre" className='apollotyre' />
//             <img src={process.env.PUBLIC_URL + '/images/asianpaints.png'} alt="asianpaints" className='asianpaints' />
//           <img src={process.env.PUBLIC_URL + '/images/chanel.png'} alt="chanel" className='chanel' />
//           <img src={process.env.PUBLIC_URL + '/images/cipla.png'} alt="cipla" className='cipla' />
//           <img src={process.env.PUBLIC_URL + '/images/cococola.png'} alt="cococola" className='cococola' />
//           <img src={process.env.PUBLIC_URL + '/images/colgate.png'} alt="colgate" className='colgate.png' />
//           <img src={process.env.PUBLIC_URL + '/images/dior.png'} alt="dior" className='dior' />
//           <img src={process.env.PUBLIC_URL + '/images/fasttrack.png'} alt="fasttrack" className='fasttrack' />
//           <img src={process.env.PUBLIC_URL + '/images/gucci.png'} alt="gucci" className='gucci' />
//           {/* <img src={process.env.PUBLIC_URL + '/images/hnm.png'} alt="hnm" className='hnm' />
//           <img src={process.env.PUBLIC_URL + '/images/haldiram.png'} alt="haldiram" className='haldiram' /> */}
//           <img src={process.env.PUBLIC_URL + '/images/lakme.png'} alt="lakme" className='lakme' />
//            <img src={process.env.PUBLIC_URL + '/images/lays.jpg'} alt="lays" className="lays" />
//         </div>
//       </div>
//       <div className="scroll-left">
//         <div className="m-scroll-left">
//           <img src={process.env.PUBLIC_URL + '/images/zara.png'} alt="zara" className="zara" />
//           <img src={process.env.PUBLIC_URL + '/images/wow.png'} alt="wow" className="wow" />
//           <img src={process.env.PUBLIC_URL + '/images/UNILIVER.png'} alt="UNILIVER" className="uniliver" />
//           <img src={process.env.PUBLIC_URL + '/images/sugar_3.png'} alt="sugar" className="sugar" />
//           <img src={process.env.PUBLIC_URL + '/images/rolex.jpeg'} alt="rolex" className="rolex" />
//           <img src={process.env.PUBLIC_URL + '/images/redbull.png'} alt="redbull" className="redbull" />
//           <img src={process.env.PUBLIC_URL + '/images/rayban.png'} alt="rayban" className="rayban" />
//           <img src={process.env.PUBLIC_URL + '/images/puma.png'} alt="puma" className="puma" />
//           <img src={process.env.PUBLIC_URL + '/images/prada.png'} alt="prada" className="prada" />
//           <img src={process.env.PUBLIC_URL + '/images/polycab.png'} alt="polycab" className="polycab" />
//            <img src={process.env.PUBLIC_URL + '/images/peterengland.png'} alt="peterengland" className="peterengland" />
//           <img src={process.env.PUBLIC_URL + '/images/nike.png'} alt="nike" className="nike" />
//            <img src={process.env.PUBLIC_URL + '/images/nestle.png'} alt="nestle" className="nestle" />
          
//           <img src={process.env.PUBLIC_URL + '/images/maybelline.png'} alt="maybelline" className="maybelline" />
//            <img src={process.env.PUBLIC_URL + '/images/mac.png'} alt="mac" className="mac" />
//             <img src={process.env.PUBLIC_URL + '/images/louis.png'} alt="louis" className="louis" />
//              <img src={process.env.PUBLIC_URL + '/images/loreal.png'} alt="loreal" className="loreal" />
          
          
          
        
//         </div>
//       </div>
//     </>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById('root'));
