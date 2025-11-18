import{j as e,l}from"./iframe-CRoNsbQO.js";import{S as t}from"./Skeleton-CJVsWIeA.js";import{T as d}from"./TextField-SDmxKKu7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D3tkXivn.js";import"./utils-D0ifQBPW.js";import"./TextField-DXWfElYF.js";import"./FieldError-Dj5cdKz5.js";import"./Text-CAsCU6A1.js";import"./useFocusRing-DQkUJ1am.js";import"./index-DMJTdnmZ.js";import"./index-D3s2XdJN.js";import"./Text-CrBpTqh-.js";import"./RSPContexts-kFSkNoSC.js";import"./Form-BEmGWFSp.js";import"./useFormValidation-Bf5gX9Wk.js";import"./Group-BIydHkEG.js";import"./Input-D4NBKfmt.js";import"./Hidden-B-LzNKej.js";import"./Button-km7jXYEC.js";import"./useLabels-BhNZU1Aw.js";import"./useButton-QNz5bkbl.js";import"./useTextField-CLTb00Yl.js";import"./useControlledState-Dj6nb6WC.js";import"./useField-kdvN3WE1.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-NtYVQWgr.js";import"./Dialog-BEM8XTz6.js";import"./OverlayArrow-ltrji9kN.js";import"./useResizeObserver-kQhUJ21Y.js";import"./Collection-D3dByBD3.js";import"./index-N3otLqmC.js";import"./Separator-DCbqwq0a.js";import"./SelectionManager-woNpDBbA.js";import"./useEvent-aJGP5zxw.js";import"./scrollIntoView-BrB1dIDm.js";import"./SelectionIndicator-DW40YJH5.js";import"./useDescription-D4n7GTlG.js";import"./ListKeyboardDelegate-C8YuRENt.js";import"./PressResponder-Blc0Fj-n.js";import"./useLocalizedStringFormatter-DvLKTy1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsA_2YDI.js";import"./VisuallyHidden-BDiINJ_f.js";import"./useLocalizedStringFormatter-CXNQgKhO.js";import"./Button-DGaMX184.js";import"./Button.module-CtQ1deO8.js";import"./x-BOdTfTaA.js";import"./createLucideIcon-DIDS4uVQ.js";import"./Heading-BXuhk9-h.js";import"./info-CEk2Scvq.js";import"./Popover-CZGpUzdU.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
