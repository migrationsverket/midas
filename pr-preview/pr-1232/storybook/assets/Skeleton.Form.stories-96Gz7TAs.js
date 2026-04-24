import{j as e,l}from"./iframe-Csum_Dn_.js";import{S as t}from"./Skeleton-_VfNBQor.js";import{T as p}from"./TextField-CtV14wUw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-oSRs8dzC.js";import"./utils-Ge-V0544.js";import"./FieldError-JqGe9xU9.js";import"./Text-D-PYeQb1.js";import"./useFocusRing-ClEYMHRu.js";import"./index-BVxqAi5_.js";import"./index-k_0Ayxip.js";import"./Text-tsq8PiKH.js";import"./RSPContexts-CufW8UMt.js";import"./Form-DtazZjcv.js";import"./Group-D0rK0BGE.js";import"./Input-DRNfRwEn.js";import"./Hidden-CxHKwZ6C.js";import"./Button-BUrmgwKE.js";import"./useLabel-Ca_R4Gv6.js";import"./useLabels-DlHehStK.js";import"./useButton-Cjc9nZaQ.js";import"./useTextField-6JknOgh-.js";import"./useControlledState-CRJrM8G1.js";import"./useField-Dre-fZ9m.js";import"./TextField.module-DdivwlC8.js";import"./Label-VoyFbAO_.js";import"./Dialog-BTYxC76S.js";import"./OverlayArrow-Ce-uJfQ8.js";import"./useResizeObserver-D4WnD6HQ.js";import"./Collection-CkQ8sCKj.js";import"./index-BdWGuIGp.js";import"./Separator-gw1DkcLm.js";import"./SelectionManager-CFugCQ0I.js";import"./useEvent-CwVY4pnK.js";import"./scrollIntoView-Dy2xPLMm.js";import"./SelectionIndicator-CZyP-Kby.js";import"./useDescription-LL4f_7qE.js";import"./ListKeyboardDelegate-nOZRNgMP.js";import"./PressResponder-CM5r8EaE.js";import"./useLocalizedStringFormatter-CsJPWzRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B4mINI-w.js";import"./getScrollParent-BZSpcJr9.js";import"./VisuallyHidden-DDF8meml.js";import"./ModalOverlay-DzNUAes9.js";import"./x-ClDHgqDO.js";import"./createLucideIcon-Bn5Z2gKp.js";import"./useLocalizedStringFormatter-CfCv-5fd.js";import"./Heading-DvcYpWA5.js";import"./Button-dhowh8Zu.js";import"./Button.module-BB7N-cLd.js";import"./info-vmZTkaeh.js";import"./Popover-DOI5S_wf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
