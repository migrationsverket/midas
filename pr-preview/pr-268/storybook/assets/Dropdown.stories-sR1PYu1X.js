import{j as i}from"./jsx-runtime-CBDCb4rg.js";import{D as v,a as T}from"./Dropdown-Dd0KLqEB.js";import{within as f,fireEvent as x,expect as h}from"./index-D5sgrwUF.js";import{L as E}from"./LinkButton-INmf3nsT.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-C28rmmUa.js";import"./Button-ojkDv_BK.js";import"./useFocusable-B8HhqQIl.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuCbQGRr.js";import"./context-e_uznqlg.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DVrKtIZX.js";import"./index-Btf1eDe9.js";import"./Separator-CNfBi8L5.js";import"./SelectionManager-BrHtouv1.js";import"./useEvent-BzCFeyOM.js";import"./FocusScope-hGcwqkni.js";import"./useDescription-Dx2tUlT3.js";import"./ListKeyboardDelegate-JdsgzHfV.js";import"./Text-Bxg5Zhzp.js";import"./PressResponder-CtzAwrCi.js";import"./useLocalizedStringFormatter-4pChcv_1.js";import"./useLabels-BiAlD12e.js";import"./VisuallyHidden-DjSI67in.js";import"./Button-9KeTfxY-.js";import"./createLucideIcon-DjmUzaoT.js";import"./Link-sqMiXbJS.js";import"./chevron-right-DAk5v0C9.js";const er={component:v,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>i.jsx(T,{children:i.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=f(n),g=await t.findByText(w);await x.click(g),h(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const nr=["Primary","Opened","WithoutTitle"];export{o as Opened,r as Primary,e as WithoutTitle,nr as __namedExportsOrder,er as default};
