import{j as e,l}from"./iframe-D9H9xcS2.js";import{S as t}from"./Skeleton-tHhrVlyi.js";import{T as p}from"./TextField-qJtn8WxE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CBIKFwY5.js";import"./utils-fDye7Hn-.js";import"./FieldError-CVRuJPZY.js";import"./Text-CVrEtWWi.js";import"./useFocusRing-Ceh5Z1MC.js";import"./index-BnIUjihK.js";import"./index-BmeqR-Yx.js";import"./Text-Dg1l2GcJ.js";import"./RSPContexts-BdMR1EyJ.js";import"./Form-DvYiAud_.js";import"./useFormValidation-B3qtubIU.js";import"./Group-1m9aZ3U-.js";import"./Input-Bjeu9Fil.js";import"./Hidden-DbKUAskx.js";import"./Button-Dy6Jv4XA.js";import"./useLabels-B07HLygv.js";import"./useButton-DlcBDUmj.js";import"./useTextField-BCyNkiM7.js";import"./useControlledState-CAi_EPd5.js";import"./useField-CqvzVwOJ.js";import"./TextField.module-Db-wpj-x.js";import"./Label-CYlHnNlu.js";import"./Dialog-BYvb6Isi.js";import"./OverlayArrow-DWRl7OHB.js";import"./useResizeObserver-DaHbRVle.js";import"./Collection-QXVY0Vqa.js";import"./index-CNTvhnoW.js";import"./Separator-DOLfmUqA.js";import"./SelectionManager-Bufj-R-c.js";import"./useEvent-DlZFMt0I.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B32U9fK1.js";import"./useDescription-Bb7bc4Rr.js";import"./ListKeyboardDelegate-CW31MGEJ.js";import"./PressResponder-ExeSBZ8G.js";import"./useLocalizedStringFormatter-CC37Fr-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D88WmgFz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C7ARzOYG.js";import"./Button-DGBu_aXN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJEgiUI-.js";import"./createLucideIcon-mT-ajzIy.js";import"./x-DeuWguVB.js";import"./Heading-Ccms1psw.js";import"./info-U0J78tqC.js";import"./Popover-cippIc05.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
