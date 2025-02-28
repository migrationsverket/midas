import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-De5uPiWD.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-Gto-0p_x.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-BI0jT7py.js";import"./Hidden-DgLkUl0S.js";import"./index-cpIEhwLo.js";import"./useFocusable-CHclY7qY.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-DvR_ryLT.js";import"./SelectionManager-D5wjtbJU.js";import"./useEvent-BEEjl705.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CnLJ4Sss.js";import"./context-DRbXrThh.js";import"./useDescription-C2gAlpY9.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-DVtjuLGg.js";import"./Dialog-B-AtLsHu.js";import"./OverlayArrow-BL2x7DB4.js";import"./Button-OpOVPQEK.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-C9CG0j5b.js";import"./PressResponder-DUuhHWsu.js";import"./useOverlayTriggerState-DUrERALe.js";import"./DismissButton-BpDDjnBb.js";import"./useLabels-NU5OlLNk.js";import"./useLocalizedStringFormatter-DQ49o7SX.js";import"./VisuallyHidden-DbUQ2u6f.js";import"./Text-8acfy1XY.js";import"./useMenuTriggerState-C7EZ_QrZ.js";import"./useMenuTrigger-D8FDfUme.js";import"./Button-Dbz_De9D.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-D6jSXsE9.js";import"./chevron-right-CjCwHShF.js";const cr={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>i.jsx(f,{children:i.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=v(n),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const dr=["Primary","Open","WithoutTitle"];export{o as Open,r as Primary,e as WithoutTitle,dr as __namedExportsOrder,cr as default};
