import{j as a}from"./iframe-Dx8ehMbR.js";import{T as o,a as i,s as D}from"./Tag-a6tbvJRr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BOcK3Qmt.js";import"./utils-B8l8B-G7.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dfxjjkft.js";import"./useFocusRing-By0JUaeZ.js";import"./index-CRVJ1NxM.js";import"./index-BDGwkvRr.js";import"./useLabels-BkcrTPX4.js";import"./useButton-oI1T-Oqr.js";import"./Collection-DavLgsdQ.js";import"./index-NlBEwblR.js";import"./ListBox-lzGB9qQ9.js";import"./DragAndDrop-BXvTvQ5y.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DMhuhKAG.js";import"./SelectionManager-DOpFZRXJ.js";import"./useEvent-C8j1_W-Z.js";import"./FocusScope-DsSLL20q.js";import"./useDescription-DjkPNcmF.js";import"./useControlledState-CXBSIc1v.js";import"./ListKeyboardDelegate-B2R_VZRZ.js";import"./Text-BKL8tHbp.js";import"./inertValue-CRNXDnsW.js";import"./useListState-S3KCM2_5.js";import"./useHighlightSelectionDescription-9ZGiLvT0.js";import"./useUpdateEffect-Be4gVRmM.js";import"./useLocalizedStringFormatter-Dl3GA7gB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CXPwoKEX.js";import"./useField-DiDebhWr.js";import"./Button-BvqlIcRl.js";import"./Button.module-GuOSDIYz.js";import"./x-CpiBkvdQ.js";import"./createLucideIcon-Dpdlh6dH.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
