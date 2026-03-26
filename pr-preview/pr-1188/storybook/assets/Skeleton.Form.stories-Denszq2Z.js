import{j as e,l}from"./iframe-BhCsjan0.js";import{S as t}from"./Skeleton-LrxTl6E_.js";import{T as p}from"./TextField-Cze3sBh_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D-XD7cRt.js";import"./utils-CtrZbhzi.js";import"./FieldError-d9D7STve.js";import"./Text-DhUSBMS-.js";import"./useFocusRing-Ws2f8SLu.js";import"./index-DDDUdMNC.js";import"./index-D_WqKMc5.js";import"./Text-CFjsaxmQ.js";import"./RSPContexts-CrHrywo6.js";import"./Form-rvJLQRoR.js";import"./Group-C95TnjTD.js";import"./Input-DGZJAsbZ.js";import"./Hidden-D6UeEvFM.js";import"./Button-C2NaQWvO.js";import"./useLabel-B7TVwUpE.js";import"./useLabels-BLj4vdHd.js";import"./useButton-By7DbLK9.js";import"./useTextField-Bkbtnl5J.js";import"./useControlledState-CoCU8B0S.js";import"./useField-Cfm5ic33.js";import"./TextField.module-DdivwlC8.js";import"./Label-DIjt93Sh.js";import"./Dialog-6jn4yg57.js";import"./OverlayArrow-C6N_fte3.js";import"./useResizeObserver-BKu7HBuy.js";import"./Collection-DM4I3Ztv.js";import"./index-CoQv-Sjc.js";import"./Separator-DkPdqceJ.js";import"./SelectionManager-CNKK__7r.js";import"./useEvent-DNglUoLW.js";import"./scrollIntoView-DYsCjaxp.js";import"./SelectionIndicator-1Pn5e84b.js";import"./useDescription-B1CS-p0E.js";import"./ListKeyboardDelegate-BBCtkR3X.js";import"./PressResponder-BH8ZS3ke.js";import"./useLocalizedStringFormatter-DQmyBNjM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7iI9wL4.js";import"./getScrollParent-NPr2J27f.js";import"./VisuallyHidden-CfUMAOQ3.js";import"./x-DuKAZAyJ.js";import"./createLucideIcon-Bp2jaLbZ.js";import"./useLocalizedStringFormatter-K5Z3y1WJ.js";import"./Heading-ycVFTWje.js";import"./Button-1iG7gZrx.js";import"./Button.module-BB7N-cLd.js";import"./info-CD6NIFY9.js";import"./Popover-BMdUSeGF.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
