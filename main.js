// // Posizione in JS

// // Accediamo alle coordinate X e Y con lo scroll
// // proprietà scrollX e scrollY
// window.addEventListener("scroll", () => {
//     // console.log(window.scrollY);
//     // console.log(window.scrollX);

//     // console.log(window.innerHeight);
// })

// // Come capire altezza intera:
// // innerHeight: altezza della finestra (del viewport)
// // window.innerHeight

// // offset(s)
// // Gli offset 
// // Sono delle proprietà dei nodi
// let div = document.querySelector("div");
// // console.log(div.offsetHeight); // Altezza del nodo
// // console.log(div.offsetTop); // Distanza dal top della pagina
// // console.log(div.offsetLeft); // Distanza dalla sinistra della pagina


// // Vediamo come capire se un nodo è nella finestra dell'utente
// let elementTop = div.offsetTop;
// let elementBottom = elementTop + div.offsetHeight;
// let windowTop = window.scrollY;
// let windowBottom = windowTop + window.innerHeight;

// // Modo per determinare se è un elemento è visibile all'utente
// window.addEventListener("scroll", () => {    
//     if ((elementTop + div.offsetHeight) >= window.scrollY && div.offsetTop <= (windowTop + window.innerHeight)) {
//         console.log("Il div è visibile");
//     }
//     else {
//         console.log("Non è visibile");
//     }
// })


// document.addEventListener("DOMContentLoaded", () => {
//     // Catturo tutti i counter
//     const counters = document.querySelectorAll(".counter");
    
//     // Funzione per animarli (per ogni counter)
//     const animateCounter = (counter) => {
//         // Parto da 0
//         let currentValue = 0;

//         // Prendo il target
//         const target = parseInt(counter.getAttribute("data-target"));

//         // Calcolo quanto incrementare ad ogni giro
//         const increment = Math.ceil(target / 100);
        
//         // Funzione per fare l'update del counter
//         const updateCounter = () => {
//             currentValue += increment;
            
//             if (currentValue >= target) {
//                 currentValue = target;
//                 counter.innerText = currentValue;
//                 return; // Fermo l'animazione quando raggiungiamo il target
//             }
            
//             counter.innerText = currentValue;
//             // requestAnimationFrame sincronizza l'animazione con il refresh del browser (circa 60fps) garantendo animazioni fluide e efficienti
//             requestAnimationFrame(updateCounter);
//         };
        
//         // Chiamo updateCounter ogni volta per continuare ad effettuare l'incremento
//         updateCounter();
//     };

//     // Funzione che ci ritorna un booleano che corrisponde
//     // o meno al fatto "ho l'elemento visibile sullo schermo"
//     const weSeeElement = (node) => {
//         const elementTop = node.offsetTop;
//         const elementBottom = node.offsetTop + node.offsetHeight;
//         const windowTop = window.scrollY;
//         const windowBottom = windowTop + window.innerHeight;
        
//         return elementBottom >= windowTop && elementTop <= windowBottom;
//     };

//     // Funzione che comanda tutto:
//     // Per ogni counter, controlla se lo vedo (e non è già animato), se è così, fai partire l'animazione
//     const handleScroll = () => {
//         counters.forEach((counter) => {
//             if (weSeeElement(counter) && !counter.classList.contains("animated")) {
//                 counter.classList.add("animated");
//                 animateCounter(counter);
//             }
//         });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Controlla gli elementi visibili al caricamento
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const counters = document.querySelectorAll(".counter");
    
//     const animateCounter = (counter) => {
//         let currentValue = 0;
//         const target = parseInt(counter.getAttribute("data-target"));

//         // Singolo incremento (dato da risultato / X)
//         const increment = Math.ceil(target / 100000);
        
//         const updateCounter = () => {
//             currentValue += increment;

//             if (currentValue >= target) {
//                 currentValue = target;
//                 counter.innerText = currentValue;
//                 return;
//             }
            
//             counter.innerText = currentValue;
//             requestAnimationFrame(updateCounter);
//         };
        
//         updateCounter();
//     };

//     const weSeeElement = (node) => {
//         const elementTop = node.offsetTop;
//         const elementBottom = node.offsetTop + node.offsetHeight;
//         const windowTop = window.scrollY;
//         const windowBottom = windowTop + window.innerHeight;
        
//         return elementBottom >= windowTop && elementTop <= windowBottom;
//     };

//     const handleScroll = () => {
//         counters.forEach((counter) => {
//             if (weSeeElement(counter) && !counter.classList.contains("animated")) {
//                 counter.classList.add("animated");
//                 animateCounter(counter);
//             }
//         });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); 
// });



// DOMContentLoaded -> evento del document
// load -> evento della window

// DOMContentLoaded rappresenta l'istante in cui il DOM viene caricato (carica solo l'albero del DOM)

// load rappresenta l'istante in cui TUTTE LE RISORSE vengono caricate (carica immagini, video, css, script)

// document.addEventListener("DOMContentLoaded", () => {
//     let h1 = document.querySelector("h1");

//     console.log(h1, "H1 dentro al DOMLOADED");
// })

// window.addEventListener("load", () => {
//     let h1 = document.createElement("h1");
//     h1.innerText = "Ciao Hackademy";

//     document.querySelector("body").appendChild(h1);
// })


// document.addEventListener("DOMContentLoaded", () => {
//     const track = document.querySelector(".brand-scroll-track");

//     const cloneItems = () => {
//         let items = document.querySelectorAll(".brand");

//         items.forEach((i) => {
//             let clone = i.cloneNode(true);

//             track.appendChild(clone);
//         })
//     }

//     cloneItems();

//     track.addEventListener("mouseenter", () => {
//         track.style.animationPlayState = "paused";
//     })

//     track.addEventListener("mouseleave", () => {
//         track.style.animationPlayState = "paused";
//     })
// })