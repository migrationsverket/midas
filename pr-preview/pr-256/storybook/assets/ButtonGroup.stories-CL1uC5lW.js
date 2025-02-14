import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{B as s}from"./Button-CUoGt7_g.js";import{c}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-PMtIgk3z.js";import"./useFocusable-BTV2lCc9.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";const d='"../theme/tokens.css"',l="(max-width: 767px)",g="_buttonGroup_5pd8y_4",B={tokens:d,smBreakpoint:l,buttonGroup:g},n=({children:o,className:p,"aria-label":u,...m})=>r.jsx("div",{role:"group","aria-label":u,className:c(B.buttonGroup,p),...m,children:o});n.__docgenInfo={description:`Group several buttons together.

@interface MidasButtonGroupProps

@see {@link https://designsystem.migrationsverket.se/components/button}`,methods:[],displayName:"ButtonGroup"};const j={component:n,title:"Components/Button/ButtonGroup",tags:["autodocs"],parameters:{layout:"centered"},args:{},argTypes:{}},t={args:{"aria-label":"Navigera i listan"},render:({...o})=>r.jsxs(n,{...o,children:[r.jsx(s,{children:"Fortsätt"}),r.jsx(s,{variant:"secondary",children:"Avbryt"})]})};var e,a,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigera i listan'
  },
  render: ({
    ...args
  }) => <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Primary"];export{t as Primary,N as __namedExportsOrder,j as default};
