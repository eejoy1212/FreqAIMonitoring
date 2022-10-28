import ProgressBar from './ProgressBar';
import './SimulationCard.css';
const SimulationCard =()=>{


    return (
    <div> 
        <div className="sim_card">
    Simulation
    <div className='sim_btn_set'>
    <button className="file_load">File Load</button>   
   <button className="simulation">Simulation</button>
    </div>

   <div className='file_upload_btn'>File Upload</div>
   <div className='file_path'>파일경로dsdadassadsadsadsdsa</div>
   <div className='file_load_progress'>File Load</div>
      <ProgressBar/>
        </div>
        </div>);
}
export default SimulationCard;