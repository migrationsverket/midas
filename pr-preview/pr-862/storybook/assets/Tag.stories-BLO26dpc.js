import{j as a}from"./iframe-BtRB5jps.js";import{T as o,a as i,s as D}from"./Tag-Bho1hQOI.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bp-Q4UwL.js";import"./utils-DHvzgL_4.js";import"./clsx-B-dksMZM.js";import"./Hidden-CXX9ZyDQ.js";import"./useFocusRing-s-PFejsL.js";import"./index-DfPUEHAJ.js";import"./index-CwIK1tEo.js";import"./useLabels-0fj9eLgf.js";import"./useButton-BciwMNeS.js";import"./Collection-Cv_R-dwl.js";import"./index-6WFgD_jc.js";import"./ListBox-CKrqb4mB.js";import"./DragAndDrop-DXchWuRw.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-99HuaQW-.js";import"./SelectionManager-CZ7fP1Mv.js";import"./useEvent-D_ofWqFZ.js";import"./FocusScope-JwXLvRm-.js";import"./useDescription-B8QRmYnf.js";import"./useControlledState-Dho59kSZ.js";import"./context-C1TT3Lcb.js";import"./Text-0LfPUfvD.js";import"./inertValue-D06Keb-n.js";import"./useListState-BZpIG7hJ.js";import"./useHighlightSelectionDescription-D6wpNlAF.js";import"./useUpdateEffect-BgB0XLrv.js";import"./useLocalizedStringFormatter-Dib2T_T-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BFxSDt4g.js";import"./useField-EjDiYAmY.js";import"./clsx-Ciqy0D92.js";import"./Button-CZxIqUiR.js";import"./Button.module-CcWMkJAG.js";import"./x-DO0g0-XC.js";import"./createLucideIcon-BdgUM15l.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
