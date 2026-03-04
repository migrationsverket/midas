import{j as e,l}from"./iframe-DBfoD2U7.js";import{S as t}from"./Skeleton-DzkgRPP2.js";import{T as p}from"./TextField-BG8P_qfR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C2MMefm6.js";import"./utils-D_iENdjI.js";import"./FieldError-CyN1tUSk.js";import"./Text-BwIO0Pwg.js";import"./useFocusRing-_y_4-82L.js";import"./index-Cn5t1hH6.js";import"./index-Cba1Uww2.js";import"./Text-D6_QswxK.js";import"./RSPContexts-BQx21hqj.js";import"./Form-HlTkFeqe.js";import"./useFormValidation-D9--7C6U.js";import"./Group-CPHZgdlw.js";import"./Input-BQ0dkJRu.js";import"./Hidden-BUhyB_bX.js";import"./Button-Bp1ZxcfX.js";import"./useLabels-BUVsGCLs.js";import"./useButton-Cw8muoeF.js";import"./useTextField-Czwx7loP.js";import"./useControlledState-_hIvr0Rm.js";import"./useField-BLOP0__N.js";import"./TextField.module-DdivwlC8.js";import"./Label-49TMha3l.js";import"./Dialog-BzReNYR-.js";import"./OverlayArrow-DM7W4rdn.js";import"./useResizeObserver-DoFkhrvv.js";import"./Collection-CusLbJSw.js";import"./index-BBhCFU6K.js";import"./Separator-CEMyLdIQ.js";import"./SelectionManager-BhEz_fDy.js";import"./useEvent-tLrG8XwI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DaRDFZPd.js";import"./useDescription-BtveEICz.js";import"./ListKeyboardDelegate-BjRG0rSY.js";import"./PressResponder-DBMGacat.js";import"./useLocalizedStringFormatter-D7V2ZqXE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9nHzfDWI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DIm4I4zN.js";import"./Button-mUhJkAyU.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTqG2xCS.js";import"./createLucideIcon-Bmf1TE0_.js";import"./x-BWVpbBLY.js";import"./Heading-B26-eOYp.js";import"./info-DPZJoJ-6.js";import"./Popover-D5jv0uxC.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
