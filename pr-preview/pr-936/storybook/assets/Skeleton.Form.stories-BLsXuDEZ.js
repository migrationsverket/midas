import{j as e,l}from"./iframe-Zncv4Z_q.js";import{S as t}from"./Skeleton-CMy1NWGr.js";import{T as d}from"./TextField-DrgvLqV5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CMIX0M2o.js";import"./utils-Devluy5R.js";import"./TextField-CLtoWnBD.js";import"./FieldError-CP0ao9hi.js";import"./Text-DYVl_AjA.js";import"./useFocusRing-Ca5sQuoz.js";import"./index-DOrRd1fP.js";import"./index--5vlIxZw.js";import"./Text-B8DR8Mpf.js";import"./RSPContexts-Dq6yafuR.js";import"./Form-Cf0zT_5F.js";import"./useFormValidation-DX92wwG8.js";import"./Group-BbWMwmWE.js";import"./Input-R5MeT_rw.js";import"./Hidden-mvxWno9C.js";import"./Button-C1wQYifO.js";import"./useLabels-CK9bUtvN.js";import"./useButton-0w55E1yr.js";import"./useTextField-8h7y-nzF.js";import"./useControlledState-CdK6s_X4.js";import"./useField-B9d_fflg.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-C6jNStOe.js";import"./Dialog-Dl0ioWPn.js";import"./OverlayArrow-gnLGDekA.js";import"./useResizeObserver-RiFWJPHG.js";import"./Collection-Csgw3OhG.js";import"./index-BGK7wUoJ.js";import"./Separator-coyDxxnK.js";import"./SelectionManager-BpA7Jcnr.js";import"./useEvent-CjvTY6Ub.js";import"./scrollIntoView-BSmcXjZG.js";import"./SelectionIndicator-BJFkU0Fl.js";import"./useDescription-Dwj8v6fw.js";import"./ListKeyboardDelegate-XtsVfeJx.js";import"./PressResponder-Dvma5Lus.js";import"./useLocalizedStringFormatter-CEb7hF4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-lpMGunez.js";import"./VisuallyHidden-Cr1_BNyT.js";import"./useLocalizedStringFormatter-Bozl0n8x.js";import"./Button-uct9GVFZ.js";import"./Button.module-CtQ1deO8.js";import"./x-CaE17IeY.js";import"./createLucideIcon-DfBRHJjR.js";import"./Heading-CES6z74c.js";import"./info-Br_rWx3P.js";import"./Popover-DnCAvj0X.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
