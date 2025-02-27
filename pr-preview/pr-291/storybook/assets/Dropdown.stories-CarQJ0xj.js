import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-W1283ccP.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-BjxvSrdu.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-Dd-vX3nh.js";import"./Button-QmryGY2x.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-pamdWU.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-ErOZPrpP.js";import"./context-DFhOKXSg.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-DXjGeaiG.js";import"./index-DwWe6W7f.js";import"./Separator-DXcJoRg9.js";import"./SelectionManager-CrjNvHpx.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./useDescription-Ct3UQeSC.js";import"./ListKeyboardDelegate-Qpuh_B0q.js";import"./Text-EJwwmz-7.js";import"./PressResponder-zWEAS-O-.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./useLabels-CtxEn0bM.js";import"./VisuallyHidden-DXoeczHE.js";import"./Button-BLFjX4NK.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-W1CcEl-a.js";import"./chevron-right-CjCwHShF.js";const er={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>a.jsx(f,{children:a.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=v(n),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: menuTitle,
    children: ITEMS.map((item, i) => <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>)
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const nr=["Primary","Open","WithoutTitle"];export{o as Open,r as Primary,e as WithoutTitle,nr as __namedExportsOrder,er as default};
