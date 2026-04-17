import{r as p,j as r}from"./iframe-CKu8C240.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-yj47UCzG.js";import{B as c}from"./Button-OIliGZdS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDnLcn-b.js";import"./useFocusRing-IcTt8PE9.js";import"./utils-CLX7J-q0.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./animation-DjpYCp_W.js";import"./PanelTitle-BWpNByCb.js";import"./clsx-Ciqy0D92.js";import"./Text-B_i6Ec48.js";import"./Text-BIK_Bqtk.js";import"./x-BRw1fyzP.js";import"./createLucideIcon-B2wZBV1e.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-IlsrLhR8.js";import"./Hidden-C6ArxBUW.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DpKSD7VN.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
