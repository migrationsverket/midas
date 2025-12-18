import{j as e,l}from"./iframe-e7dVJZ80.js";import{S as t}from"./Skeleton-5ntgyKnD.js";import{T as p}from"./TextField-cLs0ia0n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bj6IeSZE.js";import"./utils-CEQ_Va0c.js";import"./TextField-ZT8KrAqw.js";import"./FieldError-9Gg6ZPlh.js";import"./Text-CPsvfpaa.js";import"./useFocusRing-B9Rn1B2s.js";import"./index-5fHP5ATJ.js";import"./index-CaEVLjia.js";import"./Text-CQWMXX5Z.js";import"./RSPContexts-CYNFOXtI.js";import"./Form-IYjIxsTE.js";import"./useFormValidation-BY_IYQMh.js";import"./Group-nMV4aCPD.js";import"./Input-6WO6L4_6.js";import"./Hidden-DUO5PkD4.js";import"./Button-HeijaR4V.js";import"./useLabels-DJlzxkkZ.js";import"./useButton-DzyK9NH4.js";import"./useTextField-BdD3utws.js";import"./useControlledState-CbdyQTTS.js";import"./useField-BJBsJOF5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D4gVihti.js";import"./Dialog-DD3oYIkL.js";import"./OverlayArrow-C9B0vpMn.js";import"./useResizeObserver-VmwogLqB.js";import"./Collection-CUCHkADT.js";import"./index-BDQNA3nl.js";import"./Separator-UJFGSXNG.js";import"./SelectionManager-Bh3IPHon.js";import"./useEvent-gTSMTyTm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc_8RdsI.js";import"./useDescription-DcKo4w2-.js";import"./ListKeyboardDelegate-LtZO_R9S.js";import"./PressResponder-BWvtNBff.js";import"./useLocalizedStringFormatter-Dy8GwP1X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-TB_kawwb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-VT-zoUNe.js";import"./Button-B2F6YuiM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Di1nCEID.js";import"./createLucideIcon-tRzhitig.js";import"./x-CxyJyYcT.js";import"./Heading-Bq0ZTA9f.js";import"./info-bXNc76H8.js";import"./Popover-DJnFnc6B.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
