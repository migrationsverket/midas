import{j as e,l}from"./iframe-DEr5LyL9.js";import{S as t}from"./Skeleton-689GMyXQ.js";import{T as p}from"./TextField-IviCG-z3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BeqOoiYl.js";import"./utils-DwL8W83g.js";import"./FieldError-BdNVYVS1.js";import"./Text-DAPFiM_T.js";import"./useFocusRing-DOTEBX87.js";import"./index-DExjCakj.js";import"./index-Nw0I9830.js";import"./Text-BfZUAwgB.js";import"./RSPContexts-Bn2caes7.js";import"./Form-BlMDnRx9.js";import"./useFormValidation-DZc-MdDk.js";import"./Group-DDGSI2QY.js";import"./Input-DDjxBBD6.js";import"./Hidden-NLnfrHdz.js";import"./Button-CBWCdlEK.js";import"./useLabels-h5iBdAs1.js";import"./useButton-CVEcfEQG.js";import"./useTextField-BSmJX6AI.js";import"./useControlledState-h_6fbbYP.js";import"./useField-DCYWYdaM.js";import"./TextField.module-DdivwlC8.js";import"./Label-BmdasFFR.js";import"./Dialog-ZjhlH8TX.js";import"./OverlayArrow-BzVCgUDi.js";import"./useResizeObserver-B5Vgs11W.js";import"./Collection-wSsMWtTf.js";import"./index-WpBjSl2g.js";import"./Separator-DxFfrhUf.js";import"./SelectionManager-DLCRf5Wk.js";import"./useEvent-AcHiQLhX.js";import"./scrollIntoView-CKlviFsz.js";import"./SelectionIndicator-DbLggP3S.js";import"./useDescription-DigpKdML.js";import"./ListKeyboardDelegate-WHrWx2cP.js";import"./PressResponder-BARi5h15.js";import"./useLocalizedStringFormatter-7tBmCqt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RzHdbGF3.js";import"./getScrollParent-Cud-L_Kq.js";import"./VisuallyHidden-CwaOa1m7.js";import"./Button-BTVP098H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-55D9ueFU.js";import"./createLucideIcon-C7-8qsjG.js";import"./x-HYwHFMJh.js";import"./Heading-DPOfFdui.js";import"./info-EDrQ4EUZ.js";import"./Popover-BBpOhvfS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
