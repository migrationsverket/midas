import{j as e,l}from"./iframe-c0lnwIw4.js";import{S as t}from"./Skeleton-BS3li2XT.js";import{T as p}from"./TextField-CoYIqM9A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CSwIpttg.js";import"./utils-CKxPVGJv.js";import"./TextField-CAd0TidZ.js";import"./FieldError-BbrhXxES.js";import"./Text-VyJc00c9.js";import"./useFocusRing-DJjkQoU4.js";import"./index-B1hzWEWI.js";import"./index-DjCW-TlU.js";import"./Text-BgxEb-sb.js";import"./RSPContexts-CZlKyDN8.js";import"./Form-Ct2ya3Wm.js";import"./useFormValidation-BTtRPMAF.js";import"./Group-nYoPNKhN.js";import"./Input-fN4nF8E5.js";import"./Hidden-BDS_rwuq.js";import"./Button-DJS_LvWc.js";import"./useLabels-Bl4EQLSq.js";import"./useButton-CVyNe4Wj.js";import"./useTextField-CC8vVeT1.js";import"./useControlledState-BiOg0pOd.js";import"./useField-rzQ8CQUh.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B49Jqfzv.js";import"./Dialog-NBef7cnK.js";import"./OverlayArrow-B5tQ5esy.js";import"./useResizeObserver-2rC7HlZU.js";import"./Collection-CTWoRlND.js";import"./index-BBJl7wpF.js";import"./Separator-FrQWq6eI.js";import"./SelectionManager-DTN516oZ.js";import"./useEvent-Dv7LfemI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BoR3Iio9.js";import"./useDescription-DRQZrp8o.js";import"./ListKeyboardDelegate-DKKEE7Yq.js";import"./PressResponder-CCt4tGQe.js";import"./useLocalizedStringFormatter-BFGWbxP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-G949kkRC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6dXGLX8.js";import"./Button-C8YLXKEl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQGhBMx9.js";import"./createLucideIcon-X-I_ue95.js";import"./x-C52Idzcm.js";import"./Heading-CcM8YS3h.js";import"./info-DeFS6_WF.js";import"./Popover-CKv23Bg8.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
