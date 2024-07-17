import IndexHeader from '../components/IndexHeader';
import './ResearchPage.css';

const ResearchPage = () =>{
    return(
        <div className='page-container'>
           <IndexHeader title1="Thesis"/>
           <div className='content-container'>

           </div>

           <IndexHeader title1="Data" title2="Collection"/>
           <div className='dataCollection-container'>

           </div>

           <IndexHeader title1="Conference"/>
           <div className='conference-container'>

           </div>
        </div>
    );
}

export default ResearchPage;