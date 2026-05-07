import{r as p,j as r}from"./iframe-Bb_VlPo9.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-aO2iJ_Uj.js";import{B as c}from"./Button-BoP38GQz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CFQUuuzt.js";import"./useFocusRing-DQRmwydT.js";import"./utils-2r_62JIY.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./animation-Cmh4Rymz.js";import"./PanelTitle-C2KdzILX.js";import"./clsx-Ciqy0D92.js";import"./Text-DTJEuclf.js";import"./Text-D7Tr2OQH.js";import"./x-BdcCpJzo.js";import"./createLucideIcon-a3otmfa0.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DwR9JkjB.js";import"./Hidden-Da5yr2Rv.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-7RIQbTv5.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
