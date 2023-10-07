import React from 'react'
import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../querries/projectQuerries';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (error) {
    return <div>Something went wrong</div>
  }
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  
  return <div className='mt-3'>
    <h4 className="title">Projects</h4>
    {data.projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
    </div>
  
}
