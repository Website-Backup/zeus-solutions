import React from 'react'

const Projects = (data) => {
  return (
    <div>
    <div>
    <h1>{data.title}</h1>
    </div>

    <div>
        {
            data.details.map((i)=><ProjectCard data={i}></ProjectCard>)
        }
    </div>
</div>
  )
}

export default Projects