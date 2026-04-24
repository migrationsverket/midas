import{r as p,j as r}from"./iframe-b0nZhEJS.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-Bq6yQq9-.js";import{B as c}from"./Button-BHZxE8mE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-s-wNeubv.js";import"./useFocusRing-CFZ-IXl8.js";import"./utils-Czy4cRiY.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./animation-CkbuoI5o.js";import"./PanelTitle-trtKvR-j.js";import"./clsx-Ciqy0D92.js";import"./Text-PpOivcva.js";import"./Text-CKTyuYl3.js";import"./x-BKNFSSsH.js";import"./createLucideIcon-t4UVlQbW.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-W8LmO0wX.js";import"./Hidden-CZ6waCzP.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BU0juR5g.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
