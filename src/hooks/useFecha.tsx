

export const useFecha =() => {

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fecha = new Date();
    const fechaActual = dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear()
    const fechaActualSimple = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}`;
    const dia = fecha.getDate();
    return {fechaActual,fechaActualSimple,dia};
}


// {
//     "user_id": 8,
//     "dia": "lunes, 20 de enero de 2021",
//     "ayunas": "QUE TE",
//     "nph_lantus": "123",
//     "rapida_ultra_rap": "123",
//     "media_manana": "123",
//     "rapida_ultra_rap_m": "123",
//     "almuerzo": "123",
//     "rapida_ultra_rap_a": "123",
//     "media_tarde": "123",
//     "rapida_ultra_rap_t": "123",
//     "merienda": "123",
//     "rapida_ultra_rap_md": "123",
//     "nph_lantus_md": "123",
//     "dormir": "123",
//     "correcion_total": 123,
//     "observaciones": "23"
//   }

//   {
//     "user_id": 8,
//     "dia": '2021-12-21',
//     "ayunas": 2,
//     "nph_lantus": 2,
//     "rapida_ultra_rap": 2,
//     "media_manana": 2,
//     "rapida_ultra_rap_m": 2,
//     "almuerzo": 2,
//     "rapida_ultra_rap_a": 2,
//     "media_tarde": 2,
//     "rapida_ultra_rap_t": 2,
//     "merienda": 2,
//     "rapida_ultra_rap_md": 2,
//     "nph_lantus_md": 2,
//     "dormir": 2,
//     "correcion_total": 2,
//     "observaciones": 2,
//   }