import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from 'react';

function Profile({user})
{
  const [like,setLike]=useState(0)
  const [dislike,setDislike]=useState(0)
  const [isToggle,setIsToggle]=useState(true)
  const toggleVisibility = () => {
    setIsToggle(!isToggle);
  };


  return(
    
      <Grid item xs={4}>
       
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={user.pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.uname}

          <span style={{color:user.ratting>=7?'green':'red',paddingLeft:'10px',fontSize:'15px'}}><StarRateIcon/>{user.ratting}</span>
        </Typography>
        <div>
          <Button onClick={toggleVisibility(isToggle?'Hide' : 'show')}>Toggle summary</Button>
          {isToggle && <p>This is the best movie in 2024.It have good grapics</p>}
          </div>
      </CardContent>
      <CardActions>
        <ThumbUpIcon onClick={()=>setLike(like+1)}/>{like}
        <ThumbDownTwoToneIcon onClick={()=>setDislike(dislike+1)}/>{dislike}
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    </Grid>

  )
}
export default Profile