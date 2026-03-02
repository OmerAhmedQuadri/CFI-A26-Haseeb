import { log } from 'console';
import fs from 'fs'
let username
let path = './github-user.json'

fetch(`https://api.github.com/users`)
.then ((response) =>{
    if(!response.ok){
        throw new Error ('error')
        
    }
    // console.log(response);
    return response.json()
    
})
.then( response =>{
    // console.log(response);
    let userdata = response.map((usr)=>{
        return {id : usr.id, login: usr.login}
    })
    // response = response.filter((usr)=> usr.id%2==0)  
    fs.writeFile( path, JSON.stringify(userdata , null, 4), (err)=>{
        if(err) return console.log(err);
        console.log('Write successful');
    })
})
.catch(err =>{
    console.log(err);
})

