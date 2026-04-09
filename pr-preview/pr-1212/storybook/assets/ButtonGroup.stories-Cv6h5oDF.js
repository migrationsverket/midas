import{j as o}from"./iframe-CFC4xcGk.js";import{c as i}from"./clsx-Ciqy0D92.js";import{B as n}from"./Button-DmKKfG5W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-Dlhy25YO.js";import"./utils-YAjyJ6o5.js";import"./Hidden-BvfitbEd.js";import"./useFocusRing-jXz3NGbj.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-BfFQGVhS.js";import"./VisuallyHidden-BPhSZleF.js";const u="_buttonGroup_o1hqg_1",l={buttonGroup:u},e=({children:t,className:a,"aria-label":s,...p})=>o.jsx("div",{role:"group","aria-label":s,className:i(l.buttonGroup,a),...p,children:t});try{e.displayName="ButtonGroup",e.__docgenInfo={description:"Group several buttons together.",displayName:"ButtonGroup",props:{tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const V={component:e,title:"Components/Button/ButtonGroup",tags:["autodocs"],parameters:{layout:"centered"},args:{},argTypes:{}},r={args:{"aria-label":"Vill du acceptera ändringen?"},render:({...t})=>o.jsxs(e,{...t,children:[o.jsx(n,{children:"Fortsätt"}),o.jsx(n,{variant:"secondary",children:"Avbryt"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Vill du acceptera ändringen?'
  },
  render: ({
    ...args
  }) => <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
}`,...r.parameters?.docs?.source}}};const q=["Primary"];export{r as Primary,q as __namedExportsOrder,V as default};
