import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as w,a as g}from"./Dropdown-DMvWkpgT.js";import{w as v,u as f}from"./index-CL3LvPvu.js";import{L as E}from"./LinkButton-FlSWHr8W.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DQYxKsVU.js";import"./Button-BzJaSZRM.js";import"./useFocusable-CksQMUge.js";import"./clsx-B-dksMZM.js";import"./Hidden-lNm2kOvW.js";import"./index-i7ZvCR4f.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-t3ozUHtu.js";import"./context-CKCbQYCl.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-CK2ynvrh.js";import"./index-DwWe6W7f.js";import"./Separator-LJWPx31W.js";import"./SelectionManager-AgpWWGw5.js";import"./useEvent-Dai_kuU3.js";import"./FocusScope-DAbLQFiD.js";import"./useDescription-DExh6MlB.js";import"./ListKeyboardDelegate-D5wf4s7-.js";import"./Text-CLew4G9p.js";import"./PressResponder-D3_6-BOs.js";import"./useLocalizedStringFormatter-tao21eyt.js";import"./useLabels-ChllpMGt.js";import"./VisuallyHidden-DVuqn1m6.js";import"./Button-DxKie5zQ.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-D3y7VlJM.js";import"./chevron-right-CjCwHShF.js";const rr={component:w,title:"Components/Dropdown"},h=["Ett","Två","Tre"],r={args:{title:"Meny",children:h.map((n,e)=>a.jsx(g,{children:a.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+e))}},t={args:{...r.args},play:async({canvasElement:n})=>{const e=v(n);await f.click(await e.findByText("Meny"))}},o={args:{...r.args,title:void 0,label:"Meny"}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Meny',
    children: ITEMS.map((item, i) => <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>)
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByText('Meny'));
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    title: undefined,
    label: 'Meny'
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const tr=["Primary","Open","WithoutTitle"];export{t as Open,r as Primary,o as WithoutTitle,tr as __namedExportsOrder,rr as default};
