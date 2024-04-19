import React, { useState, useEffect } from 'react';
//ERROR useEffect no se usa, React tampoco es necesario YAGNI


const FormConErrores = ({ extraProp }) => {
//ERROR extras prop no se usa nunca YAGNI

  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    genero: '',
  });

  //mañana refactorizar 👇 ERROR LEGIBILIDAD, MANTENIBILIDAD

  const [formErrors, setFormErrors] = useState({
    nombre: '',
    email: '',
    genero: '',
    //ERROR propiedad innecesaria que no se esta utilizando YAGNI
    misc: null,
  });

  //ERROR las funciones de handle son repetitivas DRY
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  //funcion de validacion...
  const validateForm = () => {
    let isValid = true;
    const errors = {
      nombre: '',
      email: '',
      genero: '',
    };

    if (!formValues.nombre) {
      errors.nombre = 'El nombre es requerido';
      isValid = false;
    }

    if (!formValues.email) {
      errors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'El formato del email es incorrecto';
      isValid = false;
    }

    if (!formValues.genero) {
      errors.genero = 'El género es requerido';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };


  //ERROR xyz no es desciptiva, dificulta la legibilidad
  const xyz = (e) => {
    if (validateForm()) {
      alert('Formulario enviado con éxito');
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    } else {
      e.preventDefault();
    }
  };

  //ERROR La funcion es innecesaria, fuera de contexto KISS
  const showHello = () => {
    alert('¡Hola!');
  };

  return (
        <main>
            <div class="container col-xl-10 col-xxl-8 px-4 py-5">
              <div class="row align-items-center g-lg-5 py-5">
                <div class="col-lg-7 text-center text-lg-start">
                  <h1 class="display-4 fw-bold lh-1 mb-3">Subscribite a nuestro Newsletter</h1>
                  <p class="col-lg-10 fs-4">Aceptas recibir información de todos las novedades del emprendimiento, podrás darlo de baja en cualquier momento</p>
                </div>
                <div class="col-md-10 mx-auto col-lg-5">
                  <form onSubmit={xyz} class="p-4 p-md-5 border rounded-3 bg-light">

                    <div class="mb-3">

                        <label>
                            <input 
                            
                                type="text"
                                name="nombre"
                                class="form-control" 
                                id="floatingInput"
                                placeholder='Ingresa tu nombre'
                                value={formValues.nombre} 
                                onChange={handleChange1}>
                                
                            </input>
                        </label>
                        {formErrors.nombre && <div>{formErrors.nombre}</div>}

                    </div>

                    <div class="mb-3">
                        <label>
                            <input

                                type="email"
                                name="email"
                                class="form-control" 
                                id="floatingPassword"
                                placeholder='Ingresa tu Mail'
                                value={formValues.email}
                                onChange={handleChange2}

                            />
                        </label>
                        {formErrors.email && <div>{formErrors.email}</div>}
                    </div>
                    
                    <div class="mb-3">
                        <label>
                            <select
                                name="genero"
                                value={formValues.genero}
                                onChange={handleChange1}
                                class="form-select"
                                placeholder='Selecciona tu género'

                            >

                                
                                <option value="">Selecciona un género</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>

                            </select>

                        </label>
                        {formErrors.genero && <div>{formErrors.genero}</div>}
                    </div>


                    <button class="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>
                  </form>
                </div>
              </div>
            </div>
        </main>
  );
};

export default FormConErrores;












