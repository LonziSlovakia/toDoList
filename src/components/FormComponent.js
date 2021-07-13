import React, { useState } from 'react';

const Form = (props) => {
    const { color, odoslanie } = props
    const [task, setTask] = useState('');

    return (
        <form onSubmit={(e) => { e.preventDefault(); odoslanie(task); setTask('') }}>
            <input onChange={e => setTask(e.target.value)} value={task} name="name" type="text" className={`border-b-2 border-${color}-500 bg-transparent text-${color}-700 focus:outline-none focus:border-${color}-700 text-center`} />
            <input type="submit" value="Pridať úlohu" className={`my-7 mx-2 p-1 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400 focus:shadow-inner`} />
        </form>
    );
}

export default Form