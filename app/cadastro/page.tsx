import Link from "next/link";

export default function Cadastro() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link href="/" className="brand center-brand">
          <span className="brand-paw">🐾</span><span>PetTag</span>
        </Link>
        <span className="eyebrow">Comece por aqui</span>
        <h1>Crie sua conta</h1>
        <p className="muted">Depois você poderá cadastrar e gerenciar seus pets.</p>

        <form className="form" action="/painel">
          <label>Seu nome<input name="name" placeholder="Ex.: Maria" required /></label>
          <label>E-mail<input type="email" name="email" placeholder="voce@email.com" required /></label>
          <label>Senha<input type="password" name="password" placeholder="Mínimo de 8 caracteres" minLength={8} required /></label>
          <button className="button full" type="submit">Criar minha conta →</button>
        </form>

        <p className="form-foot">Já tem uma conta? <Link href="/login">Entrar</Link></p>
      </div>
    </main>
  );
}