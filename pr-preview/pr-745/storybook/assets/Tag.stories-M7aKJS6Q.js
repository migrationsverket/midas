import{j as a}from"./jsx-runtime-BYYWji4R.js";import{T as o,a as i,s as x}from"./Tag-DWHbFQny.js";import{e as D}from"./index-Q7OVwvWC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./Collection-h-VYV8ts.js";import"./index-NDK0uC61.js";import"./ListBox-CizQH83t.js";import"./DragAndDrop-P3C1Zhz8.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-x0qfR_Vk.js";import"./SelectionManager-BkX4LkPr.js";import"./useEvent-D_ha2BWP.js";import"./FocusScope-p3_VE_8x.js";import"./useDescription-BqzP9r9Z.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-Dz8cyiML.js";import"./Text-CZ6zcozL.js";import"./inertValue-C_mH9YkE.js";import"./useListState-kzS7wrxN.js";import"./useField-C9GdkJOV.js";import"./useHighlightSelectionDescription-vuGLz-yW.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dw2OyaZg.js";import"./Button-BJ4It4Pa.js";import"./Button.module-Bmb634uG.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";const b="test",ns={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":b,children:s.children})})},t={play:async({canvas:s,step:T,args:{className:h}})=>{await T("it should preserve its classNames when being passed new ones",async()=>{D(s.getByTestId(b)).toHaveClass(x.tag,h)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const cs=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,cs as __namedExportsOrder,ns as default};
