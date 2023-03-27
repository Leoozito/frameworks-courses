import { Link } from "react-router-dom";

export default function Contato() {
    return (
      <div>
        <h1>Contato</h1> <br/>
        <span>Email: teste@teste.com</span>

        <Link to="/sobre">Sobre</Link> <br/>
        <Link to="/">Home</Link>
      </div>
    );
  }