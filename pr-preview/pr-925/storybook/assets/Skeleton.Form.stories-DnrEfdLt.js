import{j as e,l}from"./iframe-DYBbcOUc.js";import{S as t}from"./Skeleton-D5sUECBW.js";import{T as p}from"./TextField-JlBY5-Lz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BYp46O7d.js";import"./utils-R4gvIU3G.js";import"./TextField-DyUBfcPq.js";import"./FieldError-B2TJex7v.js";import"./Text-Tj7cHc4y.js";import"./useFocusRing-DyRUz5vb.js";import"./index-thGjz9u9.js";import"./index-D7z64vMT.js";import"./Text-Bqq52gB3.js";import"./RSPContexts-B2cERvFk.js";import"./Form-C4bmwKk2.js";import"./useFormValidation-CyMOk9K1.js";import"./Group-CKEeR6Ua.js";import"./Input-BCJBb9eo.js";import"./Hidden-XaTnVVir.js";import"./Button-Cad-DxUv.js";import"./useLabels-Da2D9TrT.js";import"./useButton-COPW9UvJ.js";import"./useTextField-uazggKBi.js";import"./useControlledState-mdKIrMMP.js";import"./useField-DnAWikfx.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CddjRF3U.js";import"./Dialog-Ckf1ZhYe.js";import"./OverlayArrow-CWYcgf-M.js";import"./useResizeObserver-DcVIdTpi.js";import"./Collection-CH5Z5HcA.js";import"./index-B26BCfjV.js";import"./Separator-DDd0wnQO.js";import"./SelectionManager-Hz5nWYgr.js";import"./useEvent-uHHHA4m4.js";import"./scrollIntoView-pqv3M8RJ.js";import"./SelectionIndicator-kISU7KBz.js";import"./useDescription-C8Vy8EGp.js";import"./ListKeyboardDelegate-DNu-CIf4.js";import"./PressResponder-BleC3u6N.js";import"./useLocalizedStringFormatter-BWoXb-Lg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-_9ehPPjd.js";import"./VisuallyHidden-DNWWeoJ1.js";import"./useLocalizedStringFormatter-CB7EX41j.js";import"./Button-BOqn9nOO.js";import"./Button.module-CtQ1deO8.js";import"./x-Cbhc3GUc.js";import"./createLucideIcon-DhblIh0r.js";import"./Heading-Bd5JRCBV.js";import"./info-L0wUT4K6.js";import"./Popover-c6va3WaX.js";import"./Input-CkowVm1j.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
