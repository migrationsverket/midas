import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-B7LEYxDe.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-LneJohaV.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-Cb_ranKc.js";import"./Hidden-ClhOTPkO.js";import"./index-cpIEhwLo.js";import"./useFocusRing-Dvg3g2cU.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-BxUipfud.js";import"./SelectionManager-DgK6Za11.js";import"./useEvent-BYWgjDNQ.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-D7AO3NHB.js";import"./context-CuBBIohG.js";import"./useDescription-CNBqbECa.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-Brx0Pzyc.js";import"./Dialog-XnN7R4TG.js";import"./OverlayArrow-JJIn2pKb.js";import"./Button-BvljoDys.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-C9L8Uaaf.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-NebPq7zq.js";import"./getScrollParent-CrrBdd7g.js";import"./PressResponder-PxHUYtWQ.js";import"./useOverlayTriggerState-yt_HxB-E.js";import"./DismissButton-0vAQDsZr.js";import"./useLabels-BjpOYTdf.js";import"./useLocalizedStringFormatter-a7gPYq3X.js";import"./VisuallyHidden-D33sH8jm.js";import"./Text-DGilHHfL.js";import"./useMenuTriggerState-9DxRY-En.js";import"./useMenuTrigger-DRtks4Q9.js";import"./Button-DNaqWoGO.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-DV7Wn2KC.js";import"./chevron-right-CjCwHShF.js";const ur={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((e,t)=>n.jsx(f,{children:n.jsx(E,{variant:"tertiary",children:e})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:e})=>{const t=v(e),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},i={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,y;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    title: undefined,
    label: 'Meny'
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const yr=["Primary","Open","WithoutTitle"];export{o as Open,r as Primary,i as WithoutTitle,yr as __namedExportsOrder,ur as default};
