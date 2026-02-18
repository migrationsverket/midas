import{j as e,l}from"./iframe-DXDVea5_.js";import{S as t}from"./Skeleton-Ce9BGC2R.js";import{T as p}from"./TextField-pX8mjF8p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DwN9Ov1c.js";import"./utils-DmTgTNnL.js";import"./FieldError-D7SZhjyZ.js";import"./Text-0AXlCnaa.js";import"./useFocusRing-CEQXzaY3.js";import"./index-BnRq08uH.js";import"./index-5yLJteXC.js";import"./Text-gvZnrrW0.js";import"./RSPContexts-BS0M9Uv7.js";import"./Form-B5273415.js";import"./useFormValidation-CD1pPQHY.js";import"./Group-BIgewlh5.js";import"./Input-CVHptXoC.js";import"./Hidden-Fdu7osLZ.js";import"./Button-B96QzwM1.js";import"./useLabels-CE1k4rx3.js";import"./useButton-fPBc3Yts.js";import"./useTextField-DozbA8P4.js";import"./useControlledState-CbOkSAeB.js";import"./useField-Dfhs4VTn.js";import"./TextField.module-Cm6797Xw.js";import"./Label-DBFtbpIU.js";import"./Dialog-nINmKPJf.js";import"./OverlayArrow-CRP3dZdS.js";import"./useResizeObserver-BNZgHg0J.js";import"./Collection-DngwyB9A.js";import"./index-mTCCUShB.js";import"./Separator-D6T5eon5.js";import"./SelectionManager-D_4gDcnl.js";import"./useEvent-JQpqaSX3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUHlcaIO.js";import"./useDescription-Cg7YGuRz.js";import"./ListKeyboardDelegate-80wPV2vO.js";import"./PressResponder-CQUrdmzO.js";import"./useLocalizedStringFormatter-CUxy-dqS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-UV0FKMox.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cz2sP0_V.js";import"./Button-gdOhQx8I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BRUhSZ3u.js";import"./createLucideIcon-De5c0UOR.js";import"./x-Dn2vW3HL.js";import"./Heading-C9UszV_P.js";import"./info--WkdfYOi.js";import"./Popover-C8U0P2YZ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
