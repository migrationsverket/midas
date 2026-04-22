import{r as p,j as r}from"./iframe-DQmFqJHS.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-b5eeo20N.js";import{B as c}from"./Button-Cc39pfDx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C5li1zvV.js";import"./useFocusRing-DItV0gqG.js";import"./utils-BWrI25uH.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./animation-DpjnqEbo.js";import"./PanelTitle-BPhGB8M4.js";import"./clsx-Ciqy0D92.js";import"./Text-Dv2vHw0w.js";import"./Text-D7G5v1zt.js";import"./x-Dm_VUSkk.js";import"./createLucideIcon-BG_KaWyL.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CvJGdaRR.js";import"./Hidden-D-Me28_w.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CzKNKfXb.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
