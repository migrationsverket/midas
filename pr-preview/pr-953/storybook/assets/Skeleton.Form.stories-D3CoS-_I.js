import{j as e,l}from"./iframe-BVVtlJUS.js";import{S as t}from"./Skeleton-C05tKom3.js";import{T as d}from"./TextField-DYqLN1GX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CxHi-qpa.js";import"./utils-CgRkp8Dv.js";import"./TextField-DW8RzS7v.js";import"./FieldError-CuKNWz7a.js";import"./Text-BizgQ59x.js";import"./useFocusRing-2PI7p2oX.js";import"./index-B4gk8gxR.js";import"./index-DAR-rwum.js";import"./Text-2vkSLQm7.js";import"./RSPContexts-B9iMytNE.js";import"./Form-CeH3jLLO.js";import"./useFormValidation-Bb3h5Nuh.js";import"./Group-o5LplglK.js";import"./Input-BGVQwFD7.js";import"./Hidden-BzUm3PMd.js";import"./Button-Z5Xlbqol.js";import"./useLabels-C9j3vCOF.js";import"./useButton-C4VZnzw0.js";import"./useTextField-Dob3aN2t.js";import"./useControlledState-7re4kOBW.js";import"./useField-BkHJutMe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-VPQA1-wP.js";import"./Dialog-XOfh_bir.js";import"./OverlayArrow-0QpXwgcP.js";import"./useResizeObserver-CNO3EL8D.js";import"./Collection-DhgSDgxH.js";import"./index-B6aPPNol.js";import"./Separator-k198miS3.js";import"./SelectionManager-CRXYWMik.js";import"./useEvent-CTMQtBwI.js";import"./scrollIntoView-pHdkyFS1.js";import"./SelectionIndicator-ZzP435to.js";import"./useDescription-DvAMy-Is.js";import"./ListKeyboardDelegate-BFOwqObD.js";import"./PressResponder-Ng01hvOq.js";import"./useLocalizedStringFormatter-CY4FriNq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DggmcIHg.js";import"./VisuallyHidden-DXc6XDNY.js";import"./Button-DhG_Cd2F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqjGsQpT.js";import"./createLucideIcon-C3maNRZb.js";import"./x-BSw8RQ3b.js";import"./Heading-wekCqjXp.js";import"./info-C8mE3297.js";import"./Popover-DQ-iiWrZ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
