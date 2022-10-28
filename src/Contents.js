import './Contents.css';
import ProcessCard from './ProcessCard';
import SimulationCard from './SimulationCard';
import ConfigCard from './ConfigCard';
import StatusCard from './StatusCard';
import ParameterCard from './ParameterCard';
const Contents=()=>{
    return (
    
    <div className="bg_card">

<ProcessCard/>
<SimulationCard/>
<div className='config_and_status'><ConfigCard/><StatusCard/></div>
<ParameterCard/>


    </div>
    // <div className="process_card">컨텐츠!!</div>
    
    )
}
export default Contents;