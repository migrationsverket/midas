import{j as e,l}from"./iframe-4YO2ARDc.js";import{S as t}from"./Skeleton-CaShm4w-.js";import{T as p}from"./TextField-cutfNzcT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BJuLovyJ.js";import"./utils-Bfs2eoJd.js";import"./FieldError-OsSBmOrk.js";import"./Text-CzwdOm33.js";import"./useFocusRing-CIkko9vI.js";import"./index-D4eJv5Ic.js";import"./index-BTuiHaBk.js";import"./Text-BPQIT5o1.js";import"./RSPContexts-DcHnq2yo.js";import"./Form-DMtAV8E3.js";import"./Group-BDS3-yNc.js";import"./Input-CaC0WhUN.js";import"./Hidden-CaP86mrU.js";import"./Button-B4lRjwhF.js";import"./useLabel-p6x45DKH.js";import"./useLabels-CWRsfwtI.js";import"./useButton-BKsQrDS8.js";import"./useTextField-BK8BXxJ6.js";import"./useControlledState-DMcdq1J4.js";import"./useField-ChVpaYjB.js";import"./TextField.module-DdivwlC8.js";import"./Label-D1JgdOXh.js";import"./Dialog-DwYh06me.js";import"./OverlayArrow-fM7ddGht.js";import"./useResizeObserver-Bj2Pr0Hc.js";import"./Collection-J8Yp6y2u.js";import"./index-DYcuYrZs.js";import"./Separator-VT8fw_jP.js";import"./SelectionManager-5YCFIISk.js";import"./useEvent-Cqqb_9-s.js";import"./scrollIntoView-Ya4JCi80.js";import"./SelectionIndicator-o52jKFWI.js";import"./useDescription-4EdgaLtr.js";import"./ListKeyboardDelegate-74egtXjZ.js";import"./PressResponder-BkOc2Xf8.js";import"./useLocalizedStringFormatter-D7Kcj2Mq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDbqzvYr.js";import"./getScrollParent-BDe6vMxS.js";import"./VisuallyHidden-DJTNtHiX.js";import"./x-cOxoPhDE.js";import"./createLucideIcon-DgKHzC9k.js";import"./useLocalizedStringFormatter-DI81rz-a.js";import"./Heading-DOCrZSPR.js";import"./Button-Bn5ZQsd6.js";import"./Button.module-BB7N-cLd.js";import"./info-DhmCH_G2.js";import"./Popover-amPxFokl.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
