import{j as a}from"./iframe-DCSq0-j9.js";import{T as o,a as i,s as D}from"./Tag-BB6DTqI3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C-dIxopc.js";import"./utils-DrJ5-z8f.js";import"./clsx-B-dksMZM.js";import"./Hidden-pEOaXwqw.js";import"./useFocusRing-DMky3gKC.js";import"./index-B4xZwINQ.js";import"./index-Du-7c5Zh.js";import"./useLabels-XOqJWlBh.js";import"./useButton-DTm3ZcYp.js";import"./Collection-PVK0oDXu.js";import"./index-3Baxujhg.js";import"./ListBox-D6-BC0-1.js";import"./DragAndDrop-DEURUxe_.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-OOF5TOJZ.js";import"./SelectionManager-Hws6fK5z.js";import"./useEvent-CQs6MVrK.js";import"./FocusScope-B4BxUzIT.js";import"./useDescription-LBhSOD8-.js";import"./useControlledState-CnPbz5Aq.js";import"./context-CsyiBWhD.js";import"./Text-D5DMfOaX.js";import"./inertValue-BRjdHtZC.js";import"./useListState-4I4I2pa7.js";import"./useHighlightSelectionDescription-BDWb9LnA.js";import"./useUpdateEffect-DS4hGOXh.js";import"./useLocalizedStringFormatter-CynvazlR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bvalvvtx.js";import"./useField-B4A4jkPa.js";import"./Button-DZo5l6kp.js";import"./Button.module-DRhvPh0f.js";import"./x-BK8pGwU2.js";import"./createLucideIcon-DKEO3zXH.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
