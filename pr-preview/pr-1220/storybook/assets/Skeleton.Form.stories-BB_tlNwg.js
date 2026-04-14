import{j as e,l}from"./iframe-BBl_wx91.js";import{S as t}from"./Skeleton-BnHE9K_s.js";import{T as p}from"./TextField-W3Nnq-ij.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BT0IIxUU.js";import"./utils-D68juJtw.js";import"./FieldError-BhvtU_6s.js";import"./Text-D6DSOlat.js";import"./useFocusRing-BjKrvikX.js";import"./index-CTqkaM45.js";import"./index-CMA0QeJ6.js";import"./Text-B468MR_I.js";import"./RSPContexts-bPv5UHdE.js";import"./Form-CNs6Bg3-.js";import"./Group-ScVWXCB7.js";import"./Input-d2bxovJY.js";import"./Hidden-D6G0FIbn.js";import"./Button-FXCxhgQI.js";import"./useLabel-BOj_yASA.js";import"./useLabels-D9SZevKG.js";import"./useButton-EvSX0Y-8.js";import"./useTextField-CK6tdNCw.js";import"./useControlledState-D0NTyUH5.js";import"./useField-BFtz0bj4.js";import"./TextField.module-DdivwlC8.js";import"./Label-BiTv70X7.js";import"./Dialog-DqaCpo8I.js";import"./OverlayArrow-DJjDfgrZ.js";import"./useResizeObserver-DKCS7TjC.js";import"./Collection-CU5inBmJ.js";import"./index-BD391r5V.js";import"./Separator-ByY0jnmU.js";import"./SelectionManager-BGPOJJil.js";import"./useEvent-BIKoKN_5.js";import"./scrollIntoView-dyHX5qbm.js";import"./SelectionIndicator-CUdOswRI.js";import"./useDescription-0arSrRQM.js";import"./ListKeyboardDelegate-Btbe9yI3.js";import"./PressResponder-CuB0_zBy.js";import"./useLocalizedStringFormatter-RNUbG8Ti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRnqSuLj.js";import"./getScrollParent-y3ebv2is.js";import"./VisuallyHidden-DEPyp4m6.js";import"./Modal-Cl5O3PFr.js";import"./x-BiTKY_Ox.js";import"./createLucideIcon-ie2vk2qe.js";import"./useLocalizedStringFormatter-2_5hwCHH.js";import"./Heading-DDSTrqIv.js";import"./Button-PgTnRDDW.js";import"./Button.module-BB7N-cLd.js";import"./info-N68afkB-.js";import"./Popover-BarHgFC3.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
