
const roles =[ 'admin', 'customer', 'manager']
const usrRole1= 'editor'
const usrRole2 = 'admin'
if(roles.includes(usrRole1)){
    console.log('access granted');
    
}else{
    console.log('failed to authenticate');
    
}