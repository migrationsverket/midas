import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-C5NpfoMW.js";import{t as n}from"./Button-CfsfUeaI.js";import{t as r}from"./button-VhdNnZ7x.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./Toast-71wBsDY-.js";var u,d,f,p,m,h,g;e((()=>{i(),r(),u=t(),d={component:l,subcomponents:{ToastProvider:c,ToastRegion:a,Toast:o},title:`Components/Toast`,tags:[`autodocs`],parameters:{docs:{description:{component:"Toast visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser. Det finns två sätt att använda toast: **globalt** med `toastQueue` eller **lokalt** med `ToastProvider`.\n\n### MidasToast\n\nObjektet som skickas till `.add()`:\n\n| Egenskap | Typ | Beskrivning |\n|----------|-----|-------------|\n| `message` | `string` | Meddelandetext |\n| `type` | `'success' \\| 'info' \\| 'important' \\| 'warning'` | Variant |\n| `children` | `ReactNode` | Valfritt extra innehåll |\n\n### ToastState / toastQueue\n\nMetoderna som finns på `state` (från `ToastProvider`) och `toastQueue` (global):\n\n| Metod | Returtyp | Beskrivning |\n|-------|----------|-------------|\n| `.add(content, options?)` | `string` | Lägger till en toast, returnerar en nyckel |\n| `.close(key)` | `void` | Stänger en toast programmatiskt |\n| `.visibleToasts` | `QueuedToast[]` | Lista av synliga toasts |\n\nOptions till `.add()`: `{ timeout?: number, onClose?: () => void }`"}}}},f={parameters:{docs:{description:{story:"Använd `GlobalToastRegion` och `toastQueue` för en global kö. Placera `<GlobalToastRegion />` någonstans i appen och anropa `toastQueue.add()` var som helst."},source:{code:`import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
      { type: 'success', message: 'Toasten är klar' },
      { timeout: 5000 },
    )
  }
>
  Visa toast
</Button>`}}},render:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{}),(0,u.jsx)(n,{onPress:()=>s.add({type:`success`,message:`Toasten är klar`},{timeout:5e3}),children:`Visa toast`})]})},p={parameters:{docs:{description:{story:"Använd `ToastProvider` för en lokal kö. Providern ger tillgång till `state` via render props, och toast-regionen renderas automatiskt intill innehållet."},source:{code:`import { ToastProvider } from '@midas-ds/components'

<ToastProvider>
  {state => (
    <Button
      onPress={() =>
        state.add(
          { type: 'success', message: 'Lokalt meddelande' },
          { timeout: 5000 },
        )
      }
    >
      Visa lokal toast
    </Button>
  )}
</ToastProvider>`}}},render:()=>(0,u.jsx)(`div`,{style:{height:200},children:(0,u.jsx)(c,{children:e=>(0,u.jsx)(n,{onPress:()=>e.add({type:`success`,message:`Lokalt meddelande`},{timeout:5e3}),children:`Visa lokal toast`})})})},m={name:`Varianter`,parameters:{docs:{description:{story:"Toast har fyra varianter: `success`, `info`, `important` och `warning`."},source:{code:`toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })`}}},render:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{}),(0,u.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[`success`,`info`,`important`,`warning`].map(e=>(0,u.jsx)(n,{onPress:()=>s.add({type:e,message:`Detta är en ${e}-toast`},{timeout:5e3}),children:e},e))})]})},h={name:`Programmatisk stängning`,parameters:{docs:{description:{story:"`.add()` returnerar en nyckel som kan användas för att stänga en toast med `.close()`. Callbacken `onClose` triggas oavsett om toasten stängs manuellt eller via timeout."},source:{code:`const key = toastQueue.add(
  { type: 'info', message: 'Bearbetar...' },
)

// Stäng toasten programmatiskt
toastQueue.close(key)

