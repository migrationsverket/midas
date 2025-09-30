import{j as a}from"./iframe-ByrmeAKI.js";import{T as o,a as i,s as D}from"./Tag-CY8wc_xk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-O9FfCGXl.js";import"./utils-_0gU8O4h.js";import"./clsx-B-dksMZM.js";import"./Hidden-6rhIdPp3.js";import"./useFocusRing-dHz-rfMr.js";import"./index-FmQqkNED.js";import"./index-DYgVpfK2.js";import"./useLabels-vXfYsWgI.js";import"./useButton-BV8vjY0-.js";import"./Collection-BuNbafdG.js";import"./index--MllRzl0.js";import"./ListBox-B4eykJB6.js";import"./DragAndDrop-CLdFH6qi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dl7LOYK1.js";import"./SelectionManager-Dp1YKy1i.js";import"./useEvent-C2_pZ_S4.js";import"./FocusScope-D0uhZOoh.js";import"./useDescription-B6yR-lLf.js";import"./useControlledState-DaVYlwBE.js";import"./context-gULmk7kC.js";import"./Text-Csi9Yuxi.js";import"./inertValue-ciLbvs83.js";import"./useListState-D7znZ6Ut.js";import"./useHighlightSelectionDescription-BvAmqsLz.js";import"./useUpdateEffect-Jh7jkt9V.js";import"./useLocalizedStringFormatter-D8JuULs5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dit6b5Zt.js";import"./useField-hLr213zg.js";import"./Button-BrHY5GF7.js";import"./Button.module-DRhvPh0f.js";import"./x-Dh4-Lvyg.js";import"./createLucideIcon-CX5yM60Z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
