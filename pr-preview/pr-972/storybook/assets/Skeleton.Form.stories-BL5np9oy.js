import{j as e,l}from"./iframe-Ix5wRpaN.js";import{S as t}from"./Skeleton-Cm5F8Xfx.js";import{T as p}from"./TextField-yta1D69r.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BX2XTTVU.js";import"./utils-IjPZU40W.js";import"./TextField-BbHQS_af.js";import"./FieldError-BZLcbguk.js";import"./Text-C--26gLT.js";import"./useFocusRing-DQ3B9kj8.js";import"./index-BxboPkxI.js";import"./index-DhXNeZr5.js";import"./Text-B11VOrpZ.js";import"./RSPContexts-Ci7SZAye.js";import"./Form-MH6ftdwr.js";import"./useFormValidation-BLyauN7P.js";import"./Group-xole2TEC.js";import"./Input-nb1Yp2sX.js";import"./Hidden-CNH6e1Wd.js";import"./Button-BM7g1M5L.js";import"./useLabels-Duwc-TYD.js";import"./useButton-Bj416gmr.js";import"./useTextField-ZAQ4bdCS.js";import"./useControlledState-B8ejMBKU.js";import"./useField-B4LhRUUT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dd2bwAtp.js";import"./Dialog-BceAbOhC.js";import"./OverlayArrow-D1gyUw3-.js";import"./useResizeObserver-CacsnmkD.js";import"./Collection-DFIlvKZ4.js";import"./index-PxkW4WaJ.js";import"./Separator-D1k2Ughs.js";import"./SelectionManager-D36DbuXR.js";import"./useEvent-CMFoSART.js";import"./scrollIntoView-Dghqke3L.js";import"./SelectionIndicator-D_ktuef1.js";import"./useDescription-TqfBx-LN.js";import"./ListKeyboardDelegate-DadYOWPa.js";import"./PressResponder-Blt_lbk5.js";import"./useLocalizedStringFormatter-D-Y0AvCi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DvjOSPHQ.js";import"./VisuallyHidden-CXRQ0hU3.js";import"./Button-DyCCzjyo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DOQfTjJs.js";import"./createLucideIcon-YU44cn6f.js";import"./x-yWcNl91_.js";import"./Heading-DOXf98rg.js";import"./info-BCe1ZKXO.js";import"./Popover-EocjC30m.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
