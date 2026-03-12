import{j as e,l}from"./iframe-DkQ7cM23.js";import{S as t}from"./Skeleton-BFGdBZwz.js";import{T as p}from"./TextField-D0pWE7MM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DL_JGANi.js";import"./utils-DP89l6Mv.js";import"./FieldError-BqQ6odJM.js";import"./Text-mqMgoxWe.js";import"./useFocusRing-J1vPyQty.js";import"./index-7VbimUOa.js";import"./index-Cm61l895.js";import"./Text-DsOkgq9m.js";import"./RSPContexts-9PmMy4Xi.js";import"./Form-DzbNYJh9.js";import"./useFormValidation-Dq7frMih.js";import"./Group-BXvkB0rz.js";import"./Input-BVO-wqcD.js";import"./Hidden-CcF5EX2e.js";import"./Button-Bq2iEg50.js";import"./useLabels-DSl379fi.js";import"./useButton-BmC4cDXT.js";import"./useTextField-BJBXdHfK.js";import"./useControlledState-nr5IMB9l.js";import"./useField-m7hj4lqE.js";import"./TextField.module-DdivwlC8.js";import"./Label-CSlXMnDA.js";import"./Dialog-BcSjotPK.js";import"./OverlayArrow-DHPm4C8s.js";import"./useResizeObserver-BSQ8BgXf.js";import"./Collection-Vv4nNf0n.js";import"./index-CloDF_gA.js";import"./Separator-BITAZruS.js";import"./SelectionManager-5ZpvjCOe.js";import"./useEvent-grDVPgOX.js";import"./scrollIntoView-DGwr96lc.js";import"./SelectionIndicator-DvMKftvJ.js";import"./useDescription-D6gfKm05.js";import"./ListKeyboardDelegate-De3HO-6t.js";import"./PressResponder-KzePx3gP.js";import"./useLocalizedStringFormatter-BMIv7Yjf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rGqN7s8e.js";import"./getScrollParent-C8j_9fYa.js";import"./VisuallyHidden-DiP98uOJ.js";import"./x-CkWkpKml.js";import"./createLucideIcon-DkseUJ3l.js";import"./useLocalizedStringFormatter-C95F42C0.js";import"./Heading-ByI2JxVS.js";import"./Button-rAjKvaV6.js";import"./Button.module-D_C6WeTN.js";import"./info-DnvQkoqt.js";import"./Popover-D-McFHBe.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
