import React from 'react'

export default function ProjectCard({project: {name, id, description, status}}) {
  return (
    <div className="card mb-2 mt-2">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-subtitle mb-2 text-muted">{id}</div>
        <div className="card-text">{description}</div>
        <div className="text-success small">{status}</div>
      </div>
    </div>
  )
}
