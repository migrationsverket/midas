import{j as o}from"./iframe-NgsVAIE_.js";import{c as i}from"./clsx-Ciqy0D92.js";import{B as n}from"./Button-CsUdCrvJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button.module-Co5e5YHp.js";import"./Button-DTzo6E9X.js";import"./utils-BMRDwiWU.js";import"./Hidden-CQtKkbQ1.js";import"./useFocusRing-B3_Fq29Y.js";import"./index-DYQAdzyg.js";import"./index-DXaepPOW.js";import"./useLabels-DCVajOwk.js";import"./useButton-Br4NZV8a.js";import"./useLocalizedStringFormatter-B_7PwgqK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-DNjUyKXr.js";import"./VisuallyHidden-CrY5FCAN.js";const u="_buttonGroup_o1hqg_1",l={buttonGroup:u},e=({children:t,className:a,"aria-label":s,...p})=>o.jsx("div",{role:"group","aria-label":s,className:i(l.buttonGroup,a),...p,children:t});try{e.displayName="ButtonGroup",e.__docgenInfo={description:"Group several buttons together.",displayName:"ButtonGroup",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const T={component:e,title:"Components/Button/ButtonGroup",tags:["autodocs"],parameters:{layout:"centered"},args:{},argTypes:{}},r={args:{"aria-label":"Vill du acceptera ändringen?"},render:({...t})=>o.jsxs(e,{...t,children:[o.jsx(n,{children:"Fortsätt"}),o.jsx(n,{variant:"secondary",children:"Avbryt"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Vill du acceptera ändringen?'
  },
  render: ({
    ...args
  }) => <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
}`,...r.parameters?.docs?.source}}};const V=["Primary"];export{r as Primary,V as __namedExportsOrder,T as default};
