import{j as e,l}from"./iframe-ghVbh2m4.js";import{S as t}from"./Skeleton-BD9Dvnw8.js";import{T as p}from"./TextField-C4a2lJuQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CIJcYfJD.js";import"./utils-Ct4jCNtU.js";import"./FieldError-DYXnaMAk.js";import"./Text-CATOuxZy.js";import"./useFocusRing-tQFcCqqc.js";import"./index-ewvUbER1.js";import"./index-Bm6sjKM_.js";import"./Text-agLWRutI.js";import"./RSPContexts-DiGFJgBW.js";import"./Form-BkK1wOoE.js";import"./useFormValidation-Bz2uPf8x.js";import"./Group-B5nTYCIP.js";import"./Input-BXOkjbf2.js";import"./Hidden-CsZ06DKs.js";import"./Button-Dx2HIyuj.js";import"./useLabels-Da1vllL2.js";import"./useButton-BCYBif3G.js";import"./useTextField-DV0xQLx0.js";import"./useControlledState-Cm-qnzwi.js";import"./useField-BbZI2M8z.js";import"./TextField.module-DdivwlC8.js";import"./Label-CUSQXVa8.js";import"./Dialog-Dv-bVW_x.js";import"./OverlayArrow-BKp_8F9u.js";import"./useResizeObserver-w4_4k_RB.js";import"./Collection-Bwnw311o.js";import"./index-BCAzQp90.js";import"./Separator-CvxRdx_h.js";import"./SelectionManager-bsvE-HiB.js";import"./useEvent-DMOxFrhy.js";import"./scrollIntoView-B7zrt0js.js";import"./SelectionIndicator-DVW27rT4.js";import"./useDescription-DdI46JkH.js";import"./ListKeyboardDelegate-Da-HzqLh.js";import"./PressResponder-CbWShzoc.js";import"./useLocalizedStringFormatter-DfDL6ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKVfupdY.js";import"./getScrollParent-BMO_SkXK.js";import"./VisuallyHidden-BqLrRw5b.js";import"./Button--cicrOD0.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-BAvHj6kP.js";import"./createLucideIcon-iA7xlyS0.js";import"./x-CjlhRBsD.js";import"./Heading-Dblz7UTY.js";import"./info-DQMtvjDZ.js";import"./Popover-C79pZeL7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
