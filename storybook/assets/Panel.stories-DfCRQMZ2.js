import{r as p,j as r}from"./iframe-Ft30p-9G.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DTBvz9X-.js";import{B as c}from"./Button-CEZ1lvwe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BoeB8-LH.js";import"./useFocusRing-Daa2jsSP.js";import"./utils-9foVijX8.js";import"./index-xpQNWkGI.js";import"./index-Cc81j565.js";import"./animation-CIQK1dvP.js";import"./PanelTitle-NFwul8Sr.js";import"./clsx-Ciqy0D92.js";import"./Text-C3E5lXGF.js";import"./Text-FkyfMeaB.js";import"./x-DG1ChVHS.js";import"./createLucideIcon-D4F6iW4h.js";import"./useLocalizedStringFormatter-BWzTIlWv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C-EJ5lIE.js";import"./Hidden-BvmG-LpB.js";import"./useLabel-BF5tAiqY.js";import"./useLabels-Dd0Yyu-4.js";import"./useButton-jc4sCZEH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BmzQFOM6.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
