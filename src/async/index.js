const doSomethingAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Do something'),3000)
        : reject(new Error('Error testing'));
    })
}

const doSomething = async() =>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');


const anotherFunction = async() =>{
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch{
        console.error(error);
    }
}

console.log('beforem 1');
anotherFunction();
console.log('after 1');