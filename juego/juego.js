function opcion(humano) {
    // console.log(humano);
    var resultado_texto = ["empatas", "ganas", "pierdes"];
    var nombre = ["piedra", "papel", "tijeras", "lagarto", "spock"];
    // console.log(nombre[humano]);
    
    var jugada = [
        [0, 1, 2, 2, 1],
        [2, 0, 1, 1, 2],
        [1, 2, 0, 2, 1],
        [1, 2, 1, 0, 2],
        [2, 1, 2, 1, 0]
    ];

    var cpu = Math.floor((Math.random() * 5));


    
    resultado = jugada[cpu][humano];
    console.log("HUMANO: " + nombre[humano]) ;
    console.log("CPU: " + nombre[cpu]);
    console.log(resultado_texto[resultado]);
    
    var mensaje1;
    var mensaje2;
    var mensaje3;

    mensaje1 = new SpeechSynthesisUtterance("HUMANO :" + nombre[humano]);
    mensaje2 = new SpeechSynthesisUtterance("CPU :" + nombre[cpu]);    
    mensaje3 = new SpeechSynthesisUtterance(resultado_texto[resultado]);

    window.speechSynthesis.speak(mensaje1);
    window.speechSynthesis.speak(mensaje2);
    window.speechSynthesis.speak(mensaje3);
}

