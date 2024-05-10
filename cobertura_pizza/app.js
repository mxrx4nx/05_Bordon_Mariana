const coberturas = document.getElementsByClassName('cobertura')

function mostrarClick(e){
    console.log(e.target.innerText);
}
for(const cobertura of coberturas){
    cobertura.addEventListener('click',mostrarClick);
}
