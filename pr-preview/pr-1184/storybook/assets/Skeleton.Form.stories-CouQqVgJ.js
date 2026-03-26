import{j as e,l}from"./iframe-CmC6_uFn.js";import{S as t}from"./Skeleton-BAICL3xk.js";import{T as p}from"./TextField-Uwf_89_7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BIDJ4ySO.js";import"./utils-DpIGtToL.js";import"./FieldError-B-ZQXEeM.js";import"./Text-bLb0hYqG.js";import"./useFocusRing-CnXjVSj9.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./Text-ChJGU_Xm.js";import"./RSPContexts-CHkHxhdH.js";import"./Form-BSRHL6AU.js";import"./Group-D6oafy4R.js";import"./Input-3zQjtKDY.js";import"./Hidden-Ci7T1bEi.js";import"./Button-BfXSwHW0.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./useTextField-BbqiKWX0.js";import"./useControlledState-x3Q8v9NC.js";import"./useField-DSKyBuUi.js";import"./TextField.module-DdivwlC8.js";import"./Label-B4OX4ojE.js";import"./Dialog-D3ALXbDh.js";import"./OverlayArrow-B_8GOhMN.js";import"./useResizeObserver-5PwYRlCJ.js";import"./Collection-BGZfaZNZ.js";import"./index-FxwiPwmA.js";import"./Separator-j7qf1phg.js";import"./SelectionManager-0Zrx2NaO.js";import"./useEvent-lwkuKQG3.js";import"./scrollIntoView-AobHmSLH.js";import"./SelectionIndicator-C_ejA7zF.js";import"./useDescription-BV7Lh5gS.js";import"./ListKeyboardDelegate-C47es2n9.js";import"./PressResponder-CgjGrZSG.js";import"./useLocalizedStringFormatter-fVU3OA8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ccbo1JNi.js";import"./getScrollParent-TKe_y_ar.js";import"./VisuallyHidden-DhqoAnIr.js";import"./x-BfnY6ZJn.js";import"./createLucideIcon-DG07A9xd.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./Heading-CWx7pa9X.js";import"./Button-WgLWfZml.js";import"./Button.module-BB7N-cLd.js";import"./info-BSvY6DXA.js";import"./Popover-DhIRyh1t.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
