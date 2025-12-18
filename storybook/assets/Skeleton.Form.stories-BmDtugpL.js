import{j as e,l}from"./iframe-_Z42HqI2.js";import{S as t}from"./Skeleton-D-yCn0DR.js";import{T as p}from"./TextField-BfKrkiyf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DO2Krflp.js";import"./utils-CrFX56hd.js";import"./TextField-DCdeymLz.js";import"./FieldError-BZ5o1p5r.js";import"./Text-BpRe27H2.js";import"./useFocusRing-BVlddUKs.js";import"./index-BjqvvYkr.js";import"./index-BufdmmQ5.js";import"./Text-B2Ny6SaZ.js";import"./RSPContexts-CHAQW4_v.js";import"./Form-DeFwMNib.js";import"./useFormValidation-sacXgetL.js";import"./Group-BrrPXPJe.js";import"./Input-D84_EdqQ.js";import"./Hidden-BhDJNGVH.js";import"./Button-CK5CfXUr.js";import"./useLabels-CPlvQ2_t.js";import"./useButton-BBRfPduy.js";import"./useTextField-DjXwZCeR.js";import"./useControlledState-C42bKwUu.js";import"./useField-CQWg_p4S.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BRbMDvFD.js";import"./Dialog-CjESVl3F.js";import"./OverlayArrow-D2w3lhSc.js";import"./useResizeObserver-Ls85LRA8.js";import"./Collection-BP9le3z0.js";import"./index-6otkVSUG.js";import"./Separator-_W4MQ8Kt.js";import"./SelectionManager-BHdh6SkD.js";import"./useEvent-vDDYHoIn.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BAoKk-bv.js";import"./useDescription-5yHK5kQM.js";import"./ListKeyboardDelegate-DO9-fFrt.js";import"./PressResponder-BGrpQpZY.js";import"./useLocalizedStringFormatter-CWBL-q72.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CN8Uxxik.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUe-0CEM.js";import"./Button-CJtuwFwb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAmkoZvN.js";import"./createLucideIcon-DxsQvIVq.js";import"./x-CVRS_r9A.js";import"./Heading-BMJh1aBf.js";import"./info-C98lbZFz.js";import"./Popover-DzcCBfCJ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
