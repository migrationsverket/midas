import{j as e,l}from"./iframe-oXsIpbMB.js";import{S as t}from"./Skeleton-Dq-rHpLi.js";import{T as d}from"./TextField-O6b3gaxP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-rwoW7_vq.js";import"./utils-B-O4b79N.js";import"./TextField-Bbr_gOr6.js";import"./FieldError-BTJfSvTO.js";import"./Text-D73taSIa.js";import"./useFocusRing-BW9P1ZR5.js";import"./index-BxWuJyFF.js";import"./index-CmStSKjz.js";import"./Text-BH5S53Oz.js";import"./RSPContexts-DPtGg_n2.js";import"./Form-CS5Z_Mxd.js";import"./useFormValidation-CniWOrWp.js";import"./Group-CxyhQwlR.js";import"./Input-DjiZhyXf.js";import"./Hidden-WXuZRkqT.js";import"./Button-8cpKG8rd.js";import"./useLabels-CoOIyE91.js";import"./useButton-Dsjjlw5w.js";import"./useTextField-BwLFPuR7.js";import"./useControlledState-BKAJ8-LK.js";import"./useField-j07Ff-ne.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DPZhH02J.js";import"./Dialog-BtOohgAq.js";import"./OverlayArrow-D9IKXYjn.js";import"./useResizeObserver-BC4x8Eqq.js";import"./Collection-6fmVf6JF.js";import"./index-DgznWqkk.js";import"./Separator-DHUONKab.js";import"./SelectionManager-AtUstcI6.js";import"./useEvent-DKd880lO.js";import"./scrollIntoView-q6sbjqLE.js";import"./SelectionIndicator-BbEcrIpr.js";import"./useDescription-BTh-6Bla.js";import"./ListKeyboardDelegate-T2pqNXVq.js";import"./PressResponder-BU_onAJV.js";import"./useLocalizedStringFormatter-BAW-PBtE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-L4py_Hz8.js";import"./VisuallyHidden-D-5RikPd.js";import"./Button-BuFobGoF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-IfFIdOWG.js";import"./createLucideIcon-CifL85wv.js";import"./x-B0uyzYCV.js";import"./Heading-B756-Qse.js";import"./info-Djg2LurB.js";import"./Popover-B8h4hkIm.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
