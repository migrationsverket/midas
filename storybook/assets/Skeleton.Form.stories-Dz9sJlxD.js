import{j as e,l}from"./iframe-CZTdAuLL.js";import{S as t}from"./Skeleton-ZsYZ030t.js";import{T as p}from"./TextField-TkcNA6Dz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CPUkoaVW.js";import"./utils-GGwn7RiQ.js";import"./TextField-DvR0dOlR.js";import"./FieldError-BY6a5paY.js";import"./Text-Dvj4eqEd.js";import"./useFocusRing-BSU_jsuo.js";import"./index-CbuYzQrS.js";import"./index-Dy_KSJtF.js";import"./Text-DZZVuCM0.js";import"./RSPContexts-oB4wdkDb.js";import"./Form-Bl1MSaTZ.js";import"./useFormValidation-JbXxfkzx.js";import"./Group-DSbr1dZp.js";import"./Input-DHbn4_zf.js";import"./Hidden-BdpD47Oa.js";import"./Button-DKjLxueu.js";import"./useLabels-BNcETZqg.js";import"./useButton-DXw3P5Be.js";import"./useTextField-B9Jzafy-.js";import"./useControlledState-CG6WOxF-.js";import"./useField-NQyyqEGl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1JQhNMS.js";import"./Dialog-D5GJeGKf.js";import"./OverlayArrow-BbZuFQb3.js";import"./useResizeObserver-BC8TBZMD.js";import"./Collection-CBIq2LLr.js";import"./index-sdVB9DoJ.js";import"./Separator-Cg_qLKvh.js";import"./SelectionManager-DFcqLyoF.js";import"./useEvent-BFknnVL3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-L5J_akna.js";import"./useDescription-DpLhcWK7.js";import"./ListKeyboardDelegate-CPIvui1d.js";import"./PressResponder-8Wrce3iX.js";import"./useLocalizedStringFormatter-CcV7KYjT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3S_ZR8pv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-O6FFlbhO.js";import"./Button--pbAGE4c.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-uEk36w.js";import"./createLucideIcon-BlxvcGuc.js";import"./x-CEAUK25F.js";import"./Heading-DZGMY1f3.js";import"./info-Dlx9Supt.js";import"./Popover-NCjz8AHy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
