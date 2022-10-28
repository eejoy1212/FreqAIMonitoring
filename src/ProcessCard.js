import './ProcessCard.css';
const ProcessCard=()=>{

    return (
    <div className="process_card">
        ProcessCard
        <div className="daq_card">
           <div className="daq_title">DAQ</div> 
           <div className='daq_btn_set'>
           <button className="daq_start">Start</button>
            <button className="daq_stop">Stop</button>
           </div>
        </div>
        <div className="arc_card">
           <div className="arc_title">ARC</div> 
           <div className='arc_btn_set'>
           <button className="arc_start">Start</button>
            <button className="arc_stop">Stop</button>
           </div>
        </div>
    </div>)
}
export default ProcessCard;