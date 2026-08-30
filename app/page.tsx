import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <Link href="/" className="brand">
          <span className="brand-paw">🐾</span>
          <span>PetTag</span>
        </Link>
        <div className="nav-actions">
          <Link href="/login" className="text-link">Entrar</Link>
          <Link href="/cadastro" className="button button-small">Criar conta</Link>
        </div>
      </nav>

      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">🔵 NFC • simples • seguro</span>
          <h1>Se ele se perder,<br /><span>encontre o caminho de volta.</span></h1>
          <p>
            Uma tag inteligente para a coleira do seu pet. Quem encontrar
            pode aproximar o celular e ver como entrar em contato com você.
          </p>
          <div className="hero-actions">
            <Link href="/cadastro" className="button">Cadastrar meu pet <span>→</span></Link>
            <Link href="/pet/demo" className="button button-light">Ver exemplo</Link>
          </div>
          <div className="trust-row">
            <span>✓ Sem aplicativo</span>
            <span>✓ Funciona pelo celular</span>
            <span>✓ Perfil editável</span>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="blob blob-pink" />
          <div className="blob blob-blue" />
          <div className="pet-card">
            <div className="pet-photo">🐶</div>
            <div className="pet-card-info">
              <span>Pet identificado</span>
              <h3>Luna</h3>
              <p>Oi! Eu fui encontrada 💗</p>
              <div className="mini-contact">📱 Entrar em contato</div>
            </div>
            <div className="nfc-pill">NFC</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Como funciona</span>
            <h2>Feito para ser fácil.</h2>
            <p>Do cadastro ao encontro do pet, tudo acontece em poucos passos.</p>
          </div>
          <div className="feature-grid">
            <Feature icon="📲" title="Aproxime" text="A pessoa encosta o celular na tag NFC da coleira." />
            <Feature icon="🐾" title="Identifique" text="O perfil do pet abre automaticamente no navegador." />
            <Feature icon="💗" title="Conecte" text="O responsável recebe uma forma segura de contato." />
          </div>
        </div>
      </section>

      <section className="cta container">
        <div>
          <span className="eyebrow">Seu pet merece essa proteção</span>
          <h2>Crie seu primeiro perfil.</h2>
          <p>Essa é a primeira versão do PetTag. O banco de dados e a ativação das tags serão conectados na próxima etapa.</p>
        </div>
        <Link href="/cadastro" className="button">Começar agora →</Link>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>🐾 PetTag</span>
          <span>Identificação inteligente para pets</span>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article className="feature">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}