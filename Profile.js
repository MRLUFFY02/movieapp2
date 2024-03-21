import {Card,CardMedia,CardContent,Typography,CardActions,Button,Grid} from '@mui/material'

function Profile({user})
{
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
        </Typography>
          Lizards are a widespread group of squamate
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    </Grid>

  )
}
export default Profile