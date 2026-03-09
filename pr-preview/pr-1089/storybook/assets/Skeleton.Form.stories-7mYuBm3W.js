import{j as e,l}from"./iframe-CcSZizfH.js";import{S as t}from"./Skeleton-BCDBckqb.js";import{T as p}from"./TextField-PGvMwlCr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-tby8faDN.js";import"./utils-C8tqShtU.js";import"./FieldError-Cco9xgcd.js";import"./Text-JtTDVkrn.js";import"./useFocusRing-BV9r26_i.js";import"./index-DDpsSQPb.js";import"./index-BLMh0pMH.js";import"./Text-CD36Kyta.js";import"./RSPContexts-Qm85TxzY.js";import"./Form-Dz6sYPKN.js";import"./useFormValidation-DLSKiRYE.js";import"./Group-BAmvIL2E.js";import"./Input-Cnc_t4IN.js";import"./Hidden-DB8IdLZR.js";import"./Button-AvjZljXr.js";import"./useLabels-B5_NTSEx.js";import"./useButton-CZz_VRDR.js";import"./useTextField-DTTUY1p9.js";import"./useControlledState-Cjje-kqG.js";import"./useField-B3CUWj3-.js";import"./TextField.module-DdivwlC8.js";import"./Label-BkuVXHgp.js";import"./Dialog-BASDs-UC.js";import"./OverlayArrow-DQ2lhK0n.js";import"./useResizeObserver-CBbmuXbv.js";import"./Collection-DE1aY-u9.js";import"./index-Ct1je5wM.js";import"./Separator--mz551Ul.js";import"./SelectionManager-CMDEmKzQ.js";import"./useEvent-DS9IArxR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEZcm3gk.js";import"./useDescription-BOky4ElQ.js";import"./ListKeyboardDelegate-ByyUBW-Y.js";import"./PressResponder-B1ShGaSV.js";import"./useLocalizedStringFormatter-VCKLQeQ3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BEETce1I.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DtOJH9kD.js";import"./Button-u3SbUu_V.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYEHmnz_.js";import"./createLucideIcon-qYjCz2jy.js";import"./x-B1Gc0sgF.js";import"./Heading-2dQov4Rq.js";import"./info-D9fE9Nux.js";import"./Popover-CrrHlO-9.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
