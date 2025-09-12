import{j as a}from"./iframe-7c4G6udD.js";import{T as o,a as i,s as D}from"./Tag-DJ_ishzY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-4tMb33_E.js";import"./utils-DqMnFANe.js";import"./clsx-B-dksMZM.js";import"./Hidden-CDjhrcom.js";import"./useFocusRing-DHYnnItf.js";import"./index-gzCIwNL4.js";import"./index-Brsk0cEE.js";import"./useLabels-DKIBgnPx.js";import"./useButton-CvLzRZuG.js";import"./Collection-C9GeQ28X.js";import"./index-BDSEtDKv.js";import"./ListBox-CHGsSXYQ.js";import"./DragAndDrop-B2f70xOi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CgICEWn4.js";import"./SelectionManager-CUGejQog.js";import"./useEvent-D5eh0wyq.js";import"./FocusScope-CAARnTTi.js";import"./useDescription-C79pud3v.js";import"./useControlledState-B7RslXCk.js";import"./ListKeyboardDelegate-CXo-5gzu.js";import"./Text-DHFsN6x3.js";import"./inertValue-gK3cC4Al.js";import"./useListState-CRt8Enti.js";import"./useHighlightSelectionDescription-BTcSYWbl.js";import"./useUpdateEffect-CxpxMhYB.js";import"./useLocalizedStringFormatter-DcgZct_r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-EoWtO45c.js";import"./useField-CeLBknTd.js";import"./Button-Ttk0eY95.js";import"./Button.module-DRhvPh0f.js";import"./x-DoOQoyPf.js";import"./createLucideIcon-Bal6laq1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
