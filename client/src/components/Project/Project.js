import React from 'react';
//import BaseballDirect from "/assets/BaseballDirect.PNG";

const projects = [
    {
        id: 1,
        link: "https://mrohmann.github.io/BaseballDirect/",
        image: "/assets/BaseballDirect.PNG",
        title: "Baseball Direct",
        github: "https://github.com/mrohmann/BaseballDirect"
    },
    {
        id: 2,
        link: "https://stock-shout.herokuapp.com/",
        image: "../../../assets/StockShout.PNG",
        title: "Stock Shout",
        github: "https://github.com/nickjchin/stock-shout"
    },
    {
        id: 3,
        link: "https://masudahmed88.github.io/CodeQuiz/",
        image: "/CodeQuiz.PNG",
        title: "Code Quiz",
        github: "https://github.com/masudahmed88/CodeQuiz"
    },
    {
        id: 4,
        link: "https://fitness-tracker-masud.herokuapp.com/",
        image: "assets/FitnessTracker.PNG",
        title: "Fitness Tracker",
        github: "https://github.com/masudahmed88/WorkoutTracker"
    },
    {
        id: 5,
        link: "https://masudahmed88.github.io/PasswordGenerator/",
        image: "assets/PasswordGenerator.PNG",
        title: "Password Generator",
        github: "https://github.com/masudahmed88/PasswordGenerator"
    },
    {
        id: 6,
        link: "https://masudnotetaker.herokuapp.com/",
        image: "assets/NoteTaker.PNG",
        title: "Note Taker",
        github: "https://github.com/masudahmed88/NoteTaker"
    }
]


const Project = () => {

    return (
        <div>
            {projects.map((p) =>
                <div>
                    <a key={p.id} href={p.link}> <img src={p.image}
                    alt={p.title} height="150px" width="150px"></img></a>
                    <h2>{p.title}</h2>
                    <a href={p.github}><button>Github Repository</button></a>
                </div>
            )}
        </div>
    );
}

export default Project; 
