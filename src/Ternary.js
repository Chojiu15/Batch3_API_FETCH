import {useState} from 'react'
import './Ternary.css'
import App from './App'
import Form from './Form'

const Example = () =>{
    const [bool, setBool] = useState(true)

    return(
        <div style={{textAlign : 'center'}}>
            <h1 className={bool ? 'blue' : 'red'}>Hello world</h1>
            <button onClick={() => setBool(!bool)} >
            Change the boolean value
            </button>
            {bool ? (
                <>
                        <h1></h1>
                        <h2></h2>
                        <p></p>
                </>
            )
        
        : ''}
        </div>
    )

}

export default Example