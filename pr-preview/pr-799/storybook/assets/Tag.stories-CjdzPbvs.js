import{j as a}from"./iframe-2rZkOsoQ.js";import{T as o,a as i,s as D}from"./Tag-C6Wix1cz.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CgODRoK2.js";import"./utils-DNhcsrpV.js";import"./clsx-B-dksMZM.js";import"./Hidden-B5Uy_27G.js";import"./useFocusRing-D1RT8mif.js";import"./index-DnCMR4AW.js";import"./index-CsDAE2z1.js";import"./useLabels-D-PM3OTK.js";import"./useButton-BLTJSXG4.js";import"./Collection-Czk3ezlS.js";import"./index-BCA89-MY.js";import"./ListBox-ChBDnEuG.js";import"./DragAndDrop-DEnO3jLs.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bop3H6hA.js";import"./SelectionManager-CO_FeQi9.js";import"./useEvent-BaCToW7b.js";import"./FocusScope-BV6r87Qe.js";import"./useDescription-Bx9NdmWW.js";import"./useControlledState-3-7JUvzY.js";import"./ListKeyboardDelegate-BBVHYzUs.js";import"./Text-C5Dfoke2.js";import"./inertValue-IQRLnt3O.js";import"./useListState-BxWOy3G6.js";import"./useHighlightSelectionDescription-BV7TUpBx.js";import"./useUpdateEffect-CSygHSh1.js";import"./useLocalizedStringFormatter-D5oiOmFx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-xhCcH0Ud.js";import"./useField-BI_M1G6K.js";import"./Button-Bq3Gz6ON.js";import"./Button.module-DRhvPh0f.js";import"./x-Bj7-cV5Q.js";import"./createLucideIcon-DgXGBHpB.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
