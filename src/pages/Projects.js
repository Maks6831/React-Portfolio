import React, { useState } from "react";
import repoData from "../repos.json";
import Card from "../components/Card.js";



const Projects = () => {
    {/*maps through the json data and creates cards(project component) which are then displayed on the projects page*/}
    
    


    return (
        <div style={{padding: "10px"}}>
            <h1 className="mb-4 text-3xl font-extrabold text-center md:text-5xl lg:text-6xl p-10">Projects</h1>
            <div>
            <section className="flex flex-wrap -m-4">
            {repoData.map((repo)=>(
                <Card
                    key={repo.id}
                    name={repo.name}
                    image={repo.image}
                    date={repo.date}
                    param={repo.param}
                    />
                    ))}
            </section>

            </div>
            
            
        </div>
    )
}

export default Projects;