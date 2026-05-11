import{r as p,j as r}from"./iframe-BJvdaX8k.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BI592IX-.js";import{B as c}from"./Button-Bns6iq4v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CFLNrtf2.js";import"./useFocusRing-DK9g2iem.js";import"./utils-ZkRQ_pis.js";import"./index-BdUbB4sv.js";import"./index-Do7MdBuV.js";import"./animation-B67iHdv-.js";import"./PanelTitle-BEGK-9fs.js";import"./clsx-Ciqy0D92.js";import"./Text-C0JJvFIL.js";import"./Text-BNMtUmCk.js";import"./x-DbFWgsIq.js";import"./createLucideIcon-CeO-jkh6.js";import"./useLocalizedStringFormatter-BZU7-x_x.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-2rxKwo5b.js";import"./Hidden-1TQ91tjS.js";import"./useLabel-C0O3ak7w.js";import"./useLabels-RexyVJCn.js";import"./useButton-5dWGjBz6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-PAT-EUPY.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <>
        <Main>
          <Button onPress={() => setIsOpen(true)}>Open panel</Button>
        </Main>
        <Panel {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const D=["Primary","Controlled"];export{t as Controlled,e as Primary,D as __namedExportsOrder,z as default};
