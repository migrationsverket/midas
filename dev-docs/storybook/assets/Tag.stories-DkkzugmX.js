import{j as a}from"./iframe-DHMeLgA1.js";import{T as o,a as i,s as D}from"./Tag-CuOtvQXr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DiWVEykM.js";import"./utils-a2jXawL2.js";import"./clsx-B-dksMZM.js";import"./Hidden-CLKgPyS2.js";import"./useFocusRing-Ce3VIprI.js";import"./index-Bj3s_lBZ.js";import"./index-B6RSE-c8.js";import"./useLabels-DIQQiIer.js";import"./useButton-DzQB1COm.js";import"./Collection-B3NLl8mC.js";import"./index-D7BkVUjr.js";import"./ListBox-DLxIPiT6.js";import"./DragAndDrop-Bc9rNpkb.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DDv4reJ4.js";import"./SelectionManager-ItbxeDuH.js";import"./useEvent-DOW5LOth.js";import"./FocusScope-C4HKmzAM.js";import"./useDescription-DQivp0SL.js";import"./useControlledState-VDjeOCh_.js";import"./ListKeyboardDelegate-BaXGzmv8.js";import"./Text-9Icw_rur.js";import"./inertValue-DXqH9Xz6.js";import"./useListState-CN_Lxw7o.js";import"./useHighlightSelectionDescription-CBUTi92T.js";import"./useUpdateEffect-Bzr3Pawr.js";import"./useLocalizedStringFormatter-DsHIGWOi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CYlTg6F9.js";import"./useField-sNkfgueN.js";import"./Button-DmUzV4d1.js";import"./Button.module-BkTnSRp5.js";import"./x-T5wZSppo.js";import"./createLucideIcon-DJmVfspb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
