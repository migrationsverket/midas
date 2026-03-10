import{j as e,l}from"./iframe-Bid_S7I4.js";import{S as t}from"./Skeleton-L6KJmkg8.js";import{T as p}from"./TextField-51H3bCRQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-FhYAcSP_.js";import"./utils-B2qcFePq.js";import"./FieldError-B0mVz9cL.js";import"./Text-GfN3CyXi.js";import"./useFocusRing-CGf0hTBa.js";import"./index-CbxEA1vr.js";import"./index-CZS9W8aw.js";import"./Text-52ihcTiX.js";import"./RSPContexts-Yr0bwy4q.js";import"./Form-CLhv9E59.js";import"./useFormValidation-C2lh5Bmq.js";import"./Group-DSscTG66.js";import"./Input-BFhd2Vzq.js";import"./Hidden-B_IoczkA.js";import"./Button-CxmUZ178.js";import"./useLabels-CtsjeuWn.js";import"./useButton-D9fSscge.js";import"./useTextField-CQAw8L_p.js";import"./useControlledState-BWQVgipy.js";import"./useField-Ot15oXQU.js";import"./TextField.module-DdivwlC8.js";import"./Label-cbRR56ky.js";import"./Dialog-BLaagoXh.js";import"./OverlayArrow-BB7lw8j4.js";import"./useResizeObserver-DvQBHfGd.js";import"./Collection-3S2dApvX.js";import"./index-BSnunQ2s.js";import"./Separator-C-p8N0H9.js";import"./SelectionManager-DP8dXlBl.js";import"./useEvent-B_2WmI7N.js";import"./scrollIntoView-B0aCs9nt.js";import"./SelectionIndicator-B1sgBrat.js";import"./useDescription-CiTmE2hO.js";import"./ListKeyboardDelegate-Bje-SQV-.js";import"./PressResponder-2GQuk75H.js";import"./useLocalizedStringFormatter-5FSqA3CS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DbLteYBP.js";import"./getScrollParent-CjkeExGQ.js";import"./VisuallyHidden-B_l7GjPs.js";import"./Button-CRgnzWDb.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-D8yQOpe1.js";import"./createLucideIcon-D8f6cvff.js";import"./x-B7kqcZNl.js";import"./Heading-qFCHwR_3.js";import"./info-B8HfiDOv.js";import"./Popover-CR8FO-At.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
