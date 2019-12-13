import React from 'react';
import { Task } from './Task';
import { ListItem } from './ListItem';
import { List } from '@ui5/webcomponents-react/lib/List';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';

interface TaskListProps{
    tasks : Array<Task>;
}

export const TaskList: React.FC<TaskListProps> = (props) => {
    const [tasks, setTasks] = React.useState(props.tasks);

    React.useEffect(() => { setTasks(props.tasks) }, [props.tasks]);

    return(
        <List>
            {tasks.map((task, index) =>  
                <CustomListItem key={index} style={{verticalAlign : 'middle'}}>
                    <ListItem task={task}/>       
                </CustomListItem>
            )}
        </List>
    );
}