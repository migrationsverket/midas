import{j as a}from"./iframe-CMJJFu9j.js";import{T as o,a as i,s as _}from"./Tag-BVaZ_ogG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ze04MXeZ.js";import"./utils-k_xI_0Cb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DaCgDddU.js";import"./useFocusRing-CtdsP9bS.js";import"./index-CwgxdM1g.js";import"./index-DjCmhbBj.js";import"./useLabels-D-FjqiKN.js";import"./useButton-CML0kvkr.js";import"./Collection-D2hEZ6rK.js";import"./index-ZSaWV6Ce.js";import"./ListBox-BkRANfor.js";import"./DragAndDrop-CQDhxp56.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-w4qZNhZD.js";import"./SelectionManager-Bf0z9v4v.js";import"./useEvent-BVm9IIGt.js";import"./FocusScope-B8C7Jeuo.js";import"./useDescription-D1IYUz-q.js";import"./useControlledState-y9SwHo4i.js";import"./ListKeyboardDelegate-fe9nQNr1.js";import"./Text-CFor_277.js";import"./inertValue-CmQznK0B.js";import"./useListState-LKyWzhej.js";import"./useField-YfpEX8Zc.js";import"./useHighlightSelectionDescription-CKhlhFyK.js";import"./useUpdateEffect-r2iZXFcp.js";import"./useLocalizedStringFormatter-Du1HXXHm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-_4F5qNJM.js";import"./Button-uBzb6nr4.js";import"./Button.module-DKVuWS4g.js";import"./x-BC4hRGwZ.js";import"./createLucideIcon-BNAnTsQ1.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
