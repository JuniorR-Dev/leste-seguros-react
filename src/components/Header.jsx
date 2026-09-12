import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import lesteseg from "../imgs/lesteseg.png";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={lesteseg} alt="Leste Seguros" />
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <a href="/#inicio" onClick={() => setOpen(false)}>Início</a>
          <a href="/#beneficios" onClick={() => setOpen(false)}>Benefícios</a>
          <a href="/#faq" onClick={() => setOpen(false)}>Dúvidas</a>
          <Link to="/cotacao" className="nav-cta" onClick={() => setOpen(false)}>
            Calcule agora
          </Link>
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}