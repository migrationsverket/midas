import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as w,a as g}from"./Dropdown-CCPyFNa9.js";import{w as v,u as f}from"./index-CL3LvPvu.js";import{L as E}from"./LinkButton-aws6lXx4.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DPDS7TA5.js";import"./Button-Byufbxkw.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwCDq9YD.js";import"./index-i7ZvCR4f.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CrtAZkp7.js";import"./context-DFhOKXSg.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-ChKcjgL2.js";import"./index-DwWe6W7f.js";import"./Separator-Dn2kyLST.js";import"./SelectionManager-CzRPRDMi.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./useDescription-Ct3UQeSC.js";import"./ListKeyboardDelegate-D7ImecD0.js";import"./Text-EJwwmz-7.js";import"./PressResponder-zWEAS-O-.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./useLabels-CtxEn0bM.js";import"./VisuallyHidden-DXoeczHE.js";import"./Button-OalY2HqH.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-W1CcEl-a.js";import"./chevron-right-CjCwHShF.js";const rr={component:w,title:"Components/Dropdown"},h=["Ett","Två","Tre"],r={args:{title:"Meny",children:h.map((n,e)=>a.jsx(g,{children:a.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+e))}},t={args:{...r.args},play:async({canvasElement:n})=>{const e=v(n);await f.click(await e.findByText("Meny"))}},o={args:{...r.args,title:void 0,label:"Meny"}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
