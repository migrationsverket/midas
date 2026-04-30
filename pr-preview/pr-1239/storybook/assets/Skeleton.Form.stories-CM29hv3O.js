import{j as e,l}from"./iframe-DYtTLEOY.js";import{S as t}from"./Skeleton-DP-GYzkZ.js";import{T as p}from"./TextField-zSbzV9Fg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BbGUwlBn.js";import"./utils-BeWuc0kB.js";import"./FieldError-f6hy05Az.js";import"./Text-B_xqvba2.js";import"./useFocusRing-_bdLe-pi.js";import"./index-CHX39vrh.js";import"./index-DvTVW4UW.js";import"./Text-DW1CAqib.js";import"./RSPContexts-DkdKWqA8.js";import"./Form-yvOI9qEP.js";import"./Group-DLwVJwa_.js";import"./Input-C_TafsML.js";import"./Hidden-DDsbX8hq.js";import"./Button-DsqyYrvI.js";import"./useLabel-BnXeWK3Y.js";import"./useLabels-CT9q7uAF.js";import"./useButton-Ci3u1E4N.js";import"./useTextField-ByTnTJ3e.js";import"./useControlledState-rzHF_sGy.js";import"./useField-CBfES0O1.js";import"./TextField.module-DdivwlC8.js";import"./Label-rJo2nq6a.js";import"./Dialog-K_vnEtBp.js";import"./OverlayArrow-EPB7G_HW.js";import"./useResizeObserver-KQT3wmxM.js";import"./Collection-CvrhsRx1.js";import"./index--9prz91y.js";import"./Separator-DoMWmt9-.js";import"./SelectionManager-DxV3yXAd.js";import"./useEvent-B1ZGd9Sm.js";import"./scrollIntoView-C6xwA0wp.js";import"./SelectionIndicator-DGG2_PbU.js";import"./useDescription-Cyk80vV4.js";import"./ListKeyboardDelegate-7IzE9sWp.js";import"./PressResponder-BbbOe-DF.js";import"./useLocalizedStringFormatter-Ccy2SGCc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwZkWKmZ.js";import"./getScrollParent-WmdaZx3q.js";import"./VisuallyHidden-bhNQHOWS.js";import"./ModalOverlay-B5JUVDsj.js";import"./x-hiiCX7eS.js";import"./createLucideIcon-CX9lPY5s.js";import"./useLocalizedStringFormatter-CJKDlra2.js";import"./Heading-CYbTt_Pz.js";import"./Button-NK277Tyq.js";import"./Button.module-BB7N-cLd.js";import"./info-DdvGTNXm.js";import"./Popover-XVLc4ZcS.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
