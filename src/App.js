import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  return (
    <div className="App">
      <header className="header">
        <h1>Bienvenido a Clínica Sonrisa Natural</h1>
        <p>Cuidamos tu sonrisa con calidez, profesionalismo y tecnología de vanguardia.</p>
      </header>

      <section className="form-section">
        <h2>Agenda tu hora</h2>
        <form>
          <input type="text" placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
          <input type="email" placeholder="Correo" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Mensaje" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
