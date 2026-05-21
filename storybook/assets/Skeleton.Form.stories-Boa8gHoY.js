import{j as e,l}from"./iframe-BXzs3x0C.js";import{S as t}from"./Skeleton-BvMR0Xza.js";import{T as p}from"./TextField-8c1uFL8P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-lqxoD9oy.js";import"./utils-B7YpdZz-.js";import"./FieldError-ZWe9d950.js";import"./Text-a0ukmHPT.js";import"./useFocusRing-DAr84UVu.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./Text-DYh5wK03.js";import"./RSPContexts-CQe6j-NN.js";import"./Form-BXZvEm0b.js";import"./Group-Ct6065UP.js";import"./Input-D0hNwtRc.js";import"./Hidden-HpZioBNJ.js";import"./Button-_6aq1n6B.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./useTextField-BV2_ohzC.js";import"./useControlledState-DXnq9ftx.js";import"./useField-B3Bcv_v3.js";import"./TextField.module-DdivwlC8.js";import"./Label-BBep1N8t.js";import"./Dialog-BEMaGKOQ.js";import"./OverlayArrow-CQqIg-Jb.js";import"./useResizeObserver-CEMKu04O.js";import"./Collection-CPe6OLkZ.js";import"./index-BK7PRc4P.js";import"./Separator-B0USoDoM.js";import"./SelectionManager-BeubQEj5.js";import"./useEvent-Bna1V34X.js";import"./scrollIntoView-DmyPyYUI.js";import"./SelectionIndicator-BG5WiYa3.js";import"./useDescription-BDCx7FV_.js";import"./ListKeyboardDelegate-C5EkxWNC.js";import"./PressResponder-DIcn1mDB.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-s3i8KAlX.js";import"./getScrollParent-CeZ4u_Xo.js";import"./VisuallyHidden-C6-1r25j.js";import"./ModalOverlay-CK8WAiZ8.js";import"./x-BmIXIepj.js";import"./createLucideIcon-DAXq1X88.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./Heading-CccHM0rx.js";import"./Button-Bvp28ihJ.js";import"./Button.module-BB7N-cLd.js";import"./info-D2DDSkAW.js";import"./Popover-DDaDm9KL.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
