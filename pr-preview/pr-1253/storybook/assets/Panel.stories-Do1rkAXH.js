import{r as p,j as r}from"./iframe-B--hDPXb.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-CgACZtIX.js";import{B as c}from"./Button-Bz3nOl8L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DZkg54SI.js";import"./useFocusRing-DBQnIZ7Q.js";import"./utils-DaPQhgmu.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./animation-DOlZqxuA.js";import"./PanelTitle-BVTttKUU.js";import"./clsx-Ciqy0D92.js";import"./Text-BKE4mpEc.js";import"./Text-eQWaQXgM.js";import"./x-D9iWQ3e4.js";import"./createLucideIcon-BSPs0YiP.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-C9U5DdED.js";import"./Hidden-CMfVl8d1.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-8_Tg-jOG.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
