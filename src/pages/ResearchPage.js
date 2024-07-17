import IndexHeader from '../components/IndexHeader';
import ThesisCard from '../components/ThesisCard';
import './ResearchPage.css';

const ResearchPage = () =>{

    const thesisDetails = {
        thesisTitle: "Salinity-Resilient Crop Health Monitoring: Automated Disease Detection in Luffa Aegyptiaca Leaves using Vision Transformer & CNN",
        abstract: "Leveraged advanced deep learning techniques to automate disease detection in Luffa Aegyptiaca leaves. Collected and categorized images of leaves infected with Cucumber Mosaic Virus, Downey Mildew, and Leaf Spot. Achieved high accuracy with both CNN and Vision Transformer models.",
        keyContributions: {
          visionTransformerAccuracy: "99.85%",
          cnnAccuracy: "98.32%",
          impact: "Demonstrated the potential of deep learning models in automating disease detection in agricultural crops, particularly in saline-affected coastal regions."
        },
        skillsGained: {
          technicalSkills: ["Vision Transformer", "Convolutional Neural Network (CNN)", "Google Colab"],
          researchSkills: ["Image collection and categorization", "Model training and evaluation"],
          projectManagement: ["Data management", "Cloud computing", "Collaborative research"]
        }
      };

    return(
        <div className='page-container'>
           <IndexHeader title1="Thesis"/>
           <div className='thesis-container'>
              <ThesisCard 
              T thesis={thesisDetails}
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