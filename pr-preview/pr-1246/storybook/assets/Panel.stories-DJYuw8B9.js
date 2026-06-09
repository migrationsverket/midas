import{r as p,j as r}from"./iframe-DGitGBwd.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-8SuqT8EB.js";import{B as c}from"./Button-CJ16F3mz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dj3Q8cMg.js";import"./useFocusRing-BSQFeV26.js";import"./utils-DlxgMN-X.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./animation-CKmOhXBP.js";import"./PanelTitle-BvII2tUm.js";import"./clsx-Ciqy0D92.js";import"./Text-BHRP82y-.js";import"./Text-BBS_R9Lb.js";import"./x-B5AWcWMp.js";import"./createLucideIcon-CcqKhbRQ.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-CFc7ZkBU.js";import"./Hidden-BTbvwN5u.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUTi2bAi.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
