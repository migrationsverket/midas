import{j as e,l}from"./iframe-BKVZlbwK.js";import{S as t}from"./Skeleton-D0WXZdu2.js";import{T as p}from"./TextField-DufJaJGc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-fmmuzuLS.js";import"./utils-DPuolxVc.js";import"./TextField-Dwl76fkc.js";import"./FieldError-DDgadqx5.js";import"./Text-B3d4ibdb.js";import"./useFocusRing-B5vFDtZh.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./Text-B3rWnA0b.js";import"./RSPContexts-B4IeL1gt.js";import"./Form-C1pExWr0.js";import"./useFormValidation-B2K6ECOw.js";import"./Group-YxT0Sugc.js";import"./Input-CV5OBzBf.js";import"./Hidden-BRpSC0Ka.js";import"./Button-BXNg7Jsx.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./useTextField-Cc-YORei.js";import"./useControlledState-DGZkTwEL.js";import"./useField-_-3BWxJQ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CCnwf94q.js";import"./Dialog-DyLYXNfk.js";import"./OverlayArrow-M76ULew0.js";import"./useResizeObserver-CrYaDSu2.js";import"./Collection-BX0rPR2l.js";import"./index-B_usJpQo.js";import"./Separator-FYBudPC2.js";import"./SelectionManager-D5x3q2vB.js";import"./useEvent-vLHKVDXB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWqxxjhH.js";import"./useDescription-xVVRlRNW.js";import"./ListKeyboardDelegate-CWBS7xji.js";import"./PressResponder-ycJef-yO.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmrdo5L6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRvu9CAK.js";import"./Button-CMuF6ttX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";import"./createLucideIcon-DBPtg95-.js";import"./x-grlvjwkz.js";import"./Heading--57vxiPm.js";import"./info-BkDIh8cC.js";import"./Popover-vbRgXQBq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
