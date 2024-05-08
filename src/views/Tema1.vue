<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contextualización SENA

    p(data-aos="fade") Somos un establecimiento público del orden nacional y con autonomía administrativa, adscrito al Ministerio del Trabajo.
    p(data-aos="fade") Contamos con: 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tarj1.svg' alt='')
          .tarjeta.tarjeta--azul.bg-3.row.align-items-center.me-0
            .p-3
              p.mb-0 Personería jurídica.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tarj2.svg' alt='')
          .tarjeta.tarjeta--azul.bg-3
            .p-3
              p.mb-0 Patrimonio propio e independiente.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tarj3.svg' alt='')
          .tarjeta.tarjeta--azul.bg-3
            .p-3
              p.mb-0 Autonomía administrativa.

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1-tarj1.png' alt='')
          .tarjeta.color-acento-contenido.bg-1
            .text-center.p-4
              p Ofrecemos formación gratuita a millones de colombianos que se benefician con programas técnicos, tecnológicos y complementarios que, enfocados en el desarrollo económico, científico y social del país, entran a fortalecer las actividades productivas de las empresas y de la industria para obtener mejor competitividad y mayores resultados en los diferentes mercados.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1-tarj2.png' alt='')
          .tarjeta.color-acento-contenido.bg-1
            .text-center.p-4
              p Autorizada por el Estado para invertir en la infraestructura necesaria para mejorar el desarrollo social y técnico de los trabajadores en las diferentes regiones, a través de la formación profesional integral que logra incorporarse con las metas del Gobierno nacional, mediante el cubrimiento de las necesidades específicas de recurso humano en las empresas. Por medio de la vinculación al mercado laboral (bien sea como empleado o subempleado), con grandes oportunidades para el desarrollo empresarial, comunitario y tecnológico.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1-tarj3.png' alt='')
          .tarjeta.color-acento-contenido.bg-1
            .text-center.p-4
              p La entidad más querida por los colombianos funciona desde su creación en permanente alianza entre el Gobierno, los empresarios y los trabajadores, con el firme propósito de aumentar la capacidad de progreso en Colombia a través del incremento de la productividad en las empresas y regiones, sin dejar de lado la inclusión social, alineados con la política nacional “Más empleo y menos pobreza”. Por tal razón, se generan continuamente programas y proyectos de responsabilidad social, empresarial, formación, innovación, internacionalización y transferencia de conocimientos y tecnologías.

    h3(data-aos="fade-right") Historia del SENA

    p.mb-4(data-aos="fade") Desde nuestros inicios, siempre buscamos proporcionar instrucción técnica al empleado, formación complementaria para adultos, y ayudarles a los empleadores y trabajadores a establecer un sistema nacional de aprendizaje.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/B3b7T6-h8i4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. La historia del SENA 


    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Misión

    .row
      .col-lg-5.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1-1.png', alt='')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg-4.p-4.h-100.align-items-center.d-flex
          .bg-white.p-4
            p.mb-0 El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.


    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Visión

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.mb-4
          p.mb-0 Para el año 2026, el Servicio Nacional de Aprendizaje - SENA 
            span.text-1.fw-bold estará a la vanguardia de la cualificación del talento humano, tanto a nivel nacional como internacional
            |. Esto se logrará a través de la formación profesional integral, el empleo, el emprendimiento y el reconocimiento de aprendizajes previos. Nuestro objetivo es generar valor público y fortalecer la economía campesina, popular, verde y digital, siempre con un enfoque diferencial orientado a la construcción del cambio, la transformación productiva, la soberanía alimentaria y la consolidación de una paz total, materializando así la autonomía territorial, y promoviendo la justicia social, ambiental y económica.
          
        ul.lista-ul--color.color-1
          li 
            i.fas.fa-check
            | Aportes relevantes a la productividad de las empresas.    
          li 
            i.fas.fa-check
            | Contribución a la efectiva generación de empleo y la superación de la pobreza.
          li 
            i.fas.fa-check
            | Aporte de fuerza laboral innovadora a las empresas y las regiones.
          li 
            i.fas.fa-check
            | Integralidad de sus egresados y su vocación de servicio.
          li 
            i.fas.fa-check
            | Calidad y estándares internacionales de su formación profesional integral.
          li 
            i.fas.fa-check
            | Incorporación de las últimas tecnologías en las empresas y en la formación profesional integral.
          li 
            i.fas.fa-check
            | Estrecha relación con el sector educativo (media y superior).
          li 
            i.fas.fa-check
            |  Excelencia en la gestión de sus recursos (humanos, físicos, tecnológicos y financieros).
      .col-lg-4.col-md-6.col-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1-2.svg' alt='')



    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3  Símbolos SENA

    p.mb-4(data-aos="fade") El escudo y la bandera del SENA fueron diseñados cuando se fundó́ nuestra institución y reflejan los tres sectores económicos dentro de los cuales operamos:   

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-md-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Escudo SENA.
        figure.mb-5
          img(src='@/assets/curso/temas/tema1-3-img1.svg' alt='La imagen presenta el escudo del Sena, integrado por los siguientes elementos:  el color rojo un circulo en piñones que representa el sector industrial, atravezado en sentido vertical por  un caduceo en forma de aguja con cuatro líneas amarillas horizontales que representa el sector comercio y servicios y  en la mitad inferior del piñon, siete granos de café entrelazados que representan el sector primario y extractivo del pais, finalmente en el centro del piñon sobresale la palabra SENA en letras negras  sobre un recuadro amarillo')
        
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Bandera SENA.
        figure.mb-4
          img(src='@/assets/curso/temas/tema1-3-img2.svg' alt='La imagen presenta una bandera con el escudo de la institución sobre un fondo blanco.')

    .row.mb-5
      .col-lg-7.mb-4(data-aos="fade-right")
        .bg-4.p-4.h-100.align-items-center.d-flex
          .bg-white.p-4
            p El 
              span.text-2.fw-bold logosímbolo 
              | representa gráficamente los enfoques de la formación que impartimos en la que el individuo es el responsable de su propio proceso de aprendizaje. 
      .col-lg-5.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3. 
          span Logosimbolo SENA.
        img.w-50.m-auto(src='@/assets/curso/temas/logoSena.png', alt='El logo esta compuesto por un circulo en la parte superior, el cual simula una cabeza, en el medio se encuntra  la palabra SENA y en la parte inferior tres triangulos abiertos que simulan brazos y piernas.')

    h3(data-aos="fade-right") Símbolos del SENA

    p.mb-4(data-aos="fade") A continuación, se presenta el vídeo de los símbolos que nos identifican. 

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_MZRAUSIZtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Inducción - Símbolos del SENA


    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4  Himno SENA

    p.mb-4(data-aos="fade") Observa la linea de tiempo de los símbolos que nos identifican.

    .tarjeta.tarjeta--gris.bg-2.p-4.mb-5(data-aos="fade-down")
      LineaTiempoC.color-primario
        .row.justify-content-center.py-3(titulo="Coro")
          .col-md-10.col-11
            p Estudiantes del SENA adelante por Colombia luchad con amor con el ánimo noble y radiante transformémosla en mundo mejor
        .row.justify-content-center.py-3(titulo="I")
          .col-md-10.col-11
            p De la patria el futuro destino, en las manos del joven está, el trabajo es seguro camino, que el progreso a Colombia dará.
        .row.justify-content-center.py-3(titulo="II")
          .col-md-10.col-11
            p En la forja del SENA se forman, hombres libres que anhelan triunfar, con la ciencia y la técnica unidas, nuevos rumbos de paz trazarán.
        .row.justify-content-center.py-3(titulo="III")
          .col-md-10.col-11
            p Hoy la patria nos grita sentida, ¡estudiantes del SENA triunfad! solo así lograréis en la vida, más justicia, mayor libertad.
        .row.justify-content-center.py-3(titulo="IV")
          .col-md-10.col-11
            p Avancemos con fuerza guerrera, ¡estudiantes con firme tesón! que la patria en nosotros espera, su pacífica revolución.

    h3(data-aos="fade-right") Himno del SENA

    p.mb-4(data-aos="fade") Conoce y aprende nuestro himno, escrito por el maestro Luis Alfredo Sarmiento. La música es del maestro Daniel Marles Endo. 

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZejiOSVZMyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Inducción - Himno del SENA 


    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Organigrama general del SENA

    p.mb-4(data-aos="fade") En la siguiente gráfica se presenta la estructura formal que actualmente tiene el SENA para el desarrollo de sus funciones. 

    .titulo-sexto.color-acento-contenido
      h5 Figura 4. 
      span Organigrama general SENA.
    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/temas/tema1-5-img1.svg' alt=' El diagrama describe la estructura de la institución de la siguiente manera: encabezando se encuentra el consejo directivo nacional, seguido por la dirección general, la cual se apoya en la oficina de control interno, la oficina de control interno disciplinario, la oficina de comunicaciones y la oficina de sistemas; para coordinar la secretaría general, la dirección de formación profesional, la dirección de empleo, la dirección del sistema nacional de formación para el trabajo, las direcciones regionales y del distrito capital, la dirección jurídica, la dirección de planeación y direccionamiento corporativo y la dirección administrativa y financiera. De la dirección general también se desprende, con apoyo del consejo  directivo nacional, la dirección de promoción y relaciones corporativas. Por ultimo se encuentran los centros de formación profesional, los cuales son apoyados por los comités técnicos de cada centro.  ')


    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Dirección de formación profesional SENA

    p.mb-4(data-aos="fade") Sus funciones las reglamenta el artículo 11 del Decreto 249 de 2004 y se estructura administrativamente, así:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-11.col-md-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5. 
          span Dirección de formación profesional SENA
        figure.mb-4
          img(src='@/assets/curso/temas/tema1-6-img1.svg' alt='El diagrama presenta la estructura de la dirección de formación, la cual se encarga de: La producción curricular, la investigación, innovación y producción académica, la formación virtual y a distancia la cual va ligada con el fomento del bienestar y liderazgo al aprendiz, la escuela de instructores Rodolfo Martínez tono, la administración educativa, la gestión y evaluación de la calidad de la formación, la gestión administrativa y los programas de fortalecimiento institucional y proyección social.')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
