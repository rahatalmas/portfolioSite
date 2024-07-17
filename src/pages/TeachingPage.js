import IndexHeader from '../components/IndexHeader';
import './TeachingPage.css';

const TeachingPage = () =>{
    return(
        <div className='page-container'>
           <IndexHeader title1="Teaching" title2={"Experience"}/>
           <div className='content'>
                <div className="container">
                <div className="wrapper">
                    <ul className="sessions">
                    <li>
                        <h3 className='teaching-e-p'>Course Title: Lab Prefect - Software Project Course</h3>
                        <div className="time">January 2024 – Present</div>
                        <p className='teaching-e-p'>Institution: Daffodil International University (DIU)</p>
                        <p className='teaching-e-p'>Instructor: Ms. Tanzina Afroz Rimi, Lecturer, CSE Dept.</p>
                        <button className='more-btn'>More</button>
                    </li>
                    <li>
                        <div className="time">Date</div>
                    </li>
                    </ul>
                </div>
                </div> 
                </div>
        </div>
    );
}

export default TeachingPage;