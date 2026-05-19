

// carrossel

// classe matriz de armazenamento 
let carouselArr = [];

// classe carrossel
class Carousel {

    constructor(imagem, titulo, link) {
        this.image = imagem;
        this.title = titulo;
        this.url = link;
    }  

        static Start(arr){
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //começar
                Carousel._interval = setInterval(function(){ Carousel.Next(); },8000);
            }
            
        } else {
            throw "Método necessita de uma Variável pro Conjunto.";
        }
    }

    static Next(){
       let carouselItem = carouselArr[Carousel._sequence];
       let imagemdiv = document.getElementById("carousel");
       let titulodiv = document.getElementById("carousel-title");

       imagemdiv.style.backgroundImage = `url('img/${carouselItem.image}')`;
       imagemdiv.style.backgroundSize = "cover";
       imagemdiv.style.backgroundPosition = "center";
       imagemdiv.style.transition = "all .8s ease-in-out";

       titulodiv.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;

       Carousel._sequence++;

       if (Carousel._sequence>=Carousel._size) {
           Carousel._sequence = 0;
       }
    }
};

