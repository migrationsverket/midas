import{j as e,l}from"./iframe-J_Foy-cM.js";import{S as t}from"./Skeleton-BeGxIc1l.js";import{T as p}from"./TextField-kCDdjzDY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CnG7fhxk.js";import"./utils-Dz1rr240.js";import"./FieldError-9aGj8mXQ.js";import"./Text-BHSQSgTv.js";import"./useFocusRing-rlJVVM4v.js";import"./index-8a3cgiya.js";import"./index-Dd4zAF9f.js";import"./Text-D0IbAA02.js";import"./RSPContexts-BVCTgtQm.js";import"./Form-JzMORks9.js";import"./useFormValidation-mgIONitn.js";import"./Group-BUsQ4vXP.js";import"./Input-dF1KhBn_.js";import"./Hidden-DnHm9fUz.js";import"./Button-BeN6WMHV.js";import"./useLabels-h3ysYapG.js";import"./useButton-CCCZVmzr.js";import"./useTextField-ylnOYFcB.js";import"./useControlledState-B1mfCV74.js";import"./useField-TIH1oN4J.js";import"./TextField.module-DdivwlC8.js";import"./Label-DZklb_1n.js";import"./Dialog-BOm7AbwC.js";import"./OverlayArrow-DAnWlHsl.js";import"./useResizeObserver-VbmeSySI.js";import"./Collection-BfxZDf5Q.js";import"./index-kYrM287H.js";import"./Separator-DKkPVFyh.js";import"./SelectionManager-Ca3L2vva.js";import"./useEvent-eqWhS--f.js";import"./scrollIntoView-Cjql2oy1.js";import"./SelectionIndicator-Dp5up_Gk.js";import"./useDescription-1dltK9bV.js";import"./ListKeyboardDelegate-k-1ZDdUB.js";import"./PressResponder-BLn2jHXx.js";import"./useLocalizedStringFormatter-DAYyyi0u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CrJnjvrG.js";import"./getScrollParent-Ck9-RDvg.js";import"./VisuallyHidden-JprstTB-.js";import"./Button-CvAdTJVn.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-BMhhJAIV.js";import"./createLucideIcon-DHjkRA8X.js";import"./x-DTQvMQic.js";import"./Heading-BgE0TLsm.js";import"./info-D5py6MZK.js";import"./Popover-D1pfTNI0.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
