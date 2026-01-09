import{j as e,l}from"./iframe-nE4dm88Z.js";import{S as t}from"./Skeleton-D1u48yDA.js";import{T as p}from"./TextField-CL3lzH0s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cl-2VHT-.js";import"./TextField-DUTkcN_I.js";import"./utils-D6BHXFFk.js";import"./FieldError-Dawq3Gkj.js";import"./Text-DiUExjYu.js";import"./useFocusRing-CHzcFtFU.js";import"./index-DogyMJnz.js";import"./index-DUvPe5TJ.js";import"./Text-Cx_6NWCd.js";import"./RSPContexts-B3rIMyAq.js";import"./Form-Bmoffjj9.js";import"./useFormValidation-C6QvPBXN.js";import"./Group-aJjn_8pX.js";import"./Input-CwjmEI8O.js";import"./Hidden-B5zipMeH.js";import"./Button-B3APOlWO.js";import"./useLabels-h0Q5hm8W.js";import"./useButton-Dgl5rK7P.js";import"./useTextField-BKQ5h-hw.js";import"./useControlledState-Da3ywIgU.js";import"./useField-B9aIp0ru.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DOA5ScxT.js";import"./Dialog-BmRoZ4Ke.js";import"./OverlayArrow-cBSsDxtF.js";import"./useResizeObserver-C0_9yGsU.js";import"./Collection-Iss9Z0nH.js";import"./index-Bf6Qc5MO.js";import"./Separator-DdeiSrR7.js";import"./SelectionManager-BgXzqmfx.js";import"./useEvent-BFPzvfby.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D-p60_16.js";import"./useDescription-tK3CsJ4R.js";import"./ListKeyboardDelegate-De05int2.js";import"./PressResponder-_wkhWPhg.js";import"./useLocalizedStringFormatter-BZ1dBZg4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CWglpiz9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-t4WqRTpg.js";import"./Button-CXDEkB4j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CURwqrMK.js";import"./createLucideIcon-DoBEpZId.js";import"./x-BAGrW2Pg.js";import"./Heading-DSicriFW.js";import"./info-gV5W-sy8.js";import"./Popover-BIz2MXJk.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
