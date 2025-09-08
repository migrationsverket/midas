import{j as a}from"./iframe-Cdt01kvU.js";import{T as o,a as i,s as D}from"./Tag-AKMatZk8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DbtIwfTP.js";import"./utils-_8n5xQJp.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dkbaxdy3.js";import"./useFocusRing-B8jxQtBz.js";import"./index-Rqby2lTf.js";import"./index-Bq_i5xkp.js";import"./useLabels-B9Hl85uL.js";import"./useButton-Dz57clET.js";import"./Collection-G9RjNlOm.js";import"./index-CQEXZEhz.js";import"./ListBox-EBMIjjjP.js";import"./DragAndDrop-hNV7D3it.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-0wiBxnPR.js";import"./SelectionManager-B0RrFYiW.js";import"./useEvent-DB4g0iiY.js";import"./FocusScope-NvFyZBK7.js";import"./useDescription-DXAZH32r.js";import"./useControlledState-C_2KZfRt.js";import"./ListKeyboardDelegate-B2FAQhXx.js";import"./Text-DrErlPRS.js";import"./inertValue-CO0D0aQr.js";import"./useListState-76bxy-Nl.js";import"./useHighlightSelectionDescription-ilH86syI.js";import"./useUpdateEffect-HAAQlc7x.js";import"./useLocalizedStringFormatter-DX3OaUlx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-dd9vh3_f.js";import"./useField-DBcpveCp.js";import"./Button-1wOdcB61.js";import"./Button.module-BkTnSRp5.js";import"./x-DrGrqF_a.js";import"./createLucideIcon-BZp25Nvy.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
