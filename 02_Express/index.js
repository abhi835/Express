import express from "express";

const app = express();
const port = 3000;

app.use(express.json())
                           // In order to run the server first go to the target folder using cd like cd 02_Express as index.js file is inside this folder then run command like npm run dev so that the server start running and listening the port also so that the nodemon also start listening as both are inside script 
let teaData  =[]
let nextid  =1
// this is add a new tea object
app.post('/teas',(req,res)=>{
        
  const{name,price} = req.body
  const newTea = {id:nextid++,name,price}
  teaData.push(newTea)
  res.status(201).send(newTea)
})
//get all tea
app.get('/teas',(req,res)=>{
      res.status(200).send(teaData)
      
})
// get a tea with id
app.get('/teas/:id',(req,res)=>{
  const tea = teaData.find(t=>t.id===parseInt(req.params.id));
  if(!tea){
    return res.status(404).send('Well ,Tea not found ')
  }
  res.status(200).send(tea);
})

// update the tea
app.put('/teas/:id',(req,res)=>{
  const tea = teaData.find(t=>t.id===parseInt(req.params.id))
   if (!tea) {
     return res.status(404).send("Well ,Tea not found ");
   }
   //now we'll update with that id
   const {name,price} = req.body
   tea.name  =name
   tea.price  =price
   res.send(200).send(tea)
})

// delete the tea 
app.delete('/teas/:id',(req,res)=> {
   const index= teaData.findIndex(t=>t.id===parseInt(req.params.id))
   if(index=== -1){
         return res.status(404).send('tea not found')
   }
   teaData.splice(index,1)
   return res.status(204).send("tea deleted successfully");
})

// app.get("/", (req, res) => {

//   res.send("hello from abhishek patel and his tea");
// });
// app.get("/ice-tea", (req, res) => {
//   res.send("its just ice tea");
// });
// app.get("/twitter", (req, res) => {
//   res.send("ice tea is on twitter now");
// });




app.listen(port, () => {
  console.log(`Server is running at port: ${port}....`);
});
