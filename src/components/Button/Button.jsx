import './button.css'

export default function Button({onclick, content, styles}){
    return(
        <button onClick={() => onclick()} className='pri' style={{...styles}}>{content || "Nothing"}</button>)
}