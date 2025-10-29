import{j as s}from"./iframe-D22RnrI5.js";import{S as n,s as l}from"./Spinner-DVVu8O7C.js";import{B as c}from"./Button-T9TteJoQ.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-DImY0aIE.js";import"./VisuallyHidden-aWO_RYgT.js";import"./utils-IQwsi_Mp.js";import"./useFocusRing-CelFkdst.js";import"./index-B6eCQ9aw.js";import"./index-DZ5AQ9RU.js";import"./useLocalizedStringFormatter-C3cFmwKu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button.module-CtQ1deO8.js";import"./Button-rdu5FjWn.js";import"./Hidden-CtIENPW4.js";import"./useLabels-DCbQxQd_.js";import"./useButton-DTvkVre_.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,T={component:n,title:"Components/Spinner",tags:["autodocs","!snapshot"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},r={play:async({canvas:a,step:m,args:p})=>{await m("it should accept custom classNames",async()=>{await i(a.getByRole("status")).toHaveClass(l.container,p.className)})}},e={args:{small:!0}},t={args:{small:!0},render:a=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsxs(c,{children:[s.jsx(n,{...a}),"Laddar"]}),s.jsxs(c,{variant:"secondary",children:[s.jsx(n,{...a}),"Laddar"]})]})},o={args:{color:"rebeccapurple"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    small: true
  },
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Button>
        <Spinner {...args} />
        Laddar
      </Button>
      <Button variant="secondary">
        <Spinner {...args} />
        Laddar
      </Button>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'rebeccapurple'
  }
}`,...o.parameters?.docs?.source}}};const U=["Primary","Small","InButton","UserSelectColor"];export{t as InButton,r as Primary,e as Small,o as UserSelectColor,U as __namedExportsOrder,T as default};
