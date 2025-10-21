import{j as a}from"./iframe-D0MnHx7_.js";import{T as o,a as i,s as D}from"./Tag-DSOqcQbr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DmxnH2Va.js";import"./utils-pp0QcdTs.js";import"./clsx-B-dksMZM.js";import"./Hidden-Da0TrTOe.js";import"./useFocusRing-Da1HHjoJ.js";import"./index-CQZ3zNG1.js";import"./index-1Vm2fim1.js";import"./useLabels-CxIcwF3m.js";import"./useButton-ClVfglou.js";import"./Collection-i6C7_leR.js";import"./index-jzHelxYO.js";import"./ListBox-BMlCuX78.js";import"./DragAndDrop-DsEZuwID.js";import"./getScrollParent-BI86YgYn.js";import"./scrollIntoView-_ew6GoOj.js";import"./Separator-Cn_WlJvJ.js";import"./SelectionManager-BA1fc3H9.js";import"./useEvent-wUPEA5Yp.js";import"./SelectionIndicator-_6KlKWtr.js";import"./useDescription-BMrNXiBq.js";import"./useControlledState-D0vKbhZz.js";import"./ListKeyboardDelegate-CfPczcXS.js";import"./RSPContexts-CZnIKwCk.js";import"./Text-D0mypJCj.js";import"./inertValue-JdXB6oFO.js";import"./useListState-CRO9YIgf.js";import"./useHighlightSelectionDescription-BhzSBAIc.js";import"./useUpdateEffect-CXN2f07A.js";import"./useLocalizedStringFormatter-Bm0PpbKz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CmpkMFoD.js";import"./useField-DpA6EWAW.js";import"./clsx-Ciqy0D92.js";import"./Button-_otvzGNR.js";import"./Button.module-CcWMkJAG.js";import"./x-DQqWi-x9.js";import"./createLucideIcon-DpmW14MN.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
