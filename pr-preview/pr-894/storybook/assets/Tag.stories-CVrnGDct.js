import{j as a}from"./iframe-ChriHfRz.js";import{T as o,a as i,s as D}from"./Tag-DlqOwO8R.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D3GS0Foh.js";import"./utils-NlyHr12J.js";import"./clsx-B-dksMZM.js";import"./Hidden-0BGnOEK5.js";import"./useFocusRing-DumsLaxs.js";import"./index-CwCJkZOP.js";import"./index-DuyMh8Ep.js";import"./useLabels-Cdo3YkMo.js";import"./useButton-CUC4v2hj.js";import"./Collection-BLXQACxq.js";import"./index-xNCKh-U3.js";import"./ListBox-C91qGkkq.js";import"./DragAndDrop-gQikaNh9.js";import"./getScrollParent-BpZY8Scv.js";import"./scrollIntoView-DidsSNjO.js";import"./Separator-CJ3eM7P9.js";import"./SelectionManager-zUmBlCK4.js";import"./useEvent-J4XnAaqy.js";import"./SelectionIndicator-DFdqCQav.js";import"./useDescription-ClBBxyt-.js";import"./useControlledState-_Fqm2YEq.js";import"./ListKeyboardDelegate-BNdNUt2q.js";import"./RSPContexts-CCjzDUiJ.js";import"./Text-CFBJlnAp.js";import"./inertValue-D97lZInS.js";import"./useListState-BFCWXB4p.js";import"./useHighlightSelectionDescription-C0B5KexE.js";import"./useUpdateEffect-BMt5l3wp.js";import"./useLocalizedStringFormatter-BgEKAS5Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cb1Is-tL.js";import"./useField-Fh9uy1XQ.js";import"./clsx-Ciqy0D92.js";import"./Button-sPUZ2dhd.js";import"./Button.module-CcWMkJAG.js";import"./x-DKB82TMd.js";import"./createLucideIcon-CaAuCsQL.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
