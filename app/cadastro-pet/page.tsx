import Link from "next/link";

export default function CadastroPet() {
  return (
    <main>
      <nav className="nav container">
        <Link href="/" className="brand"><span className="brand-paw">🐾</span><span>PetTag</span></Link>
        <Link href="/painel" className="text-link">← Voltar ao painel</Link>
      </nav>

      <section className="form-page container">
        <div className="form-header">
          <span className="eyebrow">Novo pet</span>
          <h1>Cadastre seu pet</h1>
          <p className="muted">Essas informações poderão aparecer para quem encontrar seu pet.</p>
        </div>

        <form className="wide-form" action="/painel">
          <div className="photo-upload"><span>📷</span><strong>Adicionar foto</strong><small>JPG ou PNG</small></div>
          <div className="two-col">
            <label>Nome do pet<input name="petName" placeholder="Ex.: Luna" required /></label>
            <label>Nome do responsável<input name="ownerName" placeholder="Ex.: Maria" required /></label>
            <label>WhatsApp<input name="phone" placeholder="(41) 99999-9999" /></label>
            <label>Cidade<input name="city" placeholder="Ex.: Curitiba" /></label>
            <label>Estado<select name="state" defaultValue=""><option value="" disabled>Selecione</option><option>PR</option><option>SP</option><option>SC</option><option>RS</option><option>RJ</option></select></label>
            <label>Tag NFC<input name="tag" placeholder="Código da tag" /></label>
          </div>
          <label>Informações importantes<textarea name="notes" placeholder="Ex.: É dócil, usa medicamento, tem medo de fogos..."></textarea></label>
          <div className="form-actions">
            <Link href="/painel" className="button button-light">Cancelar</Link>
            <button className="button" type="submit">Salvar pet →</button>
          </div>
        </form>
      </section>
    </main>
  );
}