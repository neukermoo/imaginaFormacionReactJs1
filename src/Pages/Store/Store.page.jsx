import './Store.page.scss';
import React, {useState} from 'react';
import { GET } from '../../services/http.service';
import Producto from '../../components/elementoProducto/elementoProducto.component';
import {useSelector, useDispatch} from 'react-redux';
import { guardarListado } from '../../redux/actions/productos.actions';

export default function Store() {

    const estado = useSelector(state => state);
    const dispatch = useDispatch();

    if(estado.listado==''){
        GET('https://fakestoreapi.com/products')
        .then(data => {
            dispatch(guardarListado(data));

        })
        .catch(error => {
            console.error("❌ Algo ha ido mal con la petición...", error);
        });
      }


    var productosBD = [];
    Object.keys(estado.listado).forEach(function(key) {
        productosBD.push(estado.listado[key]);
    });

    return (
            
        <div className="Store">
            {productosBD.map(item => 
                    <Producto  key={item.id}
                                  id={item.id} 
                                  titulo={item.title} 
                                  descripcion={item.description}
                                  precio={item.price} 
                                  imagen={item.image}
                                  categoria={item.category} 
                    />)};
     
        </div>
    );
}