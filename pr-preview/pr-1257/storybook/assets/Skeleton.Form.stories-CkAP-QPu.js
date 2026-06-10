import{j as e,l}from"./iframe-DKbnbcYA.js";import{S as t}from"./Skeleton-BYBE-wfH.js";import{T as p}from"./TextField-LB7_WqEi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CharJ0cF.js";import"./utils-2X7WrewA.js";import"./FieldError-BRRl8Jd8.js";import"./Text-2zkyeVit.js";import"./useFocusRing-BgkQ1tOe.js";import"./index-lY0kbfn5.js";import"./index-B5M4WY2m.js";import"./Text-8emuzLV6.js";import"./RSPContexts-m9rKlbSF.js";import"./Form-CpYIQC_j.js";import"./Group-x9eLwqj7.js";import"./Input-BSVfkpjz.js";import"./Hidden-DVrzkHs4.js";import"./Button-B9rMpOVw.js";import"./useLabel-BTu-VYKR.js";import"./useLabels-4lND4b_p.js";import"./useButton-Zx4CPHJq.js";import"./useTextField-C-4R5JUq.js";import"./useControlledState-EM6fJcGZ.js";import"./useField-Dw29PnIv.js";import"./TextField.module-DdivwlC8.js";import"./Label-D3yit95t.js";import"./Dialog-BjtcVnpF.js";import"./OverlayArrow-BHlBeDJv.js";import"./useResizeObserver-X2dsQnCC.js";import"./Collection-Bklm0P2k.js";import"./index-C-qqVET8.js";import"./Separator-DiF15gQj.js";import"./SelectionManager-JkraDGws.js";import"./useEvent-DNJmfabJ.js";import"./scrollIntoView-CnVxFKeo.js";import"./SelectionIndicator-Bhd05IYQ.js";import"./useDescription-W2O0P_pV.js";import"./ListKeyboardDelegate-C8JVTZZ4.js";import"./PressResponder-BkBtoLKf.js";import"./useLocalizedStringFormatter-CpOP5_I5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfD0IPvH.js";import"./getScrollParent-PmVOkSW6.js";import"./VisuallyHidden-BcPnQgXd.js";import"./ModalOverlay-CWhyW6Im.js";import"./x-BxlX_nCp.js";import"./createLucideIcon-CRlO1Apy.js";import"./useLocalizedStringFormatter-CoGMLhd_.js";import"./Heading-DH99ugyJ.js";import"./Button-CxkBGpkE.js";import"./Button.module-BB7N-cLd.js";import"./info-iQggv-SS.js";import"./Popover-B4eoc0rp.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
