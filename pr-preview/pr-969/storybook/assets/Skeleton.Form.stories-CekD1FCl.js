import{j as e,l}from"./iframe-CupcEORL.js";import{S as t}from"./Skeleton-BrfVRrvP.js";import{T as p}from"./TextField-B26quATI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C7u5fSJe.js";import"./utils-CzdJImXC.js";import"./TextField-DjNMfEGn.js";import"./FieldError-CNSUQM04.js";import"./Text-BzTzEwa_.js";import"./useFocusRing-B933qwOx.js";import"./index-BNnNq99L.js";import"./index-CDGQedl9.js";import"./Text-FnTIT6A7.js";import"./RSPContexts-DlAbhQ-j.js";import"./Form-DnU3PC8T.js";import"./useFormValidation-JfHmnvgD.js";import"./Group-CgqXSKzX.js";import"./Input-DRxfdCsE.js";import"./Hidden-f6WbCn28.js";import"./Button-BjFe8Qxa.js";import"./useLabels-DCXSlQiV.js";import"./useButton-BK9ob62y.js";import"./useTextField-BorxuHV3.js";import"./useControlledState-BAOEk3qi.js";import"./useField-CMyz0xuE.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-o_uqg4mu.js";import"./Dialog-BWXQdrkx.js";import"./OverlayArrow-CKV6E1G-.js";import"./useResizeObserver-B2NRcN8z.js";import"./Collection-Dc7Pvuzi.js";import"./index-c9uBbMw-.js";import"./Separator-nk_85xCt.js";import"./SelectionManager-D04MXtr7.js";import"./useEvent-BaUhd_FK.js";import"./scrollIntoView-Bovkd6w4.js";import"./SelectionIndicator-z-Q8MT7j.js";import"./useDescription-DEfOZN_U.js";import"./ListKeyboardDelegate-C_1mGTYy.js";import"./PressResponder-hXvoDWRw.js";import"./useLocalizedStringFormatter-BFlI89gI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dw-q-NMY.js";import"./VisuallyHidden-DPMP7RQx.js";import"./Button-B1rt2puZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKuOwoBy.js";import"./createLucideIcon-CXb3IT7f.js";import"./x-BVCaSCFv.js";import"./Heading-APdHuM_S.js";import"./info-ClO66hHU.js";import"./Popover-DLa2PH1I.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
