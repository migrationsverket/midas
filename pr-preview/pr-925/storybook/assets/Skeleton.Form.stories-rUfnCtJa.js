import{j as e,l}from"./iframe-jgKyCgCs.js";import{S as t}from"./Skeleton-DB0a8xVt.js";import{T as p}from"./TextField-ipFH64Cn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-HO88lyPR.js";import"./utils-Di2SFccO.js";import"./TextField-CgP7IuTK.js";import"./FieldError-CoMeK_07.js";import"./Text-CyTszoD0.js";import"./useFocusRing-iYG5kAH5.js";import"./index-DG2WG7qx.js";import"./index-BFSl9xNw.js";import"./RSPContexts-CjB3U11V.js";import"./Form-BeyNi6dy.js";import"./useFormValidation-BSTLnn3c.js";import"./Group-BnPDIwkY.js";import"./Input-Bqn46Kdc.js";import"./Hidden-DKkXPRAB.js";import"./Button-qMrleB50.js";import"./useLabels-mdXMBDxR.js";import"./useButton-DdA7_Pcq.js";import"./useTextField-Bkc3J0x_.js";import"./useControlledState-BchtzvOb.js";import"./useField-CLEe5K9S.js";import"./TextField.module-1-_3qsJZ.js";import"./Text-B1Y_W_Ha.js";import"./Label-Bea9dcgg.js";import"./Dialog-CdAaapKg.js";import"./OverlayArrow-D_-Dtn70.js";import"./useResizeObserver-Cc2u12GN.js";import"./Collection-BVD5TKUp.js";import"./index-C0l6azJG.js";import"./Separator-DufOEZii.js";import"./SelectionManager-CnO4PmcI.js";import"./useEvent-B4KHg1tu.js";import"./scrollIntoView-DpvrOgVf.js";import"./SelectionIndicator-KAAZ95Tb.js";import"./useDescription-CFNrmai2.js";import"./ListKeyboardDelegate-Cc3loV_6.js";import"./PressResponder-BzESNd9C.js";import"./useLocalizedStringFormatter-CytWURy7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CU028xxg.js";import"./VisuallyHidden-C4wfS2L1.js";import"./useLocalizedStringFormatter-CqtWfHXd.js";import"./Button-DWs9gr3F.js";import"./Button.module-CtQ1deO8.js";import"./x-DRfTRCVq.js";import"./createLucideIcon-CWyh0Gfz.js";import"./Heading-I7geM05-.js";import"./info-CO_Xb2iZ.js";import"./Popover-7OubAj3D.js";import"./FieldError-B54BjIf5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
