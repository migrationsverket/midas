import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{D as u,a as w}from"./Dropdown-NQQlMK4Q.js";import{within as y,fireEvent as v,expect as x}from"./index-D5sgrwUF.js";import{L as T}from"./LinkButton-CVPQVZQc.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-BjTCWXX6.js";import"./Button-BeKNHBLF.js";import"./useFocusable-BFvoMS9y.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";import"./RSPContexts-BT50PPhj.js";import"./Collection-BhSMiv7E.js";import"./index-Btf1eDe9.js";import"./Separator-Bd4vkn40.js";import"./SelectionManager-DRRiPKTi.js";import"./useEvent-D6jxNLXQ.js";import"./FocusScope-2XdeF7h-.js";import"./context-DFvSrY_x.js";import"./useDescription-DRw803pY.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-Lv1vouSK.js";import"./Text-BvZdlzFi.js";import"./PressResponder-DFXhZkop.js";import"./useLocalizedStringFormatter-CABpxIsR.js";import"./useLabels-slPl-z-z.js";import"./VisuallyHidden-Bqo5Lliv.js";import"./Button-dZcdrYJ-.js";import"./createLucideIcon-DjmUzaoT.js";import"./Link-BI5iYWNl.js";import"./chevron-right-DAk5v0C9.js";const Z={component:u,title:"Components/Dropdown"},f=["Ett","Två","Tre"],d="Meny",t={args:{title:d,children:f.map((n,r)=>e.jsx(w,{children:e.jsx(T,{variant:"tertiary",children:n})},"dropdown_"+r))}},o={args:{...t.args},play:async({canvasElement:n})=>{const r=y(n),l=await r.findByText(d);await v.click(l),x(r).toBeTruthy()}};var i,a,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: menuTitle,
    children: ITEMS.map((item, i) => <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>)
  }
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var p,s,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const $=["Primary","Opened"];export{o as Opened,t as Primary,$ as __namedExportsOrder,Z as default};
