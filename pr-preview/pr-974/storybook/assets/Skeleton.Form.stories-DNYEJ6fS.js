import{j as e,l}from"./iframe-CnjefUD1.js";import{S as t}from"./Skeleton-Cub50Fxi.js";import{T as p}from"./TextField-oYX8MlSt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DYIj1Ibz.js";import"./utils-D37LYN_z.js";import"./TextField-DzXxzKDz.js";import"./FieldError-DESxxTZt.js";import"./Text-D8shfVXj.js";import"./useFocusRing-OpxO3A8k.js";import"./index-CEoM9FY4.js";import"./index-C0k8iZuD.js";import"./Text-DzNIEZYv.js";import"./RSPContexts-Drdjh-bQ.js";import"./Form-l56fnhcu.js";import"./useFormValidation-InwWLwT5.js";import"./Group-Bl9zcpaY.js";import"./Input-Bp4_DxRl.js";import"./Hidden-C9ODNoG7.js";import"./Button-BHfV4bzr.js";import"./useLabels-D_5lY230.js";import"./useButton-D49m94PX.js";import"./useTextField-DaAs0YZa.js";import"./useControlledState-uJdyG-cB.js";import"./useField-CgKeeixV.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cplly0S2.js";import"./Dialog-CIpig0YL.js";import"./OverlayArrow-DbET9W3E.js";import"./useResizeObserver-CIwnd7w9.js";import"./Collection-mgFKN5JO.js";import"./index-DZcN7hJE.js";import"./Separator-FG-AN-IY.js";import"./SelectionManager-gc4W3cAI.js";import"./useEvent-BX-F18G_.js";import"./scrollIntoView-B-yMeDWI.js";import"./SelectionIndicator-BVv602uL.js";import"./useDescription-BogjwYXB.js";import"./ListKeyboardDelegate-Cl2aSTuo.js";import"./PressResponder-DgMOcqAP.js";import"./useLocalizedStringFormatter-CcNy5K9j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CzOKCRh2.js";import"./VisuallyHidden-C-qiHPSr.js";import"./Button-CAOAFMpi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BV3whyUg.js";import"./createLucideIcon-CeKlyRFp.js";import"./x-CaOMZwEa.js";import"./Heading-ByEVGbfl.js";import"./info-D5ZVz8XJ.js";import"./Popover-BH3_Dewm.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
