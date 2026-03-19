import { ColorSchemeSwitch } from '@midas-ds/components'

const DEMO_ID = 'color-scheme-demo'

const demoStyles = `
  #${DEMO_ID} {
    background: var(--midas-layer-01);
    color: var(--midas-text-primary);
    border: 1px solid var(--midas-border-color-default);
    border-radius: 4px;
    padding: 1rem;
    margin-top: 0.75rem;
  }
  #${DEMO_ID}[data-color-scheme='dark'] {
    background: #161616;
    color: #f4f4f4;
    border-color: #393939;
  }
  #${DEMO_ID}[data-color-scheme='light'] {
    background: #ffffff;
    color: #161616;
    border-color: #e0e0e0;
  }
`

export const SelectorExample = () => (
  <>
    <style>{demoStyles}</style>
    <ColorSchemeSwitch
      selector={`#${DEMO_ID}`}
      defaultScheme='light'
    />
    <div id={DEMO_ID}>Bakgrunden och texten ändras beroende på valt läge.</div>
  </>
)
