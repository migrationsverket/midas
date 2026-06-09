import{r as p,j as r}from"./iframe-yDDvrWXA.js";import{P as s,M as i,L as m,a as u}from"./LayoutContent-DrDy7Rd6.js";import{B as c}from"./Button-DrFRlYBv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DZNSaZzu.js";import"./useFocusRing-B8EF4-Pv.js";import"./utils-g-F492tU.js";import"./index-C7Z2RoQQ.js";import"./index-D5oXpZJ0.js";import"./animation-DjLrtpML.js";import"./PanelTitle-C9_-V8cE.js";import"./clsx-Ciqy0D92.js";import"./Text-zKZPeGrs.js";import"./Text-lgWPOHfn.js";import"./x-8p5vQLYx.js";import"./createLucideIcon-BAD1RTf1.js";import"./useLocalizedStringFormatter-CwuLAbHo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-BKPyufTm.js";import"./Hidden-DwvTSKmX.js";import"./useLabel-HsQrSNDJ.js";import"./useLabels-BAb68OIq.js";import"./useButton-C0YlumWP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B50WqWni.js";const z={component:s,title:"Layout/Panel",tags:["autodocs"],parameters:{layout:"fullscreen",rootElement:"div"},args:{title:"App name"},decorators:[o=>r.jsx(m,{children:r.jsx(u,{children:r.jsx(o,{})})})]},e={args:{defaultOpen:!0}},t={render:o=>{const[a,n]=p.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(i,{children:r.jsx(c,{onPress:()=>n(!0),children:"Open panel"})}),r.jsx(s,{...o,isOpen:a,onOpenChange:n})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
