import{j as e,l}from"./iframe-CqwJW-jH.js";import{S as t}from"./Skeleton-AP22xpcl.js";import{T as d}from"./TextField-D4xH_y0o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-5GTDWIkh.js";import"./utils-BjAcymq3.js";import"./TextField-CbdYyszQ.js";import"./FieldError-DaAFNjv3.js";import"./Text-Bb3z90XN.js";import"./useFocusRing-s8rZZkXP.js";import"./index-CEUh_mhN.js";import"./index-Ck3K3FLZ.js";import"./Text-BM7LeZYM.js";import"./RSPContexts-B9bfeA8n.js";import"./Form-DYT1rW1R.js";import"./useFormValidation-DApjsYBJ.js";import"./Group-DNKi2FCW.js";import"./Input-Buo8fx1e.js";import"./Hidden-CAXpsngw.js";import"./Button-DMS3IEls.js";import"./useLabels-B2L_aLjR.js";import"./useButton-CQ1blk8z.js";import"./useTextField-DSQrGkEY.js";import"./useControlledState-D4ov5J9e.js";import"./useField-CZGXvIYc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CwpP5SJI.js";import"./Dialog-8xH5n5Xt.js";import"./OverlayArrow-B9TZriMe.js";import"./useResizeObserver--DYTMICB.js";import"./Collection-CJEB1uW6.js";import"./index-Dwxugr1R.js";import"./Separator-B8maWmEE.js";import"./SelectionManager-Ce6MfZqv.js";import"./useEvent-BWxOnnow.js";import"./scrollIntoView-Dk_3y03O.js";import"./SelectionIndicator-CsZ9cGqi.js";import"./useDescription-1D91jdoC.js";import"./ListKeyboardDelegate-DcuWd9Mu.js";import"./PressResponder-Cw_gk09z.js";import"./useLocalizedStringFormatter-DemKPo_M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bz9DRPyV.js";import"./VisuallyHidden-kxJd-Cll.js";import"./Button-B0Mj2CMf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2-HvklD.js";import"./createLucideIcon-CufIcqRQ.js";import"./x-B_ppbZ4G.js";import"./Heading-BNyF6dE7.js";import"./info-NDf7usl3.js";import"./Popover-CTDz1koS.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
