
 const btn = document.querySelector(".title");
 const $gridContainer = document.querySelector(".gridContainer");
let rickAndMortyAPI = "https://rickandmortyapi.com/api/character";

 btn.addEventListener("click", () => {
  console.log("btn");
   loadcard(rickAndMortyAPI);
 });


async function loadcard(url) {
  console.log ("hola");
    try {
        console.log ("hola");
    let res = await fetch(url),
    json = await res.json();
    console.log (json);
    $template = "";

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.results.length; i++) {
        const rickMorty = json.results[i];
        console.log (json.results[i]);
        $template += `
                <div class="card">
    <img src="${rickMorty.image}" alt="${rickMorty.name}">
    <h3>${rickMorty.name}</h3>
    <p>${rickMorty.species}</p>
</div>`;

    //   } catch (error) {
    //     console.log (error);
    //     let message = error.statusText || "Ocurrio un error";
    //     $template.innerHTML = `
    //     <div class="card">
    //     <p> Error ${err.status}: ${message}</p>
    //     <img src="${rickMorty.image}" alt="${rickMorty.name}">
    //     <h3>${rickMorty.name}</h3>
    // //     <p>${rickMorty.species}</p>
    // </div>

    }
    $gridContainer.innerHTML = $template;
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ocurrio error";
    $gridContainer.innerHTML = `<p> Error ${error.status}: ${message}</p>`
  } 
}