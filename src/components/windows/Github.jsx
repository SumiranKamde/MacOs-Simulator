import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./Github.scss"

const GitCard = ({data={id:1,image:"",title:",",description:"",tags:[],repoLink:"",demoLink:""}}) => {
    return <div className="card">

        <img src={data.image} alt="" srcset="" />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="tags">
            {
               data.tags.map(tag =><p className="tag">{tag}</p>)
            }
        </div>

        <div className="urls">

            <a href={data.repoLink}>Repository</a>
            <a href={data.demoLink}>Demo link</a>



        </div>

    </div>
}
const Github = () => {
  return (
    <MacWindow>
        <div className="cards">
            {githubData.map(project =>{
                return <GitCard data={project}/>
            })}


        </div>

    </MacWindow>
  )
}

export default Github