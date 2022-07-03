let segundos = 0;
    let minutos = 0;
        let horas = 0;

    function iniciar() {

        document.getElementById('botaoStop').style.display = "block"
        document.getElementById('botaoStart').style.display = "none"
        
        function segundo(){
            segundos++;

            if(segundos==60){
                minutos++;
                segundos=0;
                document.getElementById('minuto').innerHTML = minutos
            }
    
            if (minutos == 60) {
                horas++;
                minutos = 0; 
                document.getElementById('hora').innerHTML = horas
            }
            
            document.getElementById('segundo').innerHTML = segundos
    
        }
    
        setInterval(function(){ segundo() },1000)
    }

    /*function stop() {
        document.getElementById('minuto').innerHTML = minutos

        document.getElementById('hora').innerHTML = horas

        document.getElementById('segundo').innerHTML = segundos

    }*/
    