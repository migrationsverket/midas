import{j as e,l}from"./iframe-BQrtIPmh.js";import{S as t}from"./Skeleton-5cNyMHm7.js";import{T as p}from"./TextField-B0WYs5tm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BOjWkU2x.js";import"./TextField-BK-Mttch.js";import"./utils-BS6sXZRH.js";import"./FieldError-DxXo_lqN.js";import"./Text-COf1Fc6Q.js";import"./useFocusRing-y2IKkZpt.js";import"./index-YT1oLI7a.js";import"./index-4QHcSQc6.js";import"./Text-Ar7CbXL2.js";import"./RSPContexts-B7BZpIEv.js";import"./Form-D3dBAIeA.js";import"./useFormValidation-VEshaC1X.js";import"./Group-DUl23u4-.js";import"./Input-BvHtnBjj.js";import"./Hidden-ChFGCUwp.js";import"./Button-CwSqfpei.js";import"./useLabels-B8OZel6J.js";import"./useButton-Bq3twKx0.js";import"./useTextField-CldOBuyi.js";import"./useControlledState-BehPunq_.js";import"./useField-DnmfTmmv.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DA8sjx-i.js";import"./Dialog-xkXnelAM.js";import"./OverlayArrow-D5stloCs.js";import"./useResizeObserver-B_W-iIzv.js";import"./Collection-Bg3XAI3U.js";import"./index-dVdMFjEa.js";import"./Separator-B8eK9tne.js";import"./SelectionManager-SJNHkq4Q.js";import"./useEvent-DsjSvcKm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DafI-lUN.js";import"./useDescription-CFR_hxpk.js";import"./ListKeyboardDelegate-E7osep5R.js";import"./PressResponder-mC_0UUq5.js";import"./useLocalizedStringFormatter-aBffhIh6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7vkcFU_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-KB2QFTLi.js";import"./Button-of3UeUzt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DkVOPURc.js";import"./createLucideIcon-j47tDFs8.js";import"./x-CzVH8xnQ.js";import"./Heading-Dx2eNYM8.js";import"./info-DKCA_yjb.js";import"./Popover-CYiOQIy6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
