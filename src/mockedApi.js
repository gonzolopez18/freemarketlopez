const catalog = [
    { 
        id: '1', 
        name: 'Casco Moto Integral Vertigo Hk7', 
        price: 7700, 
        category: 'Cascos', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_785477-MLA49424514193_032022-F.webp', 
        stock: 10, 
        description:'El nuevo HK7 de la familia HOKEN, serie 2.0, te brinda protección Integral, con toda la tecnología Seguridad Activa Vértigo. Con gráficas renovadas para que dejés tu huella donde vayas.'
    },
    { 
        id: '2', 
        name: 'Casco para moto integral Halcon H57 blanco', 
        price: 5380, 
        category: 'Cascos', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_707633-MLA32941170103_112019-F.webp', 
        stock: 5, 
        description:'Existe un Halcon para cada motociclista. Esto es porque cada uno de sus cascos está especialmente pensado para garantizar la máxima seguridad del conductor, sin importar su situación de uso.'
    },
    { 
        id: '3', 
        name: 'Campera Moto Bs1 Impermeable Protecciones Touring Pista Ruta', 
        price: 39990, 
        category: 'Indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_866515-MLA50357672158_062022-F.webp', 
        stock: 8, 
        description:'Campera de motociclista, BS1, modelo MAN'
    },
    { 
        id: '4', 
        name: 'Botas Moto Solco Drift Viaje Ruta Motoscba', 
        price: 16479, 
        category: 'Calzado', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_794214-MLA32573081791_102019-F.webp', 
        stock: 3, 
        description:'BOTA SOLCO DRIFT.LA MEJOR BOTA DEL MERCADO ARGENTINO. MOTOCICLISMO DE VIAJE Y URBANO'
    },
    { 
        id: '5', 
        name: 'Botas Touring Impermeables Hifly Premiun Pvc Lluvia Wagner ', 
        price: 1750, 
        category: 'Calzado', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_657043-MLA40975219511_032020-F.webp', 
        stock: 10, 
        description:'Botas PVC Touring Hifly'
    },
    { 
        id: '6', 
        name: 'Campera De Cuero Moto Race - Hombre Cuero 1 Mm', 
        price: 27900, 
        category: 'Indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_726868-MLA29713061742_032019-F.webp', 
        stock: 13, 
        description:'Excelente chaqueta de de primera calidad!! CUERO AUTÉNTICO!!!'
    },
    { 
        id: '7', 
        name: 'Mochila Para Moto Circuit, Rígida Con Correa Porta Casco', 
        price: 13699, 
        category: 'Accesorios', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_952251-MLA47992878231_102021-F.webp', 
        stock: 8, 
        description:'Mochila para moto Circuit, rígida con correa porta casco'
    },
    { 
        id: '8', 
        name: 'Traba Discos Bulit De 5.5mm Con Funda', 
        price: 3999, 
        category: 'Accesorios', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_930383-MLA32083314504_092019-F.webp', 
        stock: 12, 
        description:'Ideal para motos con diámetro del agujero en el disco de freno menor a 10mm'
    }
]

export const getCatalogFromApi = async () => {
    var products
    fetch('http://localhost:8080/api/gambling')
    .then(response => response.json())
    .then(json => {
        products = json;
        console.log(json);
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        
    })
    return products;
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(catalog)
    //     }, 500)
    // })
}
export const getCatalogFromApiById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalog.find(prod => prod.id === id)); 
        }, 100)
    })
}
export const getCatalogFromApiByCategory = (category) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalog.filter(prod => prod.category === category))
        }, 100)
    })
}
