import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
 root: {
  minWidth: 275,
 },
 bullet: {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
 },
 title: {
  fontSize: 14,
 },
 pos: {
  marginBottom: 12,
 },
});

export default function Home() {
 const classes = useStyles();
 const bull = <span className={classes.bullet}>•</span>;

 return "loading..."

 let repos = await axios.get("http://localhost:5000/api/repos")

 const reposList = repos.map(e => {
  .return(
   <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {e.name}
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
                    <Button size="small">Copy</Button>
        </CardActions>
      </Card>
  );
 })

 return (<Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
   {reposList}
  </Grid>)
}