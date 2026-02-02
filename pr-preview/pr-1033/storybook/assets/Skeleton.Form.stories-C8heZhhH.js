import{j as e,l}from"./iframe-DuE5icfx.js";import{S as t}from"./Skeleton-BvWlOxTe.js";import{T as p}from"./TextField-CPejLDhA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DETz8Y4g.js";import"./utils-ClhP-E5R.js";import"./TextField-r_5tU1hL.js";import"./FieldError-BFyaRGX_.js";import"./Text-BXig9__r.js";import"./useFocusRing-C6UsRVMD.js";import"./index-BKNEv364.js";import"./index-jcTA0EzM.js";import"./Text-CskgBW_y.js";import"./RSPContexts-C1VlAvM7.js";import"./Form-DOfclX9s.js";import"./useFormValidation-Bbe7QGfP.js";import"./Group-CmLWmH3d.js";import"./Input-D_UnSsJG.js";import"./Hidden-CGryAwqK.js";import"./Button-CHVND5il.js";import"./useLabels-NFESUEmH.js";import"./useButton-Dpm-9eMP.js";import"./useTextField-CwOwuKg2.js";import"./useControlledState-C06eYFfj.js";import"./useField-DnEzaulG.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CbrWazEK.js";import"./Dialog-DyZ_h4Jd.js";import"./OverlayArrow-3SSqXbsH.js";import"./useResizeObserver-SHhanVle.js";import"./Collection-Beb5fNjH.js";import"./index-B4wfGW7k.js";import"./Separator-DkqVBvNJ.js";import"./SelectionManager-DMIwF5l7.js";import"./useEvent-BRXH6lvV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D6xEBqZE.js";import"./useDescription-E9xNjaIp.js";import"./ListKeyboardDelegate-D0carfBq.js";import"./PressResponder-I9_UbcR6.js";import"./useLocalizedStringFormatter-mdX2hkSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DxoF6PGu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-WoYUvN7P.js";import"./Button-Bv12ZKrk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdcJq8tj.js";import"./createLucideIcon-Cky2pY6t.js";import"./x-BFEUyRfl.js";import"./Heading-Bnu1vsMs.js";import"./info-D0VMjfkJ.js";import"./Popover-CODENQtf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
