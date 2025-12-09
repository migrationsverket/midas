import{j as e,l}from"./iframe-gVQjPewL.js";import{S as t}from"./Skeleton-B904wXGQ.js";import{T as p}from"./TextField-EmzyOJrL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B-e1BxLk.js";import"./utils-BAvziVQG.js";import"./TextField-CdGSCmlD.js";import"./FieldError-vZRBOpgn.js";import"./Text-D78Bknv4.js";import"./useFocusRing-0gBgE6N-.js";import"./index-ndXt9Dvv.js";import"./index-Dx6mXqSO.js";import"./Text-_RjAag-Y.js";import"./RSPContexts-Da-6GabZ.js";import"./Form-DwiLB2NL.js";import"./useFormValidation-DAmYnyK_.js";import"./Group-ClUs6YJY.js";import"./Input-7gZ7Empj.js";import"./Hidden-B8SjbVEJ.js";import"./Button-omCgwxDS.js";import"./useLabels-BGa4lReX.js";import"./useButton-ChaUza1w.js";import"./useTextField-CcqmoEQl.js";import"./useControlledState-CoTiLeJu.js";import"./useField-RqV4mzqX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BUHH8Ryl.js";import"./Dialog-C0tGSwX3.js";import"./OverlayArrow-BLQYyuMb.js";import"./useResizeObserver-DtDkwZpF.js";import"./Collection-Tbuv4AUC.js";import"./index-Co4Ynxvq.js";import"./Separator-wq4hVWRB.js";import"./SelectionManager-BOfgwwz1.js";import"./useEvent-BImc7z2-.js";import"./scrollIntoView-CxAjrn7U.js";import"./SelectionIndicator-UruU7uTK.js";import"./useDescription-C3xQRC9U.js";import"./ListKeyboardDelegate-DnXYb1bk.js";import"./PressResponder-DVQzaKkb.js";import"./useLocalizedStringFormatter-CGcpvzuT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BY51pk5z.js";import"./VisuallyHidden-DHQLCAYC.js";import"./Button-DzhpmtPX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgH8u-_G.js";import"./createLucideIcon-BtoTmTD-.js";import"./x-CTE2CY3u.js";import"./Heading-CxRtLCg3.js";import"./info-BqWam_su.js";import"./Popover-DPFzvXf6.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
