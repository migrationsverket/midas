import{j as e,l}from"./iframe-Dme4yjiu.js";import{S as t}from"./Skeleton-BgMTvvio.js";import{T as p}from"./TextField--YRp9DOD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Be2cGShc.js";import"./TextField-Cup0b4AQ.js";import"./utils-C0ovVE6C.js";import"./FieldError-CkJz2AaO.js";import"./Text-DXZYfMN_.js";import"./useFocusRing-BH-f8hm3.js";import"./index-BUbNZ358.js";import"./index-DKLwjLX-.js";import"./Text-DD713WO-.js";import"./RSPContexts-BQOpdmbl.js";import"./Form-DoobLXNm.js";import"./useFormValidation-DZ5-pBFL.js";import"./Group-DuwQKWbm.js";import"./Input-BsmPhkeK.js";import"./Hidden-BfVEj4RM.js";import"./Button-Bc7NjFRN.js";import"./useLabels-DXCBowKy.js";import"./useButton-lWQWllBE.js";import"./useTextField-Dtbsg06d.js";import"./useControlledState-b57QaJLr.js";import"./useField-Dd5lDbx0.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BBkilVP7.js";import"./Dialog-B_6NYUa7.js";import"./OverlayArrow-B7KMxShS.js";import"./useResizeObserver-C4nvYGQB.js";import"./Collection-CZI7j0K3.js";import"./index-CQtilxVo.js";import"./Separator-DPZyK2SN.js";import"./SelectionManager-DuN7DYtr.js";import"./useEvent-CHM24ifL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-IEEWCpsi.js";import"./useDescription-egMW7gsS.js";import"./ListKeyboardDelegate-DxAL8Vyz.js";import"./PressResponder-wu7pC01l.js";import"./useLocalizedStringFormatter-Cww_SUFY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-z6kZ4VOT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BChFqUzE.js";import"./Button-4EvhTNdZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8mUr0ZZo.js";import"./createLucideIcon-DWbFj2V-.js";import"./x-DTC-oJ1p.js";import"./Heading-BL3c0JYi.js";import"./info-CsBGPV4J.js";import"./Popover--6lby_-v.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
