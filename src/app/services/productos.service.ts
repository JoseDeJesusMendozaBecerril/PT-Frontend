import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos:Producto[]=[
      {
              "id": "1",
              "nombre": "Tablet Huawei Matepad T",
              "desc": "La HUAWEI MatePad T10S es una tableta de 10.1 pulgadas que funciona como asistente inteligente para su trabajo de oficina y como un centro de entretenimiento con un procesador Kirin 710A de ocho núcleos de alto rendimiento y Wi-Fi. Pantalla FHD de 10,1 pulgadas con resolución de 1920 X 1200. -Alta relación pantalla-cuerpo -Ajustado por Harman Kardon -Protección para los ojos de varias capas -EMIU 10.1 basado en Android 10.-Cámara trasera: 5 MP  Cámara frontal 2 MP",
              "precio": "4299",
              "tags": "Tableta, Electronica, Celular, Android, Entretenimiento",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_912389-MLM43673501085_102020-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
          {
              "id": "2",
              "nombre": "Recamara 5 Piezas Cabecera Buros Comoda + Espejo Chocolate",
              "desc": "Descanse en la bella recámara Asira 5pz, fabricada con madera de pino industrializada, cabecera con recubrimiento foil en color chocolate y detalles en tacto piel color marfil, burós con recubrimiento en foil color chocolate.",
              "precio": "5849",
              "tags": "Recamara,Muebleria,Cama,Sillon,Comodidad",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_968609-MLM44013081680_112020-O.webp",
              "categoria": "Muebles",
              "calificacion": "4"
          },
          {
              "id": "3",
              "nombre": "Smart TV Samsung Series 8 UN55TU8000FXZX LED 4K 55",
              "desc": "Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, hará que disfrutes de una experiencia incomparable. Con el Smart TV UN55TU8000 accederás a las aplicaciones donde se encuentran tus contenidos favoritos. Además, podrás navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.",
              "precio": "12800",
              "tags": "TV, Entretenimiento,Tecnologia, Smart TV",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_601725-MLA43814183574_102020-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
          {
              "id": "4",
              "nombre": "Bocina Vorago KSP-300 portátil",
              "desc": "Vorago KSP-300 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa uniformemente por toda la habitación. Una bocina que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
              "precio": "899",
              "tags": "Audio,Sonido,Tecnologia,Bocina",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_705878-MLA43247865771_082020-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
          {
              "id": "5",
              "nombre": "iPhone 7 32 GB negro mate",
              "desc": "Momentos únicos, capturas reales Captura tus mejores momentos y revívelos cuando quieras con la cámara trasera de 12 Mpx. Además, el dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.",
              "precio": "5999",
              "tags": "Telefonica, Electronica, Celular, Apple, Iphone",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_654196-MLA43711395568_102020-O.webp",
              "categoria": "Electronica",
              "calificacion": 4
          },
          {
              "id": "6",
              "nombre": "iPhone 6s Plus 64 GB oro rosa",
              "desc": "Momentos únicos, capturas realesCaptura tus mejores momentos y revívelos cuando quieras con la cámara trasera de 12 Mpx. Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.",
              "precio": "5599",
              "tags": "Iphone, Electronica, Celular, Apple, Entretenimiento",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_866532-MLA43773355921_102020-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
          {
              "id": "7",
              "nombre": "Bocina Bluetooth Y Lámpara De Mesa",
              "desc": "Lámpara y Bocina Smart Bluetooth LED táctil de batería recargable. Escucha tu música, recibe llamadas y escucha tus videos favoritos en esta bocina vía bluetooth.",
              "precio": 169,
              "tags": "Bocina, Electronica, Audio, Bluetooth, Entretenimiento",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_711304-MLM41741585873_052020-O.webp",
              "categoria": "Electronica",
              "calificacion": " 4"
          },
          {
              "id": "8",
              "nombre": "Audífonos inalámbricos Xiaomi Redmi AirDots negro",
              "desc": "Con un diseño inspirado en la simplicidad, los Redmi AirDots tienen un estilo único. Cuentan con Bluetooth 5.0 que te permite conectarte a distancias largas y mantener una conexión sólida en todo momento. Su tecnología TWS (True Wireless Stereo) elimina los cables y te hace disfrutar plenamente de ritmos y melodías que fluyen libremente.",
              "precio": 394,
              "tags": "Audifonos, Electronica, Celular, Android, Inhalambrico",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_893078-MLA40757319738_022020-O.webp",
              "categoria": "Electronica",
              "calificacion": 4
          },
          {
              "id": "9",
              "nombre": "Microsoft Xbox Series S 512GB blanco",
              "desc": "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
              "precio": "7819",
              "tags": "Videojuego, Electronica, Xbox,Entretenimiento,Consola",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_771415-MLA44492818319_012021-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
          {
              "id": "10",
              "nombre": "Nintendo Switch 32GB Standard rojo neón, azul neón y negro",
              "desc": "No solo vas a poder descargar los mejores videojuegos y navegar en la web sin límite, sino que, gracias a su interconectividad global, también vas a tener la posibilidad de competir en línea con tus amigos y con personas de todas partes del mundo disfrutando de aventuras inolvidables.",
              "precio": "8500",
              "tags": "Videojuego, Electronica, Nintendo,Entretenimiento,Consola",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_817201-MLA40692089527_022020-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
          {
              "id": "11",
              "nombre": "Disco sólido interno Adata Ultimate SU650 ASU650SS-120GT-R 120GB negro",
              "desc": "Adata, marca líder en tecnología y servicios de almacenamiento, presenta la línea Ultimate SU650. Esta unidad SSD ofrece una gran calidad de lectura y escritura de datos, que permite potenciar y optimizar el rendimiento de tu PC. Su gran resistencia se contrasta con su funcionamiento silencioso, que hace que no te percates de ruidos molestos en comparación a otra clase de dispositivos.",
              "precio": "458",
              "tags": "Computacion, Electronica, Disco Duro,Computadoras,Almacenamiento",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_703126-MLA42153281002_062020-O.webp",
              "categoria": "Electronica",
              "calificacion": "4"
          },
  
          {
              "id": "11",
              "nombre": "Silla De Oficina Silla Ejecutiva Base Metalica",
              "desc": "Exclusiva silla para oficina totalmente ergonomica y muy comoda con guia de ensamble. Trabaja horas sin sentirlo, con su respaldo microperforado evitaras que te sude la espalda.",
              "precio": 1389,
              "tags": "Muebleria,Oficina,Silla,Sillones,Comodidad",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_933487-MLM44520315074_012021-O.webp",
              "categoria": "Muebles",
              "calificacion": 4
          },
          {
              "id": "12",
              "nombre": "Escritorio Estudiantil Sencillo 120x50 Negro",
              "desc": "Escritorio estudiantil tamaño práctico y amplio 120 CMS de largo 48'cms de fondo 72 CMS de altura fabricado con melamina (AGLOMERADO CUBIERTO DE MELAMINA) de 16 mm de grosor color negro tenemos de stock o envío rápido se manda desarmado se arma muy fácil",
              "precio": "1119",
              "tags": "Mueble,Oficina,Escritorio,Trabajo",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_748161-MLM42613727236_072020-O.webp",
              "categoria": "Muebles",
              "calificacion": "4"
          },
          {
              "id": "13",
              "nombre": "Silla Secretarial Para Negocios Color Negro Altura Ajustable",
              "desc": "Exclusiva silla para oficina totalmente ergonomica y muy comoda con guia de ensamble.",
              "precio": "1219",
              "tags": "Silla,Oficina,Comodidad,Muebleria,Sillon",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_826205-MLM43627082230_092020-O.webp",
              "categoria": "Muebles",
              "calificacion": "4"
          },
          {
              "id": "14",
              "nombre": "Paris Comedor Con Banca Y Sillas 6 Personas Madera",
              "desc": "FABRICADAS EN MADERA MACISA DE PINO 100% USO RUDO IDEAL PARA CAFETERIA , CASA, RESTAURANTE O BAR.",
              "precio": "3989",
              "tags": "Muebleria,Comedor,Hogar,Madera",
              "status": "Disponible",
              "img": "https://http2.mlstatic.com/D_NQ_NP_664868-MLM31892605834_082019-O.webp",
              "categoria": "Muebles",
              "calificacion": "4"
          },
          {
            "id": "15",
            "nombre": "Set De 4 Sillas Modernas Eames Varios Colores Begônia",
            "desc": "4 Sillas Modernas Eames , productos de alta calidad y con un diseño cuidado a precios accesibles",
            "precio": "1813",
            "tags": "Sillas,Muebles,Muebleria,Sillas,Hogar",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_703952-MLM41856483916_052020-O.webp",
            "categoria": "Muebles",
            "calificacion": "4"
        }, {
            "id": "16",
            "nombre": "Base Cama Urban Matrimonial - Base + Cabecera",
            "desc": `Disfruta de un profundo sueño con nuestra increíble Recamara Urban, su calidad de construcción combinada con una atención a detalle rigurosa hace de esta Recamara una de las mejores compras que podrás hacer, y por supuesto a los mejores precios!`,
            "precio": "2879",
            "tags": "Hogar,Recamara,Cama,Matrimonial,Descanso",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_820823-MLM31224565665_062019-O.webp",
            "categoria": "Muebles",
            "calificacion": "4"
        }, {
            "id": "17",
            "nombre": "Base De Cama Nooz Prime Con Cabecera Capitonada, Queen Size",
            "desc": "Gracias a su estructura del medio agrega un soporte extra e intermedio a la hora de dormir. Tres patas adicionales para mayor soporte. Materiales: Madera y Acero.",
            "precio": "5617",
            "tags": "Hogar,Recamara, Cama, Base de cama,Comodidad",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_793025-MLM32605275690_102019-O.webp",
            "categoria": "Muebles",
            "calificacion": "4"
        }, {
            "id": "18",
            "nombre": "Mesa Periquera Restaurante Bar Cafetería Lounge Taqueria",
            "desc": "Producto: Mesa periquera con cubierta de formaica. Mesa Periquera. Pedestal tubular de 3 pulgadas con 4 patas y tornillos niveladores. Cubierta: Formaica especial para el giro de alimentos y bebidas.",
            "precio": "849",
            "tags": "Hogar,Mesa, Restaurante, Cocina,Comedor",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_985069-MLM31217069883_062019-O.webp",
            "categoria": "Muebles",
            "calificacion": "4"
        }, {
            "id": "19",
            "nombre": "2 Bancos Bar Barra Cocina Cantina Comedor Cafetería Antro",
            "desc": "Paquete de 2 bancos. Banco para Bar, Barra, Cocina, Cantina, Comedor, Cafetería ó Antro Banco con base cromada, sin respaldo",
            "precio": "2291",
            "tags": "Hogar,Comedor, Silla, Banco",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_970741-MLM31232737919_062019-O.webp",
            "categoria": "Muebles",
            "calificacion": "4"
        },
        
        //COMIENZA ROPA
        {
            "id": "20",
            "nombre": "Playera Puma Multicolor Active Big Logo Tee Hombre",
            "desc": `Active Big Logo Tee, Playera deportiva,Licra`,
            "precio": "474",
            "tags": "Ropa,Moda,Hombre,Ropa Hombre, Playera",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_919040-MLM43782636138_102020-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "21",
            "nombre": "Playera Tipo Polo Slim Mod8101 - Polo Club",
            "desc": "Playera tipo polo slim color liso.Corte Slim.Manga Corta.Composición 100% algodón Piqué.Marca Royal County of Berkshire Polo Club.",
            "precio": "319",
            "tags": "Ropa,Moda,Hombre,Ropa Hombre, Playera",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_831220-MLM43738724754_102020-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "22",
            "nombre": "Gorra Under Armour Core Canvas 100% Origina",
            "desc": "Diseño estructurado que conserva la forma con una corona ligeramente más alta. Paneles de malla ArmourVent™ que permiten transpirar en verdad con una tela ligera, elástica, durable y que se seca rápidamente",
            "precio": "629",
            "tags": "Ropa,Moda,Hombre,Ropa Hombre, Playera,Gorra,Deportiva",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_786854-MLM28849026564_122018-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "23",
            "nombre": "Lentes De Sol Northweek - Matte White Blue Polarized",
            "desc": "Lentes espejadas de varios coloresMedidas: Frontal 14cm x Alto 4’75cm x Patillas 14’33cmIncluye caja y funda en microfibra estampadas con un diseño exclusivo y set de pegatinas",
            "precio": "233",
            "tags": "Ropa,Moda,Hombre,Ropa Lentes",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_853706-MLM31917253085_082019-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "24",
            "nombre": "Lentes Gafas Deportivos Polarizadas Para Bicicleta",
            "desc": "Función del programa Tipo de gafas: espejo de cambio de color de bicicleta Calidad de lente óptica: luz polarizada Material del marco: Plastico",
            "precio": "349",
            "tags": "Lentes,Gafas,Exteriores,Hombre,Deportivo",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_737782-MLM43814910614_102020-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "25",
            "nombre": "Mochila De Hidratación Con Depósito Flexible De Agua De 2 L",
            "desc": "Esta es una mochila de ciclismo profesional de 5L con vejiga de agua de 2L, capaz de almacenar la mayoría de las necesidades para actividades al aire libre, adecuada para montar a caballo, correr y montañismo, etc.",
            "precio": "1",
            "tags": "Deporte,Hombre,Mochila,Ciclismo",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_660767-MLM32131614775_092019-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "26",
            "nombre": "Conjunto Deportivo Con Secado Rápido P/ciclismo De Montaña",
            "desc": "Hecho de 100% poliéster respetuoso con la piel con impresión por sublimación que nunca se desvanece. El forro interior está hecho de tela de malla de peine transpirable para una mayor transpirabilidad y una efectiva absorción de la humedad. El sudor no se acumulará debajo de la camisa, sin sensación de picazón y pegajosidad.",
            "precio": "728",
            "tags": "Ropa,Moda,Hombre,Ropa Hombre, Deporte,Ciclismo",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_671860-MLM42946857287_072020-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "27",
            "nombre": "Malla Ciclista Hombre Ruta Montaña Urbano Spinning",
            "desc": "Excelente cobertura para mañanas frescas y protección solar. Diseño anatómico multi-panel 88% LYCRA Pad poliuretano, cómodo y resistente Confección Flathlock Cierre en tobillos",
            "precio": "469",
            "tags": "Ropa,Moda,Hombre,Ropa Hombre, Playera",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_790515-MLM32481576283_102019-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "28",
            "nombre": "Pantalón Jogger Cargo Jeans Para Hombre Casual",
            "desc": "Jogger cargo para hombre Gabardina strech para un ajuste perfecto",
            "precio": "399",
            "tags": "Ropa,Moda,Hombre,Ropa Hombre, Pantalon, Gabardina",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_645439-MLM42981625241_082020-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "29",
            "nombre": "Tenis Hombre, Tenis Mujer, Ligeros Colores Unisex",
            "desc": "enis deportivo. Fibras suaves, frescas y muy resistentes. Versátil y minimalista Elaborados con malla, para que el aire penetre y refresque tu pie. Suela Phylon ultra ligera Construcción del calzado pegado.",
            "precio": "422",
            "tags": "Ropa,Moda,Mujer,Ropa Mujer, Tennis",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_738290-MLM32463401264_102019-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        }, {
            "id": "30",
            "nombre": "Tenis Pirma Apolo Varios Colores Modelo 309",
            "desc": "Tenis deportivo Pirma Negro",
            "precio": "1",
            "tags": "Calzado,Moda,Hombre,Calzado Hombre, Tenis",
            "status": "Disponible",
            "img": "https://http2.mlstatic.com/D_NQ_NP_828707-MLM31220615935_062019-O.webp",
            "categoria": "Ropa",
            "calificacion": "4"
        },
      ]
  

  private categorias:Categoria[]=[
    {
      id:1,
      nombre:"Electronica",
      desc:"Articulos electronicos, Tecnologia y Telefonica"
    },
    {
      id:2,
      nombre:"Muebles",
      desc:"Muebleria,Moviliario,Hogar"
    },
    {
      id:3,
      nombre:"Ropa",
      desc:"Arrticulos para vestimenta, hombres,mujeres, niños"
    },
    {
      id:4,
      nombre:"Deportes",
      desc:"Articulos deportivos"
    }
  ]



  constructor() { }

//metodo accesar ainfo ya que el atrib es private
getCategorias(){
    return this.categorias;
}
//devuelve un heroe especifico
getCategoria(idx:string){
  return this.categorias[idx];
}
//busca un heroe
buscarCategorias(termino:string):Categoria[]{
let categoriasArr:Categoria[] = [];

termino = termino.toLowerCase();

for (let i=0; i <this.categorias.length;i++ ){ //los q coincidan
    let categoria = this.categorias[i];

    let nombre = categoria.nombre.toLowerCase();
    if(nombre.indexOf(termino) >= 0){
      categoria.id =i;
      categoriasArr.push(categoria);
    }
}
return categoriasArr;
}



getProductos(){
  return this.productos;
}

getProductosCategoria(id_categoria:string){
  let productosArr:Producto[] = [];
  let categoria_buscada="";
  if(id_categoria === "0"){ categoria_buscada = "Electronica" }
  if(id_categoria === "1"){ categoria_buscada = "Muebles" }
  if(id_categoria === "2"){ categoria_buscada = "Ropa" }
  if(id_categoria === "3"){ categoria_buscada = "Papeleria" }

  categoria_buscada = categoria_buscada.toLowerCase();

  for (let i=0; i <this.productos.length;i++ ){ //los q coincidan
    let producto = this.productos[i];
  
    let categoria_local = producto.categoria.toLowerCase();
    if(categoria_buscada === categoria_local){
      productosArr.push(producto);
    }
  }
  return productosArr;
}

getProducto(id:string){
return this.productos[id];
}

buscarProducto(termino:string):Producto[]{
let productosArr:Producto[] = [];

termino = termino.toLowerCase();

for (let i=0; i <this.productos.length;i++ ){ //los q coincidan
  let producto = this.productos[i];

  let nombre = producto.nombre.toLowerCase();
  if(nombre.indexOf(termino) >= 0){ //buscando en el nombre
    producto.id =i;
    productosArr.push(producto);
  }

  



}
return productosArr;
}





}
