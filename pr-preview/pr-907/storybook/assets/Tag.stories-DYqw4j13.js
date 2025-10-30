import{j as a}from"./iframe-CcJvGrVl.js";import{T as o,a as i,s as D}from"./Tag-CAt37mSX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DmH-REsO.js";import"./utils-BFfKbljC.js";import"./clsx-B-dksMZM.js";import"./Hidden-6V-VqPKo.js";import"./useFocusRing-SYAi-SYL.js";import"./index-CvyXhNqm.js";import"./index-weeTdSEY.js";import"./useLabels-BXWuQgCv.js";import"./useButton-si6s4kAa.js";import"./Collection-Buxbtng0.js";import"./index-CS5HvAP3.js";import"./ListBox--VHwGqwq.js";import"./DragAndDrop-B7VuvT0M.js";import"./getScrollParent-gZlAg0Pt.js";import"./scrollIntoView-CTXuwTqE.js";import"./Separator-xYSjf10D.js";import"./SelectionManager-D49QnxC7.js";import"./useEvent-BvTDZ47e.js";import"./SelectionIndicator-etJo1joU.js";import"./useDescription-2Vt0pGlx.js";import"./useControlledState-CiWsOWKp.js";import"./ListKeyboardDelegate-lo35ivbS.js";import"./RSPContexts-BJ9iNFUn.js";import"./Text-RtVgcJwV.js";import"./inertValue-B7JZNb0b.js";import"./useListState-B805xIqF.js";import"./useHighlightSelectionDescription-CVZo4T9_.js";import"./useUpdateEffect-BnbAi6T9.js";import"./useLocalizedStringFormatter-DSEpIJ9X.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CJhGKYrF.js";import"./useField-tKIrcuTj.js";import"./clsx-Ciqy0D92.js";import"./Button-BZEETyFZ.js";import"./Button.module-CcWMkJAG.js";import"./x-BXBqiHbG.js";import"./createLucideIcon-C6DoJkta.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
