import{j as e,l}from"./iframe-CuvNnZhW.js";import{S as t}from"./Skeleton-C2qgZcjr.js";import{T as p}from"./TextField-Bc2nUc_C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-OlXIqiF0.js";import"./utils-Bm57M54E.js";import"./TextField-D-FqnVZd.js";import"./FieldError-3gQNfb17.js";import"./Text-yK2KnKs6.js";import"./useFocusRing-D43600Fq.js";import"./index-B40owRUi.js";import"./index-BMAPmUts.js";import"./Text-DQruYnq-.js";import"./RSPContexts-CQpn_-P6.js";import"./Form-Ov6B_FDi.js";import"./useFormValidation-D-Xc3W6R.js";import"./Group-CqB0c1_6.js";import"./Input-VbQbtPnq.js";import"./Hidden-DxowtwNV.js";import"./Button-DOL-rno5.js";import"./useLabels-efXzBIHp.js";import"./useButton-Cp1eU1ae.js";import"./useTextField-U4PEZY98.js";import"./useControlledState-CMlYEkCM.js";import"./useField-AEkN06Tw.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BYi2LUkk.js";import"./Dialog-Oqp-w9-d.js";import"./OverlayArrow-3qO1Pz2Y.js";import"./useResizeObserver-Lve1GpGt.js";import"./Collection-D9tKhjzz.js";import"./index-CnemMvpk.js";import"./Separator-CyRvqttG.js";import"./SelectionManager-CtXuFHLs.js";import"./useEvent-Bpy0OARu.js";import"./scrollIntoView-1KZh3iQK.js";import"./SelectionIndicator-CkCvo8--.js";import"./useDescription-DhNPqrJw.js";import"./ListKeyboardDelegate-D1LsJ1W6.js";import"./PressResponder-B40WJfeG.js";import"./useLocalizedStringFormatter-C1w5KOSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-LlGdJz5e.js";import"./VisuallyHidden-CwpyE811.js";import"./Button-_NSsZI2K.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6M9RCcid.js";import"./createLucideIcon-Df2ePFAr.js";import"./x-Df8grS6J.js";import"./Heading-J7EIvy2J.js";import"./info-Bqg9AUda.js";import"./Popover-CXi3Y7h5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
