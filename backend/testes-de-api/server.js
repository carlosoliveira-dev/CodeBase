const {app, port} = require('./app');

app.listen(port, () => {
  console.log(`App listening on port ${port} http://localhost:3000/`);
})