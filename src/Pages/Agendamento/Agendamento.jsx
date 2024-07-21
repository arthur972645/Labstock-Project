import React, { useState } from 'react';
import Navbar from '../../Componest/Navbar/Navbar.jsx';
import Imagem_fundo from '../../assets/Agendamento/Group 29.png'
import './Agendamento.css';

const Agendamento = () => {
  const [formData, setFormData] = useState({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
   if (formIsValid()) {
    
    console.log(formData);
    clearForm();
  } else {
    console.log('Formulário inválido. Por favor, corrija os erros.');
  }
};

const formIsValid = () => {
  let errors = {};
  let isValid = true;

  // Validar campo dia
  if (!formData.dia) {
    errors.dia = 'Por favor, selecione o dia.';
    isValid = false;
  }

  // Validar campo horaInicio
  if (!formData.horaInicio) {
    errors.horaInicio = 'Por favor, selecione a hora de início.';
    isValid = false;
  }

  // Validar campo horaFim
  if (!formData.horaFim) {
    errors.horaFim = 'Por favor, selecione a hora de fim.';
    isValid = false;
  } else if (formData.horaInicio && formData.horaFim <= formData.horaInicio) {
    errors.horaFim = 'A hora de fim deve ser posterior à hora de início.';
    isValid = false;
  }

  // Validar campo quantidadePessoas
  if (!formData.quantidadePessoas || formData.quantidadePessoas <= 0) {
    errors.quantidadePessoas = 'Por favor, informe a quantidade de pessoas (deve ser maior que zero).';
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

const clearForm = () => {
  setFormData({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });
  setFormErrors({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });

  };

  return (
    <section className='Agendamento'>
      <Navbar/>
      <section className='Parte_do_meio'>
      <div className="formulario-container">
      <h2 className='title01'>Agendamento</h2>
        <h4 className='subTitle01'>Agendamento é uma página direcionada para selecionar datas para utilização do laboratório, 
          horarios de inicio ao fim, quantidades de pessoas e calendário ilustrativo.</h4>
        <form onSubmit={handleSubmit} className="formulario">
          <label>
            Dia:
            <input
              type="date"
              name="dia"
              value={formData.dia}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <div className="horarios">
            <div className="horario">
              <label>
                Início:
                <input
                  type="time"
                  name="horaInicio"
                  value={formData.horaInicio}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="horario">
              <label>
                Fim:
                <input
                  type="time"
                  name="horaFim"
                  value={formData.horaFim}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <br />
          <label>
            Quantidade de pessoas:
            <input
              type="number"
              name="quantidadePessoas"
              value={formData.quantidadePessoas}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      </section>
      
    </section>
    
   
  );
};

export default Agendamento;