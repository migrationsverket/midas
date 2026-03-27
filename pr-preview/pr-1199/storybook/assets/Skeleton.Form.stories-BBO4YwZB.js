import{j as e,l}from"./iframe-BbWt9Hzs.js";import{S as t}from"./Skeleton-CN5gtL0X.js";import{T as p}from"./TextField-CUSFvMHz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BMqXW1L9.js";import"./utils-KZAH4xlx.js";import"./FieldError-BzVhs6Ln.js";import"./Text-DSe1JSn0.js";import"./useFocusRing-B9bvRRmX.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./Text-DLXHrpA7.js";import"./RSPContexts-DKdTaTdn.js";import"./Form-D6MDpADX.js";import"./Group-D86u_bqU.js";import"./Input-Chi9cHrw.js";import"./Hidden-BJHG9IZy.js";import"./Button-EJIqjvoq.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./useTextField-Cphjw6_m.js";import"./useControlledState-DkbXJDJp.js";import"./useField-Cv-osmis.js";import"./TextField.module-DdivwlC8.js";import"./Label-B6p5xA93.js";import"./Dialog-qoK3N-47.js";import"./OverlayArrow-DcIVYDg9.js";import"./useResizeObserver-JKJl_Uvw.js";import"./Collection-C7TRCN5d.js";import"./index-Q9j86bkX.js";import"./Separator-CFIcuUKM.js";import"./SelectionManager-DCnzOW-V.js";import"./useEvent-ngzT0EBz.js";import"./scrollIntoView-CPHUDPPP.js";import"./SelectionIndicator-CvTQi0Y7.js";import"./useDescription-B5vJv64Z.js";import"./ListKeyboardDelegate-4yWuaQa1.js";import"./PressResponder-8RdqCcbY.js";import"./useLocalizedStringFormatter-Dq1sm40s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmyT2C_U.js";import"./getScrollParent-D7jC5O_o.js";import"./VisuallyHidden-zJEwCiu7.js";import"./x-B6r1o7zQ.js";import"./createLucideIcon-BJCyfpuO.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./Heading-BkvoezUL.js";import"./Button-C0W8ghEp.js";import"./Button.module-BB7N-cLd.js";import"./info-CCoAnChM.js";import"./Popover-BjQFNEL9.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
