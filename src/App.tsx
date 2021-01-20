import React,{useState}from 'react';
import './App.css';
import { useAPI,fetch } from './rapper';
import{ Button, CircularProgress, List,ListItem,ListItemSecondaryAction,ListItemText, TextField}from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline'


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);



function App() {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

  const[timestamp,setTimestamp]=useState(0)
  const[data]=useAPI['GET/todo/list']({timestamp})
  const [todoName, setTodoName]=useState('')
  const [loading,setLoading]=useState(false)
  const createTodeHandler= async ()=>{
    setLoading(true)
      await fetch['PUT/todo']({name:todoName})
      setLoading(false)
      setTodoName('')
      setTimestamp(Date.now())
  }

  const deleteTodoHandler=async(id:number)=>{
    setLoading(true)
    await fetch['PUT/todo']({name: todoName})
    setLoading(false)
    setTodoName('')
    setTimestamp(Date.now())
  }
//
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <div className="App">
      {loading &&<CircularProgress style={{ margin:8 }}  />}

     <List className={classes.root}>
     {data?.data.map(x=>
       
          <ListItem key={x.id} >
            <ListItemIcon>
              <Checkbox
                edge="start"
                //checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                //inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText primary={x.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
              <RemoveIcon onClick={() =>deleteTodoHandler(x.id)}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
       
      )  }
    </List>
     
     <div className="Control"><TextField
        id="outlined-basic"
        label="Outlined" 
        variant="outlined"
        placeholder="请输入TODO的名称"
        value={todoName}
        onChange={e=>setTodoName(e.target.value)}
        />
        </div>

        <Button
        variant="contained"
        color="secondary"
        disabled={todoName.trim()===''}
        style={{marginLeft:8 }}
        onClick={createTodeHandler}
       >ADD</Button>
    </div>




  );
}

export default App;

