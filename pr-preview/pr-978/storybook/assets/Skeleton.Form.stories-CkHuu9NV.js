import{j as e,l}from"./iframe-CGCgjv9i.js";import{S as t}from"./Skeleton-Bnz-XvE6.js";import{T as p}from"./TextField-CG4IY2EB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B1Bvogew.js";import"./utils-Bt4ULn4D.js";import"./TextField-DB2yurl9.js";import"./FieldError-CYmT_Yg6.js";import"./Text-B5CcvPLj.js";import"./useFocusRing-D80GeW3r.js";import"./index-C0YjKPb6.js";import"./index-Dk2Lms7e.js";import"./Text-D5VsxdHk.js";import"./RSPContexts-C8DbGMi8.js";import"./Form-C7bp-BQR.js";import"./useFormValidation-DOK9HYJ-.js";import"./Group-Xm8xeWOW.js";import"./Input-BsJ_oCah.js";import"./Hidden-FwR3hI3q.js";import"./Button-DDw9f5Fw.js";import"./useLabels-C5YCHpdk.js";import"./useButton-CcaDOEc-.js";import"./useTextField-BF9KU1Je.js";import"./useControlledState-A_vx62at.js";import"./useField-CDL7KZ6F.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-pZ0erGgL.js";import"./Dialog-w6fyAZYs.js";import"./OverlayArrow-C1mYbCIQ.js";import"./useResizeObserver-D2p3HPEZ.js";import"./Collection-CbC4cqU2.js";import"./index-Bq5okO3u.js";import"./Separator-C28i74qJ.js";import"./SelectionManager-7gEgdiXz.js";import"./useEvent-CdkR1s3U.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcUdI5Qy.js";import"./useDescription-CSIGPEAb.js";import"./ListKeyboardDelegate-BWF_OYPr.js";import"./PressResponder-eqCzhHuh.js";import"./useLocalizedStringFormatter-Bxh_j9iW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lvx0w_LZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DbgfyS61.js";import"./Button-Bq4ZJtTu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9GGJqnK.js";import"./createLucideIcon-BDDJ7gBf.js";import"./x-D7cLG3R_.js";import"./Heading-wlIfGA30.js";import"./info-xzYdJSzV.js";import"./Popover-B6DtiT0c.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
