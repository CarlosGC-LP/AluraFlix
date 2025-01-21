import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #9c27b0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #9c27b0;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #7a1c8d;
  }
`;

const NuevoVideo = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: 'Frontend',
    imagen: '',
    video: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('¡Video agregado exitosamente!');
        setFormData({
          titulo: '',
          categoria: 'Frontend',
          imagen: '',
          video: '',
          descripcion: '',
        });
      } else {
        alert('Hubo un problema al agregar el video.');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert('Error de conexión al servidor.');
    }
  };

  return (
    <>
      <Container>
        <Title>Nuevo Video</Title>
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
      </Container>
      <Footer />
    </>
  );
};

export default NuevoVideo;