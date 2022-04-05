// FLAT
const array = [1,[2,3],[4,5]]
array.flat()

const array2 = [1,2,[3,4,[5]]];
array2.flat();
array2.flat(2);

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()


// FLATMAP
const newArray = array.flatMap(num => Number(num) + 2);
console.log(newArray);


// TRIMSTART TRIMEND
const userEmail = '      eddytheeagle@gmail.com';
const userEmail2 = 'johnnydangerous@gamil.com      ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());



// FROMENTRIES
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

const obj = Object.fromEntries(userProfiles);
const nObj = Object.entries(obj);


// TRY CATCH
try {
    4 + 5;
    true + 'hi';
    bob + 'hi';
} catch {
    console.log('you messed up');
}