import{j as e,l}from"./iframe-CwELpm8M.js";import{S as t}from"./Skeleton-BYCATkje.js";import{T as d}from"./TextField-qDl3gcqk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D_S8RDjG.js";import"./utils-DK9hRE35.js";import"./FieldError-BlDvxHZK.js";import"./Text-DYkkk1QK.js";import"./useFocusRing-CwasRKhc.js";import"./index-CCt8ZrIH.js";import"./index-Bygjd08t.js";import"./Text-DWmt2BS8.js";import"./RSPContexts-CZlcr2p9.js";import"./Form-DJWi7_Wz.js";import"./useFormValidation-Bl1CCT6H.js";import"./Group-CO4fFfY3.js";import"./Input-vbRqA2wc.js";import"./Hidden-D5d1b3lW.js";import"./Button-sDGd8VvU.js";import"./useLabels-I-6zbtHM.js";import"./useButton-BRLQrzoM.js";import"./useTextField-BAqGBJqr.js";import"./useControlledState-D5v3Kw8A.js";import"./useField-C5cGb6wM.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B4muwmPb.js";import"./Dialog-CL3DpwQG.js";import"./OverlayArrow-B7Ss0Hdw.js";import"./useResizeObserver-CAwEzG77.js";import"./Collection-PuC9r2Ir.js";import"./index-BHNGmdnS.js";import"./Separator-FNkj0YWe.js";import"./SelectionManager-BhEFA1ye.js";import"./useEvent-DyvSleUX.js";import"./scrollIntoView-CrUhpBNV.js";import"./SelectionIndicator-0kwibh9p.js";import"./useDescription-C9U_IM-m.js";import"./ListKeyboardDelegate-CXCDuUsS.js";import"./PressResponder-BKFrhZd5.js";import"./useLocalizedStringFormatter-B76o2d2j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DkQn_UqF.js";import"./VisuallyHidden-ChMxCmPy.js";import"./useLocalizedStringFormatter-BloNYZ0_.js";import"./Button-CUSbYPw5.js";import"./Button.module-CtQ1deO8.js";import"./x-C39WqzVu.js";import"./createLucideIcon-DWP8AM-1.js";import"./Heading-cNb5ch-4.js";import"./info-Dl46grYH.js";import"./Popover-DORfwghj.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
