import { Link, LinkButton } from '@midas-ds/components'

export function LinkA11yPage() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
      <h1>Link — skärmläsartest</h1>

      <div>
        <p>Extern länk (öppnas i ny flik)</p>
        <Link href='https://example.com' target='_blank'>Besök exempel.se</Link>
      </div>

      <div>
        <p>Vanlig länk (ingen ikon)</p>
        <Link href='#'>Intern länk</Link>
      </div>

      <div>
        <p>Fristående länk</p>
        <Link href='#' standalone>Läs mer</Link>
      </div>

      <div>
        <p>Nedladdningslänk</p>
        <Link href='#' download>Ladda ner fil</Link>
      </div>

      <h1>LinkButton — skärmläsartest</h1>

      <div>
        <p>Extern knapp-länk (öppnas i ny flik)</p>
        <LinkButton href='https://example.com' target='_blank'>Besök exempel.se</LinkButton>
      </div>

      <div>
        <p>Vanlig knapp-länk</p>
        <LinkButton href='#'>Gå vidare</LinkButton>
      </div>

      <div>
        <p>Bakåt-knapp</p>
        <LinkButton href='#' iconPlacement='left'>Föregående steg</LinkButton>
      </div>
    </div>
  )
}
