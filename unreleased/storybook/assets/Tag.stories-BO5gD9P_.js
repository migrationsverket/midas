import{j as a}from"./iframe-BMzRiMFf.js";import{T as o,a as i,s as D}from"./Tag-CT2Y1Hvy.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CpnYxfCq.js";import"./utils-DtswzmvU.js";import"./clsx-B-dksMZM.js";import"./Hidden-COIp6xcd.js";import"./useFocusRing-BfeNwYMa.js";import"./index-D-vB_XL6.js";import"./index-Byb9thdY.js";import"./useLabels-CRjALhLy.js";import"./useButton-CtDdAxf-.js";import"./Collection-CXpj6RCE.js";import"./index-Bsy9nHS7.js";import"./ListBox-BumoMI6M.js";import"./DragAndDrop-BQooE3vX.js";import"./getScrollParent-B1wiQcxt.js";import"./scrollIntoView-CC7PIWa8.js";import"./Separator-BI8KSU83.js";import"./SelectionManager-CG5vrdSX.js";import"./useEvent-B-avcKiq.js";import"./SelectionIndicator-NEfzQQXf.js";import"./useDescription-Cn126-5e.js";import"./useControlledState-DWGSQNBo.js";import"./ListKeyboardDelegate-DQCaBRUe.js";import"./RSPContexts-DL0yBAbx.js";import"./Text-UsYegnJl.js";import"./inertValue-z4gxvsU2.js";import"./useListState-D52BLgYC.js";import"./useHighlightSelectionDescription-BKsOI0Ks.js";import"./useUpdateEffect-D92SmUt-.js";import"./useLocalizedStringFormatter-B8mZqs0m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DkiWRoz6.js";import"./useField-CXRq-AdX.js";import"./clsx-Ciqy0D92.js";import"./Button-MSN03vT4.js";import"./Button.module-CcWMkJAG.js";import"./x-DlXmIg14.js";import"./createLucideIcon-D2m7Bx-d.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
