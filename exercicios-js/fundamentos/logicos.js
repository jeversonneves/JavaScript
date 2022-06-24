/* and | e 
 * v e v = v
 * v e f = f
 * f e v = f
 * f e f = f
 * 
 * or | ou
 * v ou v = v
 * v ou f = v
 * f ou v = v
 * f ou f = f
 * 
 * xor exclusivo
 * v xor v = f
 * v xor f = v
 * f xor v = v
 * f xor f = f
 * 
 * condicional -> se então
 * v -> v = f
 * v -> f = v
 * f -> v = f
 * f -> f = f
 * 
 * biconcional <-> se e somente se
 * v <-> v = v
 * v <-> f = f
 * f <-> v = f
 * f <-> f = v
 * 
 * negação lógica
 * !v = f
 * !f = v
 * 
 */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // Operador bitwise xor.
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // Operador unário.

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))