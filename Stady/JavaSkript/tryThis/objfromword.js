function objFromWord ( str ) {
    console.log( ...str );
    let counter = 1;
    const setOfLetters = { size: str.length };
    str = str.toLowerCase();
    str = Array.from( str );
    console.log( setOfLetters ); // long of string before
    str.forEach( ( eli, i ) => {
        str.forEach( ( elj, j) => {
            if ( ( eli == elj) && ( i !== j ) ) {
                counter++;
            }
        });
        setOfLetters[ eli ] = counter;
        counter = 1; 
    });
    return setOfLetters;
};

function compareObjects( obj1, obj2 ) { // true, if obj2 == obj1
    if ( !obj1.hasOwnProperty( 'size' ) || !obj2.hasOwnProperty( 'size' ) ) {
        console.log( 'Ошибочка при преобразовании слова в объект. Отсутсвует длина слова :(' );
        return false;
    };
    if ( obj1.size !== obj2.size ) return false;
    for ( let key in obj1 ) {
        if ( !(obj2.hasOwnProperty( key ) && obj1[ key ] == obj2[ key ] ) ) {
            console.log( obj1.hasOwnProperty( key ), obj1[ key ], obj2.hasOwnProperty( key ), obj2[ key ] );
            return false;
        } 
    };
    return true;
};

const word2 = '278ТИЛИМИЛИТРЯМДИЯ817';
const word1 = 'ЛИМИЛИТРЯ278ТИМДИЯ817';
const wordConsistOf1 = objFromWord( word1 );
const wordConsistOf2 = objFromWord( word2 );
console.log( wordConsistOf1 );
console.log( wordConsistOf2 );