import{j as e,l}from"./iframe-BGGCyDgM.js";import{S as t}from"./Skeleton-4XmB8f6d.js";import{T as p}from"./TextField-C5972Abr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-QwcEc5A3.js";import"./utils-DO-F69_Y.js";import"./TextField-CSIdvX37.js";import"./FieldError-Dl2BDJut.js";import"./Text-eYsAB99o.js";import"./useFocusRing-CgXHCqVS.js";import"./index-D897gEwO.js";import"./index-B5Wjey1h.js";import"./Text-f8Fpe_5q.js";import"./RSPContexts-DD_BGhEj.js";import"./Form-C0kbRUma.js";import"./useFormValidation-FPzZWdfk.js";import"./Group-DXxuXbTg.js";import"./Input-BdesbQvk.js";import"./Hidden-C8IUZiWg.js";import"./Button-Cx7yfezp.js";import"./useLabels-BYquqqxS.js";import"./useButton-BLQQLHjW.js";import"./useTextField-J3PSPvGh.js";import"./useControlledState-B0GTzqoE.js";import"./useField-7woY0xAJ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-O0l3StCg.js";import"./Dialog-DXx9JGxU.js";import"./OverlayArrow-BEwPagYl.js";import"./useResizeObserver-CMmR615Z.js";import"./Collection-CQwjMubf.js";import"./index-JLP76Q_E.js";import"./Separator-OnEnhmwE.js";import"./SelectionManager-Bp0yhV_i.js";import"./useEvent-DqUhpkp2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DurNKVRD.js";import"./useDescription-DxzFv_6R.js";import"./ListKeyboardDelegate-jAlOM_cw.js";import"./PressResponder-BLVphphK.js";import"./useLocalizedStringFormatter-DTenb4Ru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3jFfyUz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-i3QblTNI.js";import"./Button-CbQXvBqq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEbUSZ1g.js";import"./createLucideIcon-DYtt1YAX.js";import"./x-DG2uGBCX.js";import"./Heading-C52-gJ0N.js";import"./info-BTZWfK7c.js";import"./Popover-BoKhiQsj.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
