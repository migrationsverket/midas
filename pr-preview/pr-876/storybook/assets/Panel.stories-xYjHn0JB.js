import{r as p,j as r}from"./iframe-BANbOrjL.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DkRbWH0J.js";import{B as c}from"./Button-Dov5qDwf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-yh8y5GNM.js";import"./useFocusRing-DbV3xYYs.js";import"./utils-54peqJ8a.js";import"./index-DvmcBK1X.js";import"./index-C5-8epWM.js";import"./animation-zaaq6a5j.js";import"./PanelTitle-baM_HRil.js";import"./clsx-Ciqy0D92.js";import"./Text-Ckl3Bse6.js";import"./Text-1nbNgZtg.js";import"./x-Bo7YhGfd.js";import"./createLucideIcon-mdFywCsT.js";import"./useLocalizedStringFormatter-C_ZDKjDL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CFtjy4Ss.js";import"./Hidden-B-0UQMnM.js";import"./useLabel-DaWSn-ZG.js";import"./useLabels-596GHSCS.js";import"./useButton-DJ76KY2c.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DT3xn_Oy.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
