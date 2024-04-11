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
              p.mb-0 Personería jurídica 
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tarj2.svg' alt='')
          .tarjeta.tarjeta--azul.bg-3
            .p-3
              p.mb-0 Patrimonio propio e independiente 
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tarj3.svg' alt='')
          .tarjeta.tarjeta--azul.bg-3
            .p-3
              p.mb-0 Autonomía administrativa 

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
              p Autorizada por el Estado para invertir en la infraestructura necesaria para mejorar el desarrollo social y técnico de los trabajadores en las diferentes regiones, a través de la formación profesional integral que logra incorporarse con las metas del Gobierno nacional, mediante el cubrimiento de las necesidades específicas de recurso humano en las empresas. Por medio de la vinculación al mercado laboral –bien sea como empleado o subempleado–, con grandes oportunidades para el desarrollo empresarial, comunitario y tecnológico.
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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/V2ZTz17C7M0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Historia SENA


    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Misión

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-9.col-md-10.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.


    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Visión

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.mb-4
          p.mb-0 En el 2020 el SENA será una 
            span.text-1.fw-bold Entidad de clase mundial 
            | en formación profesional integral y en el uso y apropiación de tecnología e innovación al servicio de personas y empresas; habrá contribuido decisivamente a incrementar la competitividad de Colombia a través de:
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

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-md-12.col-12
        figure.mb-4
          img(src='@/assets/curso/temas/tema1-3-img1.svg' alt='')
        figure.mb-4
          img(src='@/assets/curso/temas/tema1-3-img2.svg' alt='')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9.col-md-10.col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1-3-img3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 El 
              span.text-2.fw-bold logosímbolo 
              | representa gráficamente los enfoques de la formación que impartimos en la que el individuo es el responsable de su propio proceso de aprendizaje. 

    h3(data-aos="fade-right") Símbolos del SENA

    p.mb-4(data-aos="fade") Observa el vídeo de los símbolos que nos identifican.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VCgWoplELpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Símbolos del SENA


    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4  Himno SENA

    p.mb-4(data-aos="fade") Observa el vídeo de los símbolos que nos identifican.

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

    p.mb-4(data-aos="fade") Escucha y aprende nuestro himno, escrito por el maestro Luis Alfredo Sarmiento. La música es del maestro Daniel Marles Endo.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LqPzZSco-Ns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Himno del Sena


    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Organigrama general del SENA

    p.mb-4(data-aos="fade") En la siguiente gráfica puede observar la estructura formal que actualmente tiene el SENA para el desarrollo de sus funciones.

    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/temas/tema1-5-img1.svg' alt='')


    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Dirección de formación profesional SENA

    p.mb-4(data-aos="fade") Sus funciones las reglamenta el artículo 11 del Decreto 249 de 2004 y se estructura administrativamente, así:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-11.col-md-12.col-12
        figure.mb-4
          img(src='@/assets/curso/temas/tema1-6-img1.svg' alt='')



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
