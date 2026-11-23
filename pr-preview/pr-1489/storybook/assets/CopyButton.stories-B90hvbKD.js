import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{n,t as r}from"./clsx-Cb5F7C4j.js";import{v as i,y as a}from"./utils-Dvljl2u1.js";import{r as o,t as s}from"./VisuallyHidden-D6xo-vmp.js";import{n as c,r as l,t as u}from"./Tooltip-Cdy_H1z1.js";import{n as d,t as f}from"./Button-CUwt4ANc.js";import{n as p,t as m}from"./createLucideIcon-B8cGKaCi.js";import{n as h,t as g}from"./check-DIljFVWE.js";import{n as _,t as v}from"./triangle-exclamation-point-DRRnvX-b.js";import{n as y,t as b}from"./useLocalizedStringFormatter-CDhxoVVz.js";import{n as x,t as S}from"./Text-DcL9zFVK.js";import{n as C}from"./iframe-ByY5cIto.js";var w,T;function E(){return(E=e((()=>{p(),w={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},w.node,T=m(w)})))()}var D,O;function k(){return(k=e((()=>{D=t(),O=({resetAfter:e=2e3,onCopy:t,onCopyError:n}={})=>{let[r,i]=(0,D.useState)(`idle`),a=(0,D.useRef)(void 0),o=(0,D.useRef)(0),s=(0,D.useRef)(!1);return(0,D.useEffect)(()=>(s.current=!0,()=>{s.current=!1,clearTimeout(a.current)}),[]),{copy:(0,D.useCallback)(async r=>{let c=++o.current,l=!1,u;try{if(!navigator.clipboard)throw Error(`Clipboard API unavailable`);await navigator.clipboard.writeText(r),l=!0}catch(e){u=e}c===o.current&&s.current&&(clearTimeout(a.current),i(l?`copied`:`failed`),a.current=setTimeout(()=>i(`idle`),e)),l?t?.(r):n?.(u)},[e,t,n]),status:r}}})))()}var A,j,M;function N(){return(N=e((()=>{A={copy:`Copy`,copied:`Copied`,failed:`Couldn't copy`},j={copy:`Kopiera`,copied:`Kopierat`,failed:`Kunde inte kopiera`},M={en:A,sv:j}})))()}var P,F;function I(){return(I=e((()=>{P=`_copyButton_11c0r_1`,F={copyButton:P}})))()}var L,R,z;function B(){return(B=e((()=>{L=t(),a(),o(),h(),E(),_(),d(),l(),n(),b(),k(),N(),I(),R=C(),z=(0,L.forwardRef)(({value:e,variant:t=`icon`,resetAfter:n,onCopy:a,onCopyError:o,className:l,id:d,"aria-labelledby":p,...m},h)=>{let _=i(d),b=y(M),{copy:x,status:S}=O({resetAfter:n,onCopy:a,onCopyError:o}),C={idle:T,copied:g,failed:v}[S],w=m[`aria-label`]??b.format(`copy`),E=t===`icon`,D=(0,R.jsxs)(f,{...m,id:_,"aria-label":E?w:m[`aria-label`],"aria-labelledby":p?`${_} ${p}`:void 0,ref:h,variant:E?`icon`:`tertiary`,onPress:()=>x(e),"data-status":S,className:r(F.copyButton,l),children:[(0,R.jsx)(C,{"aria-hidden":!0,size:20}),!E&&b.format(S===`idle`?`copy`:S)]});return(0,R.jsxs)(R.Fragment,{children:[E?(0,R.jsxs)(c,{delay:500,shouldCloseOnPress:!1,children:[D,(0,R.jsx)(u,{children:S===`idle`?w:b.format(S)})]}):D,(0,R.jsx)(s,{role:`status`,elementType:`span`,children:S!==`idle`&&b.format(S)})]})}),z.displayName=`CopyButton`,z.__docgenInfo={description:`Copies a value to the clipboard. Place it next to the value it copies.
It confirms with a check icon and tells screen readers it's copied.

Keep it visible. Showing it only on hover is fine in dense tables, as long
as it's also visible on keyboard focus and on touch screens.`,methods:[],displayName:`CopyButton`,props:{resetAfter:{required:!1,tsType:{name:`number`},description:`How long, in milliseconds, the copied or failed status lasts before it's
back to idle

@default 2000`},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:`Called with the text once it's on the clipboard`},onCopyError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: unknown) => void`,signature:{arguments:[{type:{name:`unknown`},name:`error`}],return:{name:`void`}}},description:`Called when the browser refuses, e.g. without permission or outside HTTPS`},value:{required:!0,tsType:{name:`string`},description:`The text that's copied`},variant:{required:!1,tsType:{name:`union`,raw:`'icon' | 'text'`,elements:[{name:`literal`,value:`'icon'`},{name:`literal`,value:`'text'`}]},description:`\`icon\` shows only the copy icon, with its name in a tooltip, \`text\` adds
the text "Kopiera". An icon button's name is "Kopiera": when there are
several on a page, name each with \`aria-label\`, e.g. "Kopiera ärendenummer",
or point \`aria-labelledby\` at the value's label, which gives the same name

@default 'icon'`,defaultValue:{value:`'icon'`,computed:!1}}},composes:[`Omit`]}})))()}var V,H,U,W,G,K;function q(){return(q=e((()=>{x(),B(),V=C(),H={component:z,title:`Components/CopyButton`,tags:[`autodocs`],args:{value:`1234-56789`},decorators:[e=>(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:(0,V.jsx)(e,{})})]},U={render:e=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(S,{children:e.value}),(0,V.jsx)(z,{...e})]})},W={args:{variant:`text`},render:U.render},G={decorators:[e=>(0,V.jsx)(e,{})],render:()=>(0,V.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`max-content auto`,gap:`0.5rem 1rem`,alignItems:`center`,margin:0},children:[[`Ärendenummer`,`1234-56789`],[`Kontrollnummer`,`A7F3-K9Q2`],[`E-post`,`anna.andersson@example.se`]].map(([e,t])=>(0,V.jsxs)(`div`,{style:{display:`contents`},children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(S,{children:e})}),(0,V.jsxs)(`dd`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`,margin:0},children:[(0,V.jsx)(S,{children:t}),(0,V.jsx)(z,{value:t,"aria-label":`Kopiera ${e.toLowerCase()}`})]})]},e))})},K=[`Primary`,`WithText`,`Details`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Text>{args.value}</Text>
      <CopyButton {...args} />
    </>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  },
  render: Primary.render
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Several on a page: each is named after what it copies`,...G.parameters?.docs?.description}}}})))()}q();export{G as Details,U as Primary,W as WithText,K as __namedExportsOrder,H as default};