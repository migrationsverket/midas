import{j as e,l}from"./iframe-kcBhHuaH.js";import{S as t}from"./Skeleton-FOMjKDHV.js";import{T as d}from"./TextField-DCTLfDp4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DGm23AmA.js";import"./utils-DOkcVAYP.js";import"./TextField-BirBbfOn.js";import"./FieldError-DK3Y_c0y.js";import"./Text-DV1iqpLS.js";import"./useFocusRing-LSHA0Ws_.js";import"./index-CI0fxBEF.js";import"./index-c5G31wg9.js";import"./Text-B-hyuWsp.js";import"./RSPContexts-BUNBwwJ3.js";import"./Form-BkCW8McU.js";import"./useFormValidation-8n81Ub6p.js";import"./Group-DZ8V1L9l.js";import"./Input-rWrscHOT.js";import"./Hidden-DMcBSm7p.js";import"./Button-C0s49uwD.js";import"./useLabels-DaJadwr0.js";import"./useButton-D1IFZ1te.js";import"./useTextField-B4_L922K.js";import"./useControlledState-DFRisE43.js";import"./useField-BsKXPwbo.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BImXWQgN.js";import"./Dialog-Dh9JMf9d.js";import"./OverlayArrow-DH5Clq5N.js";import"./useResizeObserver--VwbIWdS.js";import"./Collection-B9GNZMME.js";import"./index-Dorx7YVm.js";import"./Separator-DwsHHZMX.js";import"./SelectionManager-CL7ASC5i.js";import"./useEvent-iOlAT4BQ.js";import"./scrollIntoView-C6lbNJbw.js";import"./SelectionIndicator-Be5O618m.js";import"./useDescription-daVdwGQJ.js";import"./ListKeyboardDelegate-CUwlA322.js";import"./PressResponder-CEfWacfb.js";import"./useLocalizedStringFormatter-CVmu0uNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWGMakzZ.js";import"./VisuallyHidden-BNmglq9E.js";import"./Button-BSuH-ecX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMjkdAmu.js";import"./createLucideIcon-DghdNl6J.js";import"./x-CPLY_iaX.js";import"./Heading-DThKIFT8.js";import"./info-Ds0ezI-s.js";import"./Popover-DmceUy5M.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
