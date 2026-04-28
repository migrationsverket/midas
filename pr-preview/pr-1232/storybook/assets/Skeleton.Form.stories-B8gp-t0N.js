import{j as e,l}from"./iframe-Cu_fcUaC.js";import{S as t}from"./Skeleton-BMziUzCc.js";import{T as p}from"./TextField-FVt5Upzd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-VHJvjhnQ.js";import"./utils-mLyOZ5qk.js";import"./FieldError-CcL3qzc2.js";import"./Text-BcWcM5HD.js";import"./useFocusRing-Dsj_Rw-j.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./Text-CJt2oElV.js";import"./RSPContexts-voJfQs_F.js";import"./Form-Cpr59noW.js";import"./Group-B_4MjRqC.js";import"./Input-DXT2_3F3.js";import"./Hidden-D1QpNxPu.js";import"./Button-BJB-9Zcd.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./useTextField-D7XMH20H.js";import"./useControlledState-Cc2dWwpP.js";import"./useField-Cl39vdxi.js";import"./TextField.module-DdivwlC8.js";import"./Label-jnUzBQy1.js";import"./Dialog-C-EAIPxB.js";import"./OverlayArrow-DhYthxRu.js";import"./useResizeObserver-BN_fml5s.js";import"./Collection-DgS7LPNV.js";import"./index-Bd3BSiq8.js";import"./Separator-oct6uH29.js";import"./SelectionManager-CrVTf4E_.js";import"./useEvent-CwEPxrZU.js";import"./scrollIntoView-ACzs8MHU.js";import"./SelectionIndicator-B3i_o2a7.js";import"./useDescription-BXNyutV1.js";import"./ListKeyboardDelegate-BaQ6if3w.js";import"./PressResponder-BV-_NXl-.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YFYmKfCX.js";import"./getScrollParent-DEJhUy4G.js";import"./VisuallyHidden-Bo9ouMME.js";import"./ModalOverlay-dJNPlfM6.js";import"./x-_aLctjLl.js";import"./createLucideIcon-B_FH30vd.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./Heading-11L4UqbI.js";import"./Button-DbgphF2R.js";import"./Button.module-BB7N-cLd.js";import"./info-Coc9VrCX.js";import"./Popover-yTDjeowR.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
