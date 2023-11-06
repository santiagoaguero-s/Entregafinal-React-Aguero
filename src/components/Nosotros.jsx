import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="txthistoria">
        <h2 className='main-title'>Bienvenidxs a Kala MakeUp Store</h2>
        <h3>Maquillaje para todxs</h3>
        
      <p>Buscamos ofrecer un espacio donde todos, todas y todes puedan encontrar productos para su tipo de piel y para sentirse hermosxs! Aqui encontraran de todo un poco
        referido a la belleza, cuidado de la piel y maquillaje. Esperemos que disfrutes tu paso por nuestra tienda! </p>
    </div>
  )
}

export default Nosotros