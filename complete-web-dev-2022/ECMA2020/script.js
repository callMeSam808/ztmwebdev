// BIGINT
typeof 4;
typeof true;
typeof 1n;  // bigint
Number.MAX_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER + 10;  // exceeds max safe integer. calculations are off.
Number.MAX_SAFE_INTEGER + 20;  // exceeds max safe integer
9007199254740991n + 10n;    // adding n to value converts to type bigint
9007199254740991n + 20n;    // calculations are good again.
let bigInt = 1n + 2n;   // 3n. A bigint ready type to use on other bigint
typeof bigInt;

// NULLISH COALESCING OPERATOR ??
let sam_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 0,
    }
}

let power = sam_pokemon?.pikachu?.power || 'no power';  // or checks if thruthy. empty string '' is false.
console.log(power);

let noPower = sam_pokemon?.pikachu?.power ?? 'no power';    // ?? checks if null or undefined (not truthy falsey)
console.log(noPower);

let partner = sam_pokemon?.pikachu?.partner ?? 'no partner';
console.log(partner);

// OPTIONAL CHAINING OPERATOR ?.
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 15
    }
}

let weight = will_pokemon.pikachu.weight;
console.log('weight:', weight);

let raichu_weight = andrei_pokemon.raichu.weight;
console.log('raichu_weight:', raichu_weight)

let weight3 = andrei_pokemon?.pikachu?.weight;  // checks if exists without throwing errors. instead returns undefined.
console.log(weight3);