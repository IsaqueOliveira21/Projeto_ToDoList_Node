import app from './src/app';

const port = 3000;
app.listen(port, () => {
    console.log();
    console.log('Server running at port: ' + port);
    console.log('You can acess by route: http://127.0.0.1:' + port);
    console.log();
});