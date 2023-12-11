import './API_2_tester.css'

const API_2_tester_item = (props)=>{
    return(
        <div className="tester_item">
            <div>{props.data.id}</div>
            <div>{props.data.col1}</div>
            <div>{props.data.col2}</div>
        </div>
    )
}

export default API_2_tester_item;