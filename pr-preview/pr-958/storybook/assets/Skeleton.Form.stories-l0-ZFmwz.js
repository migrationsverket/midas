import{j as e,l}from"./iframe-DjkzDfUJ.js";import{S as t}from"./Skeleton-BRk-rCJl.js";import{T as d}from"./TextField-Bz24U0jc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-7t1EpHY2.js";import"./utils-vexqYITr.js";import"./TextField-DviffmlQ.js";import"./FieldError-yYdtsfGD.js";import"./Text-C5izD3Og.js";import"./useFocusRing-CESrVCRK.js";import"./index-Ga__SQ6G.js";import"./index-6ad1L8SU.js";import"./Text-DYUCIzkR.js";import"./RSPContexts-DZRurk6q.js";import"./Form-CKvRRa6u.js";import"./useFormValidation-Dd4D9ZVC.js";import"./Group-uskhD9yv.js";import"./Input-FzO8OWZy.js";import"./Hidden-XVXMf98p.js";import"./Button--BMsMuMT.js";import"./useLabels-B6BslA1N.js";import"./useButton-Db0mva43.js";import"./useTextField-BQfhqErt.js";import"./useControlledState-CN1_NNkw.js";import"./useField-BPDKOCFg.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-O3OfycCV.js";import"./Dialog-DaO1aDj4.js";import"./OverlayArrow-DWQsyL7O.js";import"./useResizeObserver-pHY6Jo-g.js";import"./Collection-Br4wP53H.js";import"./index-D-96uQ6D.js";import"./Separator-CK-d6Myg.js";import"./SelectionManager-CM2Q0F0f.js";import"./useEvent-YZt64TSK.js";import"./scrollIntoView-I26RsPsF.js";import"./SelectionIndicator-B7oXjDtR.js";import"./useDescription-CU_RGk8G.js";import"./ListKeyboardDelegate-Bk3F2Cyw.js";import"./PressResponder-ChuOYj5J.js";import"./useLocalizedStringFormatter-BW-uk-lr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-g7ixsLHw.js";import"./VisuallyHidden-DkXgx9RF.js";import"./Button-BR2m8ec0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc-I9I7t.js";import"./createLucideIcon-BK-M30E7.js";import"./x-D6S4l13V.js";import"./Heading-_2TmmWg6.js";import"./info-3U-aRSmI.js";import"./Popover-3GlOEdgY.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
