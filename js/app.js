const getData=()=>{
    const num=Math.floor(Math.random()*650)
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((data)=>{
         return data.json();
    }).then((actdata)=>{
        console.log(actdata);
        console.log(actdata.name);
        const name=actdata.name;
        document.getElementById("name").innerText=name;

        fimg=actdata.sprites.other.dream_world.front_default;
        imgs=document.querySelector("img");
        if(!imgs){
            imgs.setAttribute("alt","no pic");
            
        }else{
            imgs.setAttribute("src",fimg);
        }


        
    
    })
    .catch((err)=>{
        console.log(err);
    })
}