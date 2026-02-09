import{j as e,l}from"./iframe-MifYwXyz.js";import{S as t}from"./Skeleton-BsugrWhx.js";import{T as p}from"./TextField-Ba2tCNuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Yj47suu_.js";import"./utils-DQEE__1e.js";import"./TextField-CO-OpTpz.js";import"./FieldError-909Vsbkt.js";import"./Text-C2SPm1jh.js";import"./useFocusRing-CshLtOVp.js";import"./index-C2YaqACl.js";import"./index-CDZjfK_p.js";import"./Text-Dt_sqIOk.js";import"./RSPContexts-_MaIYEvI.js";import"./Form-BHuHVE3q.js";import"./useFormValidation-Bv3qCLcs.js";import"./Group-Dyszqjp8.js";import"./Input-Chzoln-a.js";import"./Hidden-BW6dBRkK.js";import"./Button-CKNqLrwF.js";import"./useLabels-C0p_nmcB.js";import"./useButton-Bi_I7gxU.js";import"./useTextField-DH66ZZE3.js";import"./useControlledState-Ck9De9Y4.js";import"./useField-DhyKPenV.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C1VzgCgE.js";import"./Dialog-DqYyjSQ9.js";import"./OverlayArrow-D_65PUVW.js";import"./useResizeObserver-D21IMsf9.js";import"./Collection-B0YoD_N2.js";import"./index-CIvMG0Kq.js";import"./Separator-BfEQuZMo.js";import"./SelectionManager-Crflqmi0.js";import"./useEvent-Bzi6Lqj5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3-7GMyH8.js";import"./useDescription-5ZHxX6H6.js";import"./ListKeyboardDelegate--XGA4FuR.js";import"./PressResponder-BpCArYu-.js";import"./useLocalizedStringFormatter-C3fn2FlC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DN4af1yt.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BKJVLMnZ.js";import"./Button-BcTOGRQL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GZgY9UBY.js";import"./createLucideIcon-Ci3Mi_gr.js";import"./x-D5mMwQqA.js";import"./Heading-ypRMm-U6.js";import"./info-CqOzxSMD.js";import"./Popover-BGwUVHns.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
