import React from "react";
import { useParams } from "react-router-dom";
import repoData from "../repos.json";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import './Readme.css';
{/*The readme is acquired from github using a fetch call. the data is then is then converted to html thought the 
Markdown-to-jsx package and displayed to the page.
*/}

export const Readme = (props) => {
    {/*The following functions add css class to the readme elements. the classes are located in readme.css*/}
    const Readmeh1 = ({ children, ...props }) => (
        <h1 {...props}>{children}</h1>
    );
    const readmeh2h3 = ({ children, ...props }) => (
        <h3 {...props}>{children}</h3>
    );
    const readmeA = ({ children, ...props }) => (
        <a {...props}>{children}</a>
    );
    const readmeP = ({ children, ...props }) => (
        <p {...props}>{children}</p>
    );
    const readmeImg = ({ children, ...props }) => (
        <img {...props}>{children}</img>
    );



    const [readmeData, setreadmeData] = useState('');
    {/*Set url to project name */}
    const { projectname } = useParams(); 
    {/* finds respository from jason data and uses link to fetch readme data */}
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
            left: '20px'}}>github: <a href={repository[0].link} className="readme-a">Click Here</a></div>
        <div className="border">
            {/* the markdown converts readme text into jsx the options allows adding classes to html element */}
        <Markdown
        options={{
            overrides: {
                h1: {
                    component: Readmeh1,
                    props: {
                        className: 'readme-h1',
                    },
                },
                h2: {
                    component: readmeh2h3,
                    props: {
                        className: 'readme-h2-h3',
                    },
                },
                h3: {
                    component: readmeh2h3,
                    props: {
                        className: 'readme-h2-h3',
                    },
                },
                a: {
                    component:readmeA,
                    props: {
                        className: 'readme-a',
                    },
                },
                p: {
                    component: readmeP,
                    props: {
                        className: 'readme-p',
                    }
                },
                img: {
                    component: readmeImg,
                    props: {
                        className: 'readme-img',
                    },
                },
                

            },
        }}
    >
        {readmeData}

    </Markdown>

        
        </div>
    </div>
    

  )
}