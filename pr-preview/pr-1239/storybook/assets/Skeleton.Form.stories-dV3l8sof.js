import{j as e,l}from"./iframe-DWjCTUGS.js";import{S as t}from"./Skeleton-DWnhh3xs.js";import{T as p}from"./TextField-khbkedC2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B307V2VN.js";import"./utils-jft35r8I.js";import"./FieldError-B_RQwvpG.js";import"./Text-Dg63mXaz.js";import"./useFocusRing-By5vzM2y.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./Text-eFe150r9.js";import"./RSPContexts-Csylolnc.js";import"./Form-fTl9ZSRE.js";import"./Group-DtXYA5qI.js";import"./Input-_7XqZgB0.js";import"./Hidden-Crg89ChB.js";import"./Button-C9b-TJtb.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./useTextField-HwJ_gv6h.js";import"./useControlledState-CkptqhP6.js";import"./useField-76ZmfiRI.js";import"./TextField.module-DdivwlC8.js";import"./Label-BOYaDa7i.js";import"./Dialog-DxK-ww5T.js";import"./OverlayArrow-LoDtC1od.js";import"./useResizeObserver-DC3G56zM.js";import"./Collection-DjJ2m9zo.js";import"./index-4pgU1s_J.js";import"./Separator-2LMpIno4.js";import"./SelectionManager-0LynmnvR.js";import"./useEvent-Dr-0pueP.js";import"./scrollIntoView-DUeHV5Vd.js";import"./SelectionIndicator-DfY4UXyG.js";import"./useDescription-Da3_CYtm.js";import"./ListKeyboardDelegate-C2orpyom.js";import"./PressResponder-DFsO8vzI.js";import"./useLocalizedStringFormatter-BHhCUzn7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BT6WLBFH.js";import"./getScrollParent-DwRJEpBB.js";import"./VisuallyHidden-DBHrI_B7.js";import"./ModalOverlay-JVd6uyAy.js";import"./x-BkZO3SMW.js";import"./createLucideIcon-B9xTeaix.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./Heading-D83dPF1d.js";import"./Button-ClirsJfj.js";import"./Button.module-BB7N-cLd.js";import"./info-CCS-HkAt.js";import"./Popover-BiEZys4z.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
