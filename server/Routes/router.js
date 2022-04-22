import express from 'express';
import  {createUser,find, remove, update}  from '../controller/controler.js'
import auth from '../middleware/auth.js';
const route=express.Router();

// if you want to restict acces at a function we can do this with auth middleware
// route.post('/users',auth,createUser);


route.post('/users',createUser);
route.get('/',find);
route.get('/:id',find);
route.put('/users/:id',update);
route.delete('/users/:id',remove);



export default route;
