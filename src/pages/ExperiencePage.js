import IndexHeader from '../components/IndexHeader';
import '../pages/ExperiencePage.css';

const ExperiencePage = () =>{
    return (
        <div className='page-container'>
          <IndexHeader title1={"Internships"}/>
          <IndexHeader title1={"Training"}/>
          <IndexHeader title1={"Event Coordination and"} title2={"Leadership"}/>
          <IndexHeader title1={"Clubbing"}/>
        </div>
    );
}

export default ExperiencePage;