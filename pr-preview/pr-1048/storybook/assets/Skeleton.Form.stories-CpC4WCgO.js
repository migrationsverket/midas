import{j as e,l}from"./iframe-2x8aApk-.js";import{S as t}from"./Skeleton-C1PnjE9w.js";import{T as p}from"./TextField-CxRC2pXn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BcClBs2Z.js";import"./utils-DVWHc22k.js";import"./FieldError-CN7fikOS.js";import"./Text-GWj5McON.js";import"./useFocusRing-D1LuvRFA.js";import"./index-BnRZASBM.js";import"./index-EU_EHTku.js";import"./Text-CjH8oWQJ.js";import"./RSPContexts-DzOvT6u7.js";import"./Form-DkZdQKDH.js";import"./useFormValidation-zPxSqPZf.js";import"./Group-B7ATakTN.js";import"./Input-1Wv94CZy.js";import"./Hidden-T6GEIuO8.js";import"./Button-BEnUWui9.js";import"./useLabels-DUzYQyy8.js";import"./useButton-N1FUyUpJ.js";import"./useTextField-DNgekNgo.js";import"./useControlledState-CaZtGL-H.js";import"./useField-C-cvn-nF.js";import"./TextField.module-DdivwlC8.js";import"./Label-BBnqHPmU.js";import"./Dialog-DVk-mIpB.js";import"./OverlayArrow-B3z-Jkd2.js";import"./useResizeObserver-By4PDAbx.js";import"./Collection-CG88hFGy.js";import"./index-CXXMt1w9.js";import"./Separator-C3K41wy0.js";import"./SelectionManager-DB2E2h7r.js";import"./useEvent-BZht9i95.js";import"./scrollIntoView-B1ez5sy3.js";import"./SelectionIndicator-D9jeLipo.js";import"./useDescription-CX4-cmgs.js";import"./ListKeyboardDelegate-CB5h3evo.js";import"./PressResponder-B00RKaI4.js";import"./useLocalizedStringFormatter-B7eTh4qi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQGXqWQI.js";import"./getScrollParent-C1eon5Rc.js";import"./VisuallyHidden-B5MaFoQn.js";import"./Button-BZEsodJe.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-EKnKibO9.js";import"./createLucideIcon-D_YgEBTV.js";import"./x-DL-KyPr6.js";import"./Heading-DeTn1u7-.js";import"./info-Bs-Qy5lE.js";import"./Popover-Dh8NW73e.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
