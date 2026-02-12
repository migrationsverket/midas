import{j as e,l}from"./iframe-B9EGKC1A.js";import{S as t}from"./Skeleton-D8qcWD0I.js";import{T as p}from"./TextField-DcFuQMkr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BFUKvz3e.js";import"./utils-DzN8UgTA.js";import"./TextField-uUKWJl1n.js";import"./FieldError-Cbj94XFe.js";import"./Text-BE5AMrY4.js";import"./useFocusRing-CQ5RM59H.js";import"./index--DS5PC0t.js";import"./index-DJ0aAN4x.js";import"./Text-BfUKDAVE.js";import"./RSPContexts-CVSZKZ30.js";import"./Form-C4Dl3S4i.js";import"./useFormValidation-DfmYSHhC.js";import"./Group-DFcBCdrH.js";import"./Input-DTDUuxSA.js";import"./Hidden-wAD8NsRv.js";import"./Button-DlLSg3Nk.js";import"./useLabels-Bl3P75C2.js";import"./useButton-emt7P429.js";import"./useTextField-Xv7KN3AS.js";import"./useControlledState-DY41YncH.js";import"./useField-DD9fVkS4.js";import"./TextField.module-DpzeWGpt.js";import"./Label-9kjuXUMm.js";import"./Dialog-C1zjFiIB.js";import"./OverlayArrow-CN8mZuYA.js";import"./useResizeObserver-DvzgCJ0k.js";import"./Collection-CdGAXvsM.js";import"./index-DQX0hg3j.js";import"./Separator-CQk7Ip0B.js";import"./SelectionManager-_FsQAwD6.js";import"./useEvent-a78rAipB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cjj8eMzJ.js";import"./useDescription-CEdPnwlS.js";import"./ListKeyboardDelegate-HX38iJDY.js";import"./PressResponder-M3Yf516e.js";import"./useLocalizedStringFormatter-CMmHX6mL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dkk1-PFS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CFcEMtwF.js";import"./Button-DTp360Zp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CvJyQgQK.js";import"./createLucideIcon-DF7Nxj94.js";import"./x-DnPGMz9F.js";import"./Heading-CGMzCXH3.js";import"./info-QKdZhh90.js";import"./Popover-Bf1DXh4C.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
