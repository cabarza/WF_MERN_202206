const add  = require('./operacion.js');


describe('Sumas', () =>{
    test('suma correcta', () => {
        expect(add(2, 2)).toBe(4);
        expect(add(10, 5)).toBe(15);
    })
});
