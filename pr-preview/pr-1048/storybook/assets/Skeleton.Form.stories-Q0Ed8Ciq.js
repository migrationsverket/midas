import{j as e,l}from"./iframe-Bces5ReF.js";import{S as t}from"./Skeleton-DSZaphyf.js";import{T as p}from"./TextField-Bm_xNmLt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bi1H_olz.js";import"./utils-KBwZHkAa.js";import"./useObjectRef-Cb_4IuYU.js";import"./FieldError-CoA192lt.js";import"./Text-BbgSNpRI.js";import"./useFocusRing-BbIVxAS-.js";import"./useFocusable-CCLwmwwj.js";import"./index-C3ONQ0hZ.js";import"./index-mmvsT4Yz.js";import"./Text-S43pSr6l.js";import"./RSPContexts-KQSALUVI.js";import"./Form-DgaYtgkc.js";import"./useFormValidation-DKvuYSK2.js";import"./Group-Bwq3o5kk.js";import"./Input-DvLxCnUH.js";import"./Hidden-HEj2_VP4.js";import"./Button-sx3D740K.js";import"./number-DfkVkf0F.js";import"./useLabels-it0H97ln.js";import"./useButton-CFUJeSeD.js";import"./useTextField-Dz3HtiuY.js";import"./useControlledState-DzHlTDkP.js";import"./useField-BnZ2w5LO.js";import"./TextField.module-DdivwlC8.js";import"./Label-ZkIPGYUs.js";import"./Dialog-CEJryXss.js";import"./OverlayArrow-CJaqSD8r.js";import"./useResizeObserver-C8rFwvOL.js";import"./Collection-DTPpeXjN.js";import"./CollectionBuilder-DYUOvLcK.js";import"./index-eELsyXIA.js";import"./Separator-CZsB5Jtz.js";import"./SelectionManager-DnJZ1f0u.js";import"./useEvent-r8dTAAd3.js";import"./scrollIntoView-rsEwujUN.js";import"./SelectionIndicator-R-3rkI9A.js";import"./useDescription-BDbgTMgy.js";import"./ListKeyboardDelegate-CZk_8FT1.js";import"./PressResponder-CzDZ9nEt.js";import"./useLocalizedStringFormatter-DvTA5UTi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzM05P-.js";import"./getScrollParent-CNLff4rP.js";import"./VisuallyHidden-CplwDL_w.js";import"./Button-CYRhppib.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bezv0VbS.js";import"./createLucideIcon-B7hgpfhf.js";import"./x-DUS_Kj0p.js";import"./Heading-f7FHASBd.js";import"./info-D1apA-sK.js";import"./Popover-Cp2wtLc3.js";const xe={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,fe as __namedExportsOrder,xe as default};
