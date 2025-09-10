import{j as a}from"./iframe-BDiSYqWa.js";import{T as o,a as i,s as D}from"./Tag-5DS85A6T.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DFB9myAt.js";import"./utils-CO5MdmEy.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0MiqXkm.js";import"./useFocusRing-DZ7IlmNH.js";import"./index-BYGOKdO1.js";import"./index-CO0HMSST.js";import"./useLabels-CKWz2zK7.js";import"./useButton-Cv89yN8O.js";import"./Collection-oWPJf8wj.js";import"./index-UDfXmwsK.js";import"./ListBox-Bc8gFNz-.js";import"./DragAndDrop-I5xkkIAi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BG8Scg9i.js";import"./SelectionManager-3aWiusbN.js";import"./useEvent-BPQDxN8u.js";import"./FocusScope-BWztqHRS.js";import"./useDescription-CM6zdGeZ.js";import"./useControlledState-kAfKWxqJ.js";import"./ListKeyboardDelegate-CMSZKBp1.js";import"./Text-C7NY9qCG.js";import"./inertValue-B8-hMONJ.js";import"./useListState-DXIdMoQc.js";import"./useHighlightSelectionDescription-MNMBF2Er.js";import"./useUpdateEffect-P0u_Brdi.js";import"./useLocalizedStringFormatter-CFSWvlK1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DN3-qdOW.js";import"./useField-whv8fZRX.js";import"./Button-CnaoE-Gj.js";import"./Button.module-GuOSDIYz.js";import"./x-BKZE0X1R.js";import"./createLucideIcon-BVXiUt89.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
