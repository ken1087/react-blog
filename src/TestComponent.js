import { useSelector } from "react-redux"

const TestComponent = () => {

    const str = useSelector((store) => store.str);

    return(
        <div>
            <h1>{str}</h1>
        </div>
    )
}

export default TestComponent