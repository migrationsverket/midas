import{r as p,j as r}from"./iframe-C8wbd0xw.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CrmM754U.js";import{B as c}from"./Button-CYDl1rDD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ctd2zKcE.js";import"./useFocusRing-Bg15NFQh.js";import"./utils-BvSYGh_U.js";import"./index-620_CD08.js";import"./index-Db09nDsC.js";import"./animation-CVdBnzH-.js";import"./PanelTitle-BzcUZcLH.js";import"./clsx-Ciqy0D92.js";import"./Text-DfltvgM6.js";import"./Text-CNrdh4nj.js";import"./x-BZlVtVMn.js";import"./createLucideIcon-DuCqgbBp.js";import"./useLocalizedStringFormatter-Cn7XrlA9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CshDR4Sg.js";import"./Hidden-C80CkRC2.js";import"./useLabel-VczPGpuz.js";import"./useLabels-DNgQ3t5h.js";import"./useButton-J8srJfI2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Br2qyVeY.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
