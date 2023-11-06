import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";


function  LlamadaFirebase(){


    const [datosItems, setDatosItems] = useState([]);

    const fbReferencia = collection(db,"productos");

    const obtenerItems = async () =>{
        const items = await getDocs(fbReferencia);
        const dataFirebase = items.docs.map(item=> item.data());
        setDatosItems(dataFirebase);
    }

    useEffect(()=>{
        obtenerItems();
    },[])

    return<div>
        PRODUCTOS FIREBASE
        <div>
            {datosItems.length>0
            ?datosItems.map(item=>{
                return(<div>
                    <h3>{item.titulo}</h3>
                </div>)
            })
            :<div>No hay productos</div>    }
        </div>
    </div>
} 

export default LlamadaFirebase