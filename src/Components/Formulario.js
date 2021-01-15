import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnologia' },
  ];
  //utilizar custom hook
  const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
  //submit al form, pasar cat al app.js
  const buscarNoticia = (e) => {
    e.preventDefault();

    guardarCategoria(categoria);
  };

  return (
    <div className={styles.fondoForm}>
      <div className={` ${styles.buscador} row `}>
        <div className="col s12 m8 offset-m2">
          <form onSubmit={buscarNoticia}>
            <h2 className={styles.heading}>Elige una categoria</h2>
            <SelectNoticias />
            <div className="input-field col s12">
              <input
                type="submit"
                className={`${styles.btn_block} btn-large amber darken-2`}
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;
