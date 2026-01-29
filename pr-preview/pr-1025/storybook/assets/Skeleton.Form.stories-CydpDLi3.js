import{j as e,l}from"./iframe-CTvpKBSK.js";import{S as t}from"./Skeleton-Db7hvpW4.js";import{T as p}from"./TextField-Cki8EVHu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DhjH_r_V.js";import"./utils-BiLGnBBz.js";import"./TextField-Cv_u4t3Y.js";import"./FieldError-BquSn9wl.js";import"./Text-DjtetnZp.js";import"./useFocusRing-DfvRkfqL.js";import"./index-g0pugt_v.js";import"./index-DVdtA1wK.js";import"./Text-BI68LSzD.js";import"./RSPContexts-fL8CzLzf.js";import"./Form-mfwEhoNh.js";import"./useFormValidation-Chpv9In5.js";import"./Group-CiNAFLAE.js";import"./Input-BQp4Wd8o.js";import"./Hidden-DgXsqmZh.js";import"./Button-u0YKTc5k.js";import"./useLabels-DvvCz1Di.js";import"./useButton-PqLQDpbO.js";import"./useTextField-D2Jr83z3.js";import"./useControlledState-66bebSHu.js";import"./useField-BCLlGOHG.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DUbRtYDf.js";import"./Dialog-sxwGEQjR.js";import"./OverlayArrow-BFQFikzb.js";import"./useResizeObserver-dXzsevFb.js";import"./Collection-DJV5p488.js";import"./index-C-5LL5qr.js";import"./Separator-C3RxJYod.js";import"./SelectionManager-CPlVMwPw.js";import"./useEvent-6UK5uY3G.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8uATEmda.js";import"./useDescription-C76Kc7TT.js";import"./ListKeyboardDelegate-C-lNPHxi.js";import"./PressResponder-BRZ89O2D.js";import"./useLocalizedStringFormatter-g83VFJyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcJkVBJ3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C1c0ClIs.js";import"./Button-BtfMoIh9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C25wyzL4.js";import"./createLucideIcon-BvYu-wbL.js";import"./x-CfmXATlG.js";import"./Heading-DQH8WAtT.js";import"./info-uV8rRHDT.js";import"./Popover-Dx--U7UT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
