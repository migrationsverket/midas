import{j as e,l}from"./iframe-DzpGAGRs.js";import{S as t}from"./Skeleton-DePxQRPh.js";import{T as d}from"./TextField-B_CVZi3n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6hCX0SjS.js";import"./utils-DhQZEy20.js";import"./TextField-CRjSRq6K.js";import"./FieldError-BJ6H7Ap3.js";import"./Text-DzINHNBQ.js";import"./useFocusRing-CBMZ-ulq.js";import"./index-RZDpPbNi.js";import"./index-COvdJqzc.js";import"./Text-BciY5Tjq.js";import"./RSPContexts-Dqik0rA0.js";import"./Form-kiC6Xfma.js";import"./useFormValidation-CoLbxmFl.js";import"./Group-rz96SSnl.js";import"./Input-BO-DO8zt.js";import"./Hidden-BamiLY6w.js";import"./Button-DhsqVPF-.js";import"./useLabels-CnU9ekD0.js";import"./useButton-DgcuQT2f.js";import"./useTextField-B2llEpVF.js";import"./useControlledState-Cd4ZWdr1.js";import"./useField-CDhzWcTA.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-yvUHoT_l.js";import"./Dialog-x_tPqD_g.js";import"./OverlayArrow-CxKtVg1H.js";import"./useResizeObserver-DhqDyjeF.js";import"./Collection-CfCyruHm.js";import"./index-CPNUj5zQ.js";import"./Separator-DXYgY4tL.js";import"./SelectionManager-yKB6RIVq.js";import"./useEvent-CFsLuxvR.js";import"./scrollIntoView-J6xnNcxw.js";import"./SelectionIndicator-WJ1Ng6sH.js";import"./useDescription-_6Itm5b2.js";import"./ListKeyboardDelegate-C2T8--ZF.js";import"./PressResponder-B8bj9uGX.js";import"./useLocalizedStringFormatter-Chv8IKjN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DkDG2Qlb.js";import"./VisuallyHidden-Bu_FxHbl.js";import"./Button-zwkBBH84.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DclIrRz1.js";import"./createLucideIcon-BvhlWCmI.js";import"./x-oOrzlPsL.js";import"./Heading-CYq4rErI.js";import"./info-CYt-BXip.js";import"./Popover-Cup6NCRB.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
