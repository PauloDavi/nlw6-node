import express from 'express';

const app = express();

app.get('test', (request, response) => {
  return response.send('Olá NLW');
});

app.post('test-post', (request, response) => {
  return response.send('Olá NLW método POST');
});

app.listen(3000, () => console.log('server is running in port 3000'));
