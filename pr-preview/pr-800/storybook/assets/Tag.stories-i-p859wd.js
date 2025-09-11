import{j as a}from"./iframe-BcRjsBlL.js";import{T as o,a as i,s as D}from"./Tag-BIQ_cUvS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BsIkJpJK.js";import"./utils-DBFhbAZR.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWTK3vTO.js";import"./useFocusRing-CNb6kCwu.js";import"./index-BD8fCA-B.js";import"./index-C98P7_uM.js";import"./useLabels-C7Wpftx3.js";import"./useButton-CgJqOxul.js";import"./Collection-Ha7aPl6P.js";import"./index-Bh5VsV9I.js";import"./ListBox-Jiqkwz7s.js";import"./DragAndDrop-BnW8nTIV.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DtTxTgku.js";import"./SelectionManager-DzpD-NYc.js";import"./useEvent-Szn15d31.js";import"./FocusScope-D30imlTl.js";import"./useDescription-DkAEfwYv.js";import"./useControlledState-uBGqkdsA.js";import"./ListKeyboardDelegate-6x2rcmyX.js";import"./Text-BETQP1HR.js";import"./inertValue-De7JxbK0.js";import"./useListState-zYr1ycDa.js";import"./useHighlightSelectionDescription-B6rVjzw3.js";import"./useUpdateEffect-BXlLKzF4.js";import"./useLocalizedStringFormatter-DujSnSBF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DYD48PQ5.js";import"./useField-DV_DII8_.js";import"./Button-CvA77UWP.js";import"./Button.module-DRhvPh0f.js";import"./x-CTvzoHxg.js";import"./createLucideIcon-CRHJwuW7.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
