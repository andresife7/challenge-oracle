
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
function encriptar(){
    var a = document.getElementById("input-texto").value;
    var b = [];
    
    for(i = 0; i < a.length; i++){
        switch(a[i]){
            case "a":
                b = b + "ai";
                break;
            
            case "e":
                b = b + "enter";
                break;

            case "i":
                b = b + "imes";
                break;
            
            case "o":
                b = b + "ober";
                break;

            case "u":
                b = b + "ufat";
                break;
            
            default:
                b = b + a[i];
        }

     
        
    };

    document.getElementById("msg").value = b;
}
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function desencriptar(){
    var a = document.getElementById("input-texto").value;
    var b = [];
    
    for(i = 0; i < a.length; i++){
        switch(a[i]){
            case "a":
                b = b + "a";
                i++;
                break;
            
            case "e":
                b = b + "e";
                i++; i++; i++; i++;
                break;

            case "i":
                b = b + "i";
                i++; i++; i++;
                break;
            
            case "o":
                b = b + "o";
                i++; i++; i++;
                break;

            case "u":
                b = b + "u";
                i++; i++; i++;
                break;
            
            default:
                b = b + a[i];
        }

     
        
    };

    document.getElementById("msg").value = b;
}

var z;

function copiar(){
    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');
    z = document.getElementById('msg').value;
}

function pegar(){
    document.getElementById('input-texto').value = z;
    
}