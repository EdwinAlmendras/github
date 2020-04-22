import Github from 'github-api'

import dotenv  from 'dotenv';
dotenv.config();


const github = new GitHub({
 username: process.env.USERNAME
 password: process.env.PASSWORD
})

const user = github.getUser()

const search = github.search()


export const getRepos = async (req, res, next) => {


 const repos = await user.listRepos()

 res.json(repos)
}

export const deleteRepo = async (req, res, next) => {
 
 
 const { name } = req.body
 
 
 const repo = github.getRepo('EdwinAlmendras', name)
 
 let response = await repo.deleteRepo
 
 
 res.json(response)
 

}



export const createRepo = async (req, res, next) => {

const { name } = req.body

let {url }= await user.createRepo({
 name,
 description: 'magic!!',
 private: false,
})

res.json(url)

}


export const searchInRepo = async (req, res, next) => {
const {query, repo} = req.body
 
let matchs = await search.forCode({
 q: `${query}+repo:${repo}`
 
})

res.json(matchs)

}



}


export default getRepos;