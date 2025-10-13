import{j as a}from"./iframe-DWAFSxbp.js";import{T as o,a as i,s as D}from"./Tag-D3RwQW3k.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BWJLQh5T.js";import"./utils-dBrSQlcZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtPABKHi.js";import"./useFocusRing-yzVLjsle.js";import"./index-Ci9UhXya.js";import"./index-D_98T_qv.js";import"./useLabels-CepU255r.js";import"./useButton-BjCH3kpc.js";import"./Collection-Udq9wBxk.js";import"./index-DKmG49W7.js";import"./ListBox-DDU1O2aY.js";import"./DragAndDrop-KUsf2FuH.js";import"./getScrollParent-B3-ueWoH.js";import"./scrollIntoView-C52_BQAq.js";import"./Separator-BQ2Z4aMh.js";import"./SelectionManager-Cup39Hmr.js";import"./useEvent-B6BBS0-N.js";import"./SelectionIndicator-CBMxGTnX.js";import"./useDescription-DP2DV0N4.js";import"./useControlledState-C0XV9Ncc.js";import"./ListKeyboardDelegate-VZ53gsDI.js";import"./RSPContexts-Co00ZgFH.js";import"./Text-zKVNuaT1.js";import"./inertValue-DJTEf0yO.js";import"./useListState-DNSf2GcK.js";import"./useHighlightSelectionDescription-B3LdZfbI.js";import"./useUpdateEffect-xPfXyKoq.js";import"./useLocalizedStringFormatter-BvOCi9Y6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D5KtOQdE.js";import"./useField-ClRw5a2u.js";import"./clsx-Ciqy0D92.js";import"./Button-CHmUcSie.js";import"./Button.module-CcWMkJAG.js";import"./x-CT-iL3pR.js";import"./createLucideIcon-DYynSVTX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
