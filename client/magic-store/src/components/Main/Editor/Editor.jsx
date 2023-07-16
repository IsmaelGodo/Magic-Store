import React, {useState, useEffect} from "react";
import axios from "axios";


const Editor = () => {
  
    const [showForm1, setShowForm1] = useState(true);
    const [urlFetch, setUrlFetch] = useState("http://localhost:4000/api/ilustrator?");
    const [iluData, setIluData] = useState([]);
    
    
      const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
        color: "",
        id_ilu: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4000/api/card", formData);
          console.log("Respuesta del servidor:", response.data);
        } catch (error) {
          console.log("Error al enviar los datos:", error);
        }
      };

    const handleToggleForm = () => {
      setShowForm1((prevShowForm1) => !prevShowForm1);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${urlFetch}`
          );
          const data = response.data;
          
          setIluData(data)
        } catch (error) {
          console.log("Error:", error);
        }
      };
      
      fetchData();
    }, []);
    useEffect(() => {
      console.log(iluData);
    }, [iluData]);
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Imagen"
            name="imagen"
            pattern="^https://.*" 
            title="Formato Incorrecto"
            value={formData.imagen}
            onChange={handleChange}
          />
          <select name="color" value={formData.color} onChange={handleChange}>
            <option value="">Selecciona Color</option>
            <option value="Rojo">Red</option>
            <option value="Negro">Black</option>
            <option value="Verde">Green</option>
            <option value="Azul">Blue</option>
            <option value="Blanco">White</option>
          </select>
          <select name="id_ilu" value={formData.id_ilu} onChange={handleChange}>
            <option value="">Ilustrador</option>
            {iluData.map((ilu, index) => (
              <option key={index} value={ilu.id_ilu}>
                {ilu.nombre}
              </option>
            ))}
          </select>
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  };


export default Editor;
