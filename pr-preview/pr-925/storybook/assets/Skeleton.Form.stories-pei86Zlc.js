import{j as e,l}from"./iframe-CcFj61hi.js";import{S as t}from"./Skeleton-DNFNNiI4.js";import{T as d}from"./TextField-DA6bjUgF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B-LgiNHH.js";import"./utils-CsHqKOjh.js";import"./TextField-DOdXryw8.js";import"./FieldError-BbKWR-P3.js";import"./Text-CVt-e_rr.js";import"./useFocusRing-tven7JmU.js";import"./index-DGWwOE3x.js";import"./index-BNjYms5q.js";import"./Text-BqVsEr9P.js";import"./RSPContexts-DH4UiXRZ.js";import"./Form-CQm0xKb3.js";import"./useFormValidation-BUtm3X4O.js";import"./Group-w_3g3GD7.js";import"./Input-DVUHA9Vu.js";import"./Hidden-meMQGPd4.js";import"./Button-B1O3Yrk6.js";import"./useLabels-BR7Zi-G6.js";import"./useButton-6rhH5hF9.js";import"./useTextField-BWHHw0wx.js";import"./useControlledState-CS68R5UU.js";import"./useField-oSSv-SCK.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CIxdkuaZ.js";import"./Dialog-D4CFCaRg.js";import"./OverlayArrow-DuLm_AeX.js";import"./useResizeObserver-elSf9-E4.js";import"./Collection-TTOn1B46.js";import"./index-DU0eoAI4.js";import"./Separator-DCFolOPa.js";import"./SelectionManager-CBeYtRWI.js";import"./useEvent-z1bYF1OT.js";import"./scrollIntoView-BAiEh8sy.js";import"./SelectionIndicator-CsFMiP1E.js";import"./useDescription-DcDlBbEU.js";import"./ListKeyboardDelegate-CP17FQUZ.js";import"./PressResponder-CcYMnq3L.js";import"./useLocalizedStringFormatter-Ciz81QXa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-2W37j7Q_.js";import"./VisuallyHidden-5KJu7kOB.js";import"./Button-DCIYWzuo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-MF-hbWH5.js";import"./createLucideIcon-pE-zvx_b.js";import"./x-Pt19ZRNN.js";import"./Heading-BCcfcevL.js";import"./info-CFlLveLQ.js";import"./Popover-D9kDRdmu.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
