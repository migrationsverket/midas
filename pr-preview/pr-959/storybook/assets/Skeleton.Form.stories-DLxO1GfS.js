import{j as e,l}from"./iframe-CjAeaDoj.js";import{S as t}from"./Skeleton-ASKchz7X.js";import{T as d}from"./TextField-BsUx4QEL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Byy_L9ug.js";import"./utils-jc2ODT2b.js";import"./TextField-CoJZsvG_.js";import"./FieldError-DlpJtGZw.js";import"./Text-ak_HQ3cz.js";import"./useFocusRing-DcmUcrOG.js";import"./index--UrAPuIg.js";import"./index-DGfG4UBj.js";import"./Text-DvSGG28f.js";import"./RSPContexts-CO7jt-tM.js";import"./Form-DmPdhnXz.js";import"./useFormValidation-BTbVcgsZ.js";import"./Group-EeMWZYjE.js";import"./Input-Dw-Jb2Ds.js";import"./Hidden-D9d7GvOT.js";import"./Button-wONZVWX8.js";import"./useLabels-DDebeywZ.js";import"./useButton-Du61CN-D.js";import"./useTextField-DRp08IkZ.js";import"./useControlledState-CAI5Jvzm.js";import"./useField-B0n2WZ8X.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-FXNXBjjq.js";import"./Dialog-DT8uvRIQ.js";import"./OverlayArrow-DCJzpcgK.js";import"./useResizeObserver-D_NW3bOb.js";import"./Collection-BymyC_39.js";import"./index-VxGtioaS.js";import"./Separator-BRKNrcuP.js";import"./SelectionManager-HJCSiRY6.js";import"./useEvent-DT9xauXj.js";import"./scrollIntoView-HODBzjwx.js";import"./SelectionIndicator-DHKtaqI_.js";import"./useDescription-hq0ZkSSN.js";import"./ListKeyboardDelegate-CdOH7B6-.js";import"./PressResponder-wMnIygId.js";import"./useLocalizedStringFormatter-NLU3I9ax.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bjp-RnFa.js";import"./VisuallyHidden-BjFsTXF_.js";import"./Button-ghJL-v_J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dnn0n8g2.js";import"./createLucideIcon-DHEkehRI.js";import"./x-DmFfo8FI.js";import"./Heading-nl13gRrR.js";import"./info-BnTR3nyH.js";import"./Popover-JreuGCCi.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
