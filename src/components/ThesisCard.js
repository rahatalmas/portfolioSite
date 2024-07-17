import './ThesisCard.css';

const ThesisCard = ({ThesisTitle,Abstract,KeyContribution,skills,link}) =>{
    return(
        <div className='thesisCard-container'>
           <h1 className='thesis-title'>Title: {ThesisTitle}</h1>
           <p className='abstract'>{Abstract}</p>
        </div>
    );
}

export default ThesisCard;