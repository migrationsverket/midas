import{j as e,l}from"./iframe-CgeuBGg3.js";import{S as t}from"./Skeleton-CRi0PwmC.js";import{T as p}from"./TextField-Du6eiROd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C88gJedG.js";import"./utils-D5ZiOk7c.js";import"./FieldError-Ck8WwPsT.js";import"./Text-BY_Jfm-B.js";import"./useFocusRing-CtUB-pVk.js";import"./index-C0DQMcLX.js";import"./index-Dr51d6up.js";import"./Text-cOijWBlA.js";import"./RSPContexts-Cmp2aHI0.js";import"./Form-OezuEZAr.js";import"./useFormValidation-B3OZSiFR.js";import"./Group-Bv2uZEGN.js";import"./Input-DUWQJdsC.js";import"./Hidden-BuqiSPlJ.js";import"./Button-D49K8NN3.js";import"./useLabels-CcDa7eqk.js";import"./useButton-BafbxBxx.js";import"./useTextField-CR5nipmw.js";import"./useControlledState-hrYI1rS_.js";import"./useField-CrURjpqd.js";import"./TextField.module-DdivwlC8.js";import"./Label-BWAkX44E.js";import"./Dialog-CTdZ_zB9.js";import"./OverlayArrow-BMo0uLg8.js";import"./useResizeObserver-BObk-iBp.js";import"./Collection-C0rNIg_w.js";import"./index-xz0YMXZu.js";import"./Separator-ZaBb-Xpb.js";import"./SelectionManager-FueJVEvO.js";import"./useEvent-DfWlG2fS.js";import"./scrollIntoView-BOtoWgvj.js";import"./SelectionIndicator-B5iuuJYR.js";import"./useDescription-FPRM_do-.js";import"./ListKeyboardDelegate-BJowuom4.js";import"./PressResponder-CObnC5EZ.js";import"./useLocalizedStringFormatter-DdY9z82P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-60pw6fU8.js";import"./getScrollParent-BZNtwC6u.js";import"./VisuallyHidden-nAkuDexq.js";import"./Button-B3bHm7yN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BVH642Vw.js";import"./createLucideIcon-j5uHxTIE.js";import"./x-82ZwNPo6.js";import"./Heading-BxH2CNNp.js";import"./info-BukTWBXk.js";import"./Popover-Bu8jD-RO.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
