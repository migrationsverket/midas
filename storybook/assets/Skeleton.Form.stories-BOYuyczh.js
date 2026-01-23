import{j as e,l}from"./iframe-d-FQpM90.js";import{S as t}from"./Skeleton-BCXzOmGJ.js";import{T as p}from"./TextField-2SqxQXSi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BjhlpKDm.js";import"./utils-CTrWZFVM.js";import"./TextField-Dh7xtOdE.js";import"./FieldError-BjEJz6Ju.js";import"./Text-BU1xEAD-.js";import"./useFocusRing-DI4CuVxJ.js";import"./index-Ccbx2rrI.js";import"./index-B0n8z5FV.js";import"./Text-CFvohxCr.js";import"./RSPContexts-36mIdLbY.js";import"./Form-OKrhR-Fj.js";import"./useFormValidation-BW7mP-sh.js";import"./Group-MbYdlPwH.js";import"./Input-W61327aJ.js";import"./Hidden-D7DESwR-.js";import"./Button-CQtK7RQv.js";import"./useLabels-DCiGcPnN.js";import"./useButton-ONss29nc.js";import"./useTextField-DHoUcAfH.js";import"./useControlledState-DT8flL-3.js";import"./useField-BNyzTKfn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BGWBVbed.js";import"./Dialog-CmoCzVsf.js";import"./OverlayArrow-VLifoHbe.js";import"./useResizeObserver-7Eq5Fixd.js";import"./Collection-CjZd06bD.js";import"./index-D54MaNBW.js";import"./Separator-BwJQIZlo.js";import"./SelectionManager-DbVn8V7O.js";import"./useEvent-CkmhN7CQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B_S-ppix.js";import"./useDescription-DkUt8NOh.js";import"./ListKeyboardDelegate-Dutj400W.js";import"./PressResponder-BxS9bkby.js";import"./useLocalizedStringFormatter-CKeA94dv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DkUKv9Cj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C749xTmY.js";import"./Button-XCmFSPiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DnVlYLjp.js";import"./createLucideIcon-Bz-p2P2k.js";import"./x-C-qeqbMv.js";import"./Heading-Cqk24h5X.js";import"./info-Duz9g_te.js";import"./Popover-CH6d259w.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
