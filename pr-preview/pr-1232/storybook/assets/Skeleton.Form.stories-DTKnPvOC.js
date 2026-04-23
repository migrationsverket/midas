import{j as e,l}from"./iframe-yW9ZA3bb.js";import{S as t}from"./Skeleton-DOMSabP_.js";import{T as p}from"./TextField-B4-4Ow4W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BIqlg8iF.js";import"./utils-BUJhr-Te.js";import"./FieldError-CaZE3eKK.js";import"./Text-Cihq6LYV.js";import"./useFocusRing-Bwgr8eO9.js";import"./index-BH1NNJD9.js";import"./index-XMJgY8GA.js";import"./Text-DMsq_JIv.js";import"./RSPContexts-ESkvyycf.js";import"./Form-Dyi7ByEU.js";import"./Group-DSLIBANt.js";import"./Input-aTb6VFZD.js";import"./Hidden-zw4kT8e2.js";import"./Button-Dz51wr3r.js";import"./useLabel-BCJoncEW.js";import"./useLabels-CW7YtnuA.js";import"./useButton-Cr-TXgCI.js";import"./useTextField-BPKUsTxO.js";import"./useControlledState-YFMNQnxY.js";import"./useField-DB6t2HH5.js";import"./TextField.module-DdivwlC8.js";import"./Label-BktIqWh4.js";import"./Dialog-CA921wXk.js";import"./OverlayArrow-Bc9LmL03.js";import"./useResizeObserver-CnuGVro4.js";import"./Collection-Bw0lf7NA.js";import"./index-rTiiKE-t.js";import"./Separator-WIHQB6Ek.js";import"./SelectionManager-BxnG2-K_.js";import"./useEvent-7NkuCPOG.js";import"./scrollIntoView-DxGdu0tm.js";import"./SelectionIndicator-DU1EMdvh.js";import"./useDescription-Cw85_cIo.js";import"./ListKeyboardDelegate-HzIwCYcA.js";import"./PressResponder-CZpqY1IJ.js";import"./useLocalizedStringFormatter-sAga3kqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C84mhlBd.js";import"./getScrollParent-ByY90j8k.js";import"./VisuallyHidden-BLpKIy7O.js";import"./ModalOverlay-CQLS8SbE.js";import"./x-DnrjJHU3.js";import"./createLucideIcon-Dzjc7ziG.js";import"./useLocalizedStringFormatter-bv3drFF0.js";import"./Heading-Df13RFa7.js";import"./Button-CVdu7ubL.js";import"./Button.module-BB7N-cLd.js";import"./info-DvvFrCJ1.js";import"./Popover-DjjRZZRa.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
