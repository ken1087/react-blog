import { useDispatch } from "react-redux"
import { plusStr } from './store'

const Test2Component = () => {

    const disPath = useDispatch();
    
    return(
        <button onClick={ () => { disPath(plusStr()) }}>문자열 추가하기</button>
    )
}

export default Test2Component