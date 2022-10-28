import './StatusCard.css';
import StorageCard from './StorageCard';
const StatusCard=()=>{

    return (<div className='status_card'>
        <div className="status_contents">
        <div className="title">Status</div>  
        <div className="content_1">
        <div className="content_1_title">FreqAI_Daq:</div><div className='chip'>Running</div>
        </div> 
        <div className="content_2">
        <div className="content_2_title">DAQ Connected:</div><div className='chip'>Con</div>
        </div> 
        <div className="content_3">
        <div className="content_3_title">Monitoring:</div><div className='chip'>Arc Processing</div>
        </div> 
        
        </div>
        <StorageCard/>
     
        
        </div>)
}
export default StatusCard;