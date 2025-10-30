import{j as a}from"./iframe-CU15qVal.js";import{T as o,a as i,s as D}from"./Tag-Ojk2zQj1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BNXrRNsq.js";import"./utils-C6WKz9A_.js";import"./clsx-B-dksMZM.js";import"./Hidden-C6_E2mXP.js";import"./useFocusRing-BLa_GrsE.js";import"./index-CXGOVj3V.js";import"./index-DSs2mb0X.js";import"./useLabels-Cr36R1T9.js";import"./useButton-IXcryYRz.js";import"./Collection-DNQBsNis.js";import"./index-DoxMeNL2.js";import"./ListBox-DoNw8DOW.js";import"./DragAndDrop-CXX3CASp.js";import"./getScrollParent-B48XG9Pt.js";import"./scrollIntoView-vv4nR1rY.js";import"./Separator-BkgEG_sZ.js";import"./SelectionManager-Dkg5CEuy.js";import"./useEvent-BC0VQJcQ.js";import"./SelectionIndicator-B_6ot8h3.js";import"./useDescription-DkkDdo3X.js";import"./useControlledState-Cnl50XMc.js";import"./ListKeyboardDelegate-D4Ky6HSw.js";import"./RSPContexts-OTA7BIBd.js";import"./Text-CxxP2Zwr.js";import"./inertValue-D2Xnlm7p.js";import"./useListState-CxwsD0qJ.js";import"./useHighlightSelectionDescription-CIKNFuvh.js";import"./useUpdateEffect-CWQBQBqG.js";import"./useLocalizedStringFormatter-CpLn40eo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-jzMLNlBb.js";import"./useField-50gjyHeh.js";import"./clsx-Ciqy0D92.js";import"./Button-Cm1crQBf.js";import"./Button.module-CcWMkJAG.js";import"./x-Bk9mWNby.js";import"./createLucideIcon-hJsd7cxf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
