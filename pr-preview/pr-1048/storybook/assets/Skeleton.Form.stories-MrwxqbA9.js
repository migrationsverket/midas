import{j as e,l}from"./iframe-BOj75HPM.js";import{S as t}from"./Skeleton-CXAvITh9.js";import{T as p}from"./TextField-D-fhsPss.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_OpCBAIu.js";import"./utils-DiwTvY5r.js";import"./TextField-DzZsbjCQ.js";import"./FieldError-Dn9sUL3A.js";import"./Text-KcBRsMfX.js";import"./useFocusRing-BvD21wMG.js";import"./index-tbjRw6nF.js";import"./index-DauoXUb-.js";import"./Text-y5UsFp3a.js";import"./RSPContexts-Dd30z721.js";import"./Form-CWKKuFQR.js";import"./useFormValidation-CR9InUTF.js";import"./Group-CSaInhYh.js";import"./Input-DSUuqs6g.js";import"./Hidden-DX_ysAyq.js";import"./Button-D1stJH9t.js";import"./useLabels-BszWTWtA.js";import"./useButton-rMDDSnSZ.js";import"./useTextField-6X4K6aCh.js";import"./useControlledState-7gBIOf2A.js";import"./useField-Dj0XVRBs.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CSDBl07K.js";import"./Dialog-Bzd92NLg.js";import"./OverlayArrow-CdSn3l12.js";import"./useResizeObserver-B0Vk_8hR.js";import"./Collection-C9umSaxr.js";import"./index-CPEUDevc.js";import"./Separator-Bo63Wbjo.js";import"./SelectionManager-DKvFADB7.js";import"./useEvent-CEhlIHx6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJEhgAnj.js";import"./useDescription-CWm0ggy2.js";import"./ListKeyboardDelegate-BswjCwMk.js";import"./PressResponder-Il8IXh95.js";import"./useLocalizedStringFormatter-C6wF7Mfo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aYlr6XzC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRoRIbBJ.js";import"./Modal-B86JywTt.js";import"./Button-CG3q9yng.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-iBqt7kI1.js";import"./createLucideIcon-BmLW6X-c.js";import"./x-DHOL_7dr.js";import"./Heading-j4po0ei9.js";import"./info-Dn4DwaoR.js";import"./Popover-DTMgA__S.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
