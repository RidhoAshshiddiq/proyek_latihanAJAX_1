let pikachu = document.getElementById("pikachu");
function mendapatkanPikachu(){
    let hasil = fetch("https://pokeapi.co/api/v2/pokemon/pikachu",{
        method : "GET"
    })
    hasil.then(response=>response.json()).then(data=>{
        console.log(data)
        let gambar = data.sprites.front_shiny
        let img = document.createElement("img")
        img.src = gambar
        pikachu.append(img)
        });
}

