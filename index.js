import express from "express";
import { engine } from 'express-handlebars';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
const students = [
    {
        id: 1,
        name: "ahmed",
        city: "shibin"
    },
    {
        id: 2,
        name: 'yasser',
        city: 'tanta'


    },
    {
        id: 3,
        name: 'andrea',
        city: 'tanta'


    },
    {
        id: 4,
        name: 'mohamed',
        city: 'shebin'


    },
];

const studentsFunction = (request, response) => {
    response.render('students',{layout: false, students})

    
}


app.get("/students", studentsFunction);

app.get('/students/:id',(req,res)=> {
    const id=req.params.id;
    const student=students.find((item)=>{
        return item.id==id})
    res.render("students", { layout: false, student: student })
    
    
    });
    

app.get('/users',(req,res)=> {
    res.render("users")
    
});
 
app.listen(5000);