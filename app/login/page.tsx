import Link from "next/link";

export default function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link href="/" className="brand center-brand">
          <span className="brand-paw">🐾</span><span>PetTag</span>
        </Link>
        <span className="eyebrow">Bem-vindo de volta</span>
        <h1>Entrar</h1>
        <p className="muted">Acesse seus pets e suas tags.</p>

        <form className="form" action="/painel">
          <label>E-mail<input type="email" name="email" placeholder="voce@email.com" required /></label>
          <label>Senha<input type="password" name="password" placeholder="Sua senha" required /></label>
          <button className="button full" type="submit">Entrar →</button>
        </form>

        <p className="form-foot">Ainda não tem conta? <Link href="/cadastro">Criar conta</Link></p>
      </div>
    </main>
  );
}