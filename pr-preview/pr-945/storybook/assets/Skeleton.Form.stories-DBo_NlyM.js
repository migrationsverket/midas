import{j as e,l}from"./iframe-DbQZ1WFC.js";import{S as t}from"./Skeleton-q6qRPhzB.js";import{T as d}from"./TextField-BwgFygms.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C3N3_wuv.js";import"./utils-BkzzIoAp.js";import"./TextField-S9cA514y.js";import"./FieldError-F5fORIfF.js";import"./Text-B6b94t7A.js";import"./useFocusRing-CheS-c_q.js";import"./index-CROQ9br5.js";import"./index-sIqg8Qsv.js";import"./Text-BABzq6Ri.js";import"./RSPContexts-uaVVndL-.js";import"./Form-CjOmUg_X.js";import"./useFormValidation-BBGk5RHv.js";import"./Group-BK0q99y0.js";import"./Input-B3z3zH8r.js";import"./Hidden-B3MQk5Ru.js";import"./Button-Br70F59r.js";import"./useLabels-DRfk8RpQ.js";import"./useButton-CLtYZVZ3.js";import"./useTextField-rAAioGOB.js";import"./useControlledState-CSIEjkhQ.js";import"./useField-Bg_b1pr8.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CqSZy7O-.js";import"./Dialog-BLfx1Mo3.js";import"./OverlayArrow-Cf8ob7Mo.js";import"./useResizeObserver-BhTRiqFg.js";import"./Collection-Cw0fD4Gd.js";import"./index-rlRpQL3G.js";import"./Separator-BXwRpW8L.js";import"./SelectionManager-DTIFBbyP.js";import"./useEvent-CteodfXB.js";import"./scrollIntoView-Bbu8JQBY.js";import"./SelectionIndicator-baLTaFmW.js";import"./useDescription-B8U0ma1K.js";import"./ListKeyboardDelegate-B_exNFNu.js";import"./PressResponder-BsuJcOBg.js";import"./useLocalizedStringFormatter-w8tEygSo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CmwBXzrJ.js";import"./VisuallyHidden-CSCyYljM.js";import"./Button-B2eIdaxs.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DN-DiLNO.js";import"./createLucideIcon-C67xWClu.js";import"./x-DeC_HKTN.js";import"./Heading-CzJ3mSO-.js";import"./info-RTsCjaPr.js";import"./Popover-C9KCiWFG.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
