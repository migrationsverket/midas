import{j as e,l}from"./iframe-krU3lnll.js";import{S as t}from"./Skeleton--TrA3uR1.js";import{T as d}from"./TextField-CelEnYDD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0HQ3j9s.js";import"./utils-DnS0_qQ0.js";import"./TextField-Caa72vSQ.js";import"./FieldError-BZw0hilX.js";import"./Text-DbFNQrMd.js";import"./useFocusRing-CWzVObSZ.js";import"./index-C3RV6eBu.js";import"./index-VFJCran0.js";import"./Text-CRDp8VCP.js";import"./RSPContexts-CK5__bLT.js";import"./Form-DF--Q7sV.js";import"./useFormValidation-D2kRzjUH.js";import"./Group-BAt37hnW.js";import"./Input-WpgHyu-H.js";import"./Hidden-VnIe4cgE.js";import"./Button-BU6Lkb_Z.js";import"./useLabels-CUZsRNLj.js";import"./useButton-D0AxcNmg.js";import"./useTextField-CQh1ecGs.js";import"./useControlledState-BaSC3gVY.js";import"./useField-D2HtNlVL.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DCWCy9Nd.js";import"./Dialog-Dl6ULBTo.js";import"./OverlayArrow-DZYqRZ0L.js";import"./useResizeObserver-BZbGIQoB.js";import"./Collection-SMI5ud3S.js";import"./index-BI9wnSMS.js";import"./Separator-Z9cKJYqT.js";import"./SelectionManager-1YUjXvJB.js";import"./useEvent-DlIKZhAG.js";import"./scrollIntoView-DmSwjTPb.js";import"./SelectionIndicator-CDrcvIKn.js";import"./useDescription-BPn6lxFJ.js";import"./ListKeyboardDelegate-DG_DvB0T.js";import"./PressResponder-jZ7-PsE5.js";import"./useLocalizedStringFormatter-DZ80bzWS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DN-of50m.js";import"./VisuallyHidden-C3s2Crnt.js";import"./Button-C-0GV_cb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B3TpQ19y.js";import"./createLucideIcon-DPakKbXd.js";import"./x-C81gg8f4.js";import"./Heading-CWDBVfdi.js";import"./info-P1AvIU-w.js";import"./Popover-Cq24sl41.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
