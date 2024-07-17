import IndexHeader from '../components/IndexHeader';
import ThesisCard from '../components/ThesisCard';
import './ResearchPage.css';

const ResearchPage = () =>{
    return(
        <div className='page-container'>
           <IndexHeader title1="Thesis"/>
           <div className='thesis-container'>
              <ThesisCard 
              ThesisTitle={"Salinity-Resilient Crop Health Monitoring: Automated Disease Detection in Luffa Aegyptiaca Leaves using Vision Transformer & CNN"}
              Abstract={"Leveraged advanced deep learning techniques to automate disease detection in Luffa Aegyptiaca leaves. Collected and categorized images of leaves infected with Cucumber Mosaic Virus, Downey Mildew, and Leaf Spot. Achieved high accuracy with both CNN and Vision Transformer models."}
              />
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