import{j as e,l}from"./iframe-BHqTUq8s.js";import{S as t}from"./Skeleton-TmSKGKob.js";import{T as p}from"./TextField-pI0u-hZL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BXI2ioFe.js";import"./utils-Bj3EyYaW.js";import"./TextField-D4RVqe0O.js";import"./FieldError-DRRjbRt6.js";import"./Text-l0B9lw7d.js";import"./useFocusRing-BmhCrYVv.js";import"./index-Sstif_cL.js";import"./index-cPauk73w.js";import"./Text-BNa5DR9o.js";import"./RSPContexts-Ttp8fkt6.js";import"./Form-CD3uZi_W.js";import"./useFormValidation-bHmqxDjI.js";import"./Group-XBiHOVaK.js";import"./Input-UpHXPKd1.js";import"./Hidden-N1ucyMbU.js";import"./Button-CE94D4y2.js";import"./useLabels-D7M8cQNq.js";import"./useButton-DYUODf-M.js";import"./useTextField-B8TIChcC.js";import"./useControlledState-VO85oOjD.js";import"./useField-DcudRm_h.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BNjGv8mt.js";import"./Dialog-Br4zbXxI.js";import"./OverlayArrow-C_OamBiX.js";import"./useResizeObserver-cm4qtY3A.js";import"./Collection-r37viCRb.js";import"./index-DL_Rgot6.js";import"./Separator-Bk2MUFJ7.js";import"./SelectionManager-Btz1onrS.js";import"./useEvent-C1jiU2Qc.js";import"./scrollIntoView-D02Gxwgm.js";import"./SelectionIndicator-BmKRoRFc.js";import"./useDescription-SMoFRkYN.js";import"./ListKeyboardDelegate-BPp9wv8J.js";import"./PressResponder-CLCZD3PG.js";import"./useLocalizedStringFormatter-Bp2mibmh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uOpIaMSZ.js";import"./VisuallyHidden-BluHmF1Q.js";import"./Button-B5hBY_tv.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-Djq8wsFX.js";import"./createLucideIcon-ClnAiwMi.js";import"./x-D1nhCFMc.js";import"./Heading-Bk9UwyhT.js";import"./info-AlYopkhl.js";import"./Popover-B_aiaKcW.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
