var imgs = [];
        var obj = document.getElementById("dvslider");
        var btnP = document.getElementById("proximo");
        var btnV = document.getElementById("voltar");
        var barra = document.getElementById("barra");
        var imagemAtual = 0;
        var indice = 0;

        function animacao(){
            indice+= 1;

            if(indice===1080){
                imagemAtual++;
                indice = 0;             
            }
            if(imagemAtual>3){
                imagemAtual=0;
            }
            if(imagemAtual<0){
                imagemAtual=0;
            }


            barra.style.width = indice;  
            obj.style.backgroundImage = "url(" + imgs[imagemAtual].src + ")";
             anima =  requestAnimationFrame(animacao)
            
        }
        
        function preCarregamento() {
            for (var a = 0; a < 4; a++) {
                imgs[a] = new Image();
                imgs[a].src = "imgs/s" + a + ".png";     
            }
            obj.style.backgroundImage = "url(" + imgs[imagemAtual].src + ")"

        }

        function inicio() {
            btnP.addEventListener("click", function () {
                imagemAtual++;
                indice = 0;
                
            })
            btnV.addEventListener("click", function () {
                imagemAtual--;
                indice = 0;
               

            })

        }

        window.addEventListener("load", preCarregamento)
        window.addEventListener("load", inicio);
        window.addEventListener("load", animacao)