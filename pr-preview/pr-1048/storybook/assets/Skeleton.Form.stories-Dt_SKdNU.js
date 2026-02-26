import{j as e,l}from"./iframe-C1J9c0Wx.js";import{S as t}from"./Skeleton-c22YGbST.js";import{T as p}from"./TextField-Dn_ktvP8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DN5QbLh5.js";import"./utils-D-Kximqc.js";import"./useObjectRef-DApwTN-e.js";import"./FieldError-C498Gxi4.js";import"./Text-CWSZibPG.js";import"./useFocusRing-DnL4kdEi.js";import"./useFocusable-DpJQLcZ9.js";import"./index-DyM7miu3.js";import"./index-D1okWCVE.js";import"./Text-LXNgL2Cy.js";import"./RSPContexts-C4ZFOry7.js";import"./Form-C5GBig5g.js";import"./useFormValidation-82wx0tZJ.js";import"./Group-45AH3raS.js";import"./Input-Bk-qfFVm.js";import"./Hidden-D_HMLWkk.js";import"./Button-sRVT8Zzh.js";import"./useLabels-BM_CzPRL.js";import"./useButton-D6tu_qKw.js";import"./useTextField-DCNReJvn.js";import"./useControlledState-CSlbmBUy.js";import"./useField-BlvEMn1u.js";import"./TextField.module-DdivwlC8.js";import"./Label-VqOUjmv5.js";import"./Dialog-DCOxCW7f.js";import"./OverlayArrow-DhHbKT6b.js";import"./useResizeObserver-C1RxLv82.js";import"./Collection-ChhYsuGg.js";import"./CollectionBuilder-CdQw54P_.js";import"./index-Ceu5-9yq.js";import"./Separator-CNN7mDmq.js";import"./SelectionManager-DBwoGUos.js";import"./useEvent-7oArEk9L.js";import"./scrollIntoView-2xpKk0tJ.js";import"./SelectionIndicator-BeIhecxz.js";import"./useDescription-Dqtl0cRO.js";import"./ListKeyboardDelegate-DDMkrUyD.js";import"./PressResponder-d7vDQOGh.js";import"./useLocalizedStringFormatter-DwMRkuit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BNiSWRWY.js";import"./getScrollParent-D4l3WZmm.js";import"./VisuallyHidden-DFJgjeMD.js";import"./Button-oYildcGz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-xPxlWEwQ.js";import"./createLucideIcon-CAqL_OOk.js";import"./x-CwCncDXT.js";import"./Heading-Di6-X6Hh.js";import"./info-Cxoi2w8C.js";import"./Popover-BvoAKwra.js";const ue={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const xe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,xe as __namedExportsOrder,ue as default};
