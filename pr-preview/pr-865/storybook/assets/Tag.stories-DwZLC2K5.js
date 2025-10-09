import{j as a}from"./iframe-DYvBoIeB.js";import{T as o,a as i,s as D}from"./Tag-sWbzrYEr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BBSTQSBw.js";import"./utils-DDiS5oXN.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGOYMhLR.js";import"./useFocusRing-DIEZm14m.js";import"./index-D_T-E6yx.js";import"./index-C9PU0sfT.js";import"./useLabels-DcUIhoyH.js";import"./useButton-Cw1g9k9x.js";import"./Collection-C26jvwyg.js";import"./index-DVfh8aq-.js";import"./ListBox-BLJT-XBD.js";import"./DragAndDrop-DShXwicC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-ByB4ZB2I.js";import"./SelectionManager-CuyLcray.js";import"./useEvent-BgaiJrnQ.js";import"./FocusScope-CEqeXGW5.js";import"./useDescription-F3r1Vll5.js";import"./useControlledState-BJevUG78.js";import"./context-gpG0o6Ng.js";import"./Text-aJLNAsRa.js";import"./inertValue-DPmndaBl.js";import"./useListState-ClrPqBkL.js";import"./useHighlightSelectionDescription-BgJzJidT.js";import"./useUpdateEffect-Wb1anZ27.js";import"./useLocalizedStringFormatter-DqC_Eeij.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-AvOCbZ-U.js";import"./useField-CvWctHTT.js";import"./clsx-Ciqy0D92.js";import"./Button-CedPnDJ3.js";import"./Button.module-CcWMkJAG.js";import"./x--2yk7Een.js";import"./createLucideIcon-DBPncP5f.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
