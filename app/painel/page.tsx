import Link from "next/link";

export default function Painel() {
  return (
    <main>
      <nav className="nav container">
        <Link href="/" className="brand"><span className="brand-paw">🐾</span><span>PetTag</span></Link>
        <span className="user-pill">Olá! 👋</span>
      </nav>

      <section className="dashboard container">
        <div className="dashboard-head">
          <div>
            <span className="eyebrow">Meu painel</span>
            <h1>Meus pets</h1>
            <p className="muted">Gerencie seus perfis e tags NFC.</p>
          </div>
          <Link href="/cadastro-pet" className="button">+ Cadastrar pet</Link>
        </div>

        <article className="dashboard-pet">
          <div className="pet-avatar">🐶</div>
          <div className="dashboard-pet-main">
            <span className="status">● Perfil ativo</span>
            <h2>Luna</h2>
            <p>Tag NFC: <strong>PT-8K7F-29QM</strong></p>
          </div>
          <div className="dashboard-actions">
            <Link href="/pet/demo" className="button button-light">Ver perfil</Link>
            <Link href="/cadastro-pet" className="button button-small">Editar</Link>
          </div>
        </article>

        <div className="security-note">
          <span>🔐</span>
          <div>
            <strong>Seu controle permanece com você.</strong>
            <p>Na versão com banco de dados, apenas a conta vinculada poderá editar ou liberar uma tag.</p>
          </div>
        </div>
      </section>
    </main>
  );
}