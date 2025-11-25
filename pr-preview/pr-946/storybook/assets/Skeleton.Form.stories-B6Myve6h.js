import{j as e,l}from"./iframe-Bgec6LZ9.js";import{S as t}from"./Skeleton-D9lIeB3T.js";import{T as d}from"./TextField-gdQRJDxJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-F3YU8y6l.js";import"./utils-DIIQIBM-.js";import"./TextField-DVPGeVch.js";import"./FieldError-6CR-SQTz.js";import"./Text-VdO0wtcg.js";import"./useFocusRing-B1D5indB.js";import"./index-Ceczni1n.js";import"./index-BeLA2EJf.js";import"./Text-ChsjEId-.js";import"./RSPContexts-CbK1ypjQ.js";import"./Form-BAzLDja7.js";import"./useFormValidation-CnB0lgVV.js";import"./Group-Xf_QAfZJ.js";import"./Input-xAz1298T.js";import"./Hidden-ClpDugI3.js";import"./Button-_JSPr_Qd.js";import"./useLabels-DcdCSdhe.js";import"./useButton-CXyVv40K.js";import"./useTextField-BPNdYXx9.js";import"./useControlledState-DnXTl3Pc.js";import"./useField-DLcs6KVB.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cm8NfiqY.js";import"./Dialog-D73xWdeY.js";import"./OverlayArrow-NbZRbyhy.js";import"./useResizeObserver-C6bRkG_3.js";import"./Collection-BMEFeSSi.js";import"./index-ZnG6Kjgr.js";import"./Separator-Dd9gmY95.js";import"./SelectionManager-DCQUpw9o.js";import"./useEvent-Ccc7jkrB.js";import"./scrollIntoView-BCNTH4IC.js";import"./SelectionIndicator-apNAViKq.js";import"./useDescription-ASwlOTW0.js";import"./ListKeyboardDelegate-BIlV6YAL.js";import"./PressResponder-Bp5TG3KD.js";import"./useLocalizedStringFormatter-BWOfcfGM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ch1KfHwI.js";import"./VisuallyHidden-U53ARRrF.js";import"./Button-DzNsYof3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DBY3ly5_.js";import"./createLucideIcon-D_CGqgCc.js";import"./x-k0_8W05y.js";import"./Heading-6_8Tm-Cn.js";import"./info-D9doPbsO.js";import"./Popover-BwTeHDII.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
