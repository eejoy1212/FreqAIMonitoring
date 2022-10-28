import './ParameterCard.css';
import StorageCard from './StorageCard';
import CouplingCard from './CouplingCard';
import DivCard from './DivCard';
import ArcThresHoldCard from './ArcThresHoldCard';
const ParameterCard=()=>{
    return (
    <div className="parameter_card">
<div className="pa_title">Parameter</div>
<div className='div_gauge_and_others'>
<StorageCard/>
<div className='others'>
<div className='coupling_and_div'>
    <CouplingCard/><DivCard/>
</div>
<div className='thresholds'>
<ArcThresHoldCard/>
<ArcThresHoldCard/>

</div>
</div>

</div>

    </div>)
}
export default ParameterCard;