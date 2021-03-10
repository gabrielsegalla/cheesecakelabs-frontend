import React from "react";
import "./styles.css";

const Card = ({ CardType, News }) => {

const isSecondOrThirtyCard = (card) =>{
    return card === 2 || card === 3 
}
  return (
    <div>
        { CardType === 1 &&
            <div>
                <div className="category-container">
                    <p className="category" style={{ color: News.category.hex_color }}>{News.category.name}</p>
                </div>
                <div className="first-item-image-container">
                    <div className="image">
                        <img src={News.image_url} className="main-image" alt={News.title} />
                        <div className="image-overlay"></div>
                        <button className="image-btn">Read More</button>
                    </div>
                </div>
                <div className="first-item-title-container">
                    <h5 className="first-item-title">{News.title}</h5>
                </div>
                <div className="author-container">
                    <img src={News.author.image_url} alt="Avatar" className="first-item-avatar"></img>
                    <p className="item-avatar-name">by {News.author.name}</p>
                </div>
                <div className="first-item-description-container">
                    <p className="item-description">{News.description}</p>
                </div>
            </div>
        }
        { isSecondOrThirtyCard(CardType) &&
            <div>
                <div className="category-container">
                    <p className="category" style={{ color: News.category.hex_color }}>{News.category.name}</p>
                </div>
                <div className="item-image-container">
                    <div className="image">
                        <img src={News.image_url} className="secondary-image" alt={News.title} />
                        <div className="image-overlay"></div>
                        <button className="image-btn">Read More</button>
                    </div>
                </div>
                <div className="item-title-container">
                    <h5 className="item-title">{News.title}</h5>
                </div>
                <div className="author-container">
                    <img src={News.author.image_url} alt="Avatar" className="item-avatar"></img>
                    <p className="item-avatar-name">by {News.author.name}</p>
                </div>
                <div className="item-description-container">
                    <p className="item-description">{News.description}</p>
                </div>
            </div>
        }
        { CardType > 3 &&
            <div className="item-last-row">
                <div className="category-container">
                    <p className="category" style={{ color: News.category.hex_color }}>{News.category.name}</p>
                </div>
                <div className="item-title-container">
                    <h5 className="item-title">{News.title}</h5>
                </div>
                <div className="author-container">
                    <img src={News.author.image_url} alt="Avatar" className="item-avatar"></img>
                    <p className="item-avatar-name">by {News.author.name}</p>
                </div>
                <div className="item-description-container">
                    <p className="item-description">{News.description}</p>
                </div>
            </div>
        }
    </div>
  );
};

export default Card;
