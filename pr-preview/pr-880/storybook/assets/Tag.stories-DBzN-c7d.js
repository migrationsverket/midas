import{j as a}from"./iframe-BibMuvFm.js";import{T as o,a as i,s as D}from"./Tag-Dycgw0SO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C6g_87bM.js";import"./utils-D0FYAsX_.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9t64xwL.js";import"./useFocusRing-D4NMzKjB.js";import"./index-CArXZKde.js";import"./index-DEPEp2yz.js";import"./useLabels-CEsK1vPc.js";import"./useButton-CjyQqok8.js";import"./Collection-CVrJ8bFO.js";import"./index-0p1g812f.js";import"./ListBox-DdKxrUzV.js";import"./DragAndDrop-5sw2KLAV.js";import"./getScrollParent-jDAsvGbZ.js";import"./scrollIntoView-B2NU2G6G.js";import"./Separator-BqVZvuP8.js";import"./SelectionManager-DIWtdwIa.js";import"./useEvent-C4RAVbHK.js";import"./SelectionIndicator-D8aqIo31.js";import"./useDescription-Db_9C6nw.js";import"./useControlledState-DgAVov5j.js";import"./ListKeyboardDelegate-DtH5OiyX.js";import"./RSPContexts-BpUje6hW.js";import"./Text-DejWD-WX.js";import"./inertValue-gEKkI9PD.js";import"./useListState-CjuL1g2E.js";import"./useHighlightSelectionDescription-DKWh8U6f.js";import"./useUpdateEffect-BjiMVbt7.js";import"./useLocalizedStringFormatter-CkePlb5F.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CsozQsIJ.js";import"./useField-Bs2PdJ-m.js";import"./clsx-Ciqy0D92.js";import"./Button-CrKghycV.js";import"./Button.module-CcWMkJAG.js";import"./x-C1Exh_43.js";import"./createLucideIcon-B92ZqvIG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
