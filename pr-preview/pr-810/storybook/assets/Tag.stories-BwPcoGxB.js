import{j as a}from"./iframe-BVtd0Okw.js";import{T as o,a as i,s as D}from"./Tag-DT2s78Q0.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CXHPKunj.js";import"./utils-CP8CKu62.js";import"./clsx-B-dksMZM.js";import"./Hidden-D72UWOxP.js";import"./useFocusRing-CAUH-ztq.js";import"./index-CaC5ybZo.js";import"./index-CdKIpcPr.js";import"./useLabels-JXXqQVQK.js";import"./useButton-P-LFoXYP.js";import"./Collection-TELe1PnS.js";import"./index-DeaZYAet.js";import"./ListBox-CLn8Zojt.js";import"./DragAndDrop-RXCw17Rt.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DLNAZ410.js";import"./SelectionManager-UzpvTxfP.js";import"./useEvent-B1ip18ni.js";import"./FocusScope-BG-RJSP_.js";import"./useDescription-DGZsZYLK.js";import"./useControlledState-BUqH0eFg.js";import"./ListKeyboardDelegate-D-O_xyvo.js";import"./Text-DRMh2bWO.js";import"./inertValue-CKSPolIs.js";import"./useListState-D7cZNc_6.js";import"./useHighlightSelectionDescription-hi7y9FdI.js";import"./useUpdateEffect-BeSDtjD0.js";import"./useLocalizedStringFormatter-CFZUHa8F.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D25IsENQ.js";import"./useField-6z8pNjTN.js";import"./Button-FUO0m1OX.js";import"./Button.module-DRhvPh0f.js";import"./x-CHz6UvXx.js";import"./createLucideIcon-CpRkuq9a.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
