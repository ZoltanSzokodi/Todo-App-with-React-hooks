import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo(props) {
  return (
    <ListItem>
      <CheckBox
        tabIndex={-1}
        checked={props.completed}
        onClick={() => props.toggleTodo(props.id)} />
      <ListItemText style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.task}
      </ListItemText>
      <IconButton
        aria-label="delete"
        onClick={() => props.removeTodo(props.id)} >
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" >
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo
