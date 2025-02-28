import{j as o}from"./jsx-runtime-DtgEGaVE.js";import{B as a}from"./Button-mCom8Fd4.js";import{c as l}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-yfKCtftD.js";import"./useFocusable-DASL9ZMT.js";import"./Hidden-BuU8W4f_.js";import"./index-cpIEhwLo.js";const m='"../theme/tokens.css"',d="(max-width: 767px)",g="_buttonGroup_5pd8y_4",y={tokens:m,smBreakpoint:d,buttonGroup:g},e=({children:t,className:p,"aria-label":u,...c})=>o.jsx("div",{role:"group","aria-label":u,className:l(y.buttonGroup,p),...c,children:t});try{e.displayName="ButtonGroup",e.__docgenInfo={description:"Group several buttons together.",displayName:"ButtonGroup",props:{"aria-label":{defaultValue:null,description:"Set a descriptive lable for screen readers",name:"aria-label",required:!0,type:{name:"string"}}}}}catch{}const k={component:e,title:"Components/Button/ButtonGroup",tags:["autodocs"],parameters:{layout:"centered"},args:{},argTypes:{}},r={args:{"aria-label":"Navigera i listan"},render:({...t})=>o.jsxs(e,{...t,children:[o.jsx(a,{children:"Fortsätt"}),o.jsx(a,{variant:"secondary",children:"Avbryt"})]})};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigera i listan'
  },
  render: ({
    ...args
  }) => <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const N=["Primary"];export{r as Primary,N as __namedExportsOrder,k as default};
