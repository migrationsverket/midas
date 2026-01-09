import{j as e,l}from"./iframe-kbhJnT9w.js";import{S as t}from"./Skeleton-rXelP2dh.js";import{T as p}from"./TextField-4ggakJx4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DW4ia68f.js";import"./TextField-kmcSlHKQ.js";import"./utils-BIWQukqa.js";import"./FieldError-BjDoFXdk.js";import"./Text-Bx3yC9L1.js";import"./useFocusRing-D8-czbxO.js";import"./index-zuYBL4Lo.js";import"./index-7Y8nIPcc.js";import"./Text-DNo-c8E4.js";import"./RSPContexts-CpYiUO21.js";import"./Form-Sz63W5mX.js";import"./useFormValidation-B19BTBT3.js";import"./Group-CJikS2_D.js";import"./Input-DEJmcne5.js";import"./Hidden-DLSrH6le.js";import"./Button-CJhwVjkq.js";import"./useLabels-C4BeTwXz.js";import"./useButton-DnRhcX8P.js";import"./useTextField-BYRnC2DJ.js";import"./useControlledState-BmDsoGZM.js";import"./useField-DWW2mLhZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-yLv35Oa7.js";import"./Dialog-DCPwMQF2.js";import"./OverlayArrow-DWlWKxC4.js";import"./useResizeObserver-Dti6xn4y.js";import"./Collection-CMsKZrzA.js";import"./index-DnSiiI5S.js";import"./Separator-DTiKf-In.js";import"./SelectionManager-BZPl8iel.js";import"./useEvent-B_EArHEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BO1jws8h.js";import"./useDescription-DS99e2CE.js";import"./ListKeyboardDelegate-CYV2I6jz.js";import"./PressResponder-D7_J9MXE.js";import"./useLocalizedStringFormatter-DnDmMNZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSHBvtn7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BElvd5Sz.js";import"./Button-2yQDInF3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DENJ27Hf.js";import"./createLucideIcon-MdX6GIq3.js";import"./x-Db3eMiaL.js";import"./Heading-oKhQjAka.js";import"./info-ImPqQnBe.js";import"./Popover-_o8rL1se.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
