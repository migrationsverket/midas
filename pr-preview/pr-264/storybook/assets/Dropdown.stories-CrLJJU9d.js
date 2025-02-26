import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{D as w,a as g}from"./Dropdown-CZujkhGX.js";import{w as v,u as f}from"./index-CL3LvPvu.js";import{L as E}from"./LinkButton-COpNLL7l.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-DSs8x1Wd.js";import"./Hidden-t2TOsKWR.js";import"./index-i7ZvCR4f.js";import"./useFocusable-C3Tvsz8-.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-CjLqTao-.js";import"./SelectionManager-B6mzhZXY.js";import"./useEvent-B6d9-LYV.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DOk3V7x2.js";import"./context-OSXAnMfc.js";import"./useDescription-BSbuOK9_.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-4QryF0sP.js";import"./Dialog-Bhv4G-Rp.js";import"./OverlayArrow-Dioey02x.js";import"./Button-QTphRx4x.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-DR19Gg7I.js";import"./PressResponder-D8XJkdMB.js";import"./useOverlayTriggerState-D97Z3G1I.js";import"./DismissButton-B8CqawU9.js";import"./useLabels-CtwdP7qT.js";import"./useLocalizedStringFormatter-uDQfzgWc.js";import"./VisuallyHidden-CFHSfYYo.js";import"./Text-BVfnoLK6.js";import"./useMenuTriggerState-Dr4sU0pt.js";import"./useMenuTrigger-75ikU0oH.js";import"./Button-FKz_U1tx.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-OJgel150.js";import"./chevron-right-CjCwHShF.js";const mr={component:w,title:"Components/Dropdown"},h=["Ett","Två","Tre"],r={args:{title:"Meny",children:h.map((i,n)=>e.jsx(g,{children:e.jsx(E,{variant:"tertiary",children:i})},"dropdown_"+n))}},t={args:{...r.args},play:async({canvasElement:i})=>{const n=v(i);await f.click(await n.findByText("Meny"))}},o={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Meny',
    children: ITEMS.map((item, i) => <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>)
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const pr=["Primary","Open","WithoutTitle"];export{t as Open,r as Primary,o as WithoutTitle,pr as __namedExportsOrder,mr as default};
