import{j as e,l}from"./iframe-D4pYWxLo.js";import{S as t}from"./Skeleton-COfCrO4Y.js";import{T as d}from"./TextField-CvCJsYEQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ov3s7idw.js";import"./utils-CNWAI1YN.js";import"./TextField-BxnkYH3G.js";import"./FieldError-B2349xR_.js";import"./Text-C4ycuvF6.js";import"./useFocusRing-Cd1zlkVw.js";import"./index-ffkNdVXt.js";import"./index-QMn_Li5K.js";import"./Text-3Lu4u5rC.js";import"./RSPContexts-BJJYI1Rc.js";import"./Form-B2U_6q63.js";import"./useFormValidation-D8zZucp-.js";import"./Group-Cv4wokcm.js";import"./Input-D95JtQgy.js";import"./Hidden-BmxxaD5V.js";import"./Button-BBLXtQE-.js";import"./useLabels-D6wiLGoB.js";import"./useButton-DUM2jYvh.js";import"./useTextField-q7tA1tCV.js";import"./useControlledState-DRikiJpI.js";import"./useField-aOfXQooy.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BIxAip9Z.js";import"./Dialog-CB0yU7_I.js";import"./OverlayArrow-ilA3ezr0.js";import"./useResizeObserver-DbtxEBSN.js";import"./Collection-Dr_DRN_G.js";import"./index-Fd-1KiMK.js";import"./Separator-B6D9XBFd.js";import"./SelectionManager-BTWpsEmz.js";import"./useEvent-BYGse6l2.js";import"./scrollIntoView-Df3KPf7G.js";import"./SelectionIndicator-BhFaSh08.js";import"./useDescription-QhEUd527.js";import"./ListKeyboardDelegate-r3YzLK8b.js";import"./PressResponder-DdPUnbRK.js";import"./useLocalizedStringFormatter-DeN0CJTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7VHFumo.js";import"./VisuallyHidden-CkFGnntu.js";import"./useLocalizedStringFormatter-CPBieKrW.js";import"./Button-BwuPit9L.js";import"./Button.module-CtQ1deO8.js";import"./x-DG8Jfz18.js";import"./createLucideIcon-EKjaxrON.js";import"./Heading-Db99DRto.js";import"./info-Bc6odoPJ.js";import"./Popover-BGJMgOza.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
