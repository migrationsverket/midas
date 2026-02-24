import{j as e,l}from"./iframe-Cz8HHCXP.js";import{S as t}from"./Skeleton-Bm4_jQid.js";import{T as p}from"./TextField-SJHWnh4c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DMB3bccr.js";import"./utils-CHHvFpL5.js";import"./FieldError-CP8pZpTQ.js";import"./Text-C2eLHPBt.js";import"./useFocusRing-CifWSbR7.js";import"./index-ByLFS2_k.js";import"./index-DySfiLBO.js";import"./Text-Ds9GT8qW.js";import"./RSPContexts-BZpnDWsc.js";import"./Form-DvbuDjI_.js";import"./useFormValidation-BmxCMhME.js";import"./Group-Dk-S29IJ.js";import"./Input-D8R08HXc.js";import"./Hidden-DjfT0FF_.js";import"./Button-CyhSWA6k.js";import"./useLabels-C0CZzmBW.js";import"./useButton-knBJS-If.js";import"./useTextField-C_mtJk_s.js";import"./useControlledState-CGafyotv.js";import"./useField-DMkuuKjj.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-Cn-uj30S.js";import"./Dialog-PfjTyKnn.js";import"./OverlayArrow-Czi8Ji7R.js";import"./useResizeObserver-DecP2-I9.js";import"./Collection-Bh_gfeuR.js";import"./index-DTlwesn3.js";import"./Separator-jmVq-6bR.js";import"./SelectionManager-7ahMGbrk.js";import"./useEvent-CnM7m0F3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dq--1A-J.js";import"./useDescription-D6nJ7Lob.js";import"./ListKeyboardDelegate-kyO647b2.js";import"./PressResponder-cjCNE8YI.js";import"./useLocalizedStringFormatter-uYoPNXl-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dohc3n8K.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bnafg7jN.js";import"./Button-_rHSG3fZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BF9hqiyk.js";import"./createLucideIcon-D0LCllt7.js";import"./x-BGPJdTwu.js";import"./Heading-DEjXC6uX.js";import"./info-CGU-eILb.js";import"./Popover-Dy7L_dCg.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
