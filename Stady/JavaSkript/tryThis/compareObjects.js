function compareObjects( obj1, obj2 ) { // true, if obj2 == obj1
    if ( !obj1.hasOwnProperty( 'size' ) || !obj2.hasOwnProperty( 'size' ) ) {
        console.log( 'Ошибочка при преобразовании слова в объект. Отсутсвует длина слова :(' );
        return false;
    };
    if ( obj1.size !== obj2.size ) return false;
    for ( let key in obj1 ) {
        if ( !(obj2.hasOwnProperty( key ) && obj1[ key ] == obj2[ key ] ) ) {
console.log( obj1.hasOwnProperty( key ), obj1[ key ], obj2.hasOwnProperty( key ), obj2[ key ]  );
            return false;
        } 
    };
    return true;
};

const a = {
    size: 5,
    a: 1,
    b: 2,
    f: 8,
    c: 3,
    e: 6,
    d: 4,
};
const b = {
    size: 5,
    b: 2,
    c: 3,
    a: 1,
    d: 4,
    e: 6,
    f: 18,
};
console.log( compareObjects( a, b ) );
