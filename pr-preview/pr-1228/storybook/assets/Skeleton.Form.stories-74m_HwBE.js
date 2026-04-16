import{j as e,l}from"./iframe-Bv6YAP-H.js";import{S as t}from"./Skeleton-BZUHuFRb.js";import{T as p}from"./TextField-DwzlTW6x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BcXpfXkp.js";import"./utils-aKxnkjqL.js";import"./FieldError-aQet2mym.js";import"./Text-CrHwImJG.js";import"./useFocusRing-vLQdNIKu.js";import"./index-wSw7Ttva.js";import"./index-B4SFKLec.js";import"./Text-DPW0E3tR.js";import"./RSPContexts-Cmel4BHs.js";import"./Form-Ch32kDXo.js";import"./Group-BxiqzYT5.js";import"./Input-Dda4_dBe.js";import"./Hidden-DhnPUChE.js";import"./Button-1f9Yc7Mz.js";import"./useLabel-D6pTBZvb.js";import"./useLabels-DAH0at8A.js";import"./useButton-B6E3_51_.js";import"./useTextField-DdZE-cM7.js";import"./useControlledState-CcT1w6-I.js";import"./useField-BF1xuw3-.js";import"./TextField.module-DdivwlC8.js";import"./Label-Vbhk7I9y.js";import"./Dialog-DF3beP_F.js";import"./OverlayArrow-CwvX6o9-.js";import"./useResizeObserver-R4IL46zg.js";import"./Collection-B4VcNlct.js";import"./index-K7IduVvo.js";import"./Separator-CKQgzynH.js";import"./SelectionManager-BHNfLphX.js";import"./useEvent-BaPHHBlD.js";import"./scrollIntoView-CfOu5aQk.js";import"./SelectionIndicator-BxOQVkwD.js";import"./useDescription-y5DJBmVT.js";import"./ListKeyboardDelegate-BCkVVRiL.js";import"./PressResponder-izydr2CK.js";import"./useLocalizedStringFormatter-BTXjr0WF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGnHuomg.js";import"./getScrollParent-CmM-5YOM.js";import"./VisuallyHidden-DEiD2GQe.js";import"./ModalOverlay-CVZkVZIz.js";import"./x-BdrId5d4.js";import"./createLucideIcon-DlyUrHS2.js";import"./useLocalizedStringFormatter-Bn39dXyI.js";import"./Heading-oW__33Cy.js";import"./Button-BH5A087H.js";import"./Button.module-BB7N-cLd.js";import"./info-BaL1Nyrh.js";import"./Popover-C_tDEwHr.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
