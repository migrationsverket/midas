import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{B as a}from"./Button-BrLCt7FI.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as B}from"./index-BbAIUH2N.js";import{L as h}from"./Label-Bw-eXMlw.js";import"./Button-AXOEyd3Z.js";import"./utils-C4wbeGu1.js";import"./ProgressBar-DVVijuUB.js";import"./Label-BXmCKTLy.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-Bdg4Lht-.js";import"./context-gxVqox2x.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing-BPh1BF7L.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-BNsiIlBy.js";const v='"../theme/tokens.css"',G="_buttonGroupWrapper_1rvuj_4",j="_buttonGroup_1rvuj_4",c={tokens:v,"--breakpoint-sm":"(max-width: 767px)",buttonGroupWrapper:G,buttonGroup:j},e=({children:r,className:x,title:s,"aria-label":i,..._})=>{s&&i&&console.warn("Choose either title and aria-label. Using both title and aria-label will create redundancy for screen reader users.");const p=!!s,l=B.useId();return t.jsxs("div",{role:"group","aria-labelledby":p?l:void 0,"aria-label":i,className:f(c.buttonGroupWrapper,x),..._,children:[p&&t.jsx(h,{id:l,variant:"label-02",elementType:"span",children:s}),t.jsx("div",{className:c.buttonGroup,children:r})]})};try{e.displayName="ButtonGroup",e.__docgenInfo={description:"Group several buttons together.",displayName:"ButtonGroup",props:{title:{defaultValue:null,description:"Set a descriptive visible lable",name:"title",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Set a descriptive lable for screen readers",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const D={component:e,title:"Components/Button/ButtonGroup",tags:["autodocs"],parameters:{layout:"centered"},args:{},argTypes:{}},o={args:{"aria-label":"Acceptera ändringen"},render:({...r})=>t.jsxs(e,{...r,children:[t.jsx(a,{children:"Fortsätt"}),t.jsx(a,{variant:"secondary",children:"Avbryt"})]})},n={args:{title:"Acceptera ändringen"},render:({...r})=>t.jsxs(e,{...r,children:[t.jsx(a,{children:"Fortsätt"}),t.jsx(a,{variant:"secondary",children:"Avbryt"})]})};var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Acceptera ändringen'
  },
  render: ({
    ...args
  }) => <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Acceptera ändringen'
  },
  render: ({
    ...args
  }) => <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const H=["Primary","VisibleTitle"];export{o as Primary,n as VisibleTitle,H as __namedExportsOrder,D as default};
