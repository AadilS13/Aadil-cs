/**
 * Application, that loops 100 times
 * 
 * IF number is a multiple 3 you're going to console.log('foo')
 * IF nuber is a multiple of 5 you're going to console.log('bar')
 * IF number is a multiple of 3 and 5 you're going to console.log('foobar')
 * At the end of the 100 times, conosle.log('im finished')
*/

/*

for( loop 100 times ) {

    if number is multiple of 3 {
        log foo
    }
    
    if number if multiple of 5 {
        log bar
    }


    if number if multiple of 3 and 5 {
        log foobar
    }

}

log finished

*/

for(var number = 0; number < 100; number++) {
    // Do code here
}


if( number % 3 == 0) {
    console.log('foo')
}