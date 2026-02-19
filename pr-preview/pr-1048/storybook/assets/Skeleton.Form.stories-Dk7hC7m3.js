import{j as e,l}from"./iframe-yRPWKz3A.js";import{S as t}from"./Skeleton-C9WqTXfZ.js";import{T as p}from"./TextField-CvQVJLzY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9WrqddWN.js";import"./utils-YVdcHFiv.js";import"./FieldError-DMHHwpAd.js";import"./Text-BN91Y8yX.js";import"./useFocusRing-CAbobd4s.js";import"./index-CcWiq_3n.js";import"./index-DUJFKGcA.js";import"./Text-LxP77sjg.js";import"./RSPContexts-BcvAwuF9.js";import"./Form-FdfKyhwb.js";import"./useFormValidation-DBCFIZZo.js";import"./Group-DaKGGlpg.js";import"./Input-C98jFa-e.js";import"./Hidden-DZj0yzJG.js";import"./Button-D8bYImzz.js";import"./number-DfkVkf0F.js";import"./useLabels-Xwis0UQD.js";import"./useButton-BMOjGRCO.js";import"./useTextField-wm1SAiAm.js";import"./useControlledState-BarJv6Wp.js";import"./useField-301n7V83.js";import"./TextField.module-Dhscz2t0.js";import"./Label-DDCbekVq.js";import"./Dialog-DzRcsit3.js";import"./OverlayArrow-DuflyPmw.js";import"./useResizeObserver-mx3OnYIW.js";import"./Collection-B8SkfpOT.js";import"./index-DBHRQTL_.js";import"./Separator-BmT152mA.js";import"./SelectionManager-B85cEwAE.js";import"./useEvent-a-O8nmXP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmIxpJkr.js";import"./useDescription-Bug5IgMM.js";import"./ListKeyboardDelegate-B9EpQ450.js";import"./PressResponder-Dw11mD8a.js";import"./useLocalizedStringFormatter-jogrdBwj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2wNpKo7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cc0Z01Ry.js";import"./Modal-Bsfxv6lD.js";import"./Button-DGlNCwfb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8EuLi5lS.js";import"./createLucideIcon-Cf0XVHZS.js";import"./x-BKX7ip5H.js";import"./Heading-8u8ti_cc.js";import"./info-j9mLo7tP.js";import"./Popover-Mp6YIYJU.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ue=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ue as __namedExportsOrder,ge as default};
