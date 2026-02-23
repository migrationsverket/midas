import{j as e,l}from"./iframe-C_UZb0UH.js";import{S as t}from"./Skeleton-C-DVEQ1e.js";import{T as p}from"./TextField-1ZEBzPpb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BuwCJWDm.js";import"./utils-Dtmguja_.js";import"./FieldError-D3J2lHbG.js";import"./Text-AP-S6Ty1.js";import"./useFocusRing-wq3XW6c-.js";import"./index-wR3qBpGD.js";import"./index-Fx4upXIZ.js";import"./Text-CjhPc_0v.js";import"./RSPContexts-B5lp79pf.js";import"./Form-CYUJIrdr.js";import"./useFormValidation-CTOGsIgy.js";import"./Group-C2L9hKQg.js";import"./Input-2CaRNz9p.js";import"./Hidden-BKqaL7Fi.js";import"./Button-eLbcham7.js";import"./useLabels-BiEGdf9t.js";import"./useButton-WC7GcBqe.js";import"./useTextField-DttPoMhe.js";import"./useControlledState-BekthKbk.js";import"./useField-5YztNEa7.js";import"./TextField.module-Dhscz2t0.js";import"./Label-CkNt0W_g.js";import"./Dialog-BmWKRA9T.js";import"./OverlayArrow-DRDTdGBd.js";import"./useResizeObserver-R3UE-3dT.js";import"./Collection-00eAIKUn.js";import"./index-cLCQ2pnu.js";import"./Separator-C4nS5Ig_.js";import"./SelectionManager-DJjA2lCL.js";import"./useEvent-CZxhJAPd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DOZU75KG.js";import"./useDescription-D2LaqLM1.js";import"./ListKeyboardDelegate-BI-VV3g9.js";import"./PressResponder-Dw94lZ8y.js";import"./useLocalizedStringFormatter-DsjdFjoX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhGadu9e.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--mkN2Z69.js";import"./Button-BjJn1zqZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZJYQAWH.js";import"./createLucideIcon-BfmkpqwG.js";import"./x-BVuIxQT0.js";import"./Heading-BTY4QTZO.js";import"./info-CEzWrBrG.js";import"./Popover-CYNzPQ3Q.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
