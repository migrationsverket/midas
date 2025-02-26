import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as w,a as g}from"./Dropdown-BjRyH0Xi.js";import{w as v,u as f}from"./index-CL3LvPvu.js";import{L as E}from"./LinkButton-DKQ10Xkt.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-CvXv7k8g.js";import"./Button-OaHVYHGx.js";import"./useFocusable-3zbZ-RaT.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cu6-cfZ1.js";import"./index-i7ZvCR4f.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-DBU6oQr0.js";import"./context-QyyerVwU.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-HK2tssQB.js";import"./index-DwWe6W7f.js";import"./Separator-DEsxS4wB.js";import"./SelectionManager-Bgt2CNIh.js";import"./useEvent-Cu7AZejT.js";import"./FocusScope-CrTiNxai.js";import"./useDescription-CxmrmoDT.js";import"./ListKeyboardDelegate-B8OEDIsW.js";import"./Text-DjlCanPO.js";import"./PressResponder-DE9hv8BO.js";import"./useLocalizedStringFormatter-wW5sL_ZF.js";import"./useLabels-CouxmuYO.js";import"./VisuallyHidden-BfEDOqwV.js";import"./Button-wd7Nt-Ve.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-DfyGSq1K.js";import"./chevron-right-CjCwHShF.js";const rr={component:w,title:"Components/Dropdown"},h=["Ett","Två","Tre"],r={args:{title:"Meny",children:h.map((n,e)=>a.jsx(g,{children:a.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+e))}},t={args:{...r.args},play:async({canvasElement:n})=>{const e=v(n);await f.click(await e.findByText("Meny"))}},o={args:{...r.args,title:void 0,label:"Meny"}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
