import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.editTodo(props.id, value);
      reset();
      props.toggleEditForm();
    }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth />
    </form>
  )
}

export default EditTodoForm;
