import{j as a}from"./iframe-BDUfncI5.js";import{T as o,a as i,s as D}from"./Tag-CiYr2HGz.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CYZKuj6X.js";import"./utils-BdWn4l2v.js";import"./clsx-B-dksMZM.js";import"./Hidden-DeXoSWS8.js";import"./useFocusRing-gv38ubXg.js";import"./index-ZQ-7SuZu.js";import"./index-HXLpgB5V.js";import"./useLabels-y45NAxek.js";import"./useButton-Q9vFKd1n.js";import"./Collection-BsBBrYWP.js";import"./index-B40xVDqD.js";import"./ListBox-D1bJ_NWV.js";import"./DragAndDrop-CvbHsjh3.js";import"./getScrollParent-ATJCG-Fu.js";import"./scrollIntoView-DOoNXPWM.js";import"./Separator-D4b28Vdn.js";import"./SelectionManager-BsvUq4Wn.js";import"./useEvent-WSR0qFxZ.js";import"./SelectionIndicator-LIEakdoR.js";import"./useDescription-ByBZ-WMu.js";import"./useControlledState-uEKJ_5E_.js";import"./ListKeyboardDelegate-sFTHhoe2.js";import"./RSPContexts-jsNs_p-A.js";import"./Text-tughKfsS.js";import"./inertValue-DXiFpgBM.js";import"./useListState-DvUGfqnk.js";import"./useHighlightSelectionDescription-D19gV7Nx.js";import"./useUpdateEffect-BnI-NZh8.js";import"./useLocalizedStringFormatter-DKjeufQw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CQn-1YZY.js";import"./useField-jNwMO_P_.js";import"./clsx-Ciqy0D92.js";import"./Button-Ca0nxacu.js";import"./Button.module-CcWMkJAG.js";import"./x-CmQJNXTf.js";import"./createLucideIcon-DqE1rGXW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
