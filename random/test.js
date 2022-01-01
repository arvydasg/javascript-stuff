// sitas - https://www.youtube.com/watch?v=HnXmI2UVZlU
let my_element = document.createElement('h1'); // sukuriu  h1 tag

my_element.innerText = "Labukas"; // noriu, kad H1 tag sakytu tai:

document.body.appendChild(my_element); // render H1 tag

my_element.classList.add('custom_class'); // pridek css klase prie tag

my_element.style.backgroundColor = 'red'
