import{j as a}from"./iframe-DzbEsI38.js";import{T as o,a as i,s as D}from"./Tag-DfaenyWR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-iry45B-k.js";import"./utils-CFO23xyt.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRPMnSZN.js";import"./useFocusRing-DoyC9uUe.js";import"./index-D7fZic8F.js";import"./index-fGtW-_99.js";import"./useLabels-CUa_Ubrs.js";import"./useButton-BFWCkiL5.js";import"./Collection-Ck7iUmjN.js";import"./index-Bfup5s6A.js";import"./ListBox-BXa6vs9l.js";import"./DragAndDrop-CVuoMFz0.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BLLRxn8N.js";import"./SelectionManager-D4nAOubs.js";import"./useEvent-BsdtLn66.js";import"./FocusScope-DNSe2LKq.js";import"./useDescription-B6om2s84.js";import"./useControlledState-CfILBshG.js";import"./ListKeyboardDelegate-DAHQ81jF.js";import"./Text-5LyhJLkD.js";import"./inertValue-Bi5clMQN.js";import"./useListState-DGdYcbfK.js";import"./useHighlightSelectionDescription-2XkCiHjd.js";import"./useUpdateEffect-v3b121lE.js";import"./useLocalizedStringFormatter-CqChtxWk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-gzgElm8B.js";import"./useField-cepT-gMK.js";import"./Button-DNWKC_su.js";import"./Button.module-CF2bVDCq.js";import"./x-BxmGVbjV.js";import"./createLucideIcon-y77xXVIf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
