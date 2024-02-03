import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const description =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati error neque ducimus rerum assumenda pariatur accusamus";
const des =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa eum ratione placeat facere expedita nisi, fugit veritatis tempore nobis pariatur eius maiores quae eligendi? Ex, quae vel! Voluptatum, aliquid!";

const Card = ({ title, description, imageUrl, textClassName, imageClassName }) => (
  <article className="card">
    <div className="card-content">
      <div className={`card-image ${imageClassName}`}>
        <img src={imageUrl} alt={title} className="card-img" />
      </div>
      <div className={`card-text ${textClassName}`}>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p>{des}</p>
      </div>
    </div>
  </article>
);



function Content() {
  return (
    <div className="MultiContent">
    <Card
  title="Jewellry"
  description={description}
  imageUrl="https://i.pinimg.com/564x/27/6f/3c/276f3c7174c3132fb9ec057b1fffa7f9.jpg"
  textClassName="JewelleryText"
  imageClassName="JwelImage"
/>

         <Card
  title="Cosmetics"
  description={description}
  imageUrl="https://wallpapercave.com/wp/wp2004296.jpg"
  textClassName="CosmeticsText"
  imageClassName="CosImage"
/>
         <Card
  title="Clothes"
  description={description}
  imageUrl="https://i.pinimg.com/564x/7d/2d/42/7d2d42174993fb1d871b1354550b44e8.jpg"
  textClassName="ClothesText"
  imageClassName="ClothImage"
/>
         <Card
  title="Food"
  description={description}
  imageUrl="https://img.freepik.com/premium-photo/close-up-dark-minimalist-background-realistic-food_670382-59738.jpg"
  textClassName="FoodText"
  imageClassName="FoodImage"
/>
      </div>
  );
}

 ReactDOM.render(<Content />, document.getElementById('root'));
