import React from 'react';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Task } from "./Task"

interface ListItemProps{
    task: Task;
}

export const ListItem: React.FC<ListItemProps> = (props)  => {
    const [ task, setTask ] = React.useState<Task>(props.task);
        return (
        <div>
            <CheckBox 
                checked={task.isDone} 
                onChange={(event) => {setTask({
                    text: task.text,
                    isDone : event.getParameter('checked')
                })}}
            />        
            <Label className={task.isDone? 'ListItemDone' : 'ListItem'}>{task.text}</Label>
        </div>
    );
}