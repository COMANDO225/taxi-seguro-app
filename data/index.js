const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return(random + fecha);
}

export const autos = [
    {
        id: generarId(),
        name: 'Kia Cerato',
        img: 'cerato_zk3ffm.png',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
        dolarprice: 20,
    },
    {
        id: generarId(),
        name: 'Hyundai Elantra',
        img: 'elantra_bdobuz.png',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
        dolarprice: 20,
    },
    {
        id: generarId(),
        name: 'Toyota Corolla',
        img: 'corolla_gp2d7d.png',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
        dolarprice: 20,
    },
    {
        id: generarId(),
        name: 'Toyota Yaris',
        img: 'yaris_fn79pi.png',
        subtitle: 'auto - 4 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '60.00',
        dolarprice: 20,
    },
    {
        id: generarId(),
        name: 'Kia Sportage',
        img: 'sportage_oleejd.png',
        subtitle: 'camioneta - 6 pasajeros',
        description: '3 filas de asientos, viaja comodo sin dejar a nadie para 1 - 6 personas.',
        price: '70.00',
        dolarprice: 25,
    },
    {
        id: generarId(),
        name: 'Hyundai Santa Fe',
        img: 'santafe_nbwwfh.png',
        subtitle: 'camioneta - 6 pasajeros',
        description: '3 filas de asientos, viaja comodo sin dejar a nadie para 1 - 6 personas.',
        price: '70.00',
        dolarprice: 25,
    },
    {
        id: generarId(),
        name: 'Hyundai H1',
        img: 'h1_zl6hj3.png',
        subtitle: 'van - 10 pasajeros',
        description: 'Con una capacidad máxima de 10 pasajeros excelente para traslados y turismo.',
        price: '120.00',
        dolarprice: 40,
    },
    {
        id: generarId(),
        name: 'Mercedes Sprinter',
        img: 'sprinter_irnmz5.png',
        subtitle: 'sprinter - 18 pasajeros',
        description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
        price: '--.--',
        dolarprice: null,
    },
]

export const choferes = [
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer2_hixpkk.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer3_fmrskj.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer4_bvorgy.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer5_lwrpda.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer7_bjc8vo.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer8_tvjfk7.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer9_ukmzhx.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer10_evvsla.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer6_a2ccqx.png'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'chofer1_dqggba.png'
    },
]

export const trabajos = [
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo1_ba5rnp.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo2_gbeswr.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo3_pzeoir.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo4_onnpw7.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo5_vlo1md.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo6_g3aiur.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo7_k6wi3x.jpg'
    },
    {
        id: generarId(),
        nombre: 'nombre',
        src: 'cargo8_xn7aa8.jpg'
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

export const clientes = [
    {
        id: generarId(),
        nombre: 'Joaquin Zuñiga',
        description: 'Los recomiendo!! Muy profesionales, estuvieron atentos a mis necesidades.',
        imagen: '/img/clientes/cliente1.jpg'
    },
    {
        id: generarId(),
        nombre: 'Alejandra Blas',
        description: 'Vehiculos de calidad, su personal muy amable y atento cumplio con mis espectativas.',
        imagen: '/img/clientes/cliente1.jpg'
    },
    {
        id: generarId(),
        nombre: 'Miguel Arcos',
        description: 'Muy profesionales, los recomiendo, buen servicio todo ok.',
        imagen: '/img/clientes/cliente1.jpg'
    },
    {
        id: generarId(),
        nombre: 'Sara Guzmán',
        description: 'Llegaron a tiempo, y el servicio fue muy bueno si lo recomiendo.',
        imagen: '/img/clientes/cliente1.jpg'
    },
    {
        id: generarId(),
        nombre: 'Tessy Vilcapoma',
        description: 'Taxi seguro, lo maximo me salvaron de un apuro, puntuales y amables.',
        imagen: '/img/clientes/cliente1.jpg'
    },
]