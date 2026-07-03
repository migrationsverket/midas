import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-DNNZoumu.js";import{n as i,t as a}from"./ColorSchemeSwitchMenu-jVat6HCc.js";var o,s,c,l,u,d,f;e((()=>{o=t(n(),1),i(),s=r(),c={component:a,title:`Components/ColorSchemeSwitch/Menu`,tags:[`autodocs`],parameters:{layout:`centered`}},l={},u={args:{defaultScheme:`dark`}},d={render:()=>{let[e,t]=(0,o.useState)(null);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,s.jsx)(a,{onSchemeChange:t}),e&&(0,s.jsxs)(`span`,{children:[`onSchemeChange called with: `,e]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultScheme: 'dark'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [last, setLast] = useState<ColorScheme | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <ColorSchemeSwitchMenu onSchemeChange={setLast} />
        {last && <span>onSchemeChange called with: {last}</span>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`DefaultDark`,`WithCallback`]}))();export{u as DefaultDark,l as Primary,d as WithCallback,f as __namedExportsOrder,c as default};