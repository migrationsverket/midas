import{r as p,j as r}from"./iframe-BHERtVNf.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DsipCwrK.js";import{B as c}from"./Button-sL8xP2zY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7jxNesIu.js";import"./useFocusRing-BHPpscSH.js";import"./utils-CTHX7231.js";import"./index-DZ_I24z0.js";import"./index-BtFyGPoM.js";import"./animation-XpdhIpAD.js";import"./PanelTitle-DS-VCx7m.js";import"./clsx-Ciqy0D92.js";import"./Text-DnQ_ETrR.js";import"./Text-CRbS9uup.js";import"./x-BjG60dSq.js";import"./createLucideIcon-DvoPQrFJ.js";import"./useLocalizedStringFormatter-MqTPcr_q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CWn0VMRl.js";import"./Hidden-Bbawj_lw.js";import"./useLabel-BYlWZT7f.js";import"./useLabels-C7V4whMC.js";import"./useButton-DKTwQcCs.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CotPfbgC.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
