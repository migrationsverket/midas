import{r as p,j as r}from"./iframe-CHfAArqL.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-B_2AfO-N.js";import{B as c}from"./Button-Cmx0GvV9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-By7B3ojn.js";import"./useFocusRing-BLqX-8xD.js";import"./utils-B9qYaPsL.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./animation-OoL9LBbg.js";import"./PanelTitle-C35px9Ve.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6I0x6_.js";import"./Text-9hAgyQPX.js";import"./x-DIO0llkK.js";import"./createLucideIcon-Cv2FgIad.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-Kjhz10Fb.js";import"./Hidden-BOX53JQz.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-QI36eTUn.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
