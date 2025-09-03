import{j as a}from"./iframe-D4j68Z3o.js";import{T as o,a as i,s as D}from"./Tag-CAjau4be.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B4WdOshS.js";import"./utils-kKQFDVXf.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPr9wC78.js";import"./useFocusRing-NtxIBNKG.js";import"./index-B9LH5Ja8.js";import"./index-BI7wbsor.js";import"./useLabels-D-vtZ-Ug.js";import"./useButton--F_muSQZ.js";import"./Collection-CIRcn_7n.js";import"./index-CnugqBTy.js";import"./ListBox-Cf0JhpbK.js";import"./DragAndDrop-1DM4Y5-e.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B7pNXU4C.js";import"./SelectionManager-BZjQdwHG.js";import"./useEvent-C8tuUvLB.js";import"./FocusScope-CYJhWXiN.js";import"./useDescription-Ut6Jex1y.js";import"./useControlledState-CaVMxakv.js";import"./ListKeyboardDelegate-AjLvp5Yf.js";import"./Text-W62juqB5.js";import"./inertValue-DrnssGsv.js";import"./useListState-DpkWKtLw.js";import"./useHighlightSelectionDescription-Y9CnXPNd.js";import"./useUpdateEffect-DTZDK3Rb.js";import"./useLocalizedStringFormatter-9-MrBgbC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C804PrVt.js";import"./useField-DvzASyW5.js";import"./Button-DIE0kvTI.js";import"./Button.module-DWkXlqFG.js";import"./x-C3iZ2aA2.js";import"./createLucideIcon-DWGaSrqj.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
