import GitHub from 'github-api'

import dotenv  from 'dotenv';

dotenv.config();


console.log(process.env.USERNAME)
const github = new GitHub({
 username: process.env.USERNAME,
 password: process.env.PASSWORD
})

const user = github.getUser()

const search = github.search()


export const getRepos = async (req, res, next) => {


 const { status, data} = await user.listRepos()
 
 //console.log(repos)
 
 
 
 if(status == 200){
   let repos = data.map(e => {
   return {
     id: e.id,
     name: e.name,
     url: e.url,
     private: e.private
   }
 })
 
   res.json({repos})
 }

 //res.json({repos: repos})
}

export const deleteRepo = async (req, res, next) => {
 
 
 const { name } = req.body

 const repo = github.getRepo('EdwinAlmendras',name)
 
 let response = await repo.deleteRepo()
 
 if(response.status == 204) {
   res.send('sucess delete')
   next()
 }
}



export const createRepo = async (req, res, next) => {

const { name } = req.body

let { status, data} = await user.createRepo({
 name,
 description: 'magic!!',
 private: false,
})

if(status == 201){
  
res.send(data.url)

}

}


export const searchInRepo = async (req, res, next) => {
const {query, repo} = req.body
 
let matchs = await search.forCode({
 q: `${query}+repo:${repo}`
 
})

res.send(matchs)

}




export default getRepos;