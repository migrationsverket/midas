import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{n,t as r}from"./clsx-Cb5F7C4j.js";import{r as i,t as a}from"./VisuallyHidden-D6xo-vmp.js";import{n as o,r as s,t as c}from"./Tooltip-C3-VIu_n.js";import{n as l,t as u}from"./Button-D1wCF7QB.js";import{n as d,t as f}from"./createLucideIcon-B8cGKaCi.js";import{n as p,t as m}from"./check-DIljFVWE.js";import{n as h,t as g}from"./triangle-exclamation-point-DRRnvX-b.js";import{n as _,t as v}from"./useLocalizedStringFormatter-DE6pTrM-.js";import{n as y,t as b}from"./Text-C9AfOpFn.js";import{n as x}from"./iframe-C0Hx_oHo.js";var S,C;function w(){return(w=e((()=>{d(),S={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},S.node,C=f(S)})))()}var T,E;function D(){return(D=e((()=>{T=t(),E=({resetAfter:e=2e3,onCopy:t,onCopyError:n}={})=>{let[r,i]=(0,T.useState)(`idle`),a=(0,T.useRef)(void 0);return(0,T.useEffect)(()=>()=>clearTimeout(a.current),[]),{copy:(0,T.useCallback)(async r=>{clearTimeout(a.current);try{if(!navigator.clipboard)throw Error(`Clipboard API unavailable`);await navigator.clipboard.writeText(r),i(`copied`),t?.(r)}catch(e){i(`failed`),n?.(e)}a.current=setTimeout(()=>i(`idle`),e)},[e,t,n]),status:r}}})))()}var O,k,A;function j(){return(j=e((()=>{O={copy:`Copy`,copied:`Copied`,failed:`Couldn't copy`},k={copy:`Kopiera`,copied:`Kopierat`,failed:`Kunde inte kopiera`},A={en:O,sv:k}})))()}var M,N;function P(){return(P=e((()=>{M=`_copyButton_11c0r_1`,N={copyButton:M}})))()}var F,I,L;function R(){return(R=e((()=>{F=t(),i(),p(),w(),h(),l(),s(),n(),v(),D(),j(),P(),I=x(),L=(0,F.forwardRef)(({value:e,variant:t=`icon`,resetAfter:n,onCopy:i,onCopyError:s,className:l,...d},f)=>{let p=_(A),{copy:h,status:v}=E({resetAfter:n,onCopy:i,onCopyError:s}),y={idle:C,copied:m,failed:g}[v],b=d[`aria-label`]??p.format(`copy`),x=t===`icon`,S=(0,I.jsxs)(u,{...d,"aria-label":x?b:d[`aria-label`],ref:f,variant:x?`icon`:`tertiary`,onPress:()=>h(e),"data-status":v,className:r(N.copyButton,l),children:[(0,I.jsx)(y,{"aria-hidden":!0,size:20}),!x&&p.format(v===`idle`?`copy`:v)]});return(0,I.jsxs)(I.Fragment,{children:[x?(0,I.jsxs)(o,{shouldCloseOnPress:!1,children:[S,(0,I.jsx)(c,{children:v===`idle`?b:p.format(v)})]}):S,(0,I.jsx)(a,{role:`status`,elementType:`span`,children:v!==`idle`&&p.format(v)})]})}),L.displayName=`CopyButton`,L.__docgenInfo={description:`Copies a value to the clipboard. Place it next to the value it copies.
It confirms with a check icon and tells screen readers it's copied.`,methods:[],displayName:`CopyButton`,props:{resetAfter:{required:!1,tsType:{name:`number`},description:`How long, in milliseconds, the copied or failed status lasts before it's
back to idle

@default 2000`},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:`Called with the text once it's on the clipboard`},onCopyError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: unknown) => void`,signature:{arguments:[{type:{name:`unknown`},name:`error`}],return:{name:`void`}}},description:`Called when the browser refuses, e.g. without permission or outside HTTPS`},value:{required:!0,tsType:{name:`string`},description:`The text that's copied`},variant:{required:!1,tsType:{name:`union`,raw:`'icon' | 'text'`,elements:[{name:`literal`,value:`'icon'`},{name:`literal`,value:`'text'`}]},description:`\`icon\` shows only the copy icon, with its name in a tooltip, \`text\` adds
the text "Kopiera". An icon button's name is "Kopiera": when there are
several on a page, name each with \`aria-label\`, e.g. "Kopiera ärendenummer"

@default 'icon'`,defaultValue:{value:`'icon'`,computed:!1}}},composes:[`Omit`]}})))()}var z,B,V,H,U,W;function G(){return(G=e((()=>{y(),R(),z=x(),B={component:L,title:`Components/CopyButton`,tags:[`autodocs`],args:{value:`1234-56789`},decorators:[e=>(0,z.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:(0,z.jsx)(e,{})})]},V={render:e=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(b,{children:e.value}),(0,z.jsx)(L,{...e})]})},H={args:{variant:`text`},render:V.render},U={decorators:[e=>(0,z.jsx)(e,{})],render:()=>(0,z.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`max-content auto`,gap:`0.5rem 1rem`,alignItems:`center`,margin:0},children:[[`Ärendenummer`,`1234-56789`],[`Kontrollnummer`,`A7F3-K9Q2`],[`E-post`,`anna.andersson@example.se`]].map(([e,t])=>(0,z.jsxs)(`div`,{style:{display:`contents`},children:[(0,z.jsx)(`dt`,{children:(0,z.jsx)(b,{children:e})}),(0,z.jsxs)(`dd`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`,margin:0},children:[(0,z.jsx)(b,{children:t}),(0,z.jsx)(L,{value:t,"aria-label":`Kopiera ${e.toLowerCase()}`})]})]},e))})},W=[`Primary`,`WithText`,`Details`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Text>{args.value}</Text>
      <CopyButton {...args} />
    </>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  },
  render: Primary.render
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: () => <dl style={{
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
    gap: '0.5rem 1rem',
    alignItems: 'center',
    margin: 0
  }}>
      {[['Ärendenummer', '1234-56789'], ['Kontrollnummer', 'A7F3-K9Q2'], ['E-post', 'anna.andersson@example.se']].map(([label, value]) => <div key={label} style={{
      display: 'contents'
    }}>
          <dt>
            <Text>{label}</Text>
          </dt>
          <dd style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        margin: 0
      }}>
            <Text>{value}</Text>
            <CopyButton value={value} aria-label={\`Kopiera \${label.toLowerCase()}\`} />
          </dd>
        </div>)}
    </dl>
}`,...U.parameters?.docs?.source},description:{story:`Several on a page: each is named after what it copies`,...U.parameters?.docs?.description}}}})))()}G();export{U as Details,V as Primary,H as WithText,W as __namedExportsOrder,B as default};