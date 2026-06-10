import{j as e,l}from"./iframe-CmeF7aiR.js";import{S as t}from"./Skeleton-D-O9om3Z.js";import{T as p}from"./TextField-FkBCKy9d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dx0c1ryR.js";import"./utils-Z3-XoPsz.js";import"./FieldError-BVrE0AIG.js";import"./Text-C9HAfj-8.js";import"./useFocusRing-2QXJrqIt.js";import"./index-XXiSS7gB.js";import"./index-Cy7R6ehB.js";import"./Text-BssmR8ms.js";import"./RSPContexts-BpcZ6nht.js";import"./Form-DCycYtMR.js";import"./Group-BQ2QLkRq.js";import"./Input-DoDFk9Wd.js";import"./Hidden-BUn3MpC7.js";import"./Button-ClEeAqn6.js";import"./useLabel-ZOG9CKkE.js";import"./useLabels-kUwjKE83.js";import"./useButton-B02vL_2_.js";import"./useTextField-D_L8tPLl.js";import"./useControlledState-hzD7JFD-.js";import"./useField-DvTMSr8p.js";import"./TextField.module-DdivwlC8.js";import"./Label-k1l0EY31.js";import"./Dialog-DS-mfamb.js";import"./OverlayArrow-DGTFW9dl.js";import"./useResizeObserver-BDV1aHG4.js";import"./Collection-Cw5azGBR.js";import"./index-Ctx5ZgNK.js";import"./Separator-B2-i3j6n.js";import"./SelectionManager-N_jg7Ktj.js";import"./useEvent-kH6-sJDb.js";import"./scrollIntoView-rNYRejP1.js";import"./SelectionIndicator-BC7L7-ox.js";import"./useDescription-DEWpOLKq.js";import"./ListKeyboardDelegate-C9ktpFr7.js";import"./PressResponder-FhDuQOeC.js";import"./useLocalizedStringFormatter-CWAX1pT5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bg2Y09vr.js";import"./getScrollParent-BlOOdjy0.js";import"./VisuallyHidden-B0_5kTh6.js";import"./ModalOverlay-UObFunht.js";import"./x-B7wEz93I.js";import"./createLucideIcon-DCW1PR-F.js";import"./useLocalizedStringFormatter-ACOccWph.js";import"./Heading-ggj7_bEi.js";import"./Button-xoJ9JlM1.js";import"./Button.module-BB7N-cLd.js";import"./info-B4T0OC2X.js";import"./Popover-CrJNx5RQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
