

//carrossel

//classe conjunto de armazenamento
let carouselArr = [];


//classe carrossel
class Carousel {

    
      
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
        
    }
};
