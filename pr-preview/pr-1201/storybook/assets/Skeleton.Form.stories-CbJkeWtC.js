import{j as e,l}from"./iframe-DTOqtRPp.js";import{S as t}from"./Skeleton-D9uTTBKh.js";import{T as p}from"./TextField-CH-T6nen.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BNnpv89N.js";import"./utils-CQz-p0Ar.js";import"./FieldError-B6hQSiJl.js";import"./Text-CIhwCa8A.js";import"./useFocusRing-jHCCwEPg.js";import"./index-ChMjBSia.js";import"./index-CEAST5hf.js";import"./Text-BaCnxKWQ.js";import"./RSPContexts-mX6bJ66o.js";import"./Form-Cjvz3og7.js";import"./Group-DP8-mIsy.js";import"./Input-hXck_yNU.js";import"./Hidden-BopZmEN9.js";import"./Button-C4kKXxPS.js";import"./useLabel-BQ4cknfe.js";import"./useLabels-w95u50Wj.js";import"./useButton-sObWSv1u.js";import"./useTextField-DblHJwAe.js";import"./useControlledState-DPZt2fnR.js";import"./useField-BbLqM0Ws.js";import"./TextField.module-DdivwlC8.js";import"./Label-BIH1lme6.js";import"./Dialog-BfxVY9xJ.js";import"./OverlayArrow-DoKRte8S.js";import"./useResizeObserver-D5u7eLvf.js";import"./Collection-cLo4pqcm.js";import"./index-UprO8IQs.js";import"./Separator-pVj1NlpJ.js";import"./SelectionManager-Cx-QXgqi.js";import"./useEvent-CLOuM3cb.js";import"./scrollIntoView-Bampsmpi.js";import"./SelectionIndicator-Dt0VxfU8.js";import"./useDescription-D7gs14Ar.js";import"./ListKeyboardDelegate-BU9aP5mI.js";import"./PressResponder-CLSsawdq.js";import"./useLocalizedStringFormatter-BUk3tKu_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CT07G7Xc.js";import"./getScrollParent-lUA4pL69.js";import"./VisuallyHidden-DwgxUjwt.js";import"./x-CrpZHpR_.js";import"./createLucideIcon-DdZg643M.js";import"./useLocalizedStringFormatter-CV8JNlf3.js";import"./Heading-6SEs4vL1.js";import"./Button-CDDDIvIj.js";import"./Button.module-BB7N-cLd.js";import"./info-CRDDNG_O.js";import"./Popover-bsOC4AYZ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
