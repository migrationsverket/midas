import{j as e,l}from"./iframe-BlNSK8M8.js";import{S as t}from"./Skeleton-DjWAMDAF.js";import{T as d}from"./TextField-tj6uVH4R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DL6PO3hI.js";import"./utils-y_Ysi-53.js";import"./TextField-Cd3kDlGY.js";import"./FieldError-DhYzCNjI.js";import"./Text-Cv88p_mU.js";import"./useFocusRing-n2GNbng4.js";import"./index-BHe3mj7v.js";import"./index-B8FlXCLo.js";import"./Text-CsuJG2Zh.js";import"./RSPContexts-B0gZxzCT.js";import"./Form-yxuyhxW4.js";import"./useFormValidation-BJ1Wn2vJ.js";import"./Group-bVPC0BFE.js";import"./Input--g1_SOKJ.js";import"./Hidden-Df5yupSK.js";import"./Button-UL3rNHqZ.js";import"./useLabels-wei9JXnD.js";import"./useButton-sYL6IkJL.js";import"./useTextField-Bw-ddFDi.js";import"./useControlledState-DcrFjJH-.js";import"./useField-CbZpfp7_.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-y3Iy_40Q.js";import"./Dialog-J0JuQeVX.js";import"./OverlayArrow-Cen2yzg5.js";import"./useResizeObserver-oBFUOKOy.js";import"./Collection-Ch8k714R.js";import"./index-5_nZ1Ots.js";import"./Separator-BgEPvPwu.js";import"./SelectionManager-Cpsfaq8i.js";import"./useEvent-CIITEq7t.js";import"./scrollIntoView-ByH1J3Gu.js";import"./SelectionIndicator-awgyvjYl.js";import"./useDescription-D-eWW9MU.js";import"./ListKeyboardDelegate-BBAfu37i.js";import"./PressResponder-Pk2W4RNd.js";import"./useLocalizedStringFormatter-CeEu-nei.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-pzTc__jH.js";import"./VisuallyHidden-Bp8v6Zzz.js";import"./useLocalizedStringFormatter-n3TDJp7T.js";import"./Button-BQGitBll.js";import"./Button.module-CtQ1deO8.js";import"./x-XDtlwMQe.js";import"./createLucideIcon-wU_OqTQp.js";import"./Heading-9wwHT0st.js";import"./info-Cq3VuKLY.js";import"./Popover-CObB0rSp.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
