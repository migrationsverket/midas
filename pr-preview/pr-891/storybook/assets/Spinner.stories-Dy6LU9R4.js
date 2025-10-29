import{j as s}from"./iframe-Cn95Trhs.js";import{S as n,s as l}from"./Spinner-DH1eWRff.js";import{B as c}from"./Button-BfGcSgjz.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BhsQ84wm.js";import"./VisuallyHidden-DozxMvA8.js";import"./utils-B_Rqc_aW.js";import"./useFocusRing-_qs5_0yz.js";import"./index-BY3baLss.js";import"./index-BcP-6fTE.js";import"./useLocalizedStringFormatter-DeoLzFeA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button.module-CtQ1deO8.js";import"./Button-D8Giz6cX.js";import"./Hidden-7SzS1JPj.js";import"./useLabels-DEGYN1v0.js";import"./useButton-DASWZRz7.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,T={component:n,title:"Components/Spinner",tags:["autodocs","!snapshot"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},r={play:async({canvas:a,step:m,args:p})=>{await m("it should accept custom classNames",async()=>{await i(a.getByRole("status")).toHaveClass(l.container,p.className)})}},e={args:{small:!0}},t={args:{small:!0},render:a=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsxs(c,{children:[s.jsx(n,{...a}),"Laddar"]}),s.jsxs(c,{variant:"secondary",children:[s.jsx(n,{...a}),"Laddar"]})]})},o={args:{color:"rebeccapurple"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
