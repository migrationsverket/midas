import{r as p,j as r}from"./iframe-CU1z8ZWO.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CA6KGNBl.js";import{B as c}from"./Button-DkJeYqVL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUj5ZMiu.js";import"./useFocusRing-Bwwpl-Rq.js";import"./utils-DVqGwfeZ.js";import"./index-I_kl0fWJ.js";import"./index-C-Y4ipn9.js";import"./animation-B6On8J8R.js";import"./PanelTitle-bMs-D7WG.js";import"./clsx-Ciqy0D92.js";import"./Text-ChUFIC2p.js";import"./Text-YKX6wkOC.js";import"./x-ChoXe0cH.js";import"./createLucideIcon-CaHhpyoi.js";import"./useLocalizedStringFormatter-Dvrj7zKe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BdGWlDvU.js";import"./Hidden-N7huL-Y5.js";import"./useLabel-D4QSJjhu.js";import"./useLabels-DWo5evaA.js";import"./useButton-BI7SC1MX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BrIjXOit.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
