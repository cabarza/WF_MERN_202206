class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Usuario extends Persona{
    
    constructor(nombre, clave) {
        super(nombre);
        this.clave = clave;
        this.logueado = false;
    }

    login(clave) {
        if(clave === this.clave) {
            console.log(`${this.nombre} ha ingresado correctamente`);
            this.logueado = true;
        } else {
            console.log(`Contraseña inválida`);
        }
    }

    logout() {
        if(this.logueado) {
            console.log(`${this.nombre} ha cerrado sesión correctamente`);
            this.logueado = false;
        } else{ 
            console.log(`${this.nombre} debe iniciar sesión antes`);
        }
    }

    saludar(usuario) {
        if(usuario) {
            console.log(`${this.nombre} saluda a ${usuario.nombre}`);
        } else {
            console.log(`No hay nadie`);
        }
    }

}

class Cliente extends Persona {
    constructor(nombre, telefono) {
        super(nombre);
        this.telefono = telefono;
    }

    comprar() {
        console.log(`${this.nombre} ha comprado`);
    }
}


const usuario1 = new Usuario('user1', '123456');
const usuario2 = new Usuario('user2', 'fdcgvhbjkl');

const cliente = new Cliente('Juan', '12345678');

usuario1.login('123456');

usuario1.saludar(cliente);

cliente.comprar();

usuario1.logout();