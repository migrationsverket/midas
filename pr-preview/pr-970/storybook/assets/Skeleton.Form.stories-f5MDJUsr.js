import{j as e,l}from"./iframe-BvU5xcZ6.js";import{S as t}from"./Skeleton-CQb2o6bP.js";import{T as p}from"./TextField-DktNBy_i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D0bDFviA.js";import"./utils-DNv02rPu.js";import"./TextField-CuF66Rd1.js";import"./FieldError-C_jAntIO.js";import"./Text-DFigioyQ.js";import"./useFocusRing-vZw9Dvay.js";import"./index-Bef40-aw.js";import"./index-Dc_kFy69.js";import"./Text-evR5nmIf.js";import"./RSPContexts-BulTZf7c.js";import"./Form-Cxrk7nZK.js";import"./useFormValidation-Ctrr6uo1.js";import"./Group-DkPBRsKS.js";import"./Input-B7TGBhmZ.js";import"./Hidden-DHY5Q1Kt.js";import"./Button-C9_RYgB9.js";import"./useLabels-FmS0ggiN.js";import"./useButton-B8BiSZmd.js";import"./useTextField-BQVWPMZC.js";import"./useControlledState-PQZLqL14.js";import"./useField-CZofIzOp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-u7Hrvyub.js";import"./Dialog-DI6MPESB.js";import"./OverlayArrow-BZcVsILZ.js";import"./useResizeObserver-DWjM30zM.js";import"./Collection-Dl6go_YD.js";import"./index-YoBKxMt_.js";import"./Separator-B-zTWApR.js";import"./SelectionManager-DHcXwlU3.js";import"./useEvent-Bz8l31iO.js";import"./scrollIntoView-D3VgVWtP.js";import"./SelectionIndicator-Bx753wwo.js";import"./useDescription-BClDbhSX.js";import"./ListKeyboardDelegate-CWATdnNC.js";import"./PressResponder-DqvzWvwj.js";import"./useLocalizedStringFormatter-BKZa2vq4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7Iam-X6.js";import"./VisuallyHidden-C8Yn3KEk.js";import"./Button-Cv7hnaWU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B52eqB_B.js";import"./createLucideIcon-Bd04jM4n.js";import"./x-BY4HyOQa.js";import"./Heading-BC0J-Zc1.js";import"./info-BwUPf6_J.js";import"./Popover-D4m9w2Ry.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
