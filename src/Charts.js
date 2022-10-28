import './Charts.css';
import ArcChart from './ArcChart';
import RawChart from './RawChart';
const WWWCharts=()=>{

    return (
    <div>
         <div className="arc_chart_area">
        <div className='title_and_btn'>
         <div className="arc_chart_title">Arc</div>
         <div className='maximum_btn'>확대아이콘</div>
        </div>
        <div className='arc_chart'><ArcChart/></div>
   
    </div>
      <div className="raw_chart_area">
      <div className='title_and_btn'>
       <div className="raw_chart_title">Raw Data</div><button className='freeze_btn'>Freeze</button>
       <div className='maximum_btn'>확대아이콘</div>
      </div>
  <div className='raw_chart'><RawChart/></div>
  </div>
    </div>
   )
}
export default WWWCharts;