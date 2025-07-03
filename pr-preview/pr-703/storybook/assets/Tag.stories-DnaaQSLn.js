import{j as a}from"./jsx-runtime-BYYWji4R.js";import{T as o,a as i,s as x}from"./Tag-BHq1vocU.js";import{e as D}from"./index-CqmFxPum.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Dw7lljiq.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./Collection-CAY-ghkk.js";import"./index-NDK0uC61.js";import"./ListBox-DSJQl1Gv.js";import"./DragAndDrop-TtKNn804.js";import"./getScrollParent-D3zukwiL.js";import"./scrollIntoView-D-J2YGNX.js";import"./Separator-BuNd-mI_.js";import"./SelectionManager-B7CR_Zkr.js";import"./useEvent-YbNcfHeo.js";import"./FocusScope-DFjHfTMc.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-DdGMYXDu.js";import"./Text-BDGh9UD8.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CycFe3cZ.js";import"./useField-DCM7HehW.js";import"./useHighlightSelectionDescription-BLS53P9I.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-uobRX2QT.js";import"./Button-Dakt9_Hr.js";import"./Button.module-DKVuWS4g.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";const b="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":b,children:s.children})})},t={play:async({canvas:s,step:T,args:{className:h}})=>{await T("it should preserve its classNames when being passed new ones",async()=>{D(s.getByTestId(b)).toHaveClass(x.tag,h)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const ms=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,ms as __namedExportsOrder,ps as default};
