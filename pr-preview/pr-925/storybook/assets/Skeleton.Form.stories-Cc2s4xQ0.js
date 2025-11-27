import{j as e,l}from"./iframe-BZebrEas.js";import{S as t}from"./Skeleton-CgYUQdIY.js";import{T as d}from"./TextField-tTF9_4P8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CsYpsrmm.js";import"./utils-Cv9uZo9K.js";import"./TextField-BtzPKpH3.js";import"./FieldError-S8zlZ8Qt.js";import"./Text-BLwI2igp.js";import"./useFocusRing-BUV9YV_S.js";import"./index-CMbZ6i8n.js";import"./index-CRcYGfdJ.js";import"./Text-PUTIA7Gc.js";import"./RSPContexts-CR_BySB8.js";import"./Form-Bxqwh6Ta.js";import"./useFormValidation-C-0LMZRV.js";import"./Group-TTBDS3Pa.js";import"./Input-D_Q5vOM0.js";import"./Hidden-Ca7SziLN.js";import"./Button-BNKoZpIx.js";import"./useLabels-Bg0bSlQa.js";import"./useButton-DldPu05S.js";import"./useTextField-wMbn2YZU.js";import"./useControlledState-CdL0Vn8u.js";import"./useField-58_UFhRk.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cw28LU9-.js";import"./Dialog-7fOpNb5L.js";import"./OverlayArrow-Bb6Wz-gE.js";import"./useResizeObserver-D0l1ejLy.js";import"./Collection-lJ8s2yN3.js";import"./index-C4fSNA5g.js";import"./Separator-B4VXBxEh.js";import"./SelectionManager-gOKr_MBh.js";import"./useEvent-BvUmgLEr.js";import"./scrollIntoView-I6Vyn3AQ.js";import"./SelectionIndicator-TfXKW_yK.js";import"./useDescription-9b_SNdIF.js";import"./ListKeyboardDelegate-Dvn7sCAG.js";import"./PressResponder-C9_klJfI.js";import"./useLocalizedStringFormatter-C6EoZcm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DgDI8Mdk.js";import"./VisuallyHidden-DdwHvdeJ.js";import"./Button-rfuzx7LV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Cvv0O9w3.js";import"./createLucideIcon-BzZU7Nc4.js";import"./x-CwCP3jA6.js";import"./Heading-Ci0MqNsG.js";import"./info-B1DiDeFz.js";import"./Popover-CiN36iaZ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
