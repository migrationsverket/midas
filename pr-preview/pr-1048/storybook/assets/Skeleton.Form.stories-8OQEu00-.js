import{j as e,l}from"./iframe-B46k8Jp-.js";import{S as t}from"./Skeleton-CxJcgT7h.js";import{T as p}from"./TextField-Bd5yBusT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ClXtP_H-.js";import"./utils-D8o13i-0.js";import"./FieldError-VsuqZb_G.js";import"./Text-BkyBG04s.js";import"./useFocusRing-DkIdhDSx.js";import"./index-BNL-dXtG.js";import"./index-D8Bk77PH.js";import"./Text-BjNkUFcW.js";import"./RSPContexts-BmEJNEMw.js";import"./Form-k6tpHfuL.js";import"./useFormValidation-Bno76pJS.js";import"./Group-DlVRjEQ-.js";import"./Input-DEb4uzI0.js";import"./Hidden-CFqGg0VD.js";import"./Button-DeinXWVf.js";import"./number-DfkVkf0F.js";import"./useLabels-DW9kmzSX.js";import"./useButton-B5s3hE2o.js";import"./useTextField-BNnhM8Yn.js";import"./useControlledState-BtITM9-4.js";import"./useField-CXG2aLYx.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-DhG94hQk.js";import"./Dialog-D7H4rQV8.js";import"./OverlayArrow-Dl60MgVx.js";import"./useResizeObserver-Br_R3Qlm.js";import"./Collection-CssY9qLp.js";import"./index-l8QBXIuE.js";import"./Separator-C84gbwpp.js";import"./SelectionManager-VtK9-ztp.js";import"./useEvent-BacgC5LG.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BgTrKU_H.js";import"./useDescription-BoBzwRVp.js";import"./ListKeyboardDelegate-DGcjUW6o.js";import"./PressResponder-D37iDMaO.js";import"./useLocalizedStringFormatter-DswGCIZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTLvTmjQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bnc_oVlh.js";import"./Button-CPDizGhA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_eLZdxP.js";import"./createLucideIcon-FljtlaXo.js";import"./x-BMIcm1JC.js";import"./Heading-D_Yq3rRt.js";import"./info-Be_yB4Cz.js";import"./Popover-9HCi7szZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
