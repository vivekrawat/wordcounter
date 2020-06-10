var express=require('express');
var app=express();
app.set('view engine','ejs');
app.use('/public',express.static('public'));
app.get('/',(req,res)=>{
    res.render(__dirname+'/views/index');
})
app.listen(3000,()=>{
    console.log('server is runnning');
});