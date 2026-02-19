import{j as e,l}from"./iframe-Bh3VWgCW.js";import{S as t}from"./Skeleton-B-6Z6WxQ.js";import{T as p}from"./TextField-VwWfjX69.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BYDR5ZHf.js";import"./utils-BIL3a6ib.js";import"./FieldError-DE6lH482.js";import"./Text-GPAWAUKl.js";import"./useFocusRing-0AZg0skd.js";import"./index-N6QzfeSJ.js";import"./index-CqYODit3.js";import"./Text-rR-9MpjH.js";import"./RSPContexts-eTOZoUex.js";import"./Form-UctQMwsb.js";import"./useFormValidation-Cv_mqAb6.js";import"./Group-D3a93f_q.js";import"./Input-DBfqF-V_.js";import"./Hidden-471kEs7D.js";import"./Button-DwNgNAHT.js";import"./useLabels-db71Wl0y.js";import"./useButton-DQTLzfh-.js";import"./useTextField-CEnwoLc0.js";import"./useControlledState-CEpZVo0k.js";import"./useField-Bsmsq1ab.js";import"./TextField.module-DBQiRr7K.js";import"./Label-DsvDFsCJ.js";import"./Dialog-CXXpvEEU.js";import"./OverlayArrow-t8hYx5es.js";import"./useResizeObserver-E4_XZ6ad.js";import"./Collection-DR-2fi6L.js";import"./index-DwcmB1sB.js";import"./Separator-DfpjYphJ.js";import"./SelectionManager-Np_WmImU.js";import"./useEvent-C3iLfYya.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BCO4Ph4I.js";import"./useDescription-B6uYpxUN.js";import"./ListKeyboardDelegate-eTZICZ-y.js";import"./PressResponder-DnYcsN93.js";import"./useLocalizedStringFormatter-Ca1HzZqp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dat9OfKK.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYkApvtM.js";import"./Button-DI241M-e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRrSbQCy.js";import"./createLucideIcon-_2yVZkpy.js";import"./x-pBvU2hIn.js";import"./Heading-Cv2bIYwC.js";import"./info-BDxcNZLg.js";import"./Popover-qcn40ZrY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
