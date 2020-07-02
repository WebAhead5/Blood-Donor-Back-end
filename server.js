const app = require('./src/app');

app.set('port', process.env.PORT || 8080)
let port = app.get('port')

app.listen(port, () => {
    console.log(`App running on port:${port}`)
})