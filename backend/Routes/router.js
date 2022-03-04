import express from 'express';
import  {createUser,find, remove, update}  from '../controller/controler.js'
const route=express.Router();

route.post('/users',createUser);
route.get('/',find);
route.get('/:id',find);
route.put('/users/:id',update);
route.delete('/users/:id',remove);



export default route;
