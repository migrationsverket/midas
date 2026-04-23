import{j as e,l}from"./iframe-CUW_txz6.js";import{S as t}from"./Skeleton-EdJsnotX.js";import{T as p}from"./TextField-DUHDyQbO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1OGcydtw.js";import"./utils-BrfeFFy9.js";import"./FieldError-BBiP0jfO.js";import"./Text-Bi2kB5GC.js";import"./useFocusRing-Ow8z5BMJ.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./Text-DvPi9pFM.js";import"./RSPContexts-DYx0iF5j.js";import"./Form-DNzUj6ms.js";import"./Group-C3Ht6QcB.js";import"./Input-DpnB_kNM.js";import"./Hidden-C6dZGZNF.js";import"./Button-DJT34vsz.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./useTextField-DOX9ofpd.js";import"./useControlledState-BuDrosJG.js";import"./useField-CLP_zsZ0.js";import"./TextField.module-DdivwlC8.js";import"./Label-CzaPhy5Y.js";import"./Dialog-D7fJEhAE.js";import"./OverlayArrow-B36CX_JF.js";import"./useResizeObserver-B50A-UTA.js";import"./Collection-3mxxC9eU.js";import"./index-DjmmA6Oh.js";import"./Separator-CbzyhqqZ.js";import"./SelectionManager-aJ-j4EKa.js";import"./useEvent-CHrrjSKK.js";import"./scrollIntoView-D8kVtkIc.js";import"./SelectionIndicator-Byd9q1Hf.js";import"./useDescription-DeV7fvLF.js";import"./ListKeyboardDelegate-DyYd3gII.js";import"./PressResponder-DTTKATG8.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGNa_fMh.js";import"./getScrollParent-DWW6JN_D.js";import"./VisuallyHidden-C2eTcyAK.js";import"./ModalOverlay-Dd-5tipM.js";import"./x-pwSsQ8xV.js";import"./createLucideIcon-Cc0DwuLE.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Heading-rIzkF3u3.js";import"./Button-yberURbp.js";import"./Button.module-BB7N-cLd.js";import"./info-BGBnsoll.js";import"./Popover-DgFfSiXP.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
