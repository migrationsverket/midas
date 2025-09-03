import{j as a}from"./iframe-BerwrP6G.js";import{T as o,a as i,s as D}from"./Tag-BHFmlqwK.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ChgJrd1K.js";import"./utils-BgmbhXo0.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5oyZPqt.js";import"./useFocusRing-Ctnq6p3W.js";import"./index-tBSi2WI_.js";import"./index-TJKzTg6r.js";import"./useLabels-aqXW_PM3.js";import"./useButton-Dd7vKtfe.js";import"./Collection-DxZJaCNN.js";import"./index-CUYA1sjT.js";import"./ListBox-lBTa0oqr.js";import"./DragAndDrop-C4pPyfuK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BYB-Cwt_.js";import"./SelectionManager-x9XK9M76.js";import"./useEvent-zuHJP0k1.js";import"./FocusScope-Dk2gbXMe.js";import"./useDescription-BkDMgxBH.js";import"./useControlledState-BaDoyh-I.js";import"./ListKeyboardDelegate-DOLoQFaM.js";import"./Text-BBq2t9XO.js";import"./inertValue-C4ti8KRd.js";import"./useListState-Nm-xALml.js";import"./useHighlightSelectionDescription-DL6P9rjk.js";import"./useUpdateEffect-DIwAb2WP.js";import"./useLocalizedStringFormatter-SKpbqs-P.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CjrexVJw.js";import"./useField-CTxDEgeo.js";import"./Button-Bn_ItEEB.js";import"./Button.module-DWkXlqFG.js";import"./x-DuiHKPsd.js";import"./createLucideIcon-CjHqynzm.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
