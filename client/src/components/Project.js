import React from 'react';

const Project = () => {

const projects = [
    {
        key: 1,
        link: "https://mrohmann.github.io/BaseballDirect/",
        image: "./assets/BaseballDirect.PNG",
        title: "Baseball Direct",
        github: "https://github.com/mrohmann/BaseballDirect"
    },
    {
        key: 2,
        link: "https://stock-shout.herokuapp.com/",
        image: "./assets/StockShout.PNG",
        title: "Stock Shout",
        github: "https://github.com/nickjchin/stock-shout"
    }
]
 

    return (
        <div>
            {projects.map((p) =>
                <div>
                    <a href={p.link}> <img src={p.image}
                    alt={p.title} height="250px" width="250px"></img></a>
                    <h2>{p.title}</h2>
                    <a href={p.github}></a>
                </div>
            )}
        </div>
    );
}

export default Project; 
