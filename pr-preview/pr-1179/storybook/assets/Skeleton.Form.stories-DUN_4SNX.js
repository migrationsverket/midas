import{j as e,l}from"./iframe-ArSWsRFy.js";import{S as t}from"./Skeleton-CjhPZkSx.js";import{T as p}from"./TextField-DahUAmVr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-cLw5mIYf.js";import"./utils-Bk01FJOF.js";import"./FieldError-BB8VxeZz.js";import"./Text-BQUF3iRq.js";import"./useFocusRing-CuEBX_ny.js";import"./index-h5O7gEHG.js";import"./index-CBhfX2fa.js";import"./Text-DS3DZlwG.js";import"./RSPContexts-CKQVnrYn.js";import"./Form-vy4xYy7s.js";import"./Group-DYodJDFD.js";import"./Input-DsE3bmq_.js";import"./Hidden-DhQXB3Em.js";import"./Button-BEQHwt_x.js";import"./useLabel-CGDLzIxe.js";import"./useLabels-P6wNBidM.js";import"./useButton-2SAmbr6R.js";import"./useTextField-CMi09hYa.js";import"./useControlledState-BLEc30eS.js";import"./useField-DlDxRxY8.js";import"./TextField.module-DdivwlC8.js";import"./Label-BdTDheCy.js";import"./Dialog-BGE7U275.js";import"./OverlayArrow-BfiwfXhj.js";import"./useResizeObserver-CR40r6I-.js";import"./Collection-DZCSkdwZ.js";import"./index-DU4gV6qj.js";import"./Separator-C42XK-kH.js";import"./SelectionManager-CNDAMxo0.js";import"./useEvent-CgDJG_HR.js";import"./scrollIntoView-DWLREkUa.js";import"./SelectionIndicator-Cqwo4HnX.js";import"./useDescription-CmtmyFdo.js";import"./ListKeyboardDelegate-8jmwT1OX.js";import"./PressResponder-Bj_Xw0Nh.js";import"./useLocalizedStringFormatter-C8sflf6-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-KcLlQzwX.js";import"./getScrollParent-i8KlRQrJ.js";import"./VisuallyHidden-B7lPtWpQ.js";import"./x-BmJ6_yih.js";import"./createLucideIcon-xPhfpX1g.js";import"./useLocalizedStringFormatter-BNDpmOum.js";import"./Heading-BDFRiPQe.js";import"./Button-B7NXJoV0.js";import"./Button.module-BB7N-cLd.js";import"./info-C-Waxotl.js";import"./Popover-tE_8b65N.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
