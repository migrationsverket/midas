import{r as p,j as r}from"./iframe-DmNPUwJF.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CW7-GDuW.js";import{B as c}from"./Button-CBE5oTrg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DBKo4wr0.js";import"./useFocusRing-BP4HKvPD.js";import"./utils-Dh-PwKV8.js";import"./index-D7iFWbiU.js";import"./index-zqi-VihA.js";import"./animation-CFOS4iMe.js";import"./PanelTitle-BSqD3jbs.js";import"./clsx-Ciqy0D92.js";import"./Text-C7BN_W1g.js";import"./Text-D0ZjjTeW.js";import"./x-DBWgEmNi.js";import"./createLucideIcon-eE295ZHw.js";import"./useLocalizedStringFormatter-CqULl0lq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CVX6slyJ.js";import"./Hidden-CmDSCNgN.js";import"./useLabel-x3JXI5A6.js";import"./useLabels-Dtp6pYD3.js";import"./useButton-DpMfdXMB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-xsknM-vp.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
