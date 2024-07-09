import React, { useState, useRef } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        form.classList.add('was-validated');

        if (form.checkValidity() === true) {
            console.log(formData);
            // Aquí puedes añadir la lógica para enviar el formulario
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="container-fluid p-0 mb-3 needs-validation border rounded" noValidate>
            <div className="container-fluid py-3 px-2">
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="ejemplo@ejemplo.com" 
                            className="form-control" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                        <div className="invalid-feedback">
                            Por favor, ingrese su correo electrónico.
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="********" 
                            className="form-control" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                        <div className="invalid-feedback">
                            Por favor, ingrese su contraseña.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-body-secondary py-2 px-2">
                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                    <button className="btn btn-danger" type="button">Cancelar</button>
                    <button className="btn btn-success" type="submit">Ingresar</button>
                </div>
            </div>
        </form>
    );
}
