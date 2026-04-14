import{r as p,j as r}from"./iframe-t1Iclc3O.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-57hTMqi_.js";import{B as c}from"./Button-BRu7Bvor.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BnBZk0Xv.js";import"./useFocusRing-BpTBuj6A.js";import"./utils-Dct5gSIh.js";import"./index-CA7bmWu8.js";import"./index-BvJk8jeb.js";import"./animation-CYgWYWfB.js";import"./PanelTitle-CGSfv7wX.js";import"./clsx-Ciqy0D92.js";import"./Text-BsC3oc9y.js";import"./Text-DMJCfth7.js";import"./x-DDaTip9H.js";import"./createLucideIcon-BnrXW6fJ.js";import"./useLocalizedStringFormatter-CiQgcaMc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Ct7y-I4z.js";import"./Hidden-CkUuXpVe.js";import"./useLabel-oq7jpXGJ.js";import"./useLabels-D-BGXnYn.js";import"./useButton-DGrW7rRJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Mig31NA5.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
