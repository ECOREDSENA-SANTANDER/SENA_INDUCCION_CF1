export default {
  global: {
    componenteFormativo: 'Contextualización SENA',
    descripcionCurso:
      'Conoce la entidad más querida por los colombianos, la cual funciona desde su creación en permanente alianza entre el Gobierno, los empresarios y los trabajadores, con el firme propósito de aumentar la capacidad de progreso en Colombia, a través de programas de formación profesional integral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-img1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-img2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contextualización SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Misión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Visión',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Símbolos SENA',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Himno SENA',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Organigrama general del SENA',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Dirección de formación profesional SENA',
            hash: 't_1_6',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Historia del SENA',
      referencia:
        'SENA. (7 de septiembre de 2012). La historia del SENA contada por Rodolfo Martínez Tono. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/U_exqn8Khpk',
    },
    {
      tema: 'Símbolos del SENA',
      referencia: 'SENA. (s.f.). Símbolos del SENA.  ',
      tipo: 'Video',
      link: 'https://youtu.be/VCgWoplELpw',
    },
    {
      tema: 'Himno del SENA',
      referencia: 'SENA. (6 de junio de 2012). Himno Nuevo. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/N410esgqADc',
    },
  ],
  glosario: [
    {
      termino: 'Aula virtual',
      significado:
        'entorno telemático en el cual el aprendiz tiene acceso a la red (intranet o internet) para desarrollar un proceso de aprendizaje. Permite la consulta de la documentación de estudio, el desarrollo de actividades de aprendizaje y la utilización de herramientas de interacción como foros de discusión y correo electrónico, entre otros. ',
    },
    {
      termino: '<em>B-Learning</em>',
      significado:
        'proviene del término en idioma inglés <em>Blended Learning</em>, en español aprendizaje mixto o combinado. Este tipo de aprendizaje se caracteriza por combinar de acuerdo con las necesidades del aprendiz o del programa de formación, sesiones sincrónicas en las cuales el instructor aborda temáticas del curso. ',
    },
    {
      termino: '<em>E-Learning</em>',
      significado:
        'roceso de enseñanza-aprendizaje que se lleva a cabo a través de internet, caracterizado por una separación física entre el instructor y el aprendiz, pero con el predominio de una comunicación tanto sincrónica como asincrónica a través de la cual se lleva a cabo una interacción didáctica continuada. Además, el aprendiz es el protagonista de su proceso de formación al tener que autogestionar su aprendizaje con el apoyo del instructor.  <br>Una de las ventajas más relevantes del e-learning es la disponibilidad de la información y contenidos de aprendizaje las 24 horas, los 7 días a la semana. Los aprendices, además de acceder a los mismos, pueden comunicarse con su instructor y compañeros de forma sincrónica o asincrónica, realizando aprendizaje altamente colaborativo y significativo, a cualquier hora y en cualquier lugar. ',
    },
    {
      termino: 'FAVA',
      significado:
        'se refiere exclusivamente a la orientación de programas de formación en ambientes virtuales de aprendizaje, esta contempla aquellas propuestas que están diseñadas y se desarrollan dentro de un <em>software</em>.  <br>Allí se permite hacer la gestión académica y administrativa de los programas de formación, procesos como la inscripción de estudiantes, la conformación de grupos, proponer actividades de diferentes tipos, hacer la tutoría y seguimiento, aplicar la evaluación, así como comunicarse de manera sincrónica y asincrónica con los aprendices y generar reportes. <br>La FAVA se puede dar en varias modalidades, entre ellas el <em>e-learning</em> y el <em>b-learning</em>. ',
    },
    {
      termino: '<em>LMS</em>',
      significado:
        'la necesidad de tener una FAVA efectiva y unos AVA cada vez más completos y atractivos para los aprendices, genera la emergencia de los sistemas de gestión de aprendizaje, conocidos en el idioma inglés como <em>Learning Management System</em> (LMS) y difundidos con este acrónimo en nuestro país. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Gros, B. (2011). Evolución y retos de la educación virtual: construyendo el e-learning del Siglo XXI. Editorial UOC. ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2016). Formación virtual.',
      link: 'http://www.mineducacion.gov.co/cvn/1665/w3-article-261460.html',
    },
    {
      referencia:
        'SENA. (2015). Formación tecnopedagógica en ambientes virtuales de aprendizaje. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.  ',
    },
    {
      referencia:
        'SENA. (2016). Instructivo para orientar el desempeño del instructor en ambientes virtuales de aprendizaje. Versión 2. Dirección de Formación Profesional. Grupo de Formación Virtual y a Distancia.  ',
    },
    {
      referencia: 'SENA. (2021). Quiénes somos. SENA',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Locución ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Ilustración',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete de Lengua de Señas Colombiana ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete de Lengua de Señas Colombiana ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jose Eduardo Solano Rivero ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
