import './App.css';
import React, {useState} from "react";
import {v1} from "uuid";

function App() {
    const initialCounts = [
        {
            id: v1(),
            value: 0
        }
    ]

    const [counts, setCounts] = useState(initialCounts)
    const [initialValue, setInitialValue] = useState(null)

    function onChangeSetInitialValue(event) {

        setInitialValue(event.target.value)

    }

    function onClickAddCounter() {
        let newCount = {id:v1(), value: Number(initialValue) || 0}
        setCounts([...counts, newCount])
    }
    function onClickDeleteCount(id) {
        setCounts(counts.filter((count)=>count.id!==id))
    }
    function onClickIncreaseCount(id) {
        setCounts(counts.map(count=>count.id===id? {...count, value: count.value + 1} : count))

    }
    function onClickDecreaseCount(id) {
        setCounts(counts.map(count => count.id === id? {...count, value: count.value - 1}: count))

    }
    return (
        <div className="App">
            <div>
                <ul>
                    {counts.map((count) => {
                        return (
                            <li key={count.id}>
                                {count.value}
                                <button onClick={()=>onClickDeleteCount(count.id)}>Delete</button>
                                <button onClick={()=>onClickIncreaseCount(count.id)}>Increase</button>
                                <button onClick={()=>onClickDecreaseCount(count.id)} >Decrease</button>
                            </li>
                        )
                    })}
                </ul>
                <input onChange={onChangeSetInitialValue}/>
                <button onClick={onClickAddCounter}>Add Counter</button>
            </div>
        </div>
    );
}

export default App;
