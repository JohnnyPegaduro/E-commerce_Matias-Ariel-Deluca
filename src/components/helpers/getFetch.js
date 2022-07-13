import foto from '../../components/Img/gorra1.jpg'
import foto2 from '../../components/Img/gorra2.jpg'
import foto3 from '../../components/Img/gorra3.jpg'
import foto4 from '../../components/Img/gorra4.jpg'
import foto5 from '../../components/Img/remera.jpg'
import foto6 from '../../components/Img/remera2.webp'
import foto7 from '../../components/Img/remera3.webp'

let productos = [
    { id: '1' ,categoria: 'remeras', name: "negro", price: 37, foto:[foto5] },
    { id: '2' ,categoria: 'remeras', name: "rojo", price: 27, foto:[foto6] },
    { id: '3' ,categoria: 'remeras', name: "blanco", price: 40, foto:[foto7] },
    { id: '4' ,categoria: 'gorras', name: "gorra NY", price: 55, foto:[foto] },
    { id: '5' ,categoria: 'gorras', name: "gorra blanca", price: 11, foto:[foto2] },
    { id: '6' ,categoria: 'gorras', name: "gorra roja", price: 19, foto:[foto3] },
    { id: '7' ,categoria: 'gorras', name: "gorra negra", price: 2, foto:[foto4] }  

    ];

    export const getFetch = (id) =>{    
        // acciones
        return new Promise( (resolve, reject)=>{   
            setTimeout(()=>{
                if (id) {
                    resolve(productos.find(prod => prod.id === id))              
                } else {
                    resolve(productos)          
                }
            },3000)     
        })
    }

