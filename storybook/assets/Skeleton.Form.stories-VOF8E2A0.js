import{j as e,l}from"./iframe-BEec9xws.js";import{S as t}from"./Skeleton-DdVoPrjb.js";import{T as p}from"./TextField-C730naT0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B9hmVprt.js";import"./utils-tmadhNLO.js";import"./TextField-C43184GK.js";import"./FieldError-2T8QeYCV.js";import"./Text-CEDi3dsy.js";import"./useFocusRing-CHLWvWfU.js";import"./index-jsa7VRLI.js";import"./index-BPo6dsF7.js";import"./Text-Cqp2sCpU.js";import"./RSPContexts-COK32NAs.js";import"./Form-BJTstxyD.js";import"./useFormValidation-Bw69zpyk.js";import"./Group-y7vrNsst.js";import"./Input-C--JKR4S.js";import"./Hidden-uHrwE7I5.js";import"./Button-DWX0vVyl.js";import"./useLabels-B9n4tFRy.js";import"./useButton-G3mO1U0h.js";import"./useTextField-Bg4NdGaF.js";import"./useControlledState-BAzuR8Jv.js";import"./useField-7d8i6LLe.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D1PWWmqN.js";import"./Dialog-gGRr6dJL.js";import"./OverlayArrow-Bma7uS4_.js";import"./useResizeObserver-D5LXj7ca.js";import"./Collection-D3spvIRq.js";import"./index-C2h17Hkd.js";import"./Separator-m66wPUn4.js";import"./SelectionManager-Bp8NDSgY.js";import"./useEvent-e5sb6lYY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COZ8q6cB.js";import"./useDescription-CLIom5bP.js";import"./ListKeyboardDelegate-BNbwgrMg.js";import"./PressResponder-DN4lRlRa.js";import"./useLocalizedStringFormatter-DPYn3iJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCnHayjS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B_EbF9d8.js";import"./Button-ZBZN_eZh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-piak_TFz.js";import"./createLucideIcon-BEU2T1Tc.js";import"./x-DNVtugLs.js";import"./Heading-C3sBlwM8.js";import"./info-B3Ed_GmD.js";import"./Popover-BtG-GTgy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
