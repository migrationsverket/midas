import{j as e,l}from"./iframe-DFa3xMtH.js";import{S as t}from"./Skeleton-BelggnXA.js";import{T as p}from"./TextField-7gaWXitd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B6NDm1JZ.js";import"./utils-BcZWRu-T.js";import"./TextField-BGKvPGb6.js";import"./FieldError-DDcEoLvd.js";import"./Text-BCIdAzOc.js";import"./useFocusRing-DTF2LQQu.js";import"./index-14R2kEQz.js";import"./index-BImQHuZW.js";import"./Text-CLgVcmAF.js";import"./RSPContexts-DlObjR3U.js";import"./Form-B9zhWkYb.js";import"./useFormValidation-CZZHKzo3.js";import"./Group-Cb-h4LVU.js";import"./Input-BzReZ8h2.js";import"./Hidden-syp9xi-M.js";import"./Button-ocYHggw0.js";import"./useLabels-DTa4O1hk.js";import"./useButton-BkRX4biF.js";import"./useTextField-BOpYqqyG.js";import"./useControlledState-DlMrxxrC.js";import"./useField-ClGbo0E5.js";import"./TextField.module-1fNSVGjT.js";import"./Label-B8lYr4O8.js";import"./Dialog-BxcM2ig8.js";import"./OverlayArrow-sxMCWPoz.js";import"./useResizeObserver-DY4A22tz.js";import"./Collection-BkC_HYu3.js";import"./index-C2EOBSzk.js";import"./Separator-DJQBe1ux.js";import"./SelectionManager-CTcSNJ1U.js";import"./useEvent-B4KRxCDO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BbaKMaGf.js";import"./useDescription-C-peboUL.js";import"./ListKeyboardDelegate--oOTktEO.js";import"./PressResponder-an9ltkUz.js";import"./useLocalizedStringFormatter-D8vesOTf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1WugCT7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BeIfbn57.js";import"./Button-_PEtoZlZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BcKupi0h.js";import"./createLucideIcon-CG_uvONP.js";import"./x-BuIg2Jvd.js";import"./Heading-Dr6x3va7.js";import"./info-CBLR6nAo.js";import"./Popover-BbApMzNe.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
