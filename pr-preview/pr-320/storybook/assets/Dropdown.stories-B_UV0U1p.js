import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-CwiMFi_Q.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-D5udNThA.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-TNqG-RMU.js";import"./Button-yfKCtftD.js";import"./useFocusable-DASL9ZMT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuU8W4f_.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CiLmTXSK.js";import"./context-Pt6elAMD.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-BwU2u2VA.js";import"./index-DwWe6W7f.js";import"./Separator-CCz1TW3i.js";import"./SelectionManager-D-t0nxvZ.js";import"./useEvent-DdIskmYv.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-ChnRxKGK.js";import"./useDescription-E6E6fNpx.js";import"./ListKeyboardDelegate-BKqbUahT.js";import"./Text-DX8e4zrg.js";import"./PressResponder-CBO2T7iU.js";import"./useLocalizedStringFormatter-C4mPhEQp.js";import"./getScrollParent-CrrBdd7g.js";import"./useLabels-MT93WuwX.js";import"./VisuallyHidden-D11zA9Ye.js";import"./Button-PLn7YPfi.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CIbWa4HS.js";import"./chevron-right-CjCwHShF.js";const ir={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>i.jsx(f,{children:i.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=v(n),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: menuTitle,
    children: ITEMS.map((item, i) => <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>)
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dropdown = await canvas.findByText(menuTitle);
    await fireEvent.click(dropdown);
    expect(canvas).toBeTruthy();
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,y;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    title: undefined,
    label: 'Meny'
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ar=["Primary","Open","WithoutTitle"];export{o as Open,r as Primary,e as WithoutTitle,ar as __namedExportsOrder,ir as default};
