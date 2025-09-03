import{j as a}from"./iframe-CZTz_1Ss.js";import{T as o,a as i,s as D}from"./Tag-TSfhWwvH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C0F6uup8.js";import"./utils-Czv0ekEp.js";import"./clsx-B-dksMZM.js";import"./Hidden-CF862YW5.js";import"./useFocusRing-BeglxJnX.js";import"./index-DdMPlnP1.js";import"./index-BYK-P1_i.js";import"./useLabels-YuoZjkd4.js";import"./useButton-C_3zQ4QZ.js";import"./Collection-BZsZhDEZ.js";import"./index-BluPVW7f.js";import"./ListBox-UrMUyhkX.js";import"./DragAndDrop-EolQEX6B.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D3lNFJrs.js";import"./SelectionManager-CZcaqQtV.js";import"./useEvent-Bjr7uHPn.js";import"./FocusScope-D5A2-nwI.js";import"./useDescription-CrSd7uUI.js";import"./useControlledState-CxnzXe5l.js";import"./ListKeyboardDelegate-DNVCaawC.js";import"./Text-D54xrsa6.js";import"./inertValue-Dsm277dc.js";import"./useListState-DrMLDa-F.js";import"./useHighlightSelectionDescription-DVjsdo_g.js";import"./useUpdateEffect-CSUdzMja.js";import"./useLocalizedStringFormatter-DHEBIave.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CbsmQqyW.js";import"./useField-D4jWCsHU.js";import"./Button-C7H_IVjg.js";import"./Button.module-CF2bVDCq.js";import"./x-vFIiTt-x.js";import"./createLucideIcon-DAO-sk59.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
