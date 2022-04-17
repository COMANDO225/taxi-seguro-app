const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return(random + fecha);
}

export const autos = [
    {
        id: generarId(),
        name: 'Auto particular 1',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
    {
        id: generarId(),
        name: 'Auto particular 2',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
    {
        id: generarId(),
        name: 'Auto particular 3',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
    {
        id: generarId(),
        name: 'Auto particular 4',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
    {
        id: generarId(),
        name: 'Auto particular 5',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
    {
        id: generarId(),
        name: 'Auto particular 6',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
    {
        id: generarId(),
        name: 'Auto particular 7',
        subtitle: '4 pasajeros (passengers)',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '70.00',
        enlace: 'https://www.facebook.com/anderson.almeydatorres',
    },
]

export const choferes = [
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer1.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer2.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer3.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer4.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer5.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer6.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer7.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer8.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer9.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: '/img/choferes/chofer10.png'
    },
]