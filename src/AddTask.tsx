import React, { useState } from 'react';
import { Input } from '@ui5/webcomponents-react/lib/Input'
import { Button } from '@ui5/webcomponents-react/lib/Button'
import { Task } from './Task'
 
interface AddTaskProps{
    addTask(task:Task) : void;
}

export const AddTask : React.FC<AddTaskProps> = (props) =>{

    const[text, setText] = useState<string>('');
    const addTask = props.addTask;

    const onClick = () : void => {                       
        if(text.length <= 0) return;
        addTask({
            text: text,
            isDone : false
        });
        setText('');
    }

    return(
        <div>
            <Input 
                value={text}
                placeholder='Enter your task here'
                onChange={(event) : void => { setText(event.getParameter('value'));}}
            />
            <Button onClick = {onClick}>Add Task</Button>
        </div>
    )

}