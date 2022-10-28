import './DivCard.css';
const DivCard=()=>{
    return (
    <div className="div_card">
        <div className="div_title">Div Select</div>
        <div>
        <button className='selected_chip'>10</button>
        <button className='unselected_chip'>20</button>
        <button className='unselected_chip'>50</button>
        <button className='unselected_chip'>100</button>
        <button className='unselected_chip'>200</button>
        <button className='unselected_chip'>500</button>
        <button className='unselected_chip'>1000</button>
        <button className='unselected_chip'>2000</button>
        </div>
    </div>)
}
export default DivCard;