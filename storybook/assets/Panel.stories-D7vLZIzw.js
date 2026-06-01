import{r as p,j as r}from"./iframe-t17oHKP1.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-pkiEG-QH.js";import{B as c}from"./Button-DBP_DFRF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CSsGgKlE.js";import"./useFocusRing-B8_h5nqb.js";import"./utils-WfSaqPxO.js";import"./index-CGLwXwU8.js";import"./index-Vs6o5933.js";import"./animation-DKBecmXF.js";import"./PanelTitle-g9TKbAuL.js";import"./clsx-Ciqy0D92.js";import"./Text-BBzd2BqN.js";import"./Text-B1toI6NE.js";import"./x-B3d1tz_Z.js";import"./createLucideIcon-Bh202RVf.js";import"./useLocalizedStringFormatter-B413oFZi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-ofA_m75k.js";import"./Hidden-XqahJ4vg.js";import"./useLabel-CVs4fZyR.js";import"./useLabels-Bv9txMFS.js";import"./useButton-CKC-NCyU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CHb87xmq.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
