Novedades.addEventListener("DOMContentLoaded",function(e){
    const parrafos=  Novedades.addEventListener('.descripcion');
 
     let alturas = [];
     let alturaMaxima = 0;
 
     const aplicarAlturas= (function aplicarAlturas(){
 
         parrafos.forEach(parrafos => {
             if(alturaMaxima = 0){
                 alturas.push(parrafos.clienHeight)
             }else{
                 parrafo.style.height= alturaMaxima+"px";
             }
             
         });
 
          return aplicarAlturas;
    
 
     })();
 
     alturaMaxima = Math,max.apply(Math,alturas);
     aplicarAlturas();
 });