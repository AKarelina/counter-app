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
        setInitialValue(event.currentTarget.value)
    }

    function onClickAddCounter() {
        let newCount = {id:v1(), value: initialValue}
        setCounts([...counts, newCount])
        console.log(counts)
    }
    function onClickDeleteCount(id) {
        setCounts(counts.filter((count)=>count.id!==id))
    }
    function onClickIncreaseCount(id) {
        let increasedCounts = counts.find(count=> count.id === id)
        increasedCounts["value"] += 1
        setCounts([...counts])

    }
    function onClickDecreaseCount(id) {
        let increasedCounts = counts.find(count=> count.id === id)
        increasedCounts["value"] -= 1
        setCounts([...counts])

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
