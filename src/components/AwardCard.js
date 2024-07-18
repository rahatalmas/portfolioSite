import './AwardCard.css';

const AwardCard = ({awardName,awardLevel,date,activities,impact}) =>{
    return (
        <div className='award-card'>
            <div className='award-card-row'>
                <div className='award-img-container'>
                    <img className='award-img' src='./assets/html.png'/>
                 </div>
                <div className='award-info'>
                   <h3>{awardName}</h3>
                   <p className='award-date-level'><span>{date} </span><span>{awardLevel}</span></p>
                   <p className='award-impact'>{impact}</p>
                </div>
            </div>
            <p className='award-activities'>{activities}k</p>
        </div>
    );
}

export default AwardCard;