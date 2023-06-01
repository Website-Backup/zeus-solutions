import React from 'react'

const ProjectCard = (data) => {
  return (
    <div>
        <div>
            <h1>{data.name}</h1>
            <img src={data.img}></img>
        </div>
    </div>
  )
}

export default ProjectCard