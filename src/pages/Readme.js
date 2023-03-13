import React from "react";
import { useParams } from "react-router-dom";
import repoData from "../repos.json";
import { useState } from "react";

export const Readme = (props) => {
    const { projectname } = useParams();
    const repository = repoData.filter((repo)=>( (repo.param == projectname)))
    console.log(repository);
    return (
        
        <div>HEllo MAte</div>

    )

}