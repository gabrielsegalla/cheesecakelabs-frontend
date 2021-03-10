import React from "react";
import Card from "../../components/Card/Card"
import "./styles.css";


const Home = ({News, isLoading}) => {
    
    return (
        <div className="container home-container">
            { isLoading && <div className="text-center loading-div">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> }
            {News.map((data, index) => {
                index = index + 1
                return (
                    <div key={index} className="item">
                        <Card CardType={index} News={data} />
                    </div>
                )
            })}
        </div>

    );
};

export default Home;