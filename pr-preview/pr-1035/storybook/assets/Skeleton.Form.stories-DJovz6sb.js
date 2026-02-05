import{j as e,l}from"./iframe-BQBOUe4L.js";import{S as t}from"./Skeleton-CxjaoU-5.js";import{T as p}from"./TextField-CYFrFE1F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bd6mhx1o.js";import"./utils-CRMkcUEf.js";import"./TextField-BvA2zY8A.js";import"./FieldError-U_WPsfks.js";import"./Text-4aw7o7le.js";import"./useFocusRing-DansQnno.js";import"./index-yiTGV0Ad.js";import"./index-B5FT88Na.js";import"./Text-B_t0zTpM.js";import"./RSPContexts-CvjO9LUS.js";import"./Form-mxlt6ylo.js";import"./useFormValidation-DspKaQyW.js";import"./Group-B5seBaae.js";import"./Input-DSdcwYaA.js";import"./Hidden-DlSKSdAn.js";import"./Button-CvEjFmDh.js";import"./useLabels-CAK16zbU.js";import"./useButton-B_yguids.js";import"./useTextField-Vk17g3pG.js";import"./useControlledState-DM-5-Rrt.js";import"./useField-CPvbugzP.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BMUQz-h6.js";import"./Dialog-BVqK9tm3.js";import"./OverlayArrow-C1PBVSGx.js";import"./useResizeObserver-BAcHADGr.js";import"./Collection-DA9nos4X.js";import"./index-DPtY_q6d.js";import"./Separator-CvqEesBD.js";import"./SelectionManager-CnZFBJPA.js";import"./useEvent-5ECDfKWj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTndX8cd.js";import"./useDescription-C0HCyUwc.js";import"./ListKeyboardDelegate-CLrR3jmQ.js";import"./PressResponder-qNABUEhU.js";import"./useLocalizedStringFormatter-B5gaEHvL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BWDp05La.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DljAyihR.js";import"./Button-Cim8R03s.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lzSK34iS.js";import"./createLucideIcon-DCYizV4H.js";import"./x-Cp8v8-j6.js";import"./Heading-DYmoF48W.js";import"./info-CTeb1YdU.js";import"./Popover-DUiRFiBj.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
