document.addEventListener("DOMContentLoaded", function() {



window.addEventListener('scroll', function() {
    var donut = document.querySelector('.donut');
    
    //obtengo el valor del scroll actual, cada scroll equivale a 100
    var scrollPosition = window.scrollY/5;

    // Ajustamos la posición del donut basándonos en la posición del scroll
    donut.style.top = scrollPosition + 'px';
    donut.style.right = scrollPosition + 'px';

   
    //si el scroll vuelve a su posición inicial, que el donut vuelva a su pos inicial también
    if (scrollPosition==0) {
        donut.style.top = '0px';
        donut.style.right = '-291px';

    }

       

   

   
    


    
    
    
    
});

});