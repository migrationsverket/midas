import{j as e,l}from"./iframe-8kNNjGPs.js";import{S as t}from"./Skeleton-zYcg_9RT.js";import{T as p}from"./TextField-Dh0rk_Wq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D-0iP4Ka.js";import"./utils-BUzQLJoB.js";import"./FieldError-DFfowcOQ.js";import"./Text-DzkFi4rT.js";import"./useFocusRing-DOlZhwGN.js";import"./index-vpPlhTCt.js";import"./index-CY9KIRXZ.js";import"./Text-CS5lJlaQ.js";import"./RSPContexts-D6QBp_i-.js";import"./Form-CzcHO5Ii.js";import"./useFormValidation-C8-qwhmM.js";import"./Group-HPSNq4Ye.js";import"./Input-5YVW18Kv.js";import"./Hidden-jzFhZXSA.js";import"./Button-BMyY3aLP.js";import"./useLabels-C_3EwP0f.js";import"./useButton-D_bc-eEZ.js";import"./useTextField-BCbURsre.js";import"./useControlledState-Cu0NDb2D.js";import"./useField-B_eNRLp8.js";import"./TextField.module-DdivwlC8.js";import"./Label-D7zDCpTo.js";import"./Dialog-CvVRrTvt.js";import"./OverlayArrow-DXevLP2U.js";import"./useResizeObserver-CHonXuNm.js";import"./Collection-B94qNX-L.js";import"./index-N81UcEwH.js";import"./Separator-BA4IsB4g.js";import"./SelectionManager-B6niOt_f.js";import"./useEvent-D90UEmSc.js";import"./scrollIntoView-Dp__3D12.js";import"./SelectionIndicator-BH01pR8s.js";import"./useDescription-CitCh8vm.js";import"./ListKeyboardDelegate-DYBXhtk7.js";import"./PressResponder-uYPDuqaU.js";import"./useLocalizedStringFormatter-gfDb4gw1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GOKmljJx.js";import"./getScrollParent-C9iJgPHi.js";import"./VisuallyHidden-BY2ZOU88.js";import"./x-DUSFswnG.js";import"./createLucideIcon-D0Msiesm.js";import"./useLocalizedStringFormatter-c_MYqT_W.js";import"./Heading-dGaAJRW4.js";import"./Button-BdMqRHYH.js";import"./Button.module-D_C6WeTN.js";import"./info-COOD2C5N.js";import"./Popover-B65mUo0d.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
