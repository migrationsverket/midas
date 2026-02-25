import{j as e,l}from"./iframe-Dp43kgFY.js";import{S as t}from"./Skeleton-By0nSsUT.js";import{T as p}from"./TextField-CI4ZxIv-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DtfFwauT.js";import"./utils-CQURC1dK.js";import"./FieldError-fHEQddPz.js";import"./Text-CqEImv_2.js";import"./useFocusRing-DuecCpf4.js";import"./index-l95OD-BB.js";import"./index-DdtjAW4o.js";import"./Text-Bo7dFu1i.js";import"./RSPContexts-ChoQx1hy.js";import"./Form-CLRQAu8w.js";import"./useFormValidation-B7nz_rt_.js";import"./Group-BKdMgwtw.js";import"./Input-6CkdRDdh.js";import"./Hidden-ypOha8Sj.js";import"./Button-Bq7x_9-Y.js";import"./useLabels-COsyDR1S.js";import"./useButton-D3tp8nbg.js";import"./useTextField-BU47s5IU.js";import"./useControlledState-DJq_g7YW.js";import"./useField-BlDlosfz.js";import"./TextField.module-DdivwlC8.js";import"./Label-hHB44W8u.js";import"./Dialog-BIhM1PAG.js";import"./OverlayArrow-DNqvtwwY.js";import"./useResizeObserver-HjKUFyYm.js";import"./Collection-D2xmrWHG.js";import"./index-B5mME82v.js";import"./Separator-Z9nQDNqM.js";import"./SelectionManager-DtayW_nU.js";import"./useEvent-DT_nKyT3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-oQR-g-8x.js";import"./useDescription-CTRJEwnt.js";import"./ListKeyboardDelegate-Cmq15C0M.js";import"./PressResponder-SHPYMhEz.js";import"./useLocalizedStringFormatter-MZozDBHj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COrJ4GSf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DkuOGL8E.js";import"./Button-O1BOKm9x.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Co-CJ4tv.js";import"./createLucideIcon-D72gX86M.js";import"./x-DGEzAbXD.js";import"./Heading-DZgEA9s4.js";import"./info-LNHF0vvQ.js";import"./Popover-BV4Mt4D0.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
