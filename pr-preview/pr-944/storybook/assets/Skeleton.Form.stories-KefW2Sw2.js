import{j as e,l}from"./iframe-DTmnx-OS.js";import{S as t}from"./Skeleton-Dc8zkC-N.js";import{T as d}from"./TextField-DR8cnQ3R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CTebVYlY.js";import"./utils-BLrbyb-5.js";import"./TextField-C0qn_sLV.js";import"./FieldError-BW0t1--z.js";import"./Text-CAzG3hrs.js";import"./useFocusRing-D7pmxvpH.js";import"./index-Dh5clyrJ.js";import"./index-ZMXHPIeh.js";import"./Text-Rd2kwoRq.js";import"./RSPContexts-C1Iyv0kP.js";import"./Form-DHoA3APl.js";import"./useFormValidation-CS2KaDSt.js";import"./Group-B8xM3kTU.js";import"./Input-C8HcS5AT.js";import"./Hidden-BtM1I5LI.js";import"./Button-D84lT1wU.js";import"./useLabels-BU6BY9ES.js";import"./useButton-BfYlvgAS.js";import"./useTextField-Df2qcw2I.js";import"./useControlledState-B80F7Llz.js";import"./useField-C6pIHBN6.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D5tU1J5b.js";import"./Dialog-D7Xm6J16.js";import"./OverlayArrow-Mvs2w6w8.js";import"./useResizeObserver-B5MS2sn1.js";import"./Collection-CSCL41v3.js";import"./index-CSjg3Rnn.js";import"./Separator-Cc0lRCB9.js";import"./SelectionManager-BfTO8Xj5.js";import"./useEvent-CONhqoCx.js";import"./scrollIntoView-C54iyz8_.js";import"./SelectionIndicator-LNrCvCoH.js";import"./useDescription-P3-GHz2i.js";import"./ListKeyboardDelegate-BaMH29P7.js";import"./PressResponder-DYsVoB2A.js";import"./useLocalizedStringFormatter-CZmcKBND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rJ8oXYh7.js";import"./VisuallyHidden-DTo6UeCi.js";import"./Button-BR1AZgyV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DJL53Hew.js";import"./createLucideIcon-Q1IuAoPr.js";import"./x-BHyqnA-p.js";import"./Heading-CM3TnOvL.js";import"./info-DyFU30up.js";import"./Popover-B4ytbGoo.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
