import{j as e,l}from"./iframe-DHh65h_D.js";import{S as t}from"./Skeleton-gx0acl02.js";import{T as p}from"./TextField-BUXPG-wC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-GrRgWQrJ.js";import"./TextField-x6LxN8Ex.js";import"./utils-CRlJIqN4.js";import"./FieldError-CZOLFkPk.js";import"./Text-B6OtYudP.js";import"./useFocusRing-DqzDzWve.js";import"./index-D9l5_NrD.js";import"./index-BqXLjEuD.js";import"./Text-2-9fHpSD.js";import"./RSPContexts-CngAHAHx.js";import"./Form-CtKNJT4H.js";import"./useFormValidation-BJjf4415.js";import"./Group-C92cMdpx.js";import"./Input-Chi1-srF.js";import"./Hidden-CS2nm6ao.js";import"./Button-6YV4W2NZ.js";import"./useLabels-q87dcIcB.js";import"./useButton-BBt2Ci9q.js";import"./useTextField-BW7cdks7.js";import"./useControlledState-DdJfUtoQ.js";import"./useField-XK7JKHI0.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CSCifA4R.js";import"./Dialog-2SBn50M0.js";import"./OverlayArrow-BLXUjT9M.js";import"./useResizeObserver-vjL6WbDa.js";import"./Collection-BOLyBVrt.js";import"./index-gtnfDiq7.js";import"./Separator-DsK04sVr.js";import"./SelectionManager-Dbi63Cc2.js";import"./useEvent-BPbwm3Ts.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-I0tRuqFx.js";import"./useDescription-C_eZ3IFZ.js";import"./ListKeyboardDelegate-lYKbs3P3.js";import"./PressResponder-BVMByfz_.js";import"./useLocalizedStringFormatter-Bh-F6CwF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dz4KOBu-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B2VGaWGX.js";import"./Button-zcv_I1lF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BX3F0Xrm.js";import"./createLucideIcon-jDUATHN8.js";import"./x-C4sM-r3i.js";import"./Heading-DnXQujbJ.js";import"./info-CNa2kD6A.js";import"./Popover-DVe4OICU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
