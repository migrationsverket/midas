import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-BD17yLpx.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-UKpZy8_y.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DQ5JeYJ_.js";import"./Button-CL48leFB.js";import"./useFocusRing-CinZsMjC.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Dygrn3i1.js";import"./index-cpIEhwLo.js";import"./useFocusable-97lfcaNr.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CJX-muH8.js";import"./context-uaUAhjVA.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-C65DcC29.js";import"./index-DwWe6W7f.js";import"./Separator-AK1ucJrY.js";import"./SelectionManager-DQmjKvEJ.js";import"./useEvent-D1vddV-I.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Dim9Sv8E.js";import"./useDescription-CvItXi3E.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CY3z9i9U.js";import"./Text-BOP8hVNJ.js";import"./PressResponder-D8VDO3_G.js";import"./useLocalizedStringFormatter-CHyMmh6V.js";import"./getScrollParent-CrrBdd7g.js";import"./useLabels-DK3-SUbo.js";import"./VisuallyHidden-jJNdpOK7.js";import"./Button-BXfvrPQb.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-nMyTNIbU.js";import"./chevron-right-CjCwHShF.js";const pr={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>i.jsx(f,{children:i.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=v(n),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const sr=["Primary","Open","WithoutTitle"];export{o as Open,r as Primary,e as WithoutTitle,sr as __namedExportsOrder,pr as default};
