import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-C2-1-X2N.js";import{n as i,t as a}from"./ColorSchemeSwitch-DUuRLg-X.js";var o,s,c,l,u,d;e((()=>{o=t(n(),1),i(),s=r(),c={component:a,title:`Components/ColorSchemeSwitch`,tags:[`autodocs`],args:{className:`test-class`}},l={},u={render:()=>{let[e,t]=(0,o.useState)(null);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,s.jsx)(a,{onSchemeChange:t}),e&&(0,s.jsxs)(`span`,{children:[`onSchemeChange called with: `,e]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [last, setLast] = useState<ColorScheme | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <ColorSchemeSwitch onSchemeChange={setLast} />
        {last && <span>onSchemeChange called with: {last}</span>}
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Primary`,`WithCallback`]}))();export{l as Primary,u as WithCallback,d as __namedExportsOrder,c as default};