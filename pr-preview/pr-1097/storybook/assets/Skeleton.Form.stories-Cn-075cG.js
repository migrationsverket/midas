import{j as e,l}from"./iframe-BULWFXB5.js";import{S as t}from"./Skeleton-COSm0igD.js";import{T as p}from"./TextField-DvGyUaU-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DdWh13o5.js";import"./utils-BypaegC2.js";import"./FieldError-C4OBGurV.js";import"./Text--sxnixpG.js";import"./useFocusRing-BQjr63hK.js";import"./index-Bq_n1hpv.js";import"./index-CB-9tr3l.js";import"./Text-DuTR7tq0.js";import"./RSPContexts-p83zhHcS.js";import"./Form-GTo_fkTX.js";import"./useFormValidation-BnhRbTsd.js";import"./Group-DP3oo-ZU.js";import"./Input-Dbg-Ztut.js";import"./Hidden-iwjRZV6c.js";import"./Button-DlgELQyz.js";import"./useLabels-CYw97kiM.js";import"./useButton-CjhJKsMh.js";import"./useTextField-CpWqU1eE.js";import"./useControlledState-BW5BQp7c.js";import"./useField-Da10gebg.js";import"./TextField.module-DdivwlC8.js";import"./Label-C4aZ8uIP.js";import"./Dialog-DgAdDjCQ.js";import"./OverlayArrow-D6Wvffju.js";import"./useResizeObserver-ccEFS9WT.js";import"./Collection-DBptuMbt.js";import"./index-HIf1MFds.js";import"./Separator-Dj4DC63K.js";import"./SelectionManager-Dv0G0Tlv.js";import"./useEvent-P8B_Gb_H.js";import"./scrollIntoView-DAGd27OM.js";import"./SelectionIndicator-bTKIb-VQ.js";import"./useDescription-DGIlMGbp.js";import"./ListKeyboardDelegate-CcolMQIW.js";import"./PressResponder-foLuIAeD.js";import"./useLocalizedStringFormatter-Eb1GNK_U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCQf3Ezu.js";import"./getScrollParent-BKMesRpb.js";import"./VisuallyHidden-D8sOhpgS.js";import"./Button-DuCjaiZE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5QzfwUv.js";import"./createLucideIcon-Ch4Yrygv.js";import"./x-oHK0ncrQ.js";import"./Heading-SCHH97H1.js";import"./info-BiZBGm_G.js";import"./Popover-D7OHo3Lj.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
