import{j as i}from"./jsx-runtime-DtgEGaVE.js";import{D as T,a as f}from"./Dropdown-CBkgzCWA.js";import{w as v,f as h,e as x}from"./index-frOfh_zr.js";import{L as E}from"./LinkButton-D8B4Sh-H.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-DyipXQ6z.js";import"./Hidden-BnkfgUiZ.js";import"./index-cpIEhwLo.js";import"./useFocusable-Ca924fmk.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-DMYMef74.js";import"./SelectionManager-CGvOaT5j.js";import"./useEvent-CeOsCKfN.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C4P3cAwe.js";import"./context-DeC-Ug1U.js";import"./useDescription-ifvXBwGi.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-COdvugSF.js";import"./Dialog-DVMAmVLd.js";import"./OverlayArrow-Ddrm1CJy.js";import"./Button-CHB1Xpcb.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-D2VtAX2N.js";import"./PressResponder-fhZJRTcl.js";import"./useOverlayTriggerState-BfYUAKs8.js";import"./DismissButton-BqAdsscf.js";import"./useLabels-BHDrmz2p.js";import"./useLocalizedStringFormatter-BHUQwvDl.js";import"./VisuallyHidden-GzJBUnsU.js";import"./Text-BkfI_mlu.js";import"./useMenuTriggerState-CuYuoRuJ.js";import"./useMenuTrigger-DwjQ3u6c.js";import"./Button-IzqwWp94.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-DclKzvjv.js";import"./chevron-right-CjCwHShF.js";const cr={component:T,title:"Components/Dropdown"},B=["Ett","Två","Tre"],w="Meny",r={args:{title:w,children:B.map((n,t)=>i.jsx(f,{children:i.jsx(E,{variant:"tertiary",children:n})},"dropdown_"+t))}},o={args:{...r.args},play:async({canvasElement:n})=>{const t=v(n),g=await t.findByText(w);await h.click(g),x(t).toBeTruthy()}},e={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
