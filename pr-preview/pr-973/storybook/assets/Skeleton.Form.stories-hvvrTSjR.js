import{j as e,l}from"./iframe-Cmcg9luQ.js";import{S as t}from"./Skeleton-IFZRhzdr.js";import{T as p}from"./TextField-TYCeDDYb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C7CGBXeX.js";import"./utils-DkJuHdm3.js";import"./TextField-D0fFL62n.js";import"./FieldError-BaL3LJ5r.js";import"./Text-hbQ-WDrk.js";import"./useFocusRing-DDfGAqyv.js";import"./index-CGA0FNtf.js";import"./index-DVbC1Dtd.js";import"./Text-BAN3IH2j.js";import"./RSPContexts-XO60EeIg.js";import"./Form-DD6Ez8Rg.js";import"./useFormValidation-CGNYzqPR.js";import"./Group-CuTJjGlx.js";import"./Input-C3_Ex5Aq.js";import"./Hidden-zwF0tAvB.js";import"./Button-CHShYw1t.js";import"./useLabels-Cu1LcQOl.js";import"./useButton-DKMZ0sMp.js";import"./useTextField-DtBM3_oK.js";import"./useControlledState-CQt4n5kP.js";import"./useField-CJ_MOfrF.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B5Cwv84Z.js";import"./Dialog-BwxH-cxz.js";import"./OverlayArrow-DJYA6_W8.js";import"./useResizeObserver-CFsR_YAg.js";import"./Collection-VusCcygG.js";import"./index-B1BPqnSZ.js";import"./Separator-yeVdyden.js";import"./SelectionManager-C3JyXz3B.js";import"./useEvent-yxaIvS7j.js";import"./scrollIntoView-GW3hjUpk.js";import"./SelectionIndicator-JaC0r7eS.js";import"./useDescription-DVpoVzOH.js";import"./ListKeyboardDelegate-JZyz8SsL.js";import"./PressResponder-nkroryU4.js";import"./useLocalizedStringFormatter-DlNfiCCT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dj2mCMcV.js";import"./VisuallyHidden-DrDA4vjy.js";import"./Button-2Trrvjfa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdGC_wlX.js";import"./createLucideIcon-BL352A7A.js";import"./x-BZHozVPt.js";import"./Heading-DqvvOFdk.js";import"./info-zkz18lyW.js";import"./Popover-CUkqD4Xx.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
