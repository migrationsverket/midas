import{j as e,l}from"./iframe-DBhQ8ZfE.js";import{S as t}from"./Skeleton-DuNxbJ2a.js";import{T as p}from"./TextField-t8-m5M3X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BuQX6Xjp.js";import"./utils-CV2hteiq.js";import"./TextField-CQGhErrN.js";import"./FieldError-CBIHh_VV.js";import"./Text-B7pj2ymj.js";import"./useFocusRing-2NmEPi_N.js";import"./index-CY38OC3k.js";import"./index-Dn-wkp9J.js";import"./Text-ByOBhr0y.js";import"./RSPContexts-CiHCTwCW.js";import"./Form-COD5heDD.js";import"./useFormValidation-B0Ezuj_R.js";import"./Group-BShwi2v5.js";import"./Input-CB9tjmC9.js";import"./Hidden-BD34b6Sf.js";import"./Button-BkJQBN-z.js";import"./useLabels-C-hTBXSR.js";import"./useButton-6CFw4W9G.js";import"./useTextField-DC4rFzr4.js";import"./useControlledState-DTSOZ1sm.js";import"./useField-Dqufr6FC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CC7TLxk-.js";import"./Dialog-qttM7F0n.js";import"./OverlayArrow-CfDzyuH5.js";import"./useResizeObserver-B6lvwgtI.js";import"./Collection-WipRWROd.js";import"./index-BjpqmIXJ.js";import"./Separator-dWfWGgWB.js";import"./SelectionManager-DIxKGDaq.js";import"./useEvent--vbCSqK6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DY8WkhgT.js";import"./useDescription-BdlPH_Ut.js";import"./ListKeyboardDelegate-CnB4GnLU.js";import"./PressResponder-VnRiehAJ.js";import"./useLocalizedStringFormatter-DMxV2bdQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bfq_HOSC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B0hr9uCQ.js";import"./Button-aFOEdS9y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnEeM0Eu.js";import"./createLucideIcon-DPyGDXBW.js";import"./x--mWXCQyN.js";import"./Heading--CMmhAbi.js";import"./info-DRO2txNo.js";import"./Popover-BVmWUEvu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
