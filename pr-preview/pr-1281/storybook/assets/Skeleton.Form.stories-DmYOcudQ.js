import{j as e,l}from"./iframe-CMUT-aY9.js";import{S as t}from"./Skeleton-BQ_5yiYb.js";import{T as p}from"./TextField-CtwlREp-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_XXAgI2m.js";import"./utils-x-Fz6ypf.js";import"./FieldError-BcWgF-Sz.js";import"./Text-BjIPArye.js";import"./useFocusRing-D378a6oQ.js";import"./index-j8YavyCt.js";import"./index-CqplKhbN.js";import"./Text-CdDgL-we.js";import"./RSPContexts-CAfUuHUZ.js";import"./Form-DgYdTUS7.js";import"./Group-BWScwyqa.js";import"./Input-DFrsvt9d.js";import"./Hidden-BmEcMQf3.js";import"./Button-CgVVJh0n.js";import"./useLabel-D7aQ5vjs.js";import"./useLabels-DlsJNfJR.js";import"./useButton-PZHXztAT.js";import"./useTextField-BPvBp5iZ.js";import"./useControlledState-BVAe2WbZ.js";import"./useField-C0qHtOlI.js";import"./TextField.module-DdivwlC8.js";import"./Label-qVtS0eav.js";import"./Dialog-BWo9KHc3.js";import"./OverlayArrow--ZC8Uo7u.js";import"./useResizeObserver-CEERAmrN.js";import"./Collection-DACuoUr3.js";import"./index-BEes7jX8.js";import"./Separator-BjTPBP6R.js";import"./SelectionManager-EkeIU2ti.js";import"./useEvent-Bali3OPG.js";import"./scrollIntoView-Dk0hb8O6.js";import"./SelectionIndicator-PFHf5Vkm.js";import"./useDescription-BGt3XOT5.js";import"./ListKeyboardDelegate-FyBaGESI.js";import"./PressResponder-B1vSOFem.js";import"./useLocalizedStringFormatter-CTG8JuvI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmuUCG3g.js";import"./getScrollParent-BxpbEdf1.js";import"./VisuallyHidden-CLkRcp8r.js";import"./ModalOverlay-CS1F3Ybv.js";import"./x-DhHcyfDV.js";import"./createLucideIcon-B4JXtaTl.js";import"./useLocalizedStringFormatter-BhfoWyv5.js";import"./Heading-ZZ174H7o.js";import"./Button-BLzEeOtL.js";import"./Button.module-BB7N-cLd.js";import"./info-CFK0X6M7.js";import"./Popover-CerYyklQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
