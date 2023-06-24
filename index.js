const btn = document.querySelector(".title");
const rickAndMorty = "https://rickandmortyapi.com/api/character";

btn.addEventListener('click', () => {
    console.log("btn");
    callApirickAndMorty();
});

const callApirickAndMorty= async ()=>{
    const res = await fetch(rickAndMorty);
    console.log(res)
    const data = await res.json();
    console.log (data);
} 

