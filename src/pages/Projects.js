import React, { useState } from "react";
import repoData from "../repos.json";
import Card from "../components/Card.js";


const Projects = () => {
    


    return (
        <div>
            <h1>Projects</h1>
            <section class="flex flex-wrap -m-4">
            {repoData.map((repo)=>(
                <Card
                    key={repo.id}
                    name={repo.name}
                    image={repo.image}
                    date={repo.date}
                    link={repo.link}
                    />
                    ))}
            </section>
            
        </div>
    )
}

export default Projects;