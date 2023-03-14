import React from "react";
import { useParams } from "react-router-dom";
import repoData from "../repos.json";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import './Readme.css';

export const Readme = (props) => {
    const [readmeData, setreadmeData] = useState('');
    const { projectname } = useParams();
    const repository = repoData.filter((repo)=>( (repo.param === projectname)))
    console.log(repository);
    console.log(repository[0].readmelink);
    fetch(repository[0].readmelink)
.then((response) => response.text())
  .then((data) => (setreadmeData(data)));
  return (
    <div className="page">
        <div style={{
            color: 'white',
            padding: '10px',
            left: '20px'}}>github: <a href={repository[0].link}>Click Here</a></div>
        <div className="border">
            <Markdown>
                {readmeData}
            </Markdown>
        </div>
    </div>
    

  )
}