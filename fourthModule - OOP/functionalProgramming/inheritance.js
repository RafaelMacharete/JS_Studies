const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Rafael',
    email: 'teste@gmail.com'
}

let adm1 = {
    ...defaultUser,
    name: 'Leafar',
    email: 'adm@gmail.com',
    level: 2
}

console.log(user1);
console.log(adm1);

