import{j as a}from"./iframe-BhI6OY3k.js";import{T as o,a as i,s as D}from"./Tag-CxarVnJU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CReUvSB9.js";import"./utils-BfsJBkkH.js";import"./clsx-B-dksMZM.js";import"./Hidden-BZSbuNrL.js";import"./useFocusRing-BBDv3aqX.js";import"./index-pQd6zGI0.js";import"./index-C1HNG_OI.js";import"./useLabels-r_A7i70X.js";import"./useButton-oVrSxjAO.js";import"./Collection-Dbkaiyhb.js";import"./index-DEKm6Ukw.js";import"./ListBox-Dn90skJ9.js";import"./DragAndDrop-PzXQU-nT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-V5S3UyWT.js";import"./SelectionManager-CUyD9tlf.js";import"./useEvent-oRnuJpYh.js";import"./FocusScope-DTOqt02n.js";import"./useDescription-2o161S7g.js";import"./useControlledState-BwKw8z34.js";import"./ListKeyboardDelegate-DIybDp0O.js";import"./Text-CT7MnyRo.js";import"./inertValue-BLGLxydj.js";import"./useListState-CvY-26sB.js";import"./useHighlightSelectionDescription-BCq4FW6X.js";import"./useUpdateEffect-DZZ5JJH6.js";import"./useLocalizedStringFormatter-BUZJL7u6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BGLkry3t.js";import"./useField-m_aYhejj.js";import"./Button-DeF4_VVs.js";import"./Button.module-DRhvPh0f.js";import"./x-DFABqdeG.js";import"./createLucideIcon-B84yEH9S.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
