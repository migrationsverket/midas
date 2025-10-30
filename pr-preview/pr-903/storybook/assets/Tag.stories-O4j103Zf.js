import{j as a}from"./iframe-O27TBN_N.js";import{T as o,a as i,s as D}from"./Tag-CIHUrQWj.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-mw9Y7dDC.js";import"./utils-Bnq9UI8p.js";import"./clsx-B-dksMZM.js";import"./Hidden-wR8ehdMW.js";import"./useFocusRing-CAGmrJ8S.js";import"./index-CuxE_rb4.js";import"./index-BkykyG-3.js";import"./useLabels-CtVut38m.js";import"./useButton-B6VRnAEl.js";import"./Collection-FvQa3mYI.js";import"./index-BZ6zorK4.js";import"./ListBox-D3fXOXUd.js";import"./DragAndDrop-CxIPv-iv.js";import"./getScrollParent-1fBWIlap.js";import"./scrollIntoView-DyJGWYpl.js";import"./Separator-DT4Xkvqb.js";import"./SelectionManager-CRQ3tIlC.js";import"./useEvent-Cui58-fE.js";import"./SelectionIndicator-DavF2Y1U.js";import"./useDescription-geezlLH8.js";import"./useControlledState-4xZUc0wh.js";import"./ListKeyboardDelegate-CGlCtaw7.js";import"./RSPContexts-8D6Fb_6T.js";import"./Text-BF6KpU6_.js";import"./inertValue-DZEvUe-J.js";import"./useListState-B2vrQtkt.js";import"./useHighlightSelectionDescription-BXX70P0j.js";import"./useUpdateEffect-CygFSvWQ.js";import"./useLocalizedStringFormatter-CL1asVKs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-LR087SMK.js";import"./useField-qHiW-YT8.js";import"./clsx-Ciqy0D92.js";import"./Button-DHDEfwrj.js";import"./Button.module-CcWMkJAG.js";import"./x-ByEI3zkc.js";import"./createLucideIcon-Ci-UW-1i.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
