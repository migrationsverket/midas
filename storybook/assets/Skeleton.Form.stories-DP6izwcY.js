import{j as e,l}from"./iframe-cBPiYa1j.js";import{S as t}from"./Skeleton-BQ1Xoh38.js";import{T as d}from"./TextField-D1Sx0jsA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BxCOlQNE.js";import"./utils-BsI1IeI-.js";import"./TextField-DnKwHG_z.js";import"./FieldError-BxRdx_yQ.js";import"./Text-C9cmeUrC.js";import"./useFocusRing-C3NoufTF.js";import"./index-D3tkVpzv.js";import"./index-DfcTzlFO.js";import"./Text-D5vIYSns.js";import"./RSPContexts-BVzQNN1V.js";import"./Form-SVjqc9Qj.js";import"./useFormValidation-CjoRhxJO.js";import"./Group-B5w7qtGV.js";import"./Input-tvIXGXmO.js";import"./Hidden-D604MEhG.js";import"./Button-DqAr_Q3f.js";import"./useLabels-Ca7v6l-q.js";import"./useButton-DElLBHjA.js";import"./useTextField-DxtzIIET.js";import"./useControlledState-CfXtp8hs.js";import"./useField-7H-zKfh5.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BfoWM_JL.js";import"./Dialog-Cj8ki1Hg.js";import"./OverlayArrow-Dqlp4uUl.js";import"./useResizeObserver-B_WyBlk8.js";import"./Collection-Dn6tIavS.js";import"./index-CPvCTsGB.js";import"./Separator-DBIn7cNY.js";import"./SelectionManager-C7e3B10G.js";import"./useEvent-BPy_avrj.js";import"./scrollIntoView-B9C68jgb.js";import"./SelectionIndicator-DjVvrJs-.js";import"./useDescription-BdbzbGud.js";import"./ListKeyboardDelegate-B2duwmnq.js";import"./PressResponder-CDJA5YO8.js";import"./useLocalizedStringFormatter-DCwlqfNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BNm3_zhV.js";import"./VisuallyHidden-YR2KbVd6.js";import"./Button-DLE1YCfG.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BmqhCjnA.js";import"./createLucideIcon-Ft43kjRZ.js";import"./x-CBM_MZZz.js";import"./Heading-DGMv4Qcq.js";import"./info-BBOV1Q_L.js";import"./Popover-vuScbU9k.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
