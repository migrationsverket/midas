import{j as a}from"./iframe-Dnk7TQnc.js";import{T as o,a as i,s as D}from"./Tag-2eOH5xHD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CBd1OolH.js";import"./utils-BB4BG1UJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CO1p3Fk4.js";import"./useFocusRing-Dd4rgNGv.js";import"./index-De3Mp3LC.js";import"./index-Vb5sRl1g.js";import"./useLabels-BuTfHtjP.js";import"./useButton-DEPwKrd7.js";import"./Collection-Dfm9z8T0.js";import"./index-DyM-ZYvl.js";import"./ListBox-kK4fy_aP.js";import"./DragAndDrop-DDwjjlFN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CJIBEkOA.js";import"./SelectionManager-DUQvxTrs.js";import"./useEvent-Dpc-8mOQ.js";import"./FocusScope-CBn1TdpB.js";import"./useDescription-Piw4LRxU.js";import"./useControlledState-H5aziRi8.js";import"./ListKeyboardDelegate-CEbLJqLj.js";import"./Text-Dpv3oqCg.js";import"./inertValue-C6xqBzvx.js";import"./useListState-BCfHJtrz.js";import"./useHighlightSelectionDescription-D-DMGzei.js";import"./useUpdateEffect-B4t37NqX.js";import"./useLocalizedStringFormatter-Ca7L-1aX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-lJb7M5BB.js";import"./useField-D1N67GFC.js";import"./Button-k4FmQgv_.js";import"./Button.module-DgYkWG2o.js";import"./x-CKUnRSv4.js";import"./createLucideIcon-CTcT_C6A.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
