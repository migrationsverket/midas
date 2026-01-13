import{j as e,l}from"./iframe-DIgCkbD1.js";import{S as t}from"./Skeleton-BiBE39Wo.js";import{T as p}from"./TextField-L-lxL-PR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-wA_JGRkJ.js";import"./utils-D8xi_xBs.js";import"./TextField-B0YmNuwZ.js";import"./FieldError-BtS7DKcw.js";import"./Text-Ci7gikDv.js";import"./useFocusRing-B4tmv29s.js";import"./index-CX1iR86j.js";import"./index-CWy7JOdY.js";import"./Text-D4RhZXD6.js";import"./RSPContexts-CJngwRS-.js";import"./Form-BSXJDsRb.js";import"./useFormValidation-DTzib3Vr.js";import"./Group-C3hYBVKZ.js";import"./Input-C7M6zB1J.js";import"./Hidden-CeUFJKQL.js";import"./Button-L3gEMBR5.js";import"./useLabels-CMNk11Q0.js";import"./useButton-Cw6qVxnq.js";import"./useTextField-DMvpFUuh.js";import"./useControlledState-iud_Pbox.js";import"./useField-DhzdSUPc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-SSlVc1WR.js";import"./Dialog-Bp9SjHhK.js";import"./OverlayArrow-CopZHNLH.js";import"./useResizeObserver-DMDldRHO.js";import"./Collection-B5hB3YM5.js";import"./index-e0Avl3RF.js";import"./Separator-DV9TXI7k.js";import"./SelectionManager-C7EgQSqt.js";import"./useEvent-DzaedMFS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY0GrkkP.js";import"./useDescription-DZesk85t.js";import"./ListKeyboardDelegate-DPy1dQ1v.js";import"./PressResponder-TYlz6-Gi.js";import"./useLocalizedStringFormatter-C6XmYEGX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMZRmXm_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DCGxt7Nj.js";import"./Button-DQt3X-10.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAAVeZG.js";import"./createLucideIcon-DsB032j6.js";import"./x-BLSu5xtU.js";import"./Heading-B7NBDRgB.js";import"./info-CEUO1zmh.js";import"./Popover-B5L4XLHW.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
