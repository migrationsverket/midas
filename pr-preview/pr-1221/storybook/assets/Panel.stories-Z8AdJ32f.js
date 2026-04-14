import{r as p,j as r}from"./iframe-CJ-60Efo.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DmL5diqX.js";import{B as c}from"./Button-DePLT0p9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-xfItMrqO.js";import"./useFocusRing-CupJGFR5.js";import"./utils-CZH6ruXT.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./animation-Bkl1YJvl.js";import"./PanelTitle-b5AZWtC6.js";import"./clsx-Ciqy0D92.js";import"./Text-duXz9LRx.js";import"./Text-Bn5fWWC4.js";import"./x-CqpjZLya.js";import"./createLucideIcon-n1hD9M9W.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-DEbA7b2J.js";import"./Hidden-DsEAHCyp.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DhklY17S.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
