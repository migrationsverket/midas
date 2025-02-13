import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as w,a as g}from"./Dropdown-D_hADCkt.js";import{w as v,u as f}from"./index-CL3LvPvu.js";import{L as E}from"./LinkButton-BOu2J8xL.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-VNnmLT02.js";import"./Button-D8XuhR1x.js";import"./useFocusable-DG2xZKJq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CYwu0huo.js";import"./index-i7ZvCR4f.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-DDHmBEKE.js";import"./context-DzglSndM.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-BIe4dyob.js";import"./index-DwWe6W7f.js";import"./Separator-BtbxEbIp.js";import"./SelectionManager-DDbbtuvo.js";import"./useEvent-BoA7f_uB.js";import"./FocusScope-Cw4AWeD6.js";import"./useDescription-B-sGNlK1.js";import"./ListKeyboardDelegate-DevdDyi6.js";import"./Text-BeLJy-LL.js";import"./PressResponder-Biy3O0O5.js";import"./useLocalizedStringFormatter-9jKsBqKs.js";import"./useLabels-BEKG7W4A.js";import"./VisuallyHidden-Do3_DS5R.js";import"./Button-BMilrlhz.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-7N357q69.js";import"./chevron-right-CjCwHShF.js";const rr={component:w,title:"Components/Dropdown"},h=["Ett","Två","Tre"],r={args:{title:"Meny",children:h.map((n,e)=>a.jsx(g,{children:a.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+e))}},t={args:{...r.args},play:async({canvasElement:n})=>{const e=v(n);await f.click(await e.findByText("Meny"))}},o={args:{...r.args,title:void 0,label:"Meny"}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
