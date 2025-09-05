import{j as a}from"./iframe-BZBzl4ao.js";import{T as o,a as i,s as D}from"./Tag-ClYfiJ8h.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C4KlRz7s.js";import"./utils-CtIGHOgz.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHgUScE4.js";import"./useFocusRing-DWOTd3wa.js";import"./index-CCUrmMdA.js";import"./index-BBk27vkF.js";import"./useLabels-rFCL4OQX.js";import"./useButton-hBPMyuYD.js";import"./Collection-CJCUnt4-.js";import"./index-CMbCgAF-.js";import"./ListBox-DaebaGZa.js";import"./DragAndDrop-BKwze7Pn.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DH9TzXKi.js";import"./SelectionManager-MYky8Dwz.js";import"./useEvent-DSEGrP5q.js";import"./FocusScope-yYHGaExG.js";import"./useDescription-DUDT6wU0.js";import"./useControlledState-ydjRtLvF.js";import"./ListKeyboardDelegate-Ducc6_UA.js";import"./Text-CB-dld4r.js";import"./inertValue-j6EvgEEL.js";import"./useListState-B7fyvvsc.js";import"./useHighlightSelectionDescription-BMhIhlUW.js";import"./useUpdateEffect-Lt4K7iU4.js";import"./useLocalizedStringFormatter-B4ScjxXM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ifPEX7d5.js";import"./useField-DpGD0KiG.js";import"./Button-BNYQrBrE.js";import"./Button.module-DgYkWG2o.js";import"./x-D58Hudhd.js";import"./createLucideIcon-CFHLFn9V.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
