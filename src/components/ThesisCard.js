import './ThesisCard.css';

const ThesisCard = ({thesis,link}) =>{
    return(
        <div className='thesisCard-container'>
           <h1 className='thesis-title'>Title: {thesis.thesisTitle}</h1>
           <p className='abstract'>Abstract: {thesis.abstract}</p>
           <h3>Key Contributions</h3>
           <ul>
            <li>VisionTransformerAccuracy: {thesis.keyContributions.visionTransformerAccuracy}</li>
            <li>cnnAccuracy: {thesis.keyContributions.cnnAccuracy}</li>
            <li>{thesis.keyContributions.impact}</li>
           </ul>
           <h3>Skills Gained</h3>
           <p>Technical Skills: {thesis.skillsGained.technicalSkills.map(skill=>(
             <span>{skill}, </span>
           ))}</p>
           <p>Research Skills: {thesis.skillsGained.researchSkills.map(skill=>(
             <span>{skill}, </span>
           ))}</p>
          <p>Technical Skills: {thesis.skillsGained.projectManagement.map(skill=>(
             <span>{skill}, </span>
           ))}</p>
        </div>
    );
}

export default ThesisCard;