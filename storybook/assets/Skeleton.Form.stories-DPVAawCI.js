import{j as e,l}from"./iframe-BUDtIrHl.js";import{S as t}from"./Skeleton-Da_iERtw.js";import{T as p}from"./TextField-DJP3bm7i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-j9W6KLDz.js";import"./utils-AGwlrZ_4.js";import"./FieldError-B6xJ2_09.js";import"./Text-CbEfxdsU.js";import"./useFocusRing-CjCkUQdP.js";import"./index-DONLKseB.js";import"./index-CGdvhCdV.js";import"./Text-Bdd1tqPS.js";import"./RSPContexts-Cdws8AZx.js";import"./Form-DAq52jw6.js";import"./useFormValidation-BQSdPv_b.js";import"./Group-DuDMMCZT.js";import"./Input-PfB5b2eF.js";import"./Hidden-BlaUoiVl.js";import"./Button-IDkkm_2W.js";import"./useLabels-B8ED9S2U.js";import"./useButton-Dcc_HHbb.js";import"./useTextField-DqIFWit1.js";import"./useControlledState-D9bcyMir.js";import"./useField-CcXXxyKb.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-BmPbpS5w.js";import"./Dialog-CsREFjSl.js";import"./OverlayArrow-BueyShwC.js";import"./useResizeObserver-D_OG9Iyx.js";import"./Collection-BboK_RTQ.js";import"./index-CnFeaVjs.js";import"./Separator-CPIGN1lb.js";import"./SelectionManager-uiFozjTp.js";import"./useEvent-BeMeyqUJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmWfpYdB.js";import"./useDescription-C-xHEeiw.js";import"./ListKeyboardDelegate-CKEXMxD7.js";import"./PressResponder-CnWFRWXt.js";import"./useLocalizedStringFormatter-BWOiSsrR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CK3uOwmj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dvn9bM_l.js";import"./Button-DLSCCVY_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9NIs4hG.js";import"./createLucideIcon-BWsYPG1T.js";import"./x-CJxbdHUR.js";import"./Heading-BMB407cu.js";import"./info-LPOaS6Og.js";import"./Popover-CGo5h5lw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
