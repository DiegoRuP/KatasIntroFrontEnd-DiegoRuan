const fetchPokemon=()=>{
    const pokeNom=document.getElementById("pokeNom");
    let pokeInput= pokeNom.value.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status!="200"){
            console.log(res);
            pokeImagen("./img/Error.png");
        }
        else{
            return res.json();
        }
    }).then((data)=>{
        document.getElementById('pokeNo').innerHTML=data.id;
        document.getElementById('poke').innerHTML=data.species.name.toUpperCase();
        document.getElementById('pokeHgt').innerHTML=data.height;
        document.getElementById('pokeWgt').innerHTML=data.weight;
        document.getElementById('pokeType').innerHTML=data.types[0].type.name.toUpperCase();
        document.getElementById('pokeAtk').innerHTML=data.stats[1].base_stat;
        document.getElementById('pokeDef').innerHTML=data.stats[2].base_stat;
        document.getElementById('pokeSpatk').innerHTML=data.stats[3].base_stat;
        document.getElementById('pokeSpdef').innerHTML=data.stats[4].base_stat;
        document.getElementById('pokeSpeed').innerHTML=data.stats[5].base_stat;
        document.getElementById('pokeHgt').innerHTML=data.height;
        document.getElementById('pokeWgt').innerHTML=data.weight;
        let pokeImg=data.sprites.front_default;
        pokeImagen(pokeImg);
    })
}

const pokeImagen=(url)=>{
    const pokeImg=document.getElementById("pokeImg");
    pokeImg.src=url;
}


