import express from 'express'
import { GetUsers } from '../controllers/Admin.js'
import isAdmin from '../middlewares/isAdmin.js'
import { deleteuser } from '../controllers/Admin.js';

const AdminRoutes=express.Router()

AdminRoutes.get('/getallusers',isAdmin,GetUsers)
AdminRoutes.delete('/deleteuser/:id', isAdmin, deleteuser);
export default AdminRoutes