import{j as e,l}from"./iframe-SiFgIgtO.js";import{S as t}from"./Skeleton-Dw0DrA45.js";import{T as p}from"./TextField-BZDkJZ4d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B3pBOzuv.js";import"./utils-o2Exi7SE.js";import"./FieldError-BG5wZCkL.js";import"./Text-iLvdh7Qr.js";import"./useFocusRing-CvkTALop.js";import"./index-DSbiV_Yq.js";import"./index-C4sSyqsa.js";import"./Text-JI0YDy3v.js";import"./RSPContexts-DM50IAXa.js";import"./Form-DgSr2KFi.js";import"./Group-DicU3rN6.js";import"./Input-Dj69D4Wg.js";import"./Hidden-BczPpR5h.js";import"./Button-CIm-1svz.js";import"./useLabel-z_-c7Nf0.js";import"./useLabels-KeWp1COh.js";import"./useButton-B0oseYFB.js";import"./useTextField-BMD9JipH.js";import"./useControlledState-BeznzCuJ.js";import"./useField-BB23bqGH.js";import"./TextField.module-DdivwlC8.js";import"./Label-BNEmB3Xe.js";import"./Dialog-Bu_l7-7u.js";import"./OverlayArrow-BhzBKVp0.js";import"./useResizeObserver-D6ZMDOal.js";import"./Collection-BRYmqSyD.js";import"./index-Dr-4T4ok.js";import"./Separator-CUZnQx8o.js";import"./SelectionManager-B4l6dhqq.js";import"./useEvent-DvWnSKUG.js";import"./scrollIntoView-bZNhA6RN.js";import"./SelectionIndicator-DqtZUbAc.js";import"./useDescription-CU7ZHwK3.js";import"./ListKeyboardDelegate-Cal3wDht.js";import"./PressResponder-DyUOWdpm.js";import"./useLocalizedStringFormatter-BSIB72Kk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQnJNJ3d.js";import"./getScrollParent-BdyvFVIS.js";import"./VisuallyHidden-DrRKsR6_.js";import"./ModalOverlay-DJW7SImS.js";import"./x-ijd7sG5_.js";import"./createLucideIcon-jPk5qvos.js";import"./useLocalizedStringFormatter-CsnzAfll.js";import"./Heading-CsY9bpyS.js";import"./Button-DBG0-mK7.js";import"./Button.module-BB7N-cLd.js";import"./info-CP20CBG7.js";import"./Popover-C8oeG9U6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
