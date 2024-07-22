import  { useState } from 'react';
import Navbar from '../../Componest/Navbar/Navbar.jsx'
import dayjs from 'dayjs';
import './Agendamento.css';

const Agendamento = () => {
  const [formData, setFormData] = useState({
    dia: '',
    horaInicio: '',
    horaFim: '',
    quantidadePessoas: ''
  });

  const [selectedDays, setSelectedDays] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      const day = dayjs(formData.dia).format('YYYY-MM-DD');
      const newTimes = [...(selectedDays[day] || []), { horaInicio: formData.horaInicio, horaFim: formData.horaFim }];
      setSelectedDays({ ...selectedDays, [day]: newTimes });
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
    const day = dayjs(formData.dia).format('YYYY-MM-DD');
    if (!formData.dia) {
      errors.dia = 'Por favor, selecione o dia.';
      isValid = false;
    } else if (selectedDays[day] && selectedDays[day].length >= 2) {
      errors.dia = 'Não é possível agendar mais de dois horários no mesmo dia.';
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
      <section className='Fundo_imagem_agendamento1'>
      <Navbar/>
       <div className="formulario-container">
      <h2 className='title01'>Agendamento</h2>
      <h4 className='subTitle01'>Agendamento é uma página direcionada para selecionar datas para utilização do laboratório, 
        horários de início ao fim, quantidade de pessoas e calendário ilustrativo.</h4>
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
          {formErrors.dia && <span className="error">{formErrors.dia}</span>}
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
              {formErrors.horaInicio && <span className="error">{formErrors.horaInicio}</span>}
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
              {formErrors.horaFim && <span className="error">{formErrors.horaFim}</span>}
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
          {formErrors.quantidadePessoas && <span className="error">{formErrors.quantidadePessoas}</span>}
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
      </section>
      
    
   
  );
};

export default Agendamento;