// Eller med onClose-callback
toastQueue.add(
  { type: 'success', message: 'Filen sparades' },
  {
    timeout: 5000,
    onClose: () => console.log('Toasten stängdes'),
  },
)`}}},render:()=>{let e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,u.jsx)(n,{onPress:()=>{e=s.add({type:`info`,message:`Denna toast stängs inte automatiskt`})},children:`Visa toast`}),(0,u.jsx)(n,{onPress:()=>{e&&s.close(e)},children:`Stäng programmatiskt`})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Använd \`GlobalToastRegion\` och \`toastQueue\` för en global kö. Placera \`<GlobalToastRegion />\` någonstans i appen och anropa \`toastQueue.add()\` var som helst.'
      },
      source: {
        code: \`import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
      { type: 'success', message: 'Toasten är klar' },
      { timeout: 5000 },
    )
  }
>
  Visa toast
</Button>\`
      }
    }
  },
  render: () => <>
      <GlobalToastRegion />
      <Button onPress={() => toastQueue.add({
      type: 'success',
      message: 'Toasten är klar'
    }, {
      timeout: 5000
    })}>
        Visa toast
      </Button>
    </>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Använd \`ToastProvider\` för en lokal kö. Providern ger tillgång till \`state\` via render props, och toast-regionen renderas automatiskt intill innehållet.'
      },
      source: {
        code: \`import { ToastProvider } from '@midas-ds/components'

<ToastProvider>
  {state => (
    <Button
      onPress={() =>
        state.add(
          { type: 'success', message: 'Lokalt meddelande' },
          { timeout: 5000 },
        )
      }
    >
      Visa lokal toast
    </Button>
  )}
</ToastProvider>\`
      }
    }
  },
  render: () => <div style={{
    height: 200
  }}>
      <ToastProvider>
        {state => <Button onPress={() => state.add({
        type: 'success',
        message: 'Lokalt meddelande'
      }, {
        timeout: 5000
      })}>
            Visa lokal toast
          </Button>}
      </ToastProvider>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Varianter',
  parameters: {
    docs: {
      description: {
        story: 'Toast har fyra varianter: \`success\`, \`info\`, \`important\` och \`warning\`.'
      },
      source: {
        code: \`toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })\`
      }
    }
  },
  render: () => {
    const types: MidasToast['type'][] = ['success', 'info', 'important', 'warning'];
    return <>
        <GlobalToastRegion />
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
          {types.map(type => <Button key={type} onPress={() => toastQueue.add({
          type,
          message: \`Detta är en \${type}-toast\`
        }, {
          timeout: 5000
        })}>
              {type}
            </Button>)}
        </div>
      </>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Programmatisk stängning',
  parameters: {
    docs: {
      description: {
        story: '\`.add()\` returnerar en nyckel som kan användas för att stänga en toast med \`.close()\`. Callbacken \`onClose\` triggas oavsett om toasten stängs manuellt eller via timeout.'
      },
      source: {
        code: \`const key = toastQueue.add(
  { type: 'info', message: 'Bearbetar...' },
)

// Stäng toasten programmatiskt
toastQueue.close(key)

// Eller med onClose-callback
toastQueue.add(
  { type: 'success', message: 'Filen sparades' },
  {
    timeout: 5000,
    onClose: () => console.log('Toasten stängdes'),
  },
)\`
      }
    }
  },
  render: () => {
    let currentKey: string | undefined;
    return <>
        <GlobalToastRegion />
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button onPress={() => {
          currentKey = toastQueue.add({
            type: 'info',
            message: 'Denna toast stängs inte automatiskt'
          });
        }}>
            Visa toast
          </Button>
          <Button onPress={() => {
          if (currentKey) toastQueue.close(currentKey);
        }}>
            Stäng programmatiskt
          </Button>
        </div>
      </>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Global`,`Local`,`Variants`,`ProgrammaticClose`]}))();export{f as Global,p as Local,h as ProgrammaticClose,m as Variants,g as __namedExportsOrder,d as default};