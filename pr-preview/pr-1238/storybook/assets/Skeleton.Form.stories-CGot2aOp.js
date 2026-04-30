import{j as e,l}from"./iframe-D83U9Jbw.js";import{S as t}from"./Skeleton-BPnB1C1N.js";import{T as p}from"./TextField-BtOqkfHk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DvadCFeA.js";import"./utils-C_gFKVIz.js";import"./FieldError-D6NpRoO1.js";import"./Text-BuTxUZYo.js";import"./useFocusRing-Dv4ce94Y.js";import"./index-WtMp4oUJ.js";import"./index-B1HH0YAv.js";import"./Text-CHHIfo1k.js";import"./RSPContexts-ChOs0gX9.js";import"./Form-BsAOBJ02.js";import"./Group-BnP0WtNk.js";import"./Input-BZzTz_QA.js";import"./Hidden-C0_hFnsL.js";import"./Button-u3kjlioi.js";import"./useLabel-Bzi_sPr8.js";import"./useLabels-DObCV9cv.js";import"./useButton-CLqFKr2I.js";import"./useTextField-B9BUlNYU.js";import"./useControlledState-DDqmXAM3.js";import"./useField-BLYC98Mc.js";import"./TextField.module-DdivwlC8.js";import"./Label-uIWG8QjI.js";import"./Dialog-DmWEwvnz.js";import"./OverlayArrow-B_C0xGPC.js";import"./useResizeObserver-C6KtlSCD.js";import"./Collection-HGZf4RXY.js";import"./index-BkqBqLPa.js";import"./Separator-CRT8ZXG6.js";import"./SelectionManager-BLkPK2O4.js";import"./useEvent-CpjHCQK_.js";import"./scrollIntoView-VfHWbuBY.js";import"./SelectionIndicator-Ci7z2GGd.js";import"./useDescription-CVN4gXFi.js";import"./ListKeyboardDelegate-Ch9tR-gt.js";import"./PressResponder-mtxETk4T.js";import"./useLocalizedStringFormatter-C9FHlYP_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-EtJKnU.js";import"./getScrollParent-DQrxFRpX.js";import"./VisuallyHidden-DuKcmmSu.js";import"./ModalOverlay-BtGRJ_vI.js";import"./x-BzoY_Db8.js";import"./createLucideIcon-c1bwsPcC.js";import"./useLocalizedStringFormatter-CPm18cyu.js";import"./Heading-DRQ0iyab.js";import"./Button-ayYEduOo.js";import"./Button.module-BB7N-cLd.js";import"./info-DZZhk5SE.js";import"./Popover-D4IK6SEx.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
