import AwardCard from '../components/AwardCard';
import IndexHeader from '../components/IndexHeader';
import './AchievementPage.css';

const AchievementPage = () =>{
    return(
        <div className='page-container'>
            <IndexHeader title1="Network And" title2="MemberShip"/>
            <div >

            </div>
            <IndexHeader title1="Award" title2=""/>
            <div className='award-section'>
              <AwardCard
                 awardName="Duke of Edinburgh Bronze Award"
                 awardLevel="Bronze"
                 date="updating"
                 activities="Volunteering: Contributed to community service by organizing educational workshops for underprivileged children.
                            Physical Activity: Improved fitness through regular walking.
                            Skills Development: Enhanced proficiency in Python programming through self-study and practical projects.
                            Expedition: Completed a hiking expedition in Sylhet, demonstrating teamwork and navigation skills."
                 impact="Receiving the Duke of Edinburgh Bronze Award has significantly contributed to my personal development, fostering leadership, resilience, and a commitment to community service."
              />
            </div>
        </div>
    );
}

export default AchievementPage;