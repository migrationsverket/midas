import{j as e,l}from"./iframe-BDAeyV_L.js";import{S as t}from"./Skeleton-Cvdv7Te3.js";import{T as p}from"./TextField-CYAmNwtT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-fxj5PK_l.js";import"./utils-QbpHp2iH.js";import"./TextField-BjyJaeOb.js";import"./FieldError-nYxCLXng.js";import"./Text-CuLPV3Pn.js";import"./useFocusRing-DZ9oxgDy.js";import"./index-bebXLijF.js";import"./index-BxXpe6Uv.js";import"./Text-CgZVKuAu.js";import"./RSPContexts-uVPcO6CS.js";import"./Form-DfB0YOFw.js";import"./useFormValidation-DaMPzBFa.js";import"./Group-Bih5ZLR3.js";import"./Input-BuqwJ0XY.js";import"./Hidden-CWKhTNWg.js";import"./Button-hcT7fu5t.js";import"./useLabels-CJ7PqtrQ.js";import"./useButton-yTtoFlYV.js";import"./useTextField-BRJvIvPa.js";import"./useControlledState-B4b2AaJr.js";import"./useField-C7GoH2ks.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-natk6EPf.js";import"./Dialog-o3tFSf8d.js";import"./OverlayArrow-BVayRGDK.js";import"./useResizeObserver-2N3Ozx5o.js";import"./Collection-y60iSVfC.js";import"./index-It1jGq4A.js";import"./Separator-DfoJ1Y5j.js";import"./SelectionManager-_BpQMH4s.js";import"./useEvent-DCC2o4ue.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2sLS2N5.js";import"./useDescription-BsNFz1-d.js";import"./ListKeyboardDelegate-DrX08Zf9.js";import"./PressResponder-CUy93U5r.js";import"./useLocalizedStringFormatter-BWgc5TPM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTtP-AWM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C7amzv03.js";import"./Button-CzvpZwUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJ4AsDN.js";import"./createLucideIcon-DrPkV-uJ.js";import"./x-Bo3luZEL.js";import"./Heading-CR3sFUYz.js";import"./info-BgnmUpVy.js";import"./Popover-MkmEChob.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
