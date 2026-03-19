import{j as e,l}from"./iframe-QDSUgBpo.js";import{S as t}from"./Skeleton-DI1COzMX.js";import{T as p}from"./TextField-DGSbL-8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B5P56hEc.js";import"./utils-DvLern-H.js";import"./FieldError-BkvFLAiM.js";import"./Text-CvZZMQm8.js";import"./useFocusRing-DJFUjDnL.js";import"./index-BF2Mp0-C.js";import"./index-DczpGf_O.js";import"./Text-DR2iN84k.js";import"./RSPContexts-DdhSCSVx.js";import"./Form-BzmpAFOD.js";import"./useFormValidation-D9lbBzHN.js";import"./Group-DyTv-GVR.js";import"./Input-D8fuFGkD.js";import"./Hidden-BN-CZ8Az.js";import"./Button-C3ndRLHV.js";import"./useLabels-EtKw0NwM.js";import"./useButton-Ca39907a.js";import"./useTextField-DiPOIOEe.js";import"./useControlledState-0ntZUwbV.js";import"./useField-H3aLMADt.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dv1CZIiU.js";import"./Dialog-CthEDCHj.js";import"./OverlayArrow-DgmubAk3.js";import"./useResizeObserver-SWq72swg.js";import"./Collection-D4C6-BXJ.js";import"./index-XRXkwlnM.js";import"./Separator-DzbLo0pW.js";import"./SelectionManager-CiUsdP4o.js";import"./useEvent-C8LuCS9K.js";import"./scrollIntoView-DWJeooee.js";import"./SelectionIndicator-BIhL9hvF.js";import"./useDescription-tD4XjceD.js";import"./ListKeyboardDelegate-CQLphkwI.js";import"./PressResponder-q00a2t1V.js";import"./useLocalizedStringFormatter-BuFmuI1y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYiJMydF.js";import"./getScrollParent-CoiIkSSx.js";import"./VisuallyHidden-RUty4LXR.js";import"./x-DQSWlImf.js";import"./createLucideIcon-awWdQq2I.js";import"./useLocalizedStringFormatter-CpELJUen.js";import"./Heading-nnzh1k-l.js";import"./Button-B_32-CvO.js";import"./Button.module-BB7N-cLd.js";import"./info-DRB6OBjd.js";import"./Popover-DfAxbr01.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
