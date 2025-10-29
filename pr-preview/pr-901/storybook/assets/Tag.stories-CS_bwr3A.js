import{j as a}from"./iframe-B4R9RM3U.js";import{T as o,a as i,s as D}from"./Tag-iIhJETcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CkCKbdE2.js";import"./utils-CXkK5552.js";import"./clsx-B-dksMZM.js";import"./Hidden-BaYOLoJ0.js";import"./useFocusRing-CxMZqG97.js";import"./index-C99t-prV.js";import"./index-VQ1Ok-M-.js";import"./useLabels-D3X9Q-WA.js";import"./useButton-CXwr66SS.js";import"./Collection-BbhErTSC.js";import"./index-De-vf1W1.js";import"./ListBox-DOZSnhFn.js";import"./DragAndDrop-DvQZo46C.js";import"./getScrollParent-CWwl0RBi.js";import"./scrollIntoView-DjzMltdM.js";import"./Separator-YXCPT6DX.js";import"./SelectionManager-CjjVemzE.js";import"./useEvent-C9inzQTo.js";import"./SelectionIndicator-ms2btMSA.js";import"./useDescription-D5xpt2ne.js";import"./useControlledState-BFFPuRcf.js";import"./ListKeyboardDelegate-DbMew6r2.js";import"./RSPContexts-zEXts3c2.js";import"./Text-BbHTMgzj.js";import"./inertValue-BybLHXuZ.js";import"./useListState-B8POjFDG.js";import"./useHighlightSelectionDescription-D6qAl5Hp.js";import"./useUpdateEffect-CSKYZpJH.js";import"./useLocalizedStringFormatter-4y9Oc-2L.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DKRIzfZA.js";import"./useField-CnNfuc64.js";import"./clsx-Ciqy0D92.js";import"./Button-CDex9gaC.js";import"./Button.module-CcWMkJAG.js";import"./x-OLCkcSWu.js";import"./createLucideIcon-BiY-WT03.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
