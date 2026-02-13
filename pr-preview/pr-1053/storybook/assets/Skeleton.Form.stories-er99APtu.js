import{j as e,l}from"./iframe-HTnyBHVP.js";import{S as t}from"./Skeleton-6tE_0Xc-.js";import{T as p}from"./TextField-jz2VIP-1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BSvxnWfF.js";import"./utils-nUZbU1Wv.js";import"./TextField-TUPZjd66.js";import"./FieldError-W3cPolKE.js";import"./Text-C-D185rS.js";import"./useFocusRing-cQQ3mgw6.js";import"./index-0Fr-bx-l.js";import"./index-B1GoJJ0m.js";import"./Text-C2CdsLAg.js";import"./RSPContexts-CSmDHtYi.js";import"./Form-BXv3COVl.js";import"./useFormValidation-FXPeM9Pb.js";import"./Group-CpYlte0Z.js";import"./Input-C-U9eXbx.js";import"./Hidden-CcyJsNu-.js";import"./Button-D68YtQlI.js";import"./useLabels-B85yUaIW.js";import"./useButton-kqwXbyL2.js";import"./useTextField-DAmS8JMp.js";import"./useControlledState-BvewPd3v.js";import"./useField-D-1_vJxx.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BWhZYE3H.js";import"./Dialog-L73-GDke.js";import"./OverlayArrow-CR_XWhPQ.js";import"./useResizeObserver-BMccFxro.js";import"./Collection-I5rDMrLQ.js";import"./index-Davix61X.js";import"./Separator-cG4CF9Fz.js";import"./SelectionManager-BOKkgdij.js";import"./useEvent-DHkhC7Ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DNlfdaIc.js";import"./useDescription-DU_40zC-.js";import"./ListKeyboardDelegate-DecHNBR0.js";import"./PressResponder-DFLjK9LV.js";import"./useLocalizedStringFormatter-BalekKZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZId00L7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DL4mh8Hc.js";import"./Button-CNzpSaeX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Pq2987gd.js";import"./createLucideIcon-D9zOPHSY.js";import"./x-BVS5B-gf.js";import"./Heading-DJQooB_9.js";import"./info-BNoFBGrg.js";import"./Popover-Ck3aypzP.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
