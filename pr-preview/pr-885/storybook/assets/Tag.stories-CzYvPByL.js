import{j as a}from"./iframe-DAsMKx6b.js";import{T as o,a as i,s as D}from"./Tag-CAXxvEfL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B2ODB9Bb.js";import"./utils-CBKTldhH.js";import"./clsx-B-dksMZM.js";import"./Hidden-CaGGXfVd.js";import"./useFocusRing-BQ9mjcMu.js";import"./index-xov5c4TQ.js";import"./index-CJtBfqc2.js";import"./useLabels-CDxVxBxb.js";import"./useButton-CPOIEgFP.js";import"./Collection-CDzsaMjk.js";import"./index-C99w12YM.js";import"./ListBox-HxBtraQo.js";import"./DragAndDrop-ColiCHJt.js";import"./getScrollParent-1VPnZPFZ.js";import"./scrollIntoView-Bn4uyW_n.js";import"./Separator-BE_HVzx2.js";import"./SelectionManager-Fv9yh4ae.js";import"./useEvent-Dv4Cbh7_.js";import"./SelectionIndicator-DPAkrGv2.js";import"./useDescription-CwJj4I6y.js";import"./useControlledState-w0v7ndyw.js";import"./ListKeyboardDelegate-DEZS7WCD.js";import"./RSPContexts-DOHlgXS7.js";import"./Text-zKysMlRh.js";import"./inertValue-CYzS_xQu.js";import"./useListState--2_5Vh1q.js";import"./useHighlightSelectionDescription-BhJfKMWR.js";import"./useUpdateEffect-DyyEX5qZ.js";import"./useLocalizedStringFormatter-B6UYCQZc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CfGaltYe.js";import"./useField-C2ERGXn1.js";import"./clsx-Ciqy0D92.js";import"./Button-DtGauX6X.js";import"./Button.module-CcWMkJAG.js";import"./x-DwkuQgp2.js";import"./createLucideIcon-CTJ2ICqd.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
