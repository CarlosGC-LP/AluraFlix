import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #9c27b0;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #9c27b0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7a1c8d;
  }
`;

const Modal = ({ cardData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(cardData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!cardData || !cardData.id) {
      alert('Error: No se encontró el ID del video.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/videos/${cardData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo: formData.titulo,
          categoria: formData.categoria,
          imagen: formData.imagen,
          video: formData.video,
          descripcion: formData.descripcion,
        }),
      });
  
      if (response.ok) {
        alert('¡Video actualizado exitosamente!');
        onUpdate(); 
        onClose();  
      } else {
        alert(`Error al actualizar el video: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud PUT:', error);
    }
  };  

  return (
    <ModalContainer>
      <ModalContent>
        <Title>Editar Card</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="titulo"
            placeholder="Título del Video"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
          <Select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Innovación y Gestión">Innovación y Gestión</option>
          </Select>
          <Input
            type="url"
            name="imagen"
            placeholder="URL de la Imagen"
            value={formData.imagen}
            onChange={handleChange}
            required
          />
          <Input
            type="url"
            name="video"
            placeholder="URL del Video"
            value={formData.video}
            onChange={handleChange}
            required
          />
          <TextArea
            name="descripcion"
            placeholder="Descripción del Video"
            rows="4"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
          <Button type="submit">Guardar</Button>
        </Form>
        <Button onClick={onClose} style={{ marginTop: '1rem', backgroundColor: '#e74c3c' }}>
          Cerrar
        </Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;