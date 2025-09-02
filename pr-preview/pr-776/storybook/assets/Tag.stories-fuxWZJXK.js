import{j as a}from"./iframe-DH2Gx0Ud.js";import{T as o,a as i,s as D}from"./Tag-DsAeaQi3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-uXsnUvJd.js";import"./utils-3KFB3ajO.js";import"./clsx-B-dksMZM.js";import"./Hidden-BYMikgpC.js";import"./useFocusRing-Sn1eX78u.js";import"./index-CpvnbC2S.js";import"./index-Dstc05p1.js";import"./useLabels-wxoJPCU_.js";import"./useButton-B9O2Kaft.js";import"./Collection-DITETa1G.js";import"./index-CWLeO-FQ.js";import"./ListBox-CQZqaSdm.js";import"./DragAndDrop-B_UQcwVC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C8BNDXrK.js";import"./SelectionManager-yktNWr7c.js";import"./useEvent-Boo6xKyS.js";import"./FocusScope-BslWwFUL.js";import"./useDescription-DGsMSsoo.js";import"./useControlledState-DRwzZhIl.js";import"./ListKeyboardDelegate-CAw6gimi.js";import"./Text-CQUQA4ZN.js";import"./inertValue-Dv-RyiUI.js";import"./useListState-BRmoZFNI.js";import"./useHighlightSelectionDescription-Bn_9h6kg.js";import"./useUpdateEffect-BKRpOjHC.js";import"./useLocalizedStringFormatter-BQYbT8TD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BpGhunoM.js";import"./useField-DMaEHpAw.js";import"./Button-BWn7xZ64.js";import"./Button.module-DWkXlqFG.js";import"./x-QSb5yQih.js";import"./createLucideIcon-BdNGfo6D.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
