import{j as e,l}from"./iframe-I-T_H5J_.js";import{S as t}from"./Skeleton-BEloGc9d.js";import{T as p}from"./TextField-BDL2b89R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B_xXIDTU.js";import"./utils-JproU_nw.js";import"./FieldError-BblABd-b.js";import"./Text-BJ8cMGkE.js";import"./useFocusRing-B9IqJ9Mt.js";import"./index-CYZt27Wv.js";import"./index-B8pVpPqH.js";import"./Text-DpvJioBU.js";import"./RSPContexts-CMvVC2hR.js";import"./Form-DVDLEN1p.js";import"./Group-5DmSgEKB.js";import"./Input-DS38Pnqo.js";import"./Hidden-BMWDbIRC.js";import"./Button-C5239-Pe.js";import"./useLabel-QpkB0RGM.js";import"./useLabels-DPpJmx2A.js";import"./useButton-Bv3qVFH-.js";import"./useTextField-B6Tguhnl.js";import"./useControlledState-B5eahPl_.js";import"./useField-BWv-prfB.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bv4D4UFH.js";import"./Dialog-DO31L9V4.js";import"./OverlayArrow-MKdai0bb.js";import"./useResizeObserver-_aDiCQBF.js";import"./Collection-CTpshU-_.js";import"./index-DZE7NYqg.js";import"./Separator-BV0HI8nD.js";import"./SelectionManager-CrbLoHvI.js";import"./useEvent-DneLHAtr.js";import"./scrollIntoView-BTHLtI1M.js";import"./SelectionIndicator-6XoyzhMl.js";import"./useDescription-BbwaY706.js";import"./ListKeyboardDelegate-BHf0MnFT.js";import"./PressResponder-CnAyI_ea.js";import"./useLocalizedStringFormatter-BsAjlIoO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CsRXW8Qt.js";import"./getScrollParent-9iE4PQDL.js";import"./VisuallyHidden-ImRnGBY4.js";import"./x-DtRGZRlW.js";import"./createLucideIcon-BVI9IRTp.js";import"./useLocalizedStringFormatter-B0a8KkB4.js";import"./Heading-9Wui4UDu.js";import"./Button-B83Ld0RX.js";import"./Button.module-BB7N-cLd.js";import"./info-D19U6Lvt.js";import"./Popover-CsZMBTpq.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
