import{j as a}from"./iframe-DHklBLHo.js";import{T as o,a as i,s as D}from"./Tag-Dwmht92-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DhZxB07K.js";import"./utils-DyqySbgH.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWaI5zn9.js";import"./useFocusRing-CSMMOdQO.js";import"./index-DB7V-YOm.js";import"./index-C8owGnXX.js";import"./useLabels-CWX826iw.js";import"./useButton-DGR2IUC0.js";import"./Collection-CZTgey-2.js";import"./index-BQ-LRe3D.js";import"./ListBox-BElApgQO.js";import"./DragAndDrop-CeQAS2l1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CBF41kkx.js";import"./SelectionManager-CRjyENpI.js";import"./useEvent-BGCT9nTv.js";import"./FocusScope-BOGO3UKs.js";import"./useDescription-BD7nVZwV.js";import"./useControlledState-BUQ156QI.js";import"./ListKeyboardDelegate-CWC9p7Uf.js";import"./Text-CB9c4cql.js";import"./inertValue-XZ4H6HdX.js";import"./useListState-Btpw2L1U.js";import"./useHighlightSelectionDescription-DB5cbKiv.js";import"./useUpdateEffect-CVzX6_7L.js";import"./useLocalizedStringFormatter-DtNy7SNZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BFRyCF1L.js";import"./useField-Dnyv0Fyc.js";import"./Button-Dzt9c6_H.js";import"./Button.module-DRhvPh0f.js";import"./x-Dr60WVO-.js";import"./createLucideIcon-CQwhcRuR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
