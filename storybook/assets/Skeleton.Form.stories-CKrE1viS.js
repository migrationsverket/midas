import{j as e,l}from"./iframe-DP3vvJW_.js";import{S as t}from"./Skeleton-B719zOal.js";import{T as p}from"./TextField-DzIJPQcH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DN27ArDS.js";import"./utils-DeQRcX3I.js";import"./FieldError-Bmtmc6Ue.js";import"./Text-COCpEZrG.js";import"./useFocusRing-CT4t16Bn.js";import"./index-nwZ9FQBx.js";import"./index-B0BlSEXc.js";import"./Text-CdS1c328.js";import"./RSPContexts-BPYDVhoO.js";import"./Form-By5_t82Q.js";import"./Group-cz4Xi5QE.js";import"./Input-B9oFuB3W.js";import"./Hidden-0kVxHtHC.js";import"./Button-Cm4-ITis.js";import"./useLabel-BkKpedFS.js";import"./useLabels-DjnDZU9d.js";import"./useButton-BtKEagUR.js";import"./useTextField-D5Jyyd4s.js";import"./useControlledState-B3z4I1hz.js";import"./useField-CCf3XAps.js";import"./TextField.module-DdivwlC8.js";import"./Label-CeLH0k_s.js";import"./Dialog-BK4q9YKD.js";import"./OverlayArrow-DOOK3l1H.js";import"./useResizeObserver-CSHbB_F6.js";import"./Collection-Dad9EmoV.js";import"./index-BC044ghQ.js";import"./Separator-C4YfgHAr.js";import"./SelectionManager-boEt2-9H.js";import"./useEvent-KPlZMkuH.js";import"./scrollIntoView-C9R--iDG.js";import"./SelectionIndicator-BRvYQOhy.js";import"./useDescription-ChOnG5Gy.js";import"./ListKeyboardDelegate-B74dJT2P.js";import"./PressResponder-DVOus0r9.js";import"./useLocalizedStringFormatter-CDrhnNBu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqNaSxvm.js";import"./getScrollParent-DKQ_TpWj.js";import"./VisuallyHidden-ohAQh_Nb.js";import"./ModalOverlay-COt_YS9z.js";import"./x-DF0EZiF0.js";import"./createLucideIcon-Deup7nCX.js";import"./useLocalizedStringFormatter-FpMcBaq8.js";import"./Heading-Bj5Rj2cw.js";import"./Button-CqcFgrq0.js";import"./Button.module-BB7N-cLd.js";import"./info-DwIRHbbO.js";import"./Popover-DjWu-nMd.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
