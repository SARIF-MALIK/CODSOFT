function filter(addingFilter){
    console.log(addingFilter)
    setTimeout(() => {
        console.log("added filter");        
    },2000);
}

function caption(addingCaption){
    setTimeout(() => {
        console.log(addingCaption)
        console.log("added caption");        
    },4000);
}

function upload(addingCaption){
    setTimeout(() => {
        console.log(addingCaption)
        console.log("uploaded");        
    },5000);
}



let myPromise = new Promise((resolve, reject)=>{
                    console.log('adding photo')
                    setTimeout(()=>{
                        console.log('added photo')
                        resolve(filter); 
                    }, 3000)
                })

myPromise.then((val)=>{
    val('adding filter'); 
    return caption
})
.then((val2)=>{
    val2('adding caption'); 
    return upload
})
.then((val3)=>{
    val3('uploading')
})
.catch(error=>console.log(error)); 