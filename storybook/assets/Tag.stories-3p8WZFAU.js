import{j as a}from"./iframe-hkOXKyZH.js";import{T as o,a as i,s as D}from"./Tag-BMzVfXLm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D_0ZmIdM.js";import"./utils-BdV861L6.js";import"./clsx-B-dksMZM.js";import"./Hidden-B0zqG2wK.js";import"./useFocusRing-C79BKtrz.js";import"./index-C7wlBik6.js";import"./index-aQUuQKga.js";import"./useLabels-8mDyTwDg.js";import"./useButton-8apWZfM7.js";import"./Collection-NhTp_fC0.js";import"./index-DIc_Bg11.js";import"./ListBox-V5fc4neC.js";import"./DragAndDrop-BgbqrtNi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cb5YNDHy.js";import"./SelectionManager-CBUU1eyV.js";import"./useEvent-gvtKRKSj.js";import"./FocusScope-B6RlSEwq.js";import"./useDescription-DW9uiNor.js";import"./useControlledState-DviCxBQ0.js";import"./ListKeyboardDelegate-B_XbsEXm.js";import"./Text-c-jus4I1.js";import"./inertValue-sf4_vP0N.js";import"./useListState-BCjmYJw8.js";import"./useHighlightSelectionDescription-Dtz8Vy8r.js";import"./useUpdateEffect-B5WpHGqZ.js";import"./useLocalizedStringFormatter-DUDST5e1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dw9RGm5q.js";import"./useField-PdzjcPPj.js";import"./Button-DBFWCRWQ.js";import"./Button.module-DRhvPh0f.js";import"./x-C8wgGwRP.js";import"./createLucideIcon-CToz266h.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
