import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{D as w,a as g}from"./Dropdown-BWRY4QzY.js";import{w as v,u as f}from"./index-CL3LvPvu.js";import{L as E}from"./LinkButton-DADUrRNr.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-DvoTk2KI.js";import"./Hidden-CJzMAlxg.js";import"./index-i7ZvCR4f.js";import"./useFocusable-DMGkbK-i.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-BXrUGb8V.js";import"./SelectionManager-CBVCNS5i.js";import"./useEvent-_3PRSTk-.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BtHPjb_Y.js";import"./context-D5CBVWAD.js";import"./useDescription-CwgsM8Aw.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-C9PWeBWf.js";import"./Dialog-DzDQBg8I.js";import"./OverlayArrow--zh_daWw.js";import"./Button-Bc7rgIW-.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-BjAgLqcR.js";import"./PressResponder-BzBnuNO-.js";import"./useOverlayTriggerState-BINPOdl7.js";import"./DismissButton-CToArBRf.js";import"./useLabels-Czx4z4lc.js";import"./useLocalizedStringFormatter-Czs_bIw2.js";import"./VisuallyHidden-Bpe5Pinq.js";import"./Text-BoWYQTAV.js";import"./useMenuTriggerState-B8mUWxom.js";import"./useMenuTrigger-CzcpRlrD.js";import"./Button-CmTjolvz.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-D9Sx_tyr.js";import"./chevron-right-CjCwHShF.js";const mr={component:w,title:"Components/Dropdown"},h=["Ett","Två","Tre"],r={args:{title:"Meny",children:h.map((i,n)=>e.jsx(g,{children:e.jsx(E,{variant:"tertiary",children:i})},"dropdown_"+n))}},t={args:{...r.args},play:async({canvasElement:i})=>{const n=v(i);await f.click(await n.findByText("Meny"))}},o={args:{...r.args,title:void 0,label:"Meny"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
