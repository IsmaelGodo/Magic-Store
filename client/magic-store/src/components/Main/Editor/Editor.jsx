import React, {useState, useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';



const Editor = () => {

  
  
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
        if (formData.nombre && formData.descripcion && formData.imagen && formData.color && formData.id_ilu) {
          try {
            const response = await axios.post("http://localhost:4000/api/card", formData);
            console.log("Respuesta del servidor:", response.data);
            setFormData({
              nombre: "",
              descripcion: "",
              imagen: "",
              color: "",
              id_ilu: "",
            });
            Swal.fire('Éxito', 'Los datos se enviaron correctamente', 'success');
          } catch (error) {
            console.log("Error al enviar los datos:", error);
            Swal.fire('Error', 'Hubo un error al enviar los datos', 'error');
          }
        } else {
          Swal.fire('Advertencia', 'Debes rellenar todos los campos', 'warning');
        }
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
        <article className="editor">
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
        </article>
        <article className="previsualizer">
              <p>{formData.nombre}</p><p>{formData.descripcion}</p><p>{formData.color}</p><p>{formData.id_ilu}</p><img className="img-pre" src={`${formData.imagen}`}/>
        </article>
      </section>
      

    );
  };


export default Editor;
