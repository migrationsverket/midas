import{j as e,l}from"./iframe-no9CntvV.js";import{S as t}from"./Skeleton-BrLvszuV.js";import{T as d}from"./TextField-Q_r7TgRW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BtZUbMl4.js";import"./utils-B6AasQkX.js";import"./TextField-CvHSbnXe.js";import"./FieldError-sDyen7ng.js";import"./Text-BpKcKBtM.js";import"./useFocusRing-pveG4jA-.js";import"./index-DvXDbTU2.js";import"./index-DEYREeZj.js";import"./Text-BGa0l0Rh.js";import"./RSPContexts-Cef-5t5s.js";import"./Form-CF35t9b0.js";import"./useFormValidation-CFAIF2Ue.js";import"./Group-BpeFlo06.js";import"./Input-CnBII4gJ.js";import"./Hidden-CFcjd9Ye.js";import"./Button-Deq-w1A_.js";import"./useLabels-BIymkZE6.js";import"./useButton-C4GsfKwP.js";import"./useTextField-Dd6YmX9K.js";import"./useControlledState-DxYknQDv.js";import"./useField-Cd0Sc82B.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DCsjk68R.js";import"./Dialog-YHzPU4Xt.js";import"./OverlayArrow-Bbx4ZvUL.js";import"./useResizeObserver-CMciYl8W.js";import"./Collection-CvCI3D99.js";import"./index-ngfcFwBD.js";import"./Separator-D6RPw9Yg.js";import"./SelectionManager-C4zMqpui.js";import"./useEvent-DgT1RkyW.js";import"./scrollIntoView-BVD0fCXS.js";import"./SelectionIndicator-CA-oSTYQ.js";import"./useDescription-Cspf3mhS.js";import"./ListKeyboardDelegate-DI0yyyLq.js";import"./PressResponder-mfl91F1s.js";import"./useLocalizedStringFormatter-BdwuPI9T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-5zfS10KG.js";import"./VisuallyHidden-BIFAjTF4.js";import"./Button-LFMtXpU7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dz0tCMy5.js";import"./createLucideIcon-DGuN_Rm2.js";import"./x-BdQk_ya-.js";import"./Heading-Bbqsli7f.js";import"./info-DeGxmpr8.js";import"./Popover-C-OJvxMh.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
