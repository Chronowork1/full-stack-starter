import {useState} from 'react';
import Countdown from './Countdown'

const Components = () => {
    const [seconds, setSeconds] = useState(0)

    const onSecondsChanged = (event) =>{
        const newSeconds = parseInt(event.target.value)
        setSeconds(newSeconds)
    }

    return (
        <div className="component">
            <h1>Components</h1>
            <p>{seconds} Seconds for my Timer</p>
            <input 
                type="number"
                value={seconds}
                onChange={onSecondsChanged}
            />

            <Countdown seconds={seconds}/>
        </div>
    )
}

export default Components;