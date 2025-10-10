import{j as a}from"./iframe-D7PLAgGU.js";import{T as o,a as i,s as D}from"./Tag-CjtWWDoU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BebYfKlO.js";import"./utils-aIebjbgy.js";import"./clsx-B-dksMZM.js";import"./Hidden-ConWhrU8.js";import"./useFocusRing-BuzUNA5k.js";import"./index-D9J6_FRt.js";import"./index-C6NZvTHP.js";import"./useLabels-CQtNXEv-.js";import"./useButton-Dxc-XQKJ.js";import"./Collection-D4cMIDzF.js";import"./index-CqdprUPF.js";import"./ListBox-MGKfgsx9.js";import"./DragAndDrop-BrFGCgBT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CgL5QrZW.js";import"./SelectionManager-JBrfQvij.js";import"./useEvent-0pT33JR4.js";import"./FocusScope-DH07zdFN.js";import"./useDescription-D3o5iGFo.js";import"./useControlledState-BA4q7GDN.js";import"./context-BV_XnGuB.js";import"./Text-BBegSRqI.js";import"./inertValue-BardcSDq.js";import"./useListState-CnaNbX5U.js";import"./useHighlightSelectionDescription-CQWYpuXO.js";import"./useUpdateEffect-BE4-zNtR.js";import"./useLocalizedStringFormatter-CQGY_8nr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D0EOPijc.js";import"./useField-SJcHfh-o.js";import"./clsx-Ciqy0D92.js";import"./Button-48IheeSP.js";import"./Button.module-CcWMkJAG.js";import"./x-CSY_FO_W.js";import"./createLucideIcon-DAAdvmaL.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
