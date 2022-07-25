const catalog = [
    { 
        id: '1', 
        name: 'Casco Moto Integral Vertigo Hk7', 
        price: 7700, 
        category: 'cascos', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_785477-MLA49424514193_032022-F.webp', 
        stock: 10, 
        description:'El nuevo HK7 de la familia HOKEN, serie 2.0, te brinda protección Integral, con toda la tecnología Seguridad Activa Vértigo. Con gráficas renovadas para que dejés tu huella donde vayas.'
    },
    { 
        id: '2', 
        name: 'Casco para moto integral Halcon H57 blanco', 
        price: 5380, 
        category: 'cascos', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_707633-MLA32941170103_112019-F.webp', 
        stock: 5, 
        description:'Existe un Halcon para cada motociclista. Esto es porque cada uno de sus cascos está especialmente pensado para garantizar la máxima seguridad del conductor, sin importar su situación de uso.'
    },
    { 
        id: '3', 
        name: 'Campera Moto Bs1 Impermeable Protecciones Touring Pista Ruta', 
        price: 39990, 
        category: 'indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_866515-MLA50357672158_062022-F.webp', 
        stock: 33, 
        description:'Campera de motociclista, BS1, modelo MAN'
    },
    { 
        id: '4', 
        name: 'otas Moto Solco Drift Viaje Ruta Motoscba', 
        price: 16479, 
        category: 'calzado', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_794214-MLA32573081791_102019-F.webp', 
        stock: 11, 
        description:'BOTA SOLCO DRIFT.LA MEJOR BOTA DEL MERCADO ARGENTINO. MOTOCICLISMO DE VIAJE Y URBANO'
    },
    { 
        id: '3', 
        name: 'Campera Moto Bs1 Impermeable Protecciones Touring Pista Ruta', 
        price: 39990, 
        category: 'indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_866515-MLA50357672158_062022-F.webp', 
        stock: 33, 
        description:'Campera de motociclista, BS1, modelo MAN'
    },
    { 
        id: '3', 
        name: 'Campera Moto Bs1 Impermeable Protecciones Touring Pista Ruta', 
        price: 39990, 
        category: 'indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_866515-MLA50357672158_062022-F.webp', 
        stock: 33, 
        description:'Campera de motociclista, BS1, modelo MAN'
    },
    { 
        id: '3', 
        name: 'Campera Moto Bs1 Impermeable Protecciones Touring Pista Ruta', 
        price: 39990, 
        category: 'indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_866515-MLA50357672158_062022-F.webp', 
        stock: 33, 
        description:'Campera de motociclista, BS1, modelo MAN'
    },
    { 
        id: '3', 
        name: 'Campera Moto Bs1 Impermeable Protecciones Touring Pista Ruta', 
        price: 39990, 
        category: 'indumentaria', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_866515-MLA50357672158_062022-F.webp', 
        stock: 33, 
        description:'Campera de motociclista, BS1, modelo MAN'
    }
]

export const getCatalogFromApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalog)
        }, 2000)
    })
}