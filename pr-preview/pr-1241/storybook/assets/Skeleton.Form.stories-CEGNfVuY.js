import{j as e,l}from"./iframe-y1u__L-8.js";import{S as t}from"./Skeleton-BED2Fl8U.js";import{T as p}from"./TextField-g7luDz-h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bt2td0qT.js";import"./utils-Da8nMI6o.js";import"./FieldError-B3ZCLrVr.js";import"./Text-LCGDIWeJ.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./Text-DI19gscT.js";import"./RSPContexts-BzgKoUFY.js";import"./Form-CePOgkA4.js";import"./Group-rrSAIQbm.js";import"./Input-Duc0d2AL.js";import"./Hidden-DTarpjft.js";import"./Button-Bmc3JOkJ.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./useTextField-dwu892YK.js";import"./useControlledState-SL3CCMLy.js";import"./useField-DeQcEKMo.js";import"./TextField.module-DdivwlC8.js";import"./Label-DALoe-87.js";import"./Dialog-BiNhJBI-.js";import"./OverlayArrow-DPD6R6ym.js";import"./useResizeObserver-DxXypk8I.js";import"./Collection-BXQTs4xV.js";import"./index-DpYlLRD4.js";import"./Separator-QJJ7D4Tg.js";import"./SelectionManager-C7uieu2B.js";import"./useEvent-BdW-8kO2.js";import"./scrollIntoView-DPjPSgYg.js";import"./SelectionIndicator-Dr5bwis_.js";import"./useDescription-C868_Zy-.js";import"./ListKeyboardDelegate-CotMEVTu.js";import"./PressResponder-Ci85RzOj.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4rEa8ur.js";import"./getScrollParent-DOFnmN7L.js";import"./VisuallyHidden-vMJRuQeL.js";import"./ModalOverlay-CNEMfCp8.js";import"./x-WeprrzHp.js";import"./createLucideIcon-C_M4Trqf.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Heading-C9dBce2x.js";import"./Button-DsGM-uqm.js";import"./Button.module-BB7N-cLd.js";import"./info-D_CiA-_d.js";import"./Popover-CtuY2he5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
