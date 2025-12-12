import{j as e,l}from"./iframe-BGtyy6fd.js";import{S as t}from"./Skeleton-DI_AQpqZ.js";import{T as p}from"./TextField-B-1vtxAn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DF46Q7VY.js";import"./utils-CccsvD7u.js";import"./TextField-CZy4jlKs.js";import"./FieldError-CeFSAGIb.js";import"./Text-CdSUS3L4.js";import"./useFocusRing-BnRxtNNt.js";import"./index-Jo84nh3h.js";import"./index-iE9NyH8V.js";import"./Text-BVf8H_wM.js";import"./RSPContexts-CVImfJEg.js";import"./Form-BrMgft87.js";import"./useFormValidation-By4gnXrd.js";import"./Group-DQFLytSj.js";import"./Input-e8jCJWr0.js";import"./Hidden-BxOQW0OL.js";import"./Button-DrTjj1gj.js";import"./useLabels-C6qEHWqP.js";import"./useButton-BpARo-s5.js";import"./useTextField-CHS9md-6.js";import"./useControlledState-NBBb3dwB.js";import"./useField-BZ1YzjEa.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B-l5rVHP.js";import"./Dialog-BPV-Pf39.js";import"./OverlayArrow-CmjTiIwA.js";import"./useResizeObserver-CU-PaB2M.js";import"./Collection-CHaufu6-.js";import"./index-Csz31sU_.js";import"./Separator-BU2fOkre.js";import"./SelectionManager-BoytQZuc.js";import"./useEvent-CtQhVAtx.js";import"./scrollIntoView-nLxHXHgJ.js";import"./SelectionIndicator-DPsuFEfF.js";import"./useDescription-C16OAo1l.js";import"./ListKeyboardDelegate-zE1Wl869.js";import"./PressResponder-C00aJ731.js";import"./useLocalizedStringFormatter-BciR1wkJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DmaRQTrd.js";import"./VisuallyHidden-ClSljMM6.js";import"./Button-D11DdKki.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0q1zQmh.js";import"./createLucideIcon-4ZkmUN36.js";import"./x-Dx2ju_wc.js";import"./Heading-B04CcTxN.js";import"./info-De1TvcOO.js";import"./Popover-C6lXhGDs.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
