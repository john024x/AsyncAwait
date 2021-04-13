const somethingWIllHappen = () =>{
    return new Promise ((resolve ,reject) =>{
        if(true){
            resolve('Yei');
        }else{
            reject('whoops');
        }
    });
};

somethingWIllHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWIllHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            },2000)
        } else{
            const error = new Error('Whoop!');
            reject(error);
        }
    });
}
somethingWIllHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//promesas encadenadas
Promise.all([somethingWIllHappen(), somethingWIllHappen2()])
    .then(response =>{
        console.log('Array of results',response);
    })
    .catch(err =>{
        console.error(err);
    })