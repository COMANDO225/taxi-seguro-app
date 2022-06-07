const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return(random + fecha);
}

export const autos = [
    {
        id: generarId(),
        name: 'Kia Cerato',
        img: 'cerato',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
    },
    {
        id: generarId(),
        name: 'Hyundai Elantra',
        img: 'elantra',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
    },
    {
        id: generarId(),
        name: 'Toyota Corolla',
        img: 'corolla',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
    },
    {
        id: generarId(),
        name: 'Toyota Yaris',
        img: 'yaris',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
    },
    {
        id: generarId(),
        name: 'Kia Sportage',
        img: 'sportage',
        subtitle: 'camioneta - 6 pasajeros',
        description: '3 filas de asientos, viaja comodo sin dejar a nadie para 1 - 6 personas.',
        price: '70.00',
    },
    {
        id: generarId(),
        name: 'Hyundai Santa Fe',
        img: 'santafe',
        subtitle: 'camioneta - 6 pasajeros',
        description: '3 filas de asientos, viaja comodo sin dejar a nadie para 1 - 6 personas.',
        price: '70.00',
    },
    {
        id: generarId(),
        name: 'Hyundai H1',
        img: 'h1',
        subtitle: 'van - 10 pasajeros',
        description: 'Con una capacidad máxima de 10 pasajeros excelente para traslados y turismo.',
        price: '120.00',
    },
    {
        id: generarId(),
        name: 'Mercedes Sprinter',
        img: 'sprinter',
        subtitle: 'sprinter - 18 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '--.--',
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

export const tours = [
    {
        id : generarId(),
        nombre: 'Paracas',
        src: 'paracas_agezrc.jpg'
    },
    {
        id : generarId(),
        nombre: 'Ica',
        src: 'ica_tpnrur.jpg'
    },
    {
        id : generarId(),
        nombre: 'Lunahuana',
        src: 'lunahuana_a0dxpo.jpg'
    },
    {
        id : generarId(),
        nombre: 'Churin',
        src: 'churin_jfs3qz.jpg'
    },
    {
        id : generarId(),
        nombre: 'Caral',
        src: 'caral_dsbrqg.jpg'
    },
    {
        id : generarId(),
        nombre: 'Antioquia',
        src: 'antioquia_xvx7ql.jpg'
    },
    {
        id : generarId(),
        nombre: 'Huaraz',
        src: 'huaraz_ly9ouu.jpg'
    },
]