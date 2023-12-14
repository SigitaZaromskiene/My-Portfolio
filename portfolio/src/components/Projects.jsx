import Btn from "./Btn"

function Projects (){
    return(
        <div className='projects_container_filter wrapper'>
              <Btn text='PROJECTS' className='btn btn_active'/>
        <Btn text='HOBBIES' className='btn'/>
      
     </div>
    )
}

export default Projects