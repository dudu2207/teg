import Link from "next/link";

export default function PetPublic() {
  return (
    <main className="public-page">
      <div className="public-card">
        <div className="public-badge">🐾 PET IDENTIFICADO</div>
        <div className="public-photo">🐶</div>
        <h1>Luna</h1>
        <p className="public-message">Oi! Eu fui encontrada. Você pode ajudar a me levar para casa? 💗</p>

        <div className="info-list">
          <div><span>👤</span><div><small>Responsável</small><strong>Maria</strong></div></div>
          <div><span>📍</span><div><small>Cidade</small><strong>Curitiba - PR</strong></div></div>
        </div>

        <a className="button full" href="https://wa.me/" target="_blank" rel="noreferrer">📱 Entrar em contato</a>
        <button className="button button-alert full" type="button">🚨 Avisar que encontrei este pet</button>

        <p className="privacy-note">Para sua segurança, informações pessoais completas não são exibidas nesta página.</p>
        <Link href="/" className="public-brand">🐾 PetTag</Link>
      </div>
    </main>
  );
}