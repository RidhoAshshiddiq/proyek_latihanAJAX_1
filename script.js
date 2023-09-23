let pikachu = document.getElementById("pikachu");
function mendapatkanPikachu(){
    let hasil = fetch("https://pokeapi.co/api/v2/pokemon/pikachu",{
        method : "GET"
    })
    hasil.then(response => response.json()).then(data => {
        let namaPokemon = data.name;
        let nomorPokemon = data.id;
        let jenisPokemon = data.types[0].type.name;

        // Gabungkan nomor dengan nama Pokemon
        let namaLengkap = nomorPokemon + ": " + namaPokemon;

        // Buat elemen paragraf untuk menampilkan nama lengkap dan jenis Pokemon
        let paragrafNama = document.createElement("p");
        paragrafNama.innerText = namaLengkap;
        paragrafNama.style.margin = "0"; // Menghilangkan margin pada paragraf
        paragrafNama.style.color = "white"

        let paragrafJenis = document.createElement("p");
        paragrafJenis.innerText = "Type: " + jenisPokemon;
        paragrafJenis.style.margin = "0"; // Menghilangkan margin pada paragraf
        paragrafJenis.style.color = "white"

        let gambar = data.sprites.front_shiny;
        let img = document.createElement("img");
        img.src = gambar;
        img.style.maxWidth = "100px"; // Mengatur lebar maksimum gambar

        // Mengatur tampilan pikachuContainer
        let pikachuContainer = document.createElement("div");
        pikachuContainer.style.display = "flex";
        pikachuContainer.style.flexDirection = "column";
        pikachuContainer.style.alignItems = "center";
        pikachuContainer.style.textAlign = "center";

        // Menambahkan elemen-elemen ke dalam pikachuContainer
        pikachuContainer.appendChild(paragrafNama);
        pikachuContainer.appendChild(img);
        pikachuContainer.appendChild(paragrafJenis);

        // Mengatur tampilan pikachu
        pikachu.innerHTML = ""; // Mengosongkan konten sebelumnya
        pikachu.appendChild(pikachuContainer);
 
    pikachu.style.border = "1px gold solid"
    pikachu.style.margin = "0 auto"
    pikachu.style.display = "flex"
    pikachu.style.justifyContent = "center"
    pikachu.style.alignItems = "center"
    pikachu.style.height = "200px"
    pikachu.style.width = "150px"
    pikachu.style.backgroundColor = "gold"
    pikachu.style.borderColor = "black"
    pikachu.style.borderRadius = "3px"

    });
}


