import{r as p,j as r}from"./iframe-CrvsXgmc.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-BM7xtMdT.js";import{B as c}from"./Button-C1guSp-1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CFUIREeB.js";import"./useFocusRing-Y3IR8t1i.js";import"./utils-gzCDVK3q.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./animation-B7nDb7Uq.js";import"./PanelTitle-B2iaLvaI.js";import"./clsx-Ciqy0D92.js";import"./Text-CA7uWGGn.js";import"./Text-CF9Q2mcX.js";import"./x-_k-E3REV.js";import"./createLucideIcon-C4drZqEd.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BJCsZZXs.js";import"./Hidden-DAMs1NRQ.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-GavGRjxA.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
