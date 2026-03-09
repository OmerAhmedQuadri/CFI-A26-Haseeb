import bcrypt from 'bcrypt'

const pass = 'codeforindia'

const hashedPassword = async (password)=>{
    const hashedPassword = await bcrypt.hash(password, 12)
    return hashedPassword
}

const res = await hashedPassword(pass)
console.log(res);
console.log(await hashedPassword(pass));

const comparePassword = async (password, hashedPassword) =>{
    const match = await bcrypt.compare(password, hashedPassword)
    return match
}

console.log(await comparePassword(pass, ));
