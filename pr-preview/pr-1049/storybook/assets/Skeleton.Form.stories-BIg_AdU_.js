import{j as e,l}from"./iframe-8LQjSoV-.js";import{S as t}from"./Skeleton-CsFT3hbE.js";import{T as p}from"./TextField-CtHkaTks.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CbzYKTK0.js";import"./utils-D4ezzWJc.js";import"./TextField-BSLnHcRW.js";import"./FieldError-ZO43sKQE.js";import"./Text-Ba5DRcdW.js";import"./useFocusRing-eCeeo32D.js";import"./index-CSLiAA3d.js";import"./index-Bp415QC6.js";import"./Text-B7DoZjLQ.js";import"./RSPContexts-C9qIP2XU.js";import"./Form-DD9j93NI.js";import"./useFormValidation-CZUIQIsK.js";import"./Group-D7brk9Pt.js";import"./Input-CNxvOAnP.js";import"./Hidden-DMawGuP2.js";import"./Button-B1ovmxx6.js";import"./useLabels-D4_n4kmh.js";import"./useButton-V0hMWo2E.js";import"./useTextField-DLgBnWvT.js";import"./useControlledState-BRRCr0-V.js";import"./useField-Bj5nGtmw.js";import"./TextField.module-DpzeWGpt.js";import"./Label-Dmk_nyub.js";import"./Dialog-D_ik0V2q.js";import"./OverlayArrow-CFLAg81B.js";import"./useResizeObserver-BDH1aAVt.js";import"./Collection-CKtooNbR.js";import"./index-CvYpyXd6.js";import"./Separator-BgXH_ZB5.js";import"./SelectionManager-zJgynfyK.js";import"./useEvent-Ba0ZD0JM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4ysFdBZ.js";import"./useDescription-DXvHmld6.js";import"./ListKeyboardDelegate-BJ1_VC6C.js";import"./PressResponder-B4KwkXPh.js";import"./useLocalizedStringFormatter-C8C_oBkV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhPqfReP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKIzJ5lj.js";import"./Button-BHfZAxDJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJaTWWg.js";import"./createLucideIcon-DK8ikGDs.js";import"./x-Cllv4JrD.js";import"./Heading-BEuxFqUj.js";import"./info-DKO4MRV3.js";import"./Popover-B8UBIi6G.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
