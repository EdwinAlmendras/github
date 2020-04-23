import {getRepos, deleteRepo, searchInRepo, createRepo }from '../controllers/github'

import {Router} from 'express'

/*
const { check } = require('express-validator');
validatoe
*/

const router = Router();

router.route('/repos')
.get(getRepos)
.post(createRepo)
.delete(deleteRepo)


/*
router.route('/')
.get()

route.get('/')*/


export default router;