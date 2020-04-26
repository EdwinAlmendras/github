import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default async function Home() {
  const classes = useStyles();
  
  
 let { repos } = axios.get('http://localhost:5000')
 alert(data)
 
 let listRepos = repos.map(repo => (<Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { repo.name }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { repo.url}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="danger">
            Delete
          </Button>
        </CardActions>
      </Card>))
 
  return (
  <div>
  <Typography gutterBottom variant="h4" component="h1">
   Repos
   </Typography>
  {listRepos}
  </div>
  );
}
