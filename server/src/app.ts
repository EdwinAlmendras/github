
import githubRoutes from './routesroutes'-github';
import bodyParser from 'body-parser'
import express from 'express'

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
 );
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

 next();
});

app.use('/api', githubRoutes);

/*
app.use((req, res, next) => {
 const error = new HttpError('Could not find this route.', 404);
 throw error;
});

*/

(async () => {
 /*
 try {
   
  await mongoose
    .connect(
     `mongodb+srv://academind:ORlnOPLKvIH9M9hP@cluster0-ntrwp.mongodb.net/mern?retryWrites=true&w=majority`
    )
 }
 
 catch(err){ console.log(err)}
 */
 app.listen(5000)
 
})()