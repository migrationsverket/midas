import{r as p,j as r}from"./iframe-B1G803WZ.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-1aJp7Yy5.js";import{B as c}from"./Button-DU4dwGZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BlM9LERq.js";import"./useFocusRing-BRG6MU6i.js";import"./utils-ZnrybaQS.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./animation-C54_hIOs.js";import"./PanelTitle-DQ9MTAlM.js";import"./clsx-Ciqy0D92.js";import"./Text-B-AGxk9K.js";import"./Text-CAOAbmad.js";import"./x-C-I1ixf_.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BLDI2QQO.js";import"./Hidden-DDSSvdX3.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B__tRjGj.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
