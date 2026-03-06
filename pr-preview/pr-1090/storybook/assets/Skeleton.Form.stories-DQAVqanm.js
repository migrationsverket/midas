import{j as e,l}from"./iframe-BGjWmNYx.js";import{S as t}from"./Skeleton-BW2Em8Pt.js";import{T as p}from"./TextField-C1qo0smt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ydKWK4h5.js";import"./utils-D7zTzvCU.js";import"./FieldError-Wp4mauGJ.js";import"./Text-tIbPkLw7.js";import"./useFocusRing-Cv1kbpvb.js";import"./index-CY1Z3dQf.js";import"./index-D-vxhsZL.js";import"./Text-B9EMTagt.js";import"./RSPContexts-D1Qe90-y.js";import"./Form-DxBtc45O.js";import"./useFormValidation-CXGeViRH.js";import"./Group-KkU9w4Lf.js";import"./Input-C0tej3s6.js";import"./Hidden-lp8KiHTo.js";import"./Button-XSu45boX.js";import"./useLabels-Cv4iHN_P.js";import"./useButton-CFFtuGbm.js";import"./useTextField-CE3BdgCR.js";import"./useControlledState-CvsrIW6T.js";import"./useField-SHucniBA.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dx3FsG3d.js";import"./Dialog-6GVh3Jeb.js";import"./OverlayArrow-C2Zs6ooA.js";import"./useResizeObserver-BNERkhke.js";import"./Collection-BuFB94CH.js";import"./index-BdIeoIee.js";import"./Separator-BHxadz7W.js";import"./SelectionManager-B25YHJY8.js";import"./useEvent-uGEaKInB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dbu_ggjF.js";import"./useDescription-Djzcv64r.js";import"./ListKeyboardDelegate-B0EJnu-g.js";import"./PressResponder-DJaNeCdk.js";import"./useLocalizedStringFormatter-ByLY54jA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zIN36Wbs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ClgLzi2l.js";import"./Button-Dyr0yQHX.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B-DKJptC.js";import"./createLucideIcon-Df5FTM0K.js";import"./x-Cbv80ht6.js";import"./Heading-Bf5zVwtP.js";import"./info-CPtkNmSm.js";import"./Popover-CgoIhE9r.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
