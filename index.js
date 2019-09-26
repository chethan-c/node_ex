const express = require('express')
let app = express();

app.get('/',(req, res)=>{
    res.send('hi');
});
app.listen(8181, () => console.log('app started on 8181'));