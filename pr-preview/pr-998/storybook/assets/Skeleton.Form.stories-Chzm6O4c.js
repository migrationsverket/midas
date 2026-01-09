import{j as e,l}from"./iframe-DM_HNK6K.js";import{S as t}from"./Skeleton-1p43mJ55.js";import{T as p}from"./TextField-DIxfVTKg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CqMZUtUX.js";import"./utils-BrnuSJ1-.js";import"./TextField-faV5BBpt.js";import"./FieldError-Bkja58-g.js";import"./Text-ClUc-h5K.js";import"./useFocusRing-Dh1RhkUQ.js";import"./index-Dn5q0CGw.js";import"./index-DbczpIcn.js";import"./Text-DJJ4vhAg.js";import"./RSPContexts-DZ1TGWQo.js";import"./Form-C0kUAQcP.js";import"./useFormValidation-CRZRQtSn.js";import"./Group-BYMT47Rc.js";import"./Input-C2_kuM08.js";import"./Hidden-CaMcuicU.js";import"./Button-ExABwgM4.js";import"./useLabels-CvROpDKQ.js";import"./useButton-aRK5nu44.js";import"./useTextField-DA3pBNBV.js";import"./useControlledState-DKYWtKkY.js";import"./useField-Aw6Lq2ji.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BszXdQtI.js";import"./Dialog-r9mginhE.js";import"./OverlayArrow-683XZ0gQ.js";import"./useResizeObserver-qqMQ1oti.js";import"./Collection-BOowsvXY.js";import"./index-D10AwL2b.js";import"./Separator-DlkC4zR8.js";import"./SelectionManager-D8tPvRiP.js";import"./useEvent-CHMmmgOy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPhi3N2D.js";import"./useDescription-BZWTwB3o.js";import"./ListKeyboardDelegate-DWuOe_GH.js";import"./PressResponder-DNbJzU0f.js";import"./useLocalizedStringFormatter-dQ_9X6cS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIeWPZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-AtXRcW43.js";import"./Button-Hxka-VYw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfWcX_0m.js";import"./createLucideIcon-BtlDpUqt.js";import"./x-Do2AzdKO.js";import"./Heading-C596kiRQ.js";import"./info-BnCYBS_N.js";import"./Popover-CYLdM0iy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
