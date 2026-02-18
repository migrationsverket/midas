import{j as e,l}from"./iframe-CZDKaAth.js";import{S as t}from"./Skeleton-CKI6BQRp.js";import{T as p}from"./TextField-DIgyKvT4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BYXr0Drs.js";import"./utils-DN3LZENe.js";import"./FieldError-BRB2QFta.js";import"./Text-DZbmG9za.js";import"./useFocusRing-DFIYpxaz.js";import"./index-Cb3fQwD_.js";import"./index-774Qpy2F.js";import"./Text-DWwhJwcg.js";import"./RSPContexts-CK3pP4Eo.js";import"./Form-BeBE0Ma0.js";import"./useFormValidation-BebHdBmO.js";import"./Group-BOhq-Wmn.js";import"./Input-OBngnp54.js";import"./Hidden-CKAoQIbG.js";import"./Button-BJEoY7LO.js";import"./useLabels-mgzC46gL.js";import"./useButton-BCDoEqm_.js";import"./useTextField-U0OvxAMK.js";import"./useControlledState-B_tnY1CD.js";import"./useField-j2JfYJDQ.js";import"./TextField.module-Cm6797Xw.js";import"./Label-ogqVrSLy.js";import"./Dialog-DWEbiW9v.js";import"./OverlayArrow-ECTdhdCr.js";import"./useResizeObserver-D0OGxEql.js";import"./Collection-BqVT-BRX.js";import"./index-B1y-_C0G.js";import"./Separator-DOOzjwBc.js";import"./SelectionManager-C43GYvIG.js";import"./useEvent-BfXh6nP0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D91dUD_L.js";import"./useDescription-O6FD6N3s.js";import"./ListKeyboardDelegate-Bn_PIGBR.js";import"./PressResponder-DojsPRNI.js";import"./useLocalizedStringFormatter-BoxRGhBr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkrrlGZD.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CoNqG1me.js";import"./Button-BK8SLlQI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDe0URuf.js";import"./createLucideIcon-BpgRNcfO.js";import"./x-BUanT53w.js";import"./Heading-BdTMYtmv.js";import"./info-GFFFrTNt.js";import"./Popover-B3r7d8Je.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
