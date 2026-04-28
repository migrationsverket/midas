import{j as e,l}from"./iframe-Ft30p-9G.js";import{S as t}from"./Skeleton-BZEOrFoF.js";import{T as p}from"./TextField-BSLYf7l1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CiXx5F7Z.js";import"./utils-9foVijX8.js";import"./FieldError-DXrI8o23.js";import"./Text-FkyfMeaB.js";import"./useFocusRing-Daa2jsSP.js";import"./index-xpQNWkGI.js";import"./index-Cc81j565.js";import"./Text-C3E5lXGF.js";import"./RSPContexts-c5guVd-d.js";import"./Form-Bj-ULx6B.js";import"./Group-w47T-z_V.js";import"./Input-BGurIZni.js";import"./Hidden-BvmG-LpB.js";import"./Button-C-EJ5lIE.js";import"./useLabel-BF5tAiqY.js";import"./useLabels-Dd0Yyu-4.js";import"./useButton-jc4sCZEH.js";import"./useTextField-BN-yaNMF.js";import"./useControlledState-BoeB8-LH.js";import"./useField-DK19wDNW.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cuxethf6.js";import"./Dialog-DU3hHvhP.js";import"./OverlayArrow-DgIPD6IU.js";import"./useResizeObserver-74yGwHpi.js";import"./Collection-B5Vl67r5.js";import"./index-DG6iaBfL.js";import"./Separator-C8tqssik.js";import"./SelectionManager-BCfuDrZc.js";import"./useEvent-D1GkMq6I.js";import"./scrollIntoView-DnLyLCcJ.js";import"./SelectionIndicator-CvaKVrwY.js";import"./useDescription-Bw7Qhe2x.js";import"./ListKeyboardDelegate-M7dQ7t4z.js";import"./PressResponder-C7gwAmKP.js";import"./useLocalizedStringFormatter-Bn-aGXyh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CIQK1dvP.js";import"./getScrollParent-D-S2JtE9.js";import"./VisuallyHidden-BmzQFOM6.js";import"./ModalOverlay-CbheC8C0.js";import"./x-DG1ChVHS.js";import"./createLucideIcon-D4F6iW4h.js";import"./useLocalizedStringFormatter-BWzTIlWv.js";import"./Heading-ghBbGpaI.js";import"./Button-CEZ1lvwe.js";import"./Button.module-BB7N-cLd.js";import"./info-CjNMAkzt.js";import"./Popover-qU36_nDU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
