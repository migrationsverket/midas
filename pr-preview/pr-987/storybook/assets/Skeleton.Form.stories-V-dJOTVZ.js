import{j as e,l}from"./iframe-BGmArfkm.js";import{S as t}from"./Skeleton-CuY-Tq1v.js";import{T as p}from"./TextField-BJm53F1U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C5UKv90t.js";import"./utils-De4ycVjz.js";import"./TextField-BPftMEDf.js";import"./FieldError-DWc1oqeh.js";import"./Text-Co2FLqMe.js";import"./useFocusRing-C96cr3fv.js";import"./index-Vx53ryqG.js";import"./index-DH2xrgDV.js";import"./Text-B-cFjb91.js";import"./RSPContexts-DnW8w3g2.js";import"./Form-Zs0i40lL.js";import"./useFormValidation-BTe4d6Fg.js";import"./Group-BgvziObq.js";import"./Input-DKuK_puF.js";import"./Hidden-ZdYniLBZ.js";import"./Button-Bt35FmAc.js";import"./useLabels-cL2sXBBB.js";import"./useButton-xm0K22zA.js";import"./useTextField-D13rIumx.js";import"./useControlledState-C49VPy3O.js";import"./useField-C7c7y-kS.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B-Oa0qYx.js";import"./Dialog-qnlt5s6o.js";import"./OverlayArrow-Ci79LVIw.js";import"./useResizeObserver-UOPaRJCF.js";import"./Collection-COsQU16t.js";import"./index-CxoXiRnj.js";import"./Separator-BvW5t8ps.js";import"./SelectionManager-BNjJJ1kE.js";import"./useEvent-I3liNdnB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_bMrYtf.js";import"./useDescription-D2ktPnwX.js";import"./ListKeyboardDelegate--aVejvH8.js";import"./PressResponder-GANqwSyG.js";import"./useLocalizedStringFormatter-DYenXjtl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCKrBNch.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6Hru1_9.js";import"./Button-Cxuv1_BK.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-BOskpLKS.js";import"./createLucideIcon-gRAp1Zbc.js";import"./x-U65q5NmZ.js";import"./Heading-D4Y8bukS.js";import"./info-2_jsZBv5.js";import"./Popover-BlprJ_dr.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
