import{j as e,l}from"./iframe-570mREhY.js";import{S as t}from"./Skeleton-B3e_WwBW.js";import{T as p}from"./TextField-DIopOuHp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ClDPkUOr.js";import"./utils-BqlcL5rx.js";import"./FieldError-yE8YByGw.js";import"./Text-Bv6LeWEW.js";import"./useFocusRing-D77kJS_m.js";import"./index-Bvld532n.js";import"./index-C5HPQFby.js";import"./Text-Dj2VLQFh.js";import"./RSPContexts-Cb-2UirY.js";import"./Form-Dra-fnmO.js";import"./useFormValidation-CR3Ou1E_.js";import"./Group-FksXWVyr.js";import"./Input-C_Rf7nKY.js";import"./Hidden-B4VHltGi.js";import"./Button-C_kwnSXE.js";import"./useLabels-C-WDIhaI.js";import"./useButton-TVehMT5u.js";import"./useTextField-ClwVu4Jc.js";import"./useControlledState-Bk880GAa.js";import"./useField-DLWgoaNu.js";import"./TextField.module-DdivwlC8.js";import"./Label-CmAS5ADu.js";import"./Dialog-BVZec1Ps.js";import"./OverlayArrow-B6QMYDAb.js";import"./useResizeObserver-BhXk13hV.js";import"./Collection-MjJwGCCq.js";import"./index-Bh5caC_l.js";import"./Separator-C-bVNjjj.js";import"./SelectionManager-DiKYdGU5.js";import"./useEvent-BqxQVWwN.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D0FkfzIY.js";import"./useDescription-2ZAZ1q0L.js";import"./ListKeyboardDelegate-CEuvSmDQ.js";import"./PressResponder-CcuoOip4.js";import"./useLocalizedStringFormatter-CImBKygC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Zjc2478k.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BOerlFrD.js";import"./Button-dcNBfXXf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DkAO2Z2_.js";import"./createLucideIcon-BAw__jnC.js";import"./x-DUSrueAG.js";import"./Heading-CtGUg1Um.js";import"./info-C7dtd-j5.js";import"./Popover-Cry7KE-t.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
