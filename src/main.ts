/*
Task 2

Ejercicio 1

Escriba una función, gooseFilter/ goose-filter/ goose_filter/ GooseFilter,
 que tome una matriz de cadenas como argumento y devuelva una matriz filtrada
  que contenga los mismos elementos pero con los 'gansos' eliminados.

Los gansos son cadenas de la siguiente matriz, que se rellena previamente en su solución:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
Por ejemplo, si esta matriz se pasó como argumento:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Su función devolvería la siguiente matriz:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
Los elementos de la matriz devuelta deben estar en el mismo orden que en la matriz
 inicial pasada a su función, aunque con los 'gansos' eliminados. Tenga en cuenta
  que todas las cadenas estarán en el mismo caso que las proporcionadas y algunos elementos pueden repetirse.

solucion en simulador
*/
export function gooseFilter(birds:string[]):string[]{
    const geese:string[]= ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]	
    return birds.filter(name=> geese.indexOf(name) < 0)
    
    }
    
    console.log(gooseFilter(["Roman Tufted"]))
    
    //tener solamente los ganzos eliminados
    
    
    
    
    
    
    /*Ejercicio 2
    
    En esta pequeña tarea, se le da una serie de números separados por espacios y debe devolver
     el número más alto y el más bajo.
    
    */
    
    export class Kaata {
      static highAndLow(numbers: string) {
        let arr: number[] = numbers.split(" ").map(Number);
        let max: number = Math.max(...arr);
        let min: number = Math.min(...arr);
        return `${max} ${min}`;
      }
    }
    
    /* Ejercicio 3
    
    Devuelve el número (recuento) de vocales en la cadena dada.
    
    Consideraremos a, e, i, o, u como vocales para este Kata (pero no y).
    
    La cadena de entrada solo constará de letras minúsculas y / o espacios.
    
    */
    export class Kata {
        static getCount(str: string) {
       let inicioVocales:number= 0;
       let vocales:string[]=["a","e","i","o","u"]  
    
       for (let i=0; i<str.length;i++){
    
        for (let vocal of vocales  ){
            if (vocal==str[i].toLowerCase()){
                inicioVocales++
            }
    
        }
    
       }
          
        
    }
    
    }
    
    
    //Ejercicio 4
    
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    
    function removeVowels(str: string) {
      return str.split('').filter(char => vowels.indexOf(char) === -1).join('');
    }
    
    export class Katas {
      static disemvowel(str: string) {
        const strWithoutVowels = removeVowels(str);
        return strWithoutVowels;
      }
    }
    
    
    //Ejercicio 6
    /*
    Complete la solución para que devuelva una cadena formateada.
    El valor de retorno debe ser igual a "El valor es VALOR", donde el valor es un número de 5 dígitos con relleno.
    
    Ejemplo:
    */
    function solution(number:number|string):number|string{
      if (number<=99999) { 
        number = ("00000"+number).slice(-5);
      }
      return "Value is "+number;
    }
    
    
    
    // Ejercicio 7
    
    const plant = (seed:string, water:number, fert:number, temp:number) => {
      return (temp >= 20 && temp <= 30) ? ("-".repeat(water) + seed.repeat(fert)).repeat(water) : "-".repeat(water * water) + seed
    }
    
    
