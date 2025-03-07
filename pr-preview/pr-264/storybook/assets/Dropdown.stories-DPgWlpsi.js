import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-COclwijP.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-DFBm_XfY.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-BJ6W1INE.js";import"./Hidden-CwoxZtLc.js";import"./index-cpIEhwLo.js";import"./useFocusable-eIx-4jzq.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-DdP6pGar.js";import"./SelectionManager-D7rUZ8v5.js";import"./useEvent-erCw9IEk.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BYskV0RP.js";import"./context-D3jO5C6_.js";import"./useDescription-DZSnqKNm.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-ACgtK5l-.js";import"./Dialog-BRQ4G03c.js";import"./OverlayArrow-9ouiYMhM.js";import"./Button-DkIm9Uc-.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-D7lISpST.js";import"./PressResponder-gYjP6mWM.js";import"./useOverlayTriggerState-Bplh0K18.js";import"./DismissButton-CBZcBwqh.js";import"./useLabels-D7v7jGQi.js";import"./useLocalizedStringFormatter-Bwxw7HuM.js";import"./VisuallyHidden-QTU03Ux4.js";import"./Text-dcTKqkfp.js";import"./useMenuTriggerState-DrfP-F7z.js";import"./useMenuTrigger-CAuXZYtG.js";import"./Button-DcXxw8-l.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CghXSjqU.js";import"./chevron-right-CjCwHShF.js";const cr={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>i.jsx(f,{children:i.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=v(n),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
