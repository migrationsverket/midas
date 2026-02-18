import{j as e,l}from"./iframe-3hz77_Bw.js";import{S as t}from"./Skeleton-DbGI1NiV.js";import{T as p}from"./TextField-wbs3EQKl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-0Vts11at.js";import"./utils-BKaZ30Q6.js";import"./FieldError-CKc2TwCy.js";import"./Text-DHFxKFv2.js";import"./useFocusRing-Bh-PYm_3.js";import"./index-552XOfHd.js";import"./index-CTmK-6Cc.js";import"./Text-BDBZNBDx.js";import"./RSPContexts-B04pKlss.js";import"./Form-At2zupqa.js";import"./useFormValidation-CPpL_rTl.js";import"./Group-DjZsCUz3.js";import"./Input-De8W8HZZ.js";import"./Hidden-CbefqEOU.js";import"./Button-Rs9y_WRS.js";import"./useLabels-_2fCXvXg.js";import"./useButton-COY7bHHb.js";import"./useTextField-Db1tnbow.js";import"./useControlledState-CHC7NptC.js";import"./useField-Di7jkhAl.js";import"./TextField.module-DBQiRr7K.js";import"./Label-BlFAvb3O.js";import"./Dialog-B1bsT1gU.js";import"./OverlayArrow-BXnV8co4.js";import"./useResizeObserver-D3GZDJQc.js";import"./Collection-CXK_BmZu.js";import"./index-CTPtxmwT.js";import"./Separator-BwkOpac5.js";import"./SelectionManager-rNIL6Xs6.js";import"./useEvent-BqmLLXEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BljGTP_D.js";import"./useDescription-lZYnuRxB.js";import"./ListKeyboardDelegate-CtDxpUtd.js";import"./PressResponder-HuKyHg2u.js";import"./useLocalizedStringFormatter-CyhZiFiB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoKBWbTA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bqRfvEGp.js";import"./Button-BMU_fnRD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKe3uMYT.js";import"./createLucideIcon-CMpCdTEI.js";import"./x-BcOVh6Rz.js";import"./Heading-3CXTTgbz.js";import"./info-bRR4hJIs.js";import"./Popover-DnI9o38N.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
