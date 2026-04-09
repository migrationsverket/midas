import{j as e,l}from"./iframe-ClXeNp7Y.js";import{S as t}from"./Skeleton-CHZK3elP.js";import{T as p}from"./TextField-D0f_kpx0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DK8h6u-y.js";import"./utils-Om4eb18p.js";import"./FieldError-Crhqu9ff.js";import"./Text-Cbz9Nooi.js";import"./useFocusRing-POYc96FQ.js";import"./index-B5A_pknU.js";import"./index-DKpewxE4.js";import"./Text-Cmueb6gv.js";import"./RSPContexts-BJtrT3-R.js";import"./Form-qcwhxik-.js";import"./Group-D-xiGmRt.js";import"./Input-CF0F6MRL.js";import"./Hidden-CTszc8DE.js";import"./Button-CgOPhMO-.js";import"./useLabel-LLB3lTIC.js";import"./useLabels-0ROcCaA0.js";import"./useButton-CU4eTwNH.js";import"./useTextField-NBqz0STb.js";import"./useControlledState-ByDkBY5z.js";import"./useField-NTYDoh05.js";import"./TextField.module-DdivwlC8.js";import"./Label-tx-58S4R.js";import"./Dialog-B9BVloyd.js";import"./OverlayArrow-D4eeuLkC.js";import"./useResizeObserver-DiLs1Yug.js";import"./Collection-DiE6phJa.js";import"./index-BGvv924Y.js";import"./Separator-D4H-k3Mv.js";import"./SelectionManager-kbtNASxS.js";import"./useEvent-CNppEzGs.js";import"./scrollIntoView-B4z0Rquo.js";import"./SelectionIndicator-DLieR0zk.js";import"./useDescription-DyutD6T1.js";import"./ListKeyboardDelegate-Bi3VR8XT.js";import"./PressResponder-bnP19chi.js";import"./useLocalizedStringFormatter-CQx72wD7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B4YZBIYY.js";import"./getScrollParent-BN1in3_E.js";import"./VisuallyHidden-Zm76wuSE.js";import"./Dialog-D-2sV88z.js";import"./x-CsrInTiu.js";import"./createLucideIcon-BfIBNwb-.js";import"./useLocalizedStringFormatter-B6IkZiLP.js";import"./Heading-CVjx0GKx.js";import"./Button-Ck36yxFc.js";import"./Button.module-BB7N-cLd.js";import"./info-C11kIJNw.js";import"./Popover-2HEfTtrt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
