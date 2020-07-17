import express from 'express';
import path from 'path';
import template from './src/template';
import server from './src/server';
import data from './assets/data.json';
import compression from 'compression';

const app = express();

app.use(compression());

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));


app.disable('x-powered-by');

app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  apps: data
}

app.get('*', (req, res) => {
  const { preloadedState, content}  = server(initialState)
  const response = template("React - SSR", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});


// app.get('/client', (req, res) => {
//   let response = template('Client Side Rendered page')
//   res.setHeader('Cache-Control', 'assets, max-age=604800')
//   res.send(response)
// });
