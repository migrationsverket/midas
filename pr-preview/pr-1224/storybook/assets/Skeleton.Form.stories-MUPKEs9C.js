import{j as e,l}from"./iframe-Cwp_nH2i.js";import{S as t}from"./Skeleton-rwanoT4J.js";import{T as p}from"./TextField-vPC335th.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-zyG8Is36.js";import"./utils-D58tzseF.js";import"./FieldError-DkJf33vr.js";import"./Text-h4_45G40.js";import"./useFocusRing-DNNGYKVr.js";import"./index-DyCqZMYr.js";import"./index-kB1ochzG.js";import"./Text-ooZ4PKli.js";import"./RSPContexts-BgIiqfY1.js";import"./Form-DM5Rvxjr.js";import"./Group-Bif-dsKf.js";import"./Input-CAIXe99i.js";import"./Hidden-BUSQ_LLM.js";import"./Button-BYfq0wpH.js";import"./useLabel-D7lULVXa.js";import"./useLabels-cVarSgwU.js";import"./useButton-BNvE6ltl.js";import"./useTextField-DpE7ZZyR.js";import"./useControlledState-DjKqHFBe.js";import"./useField-B_VPmbL6.js";import"./TextField.module-DdivwlC8.js";import"./Label-D7-uSz7K.js";import"./Dialog-5eEQW3x8.js";import"./OverlayArrow-CM5eq7Nh.js";import"./useResizeObserver-CpVdiUQc.js";import"./Collection-CXC_OfZ3.js";import"./index-DbD20U-h.js";import"./Separator-W0lIkXut.js";import"./SelectionManager-BVnpLiio.js";import"./useEvent-BjIvz2Po.js";import"./scrollIntoView-BKCjK7iV.js";import"./SelectionIndicator-D_R3OtUk.js";import"./useDescription-CryxMFSD.js";import"./ListKeyboardDelegate-p2Ps1sEj.js";import"./PressResponder-DFNo2IJs.js";import"./useLocalizedStringFormatter-C-PIG7PB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-I0f_CXeG.js";import"./getScrollParent-CS9TKH4q.js";import"./VisuallyHidden-c7FiOqp6.js";import"./ModalOverlay-Dal6K64g.js";import"./x-DV3Rl8a5.js";import"./createLucideIcon-CL7AaBb9.js";import"./useLocalizedStringFormatter-C82ZJvLt.js";import"./Heading-b3KA7tkq.js";import"./Button-D-SHIeik.js";import"./Button.module-BB7N-cLd.js";import"./info-CDhbDRi1.js";import"./Popover-CvD85Dw3.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
