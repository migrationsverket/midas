import{j as a}from"./iframe-CpIrqyfQ.js";import{T as o,a as i,s as D}from"./Tag-DCKxDvD7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-EopmSv9f.js";import"./utils-CynKb8kC.js";import"./clsx-B-dksMZM.js";import"./Hidden-BrC7U0Er.js";import"./useFocusRing-pgu8-f8I.js";import"./index-Y_R-C8LG.js";import"./index-DJpJzUjc.js";import"./useLabels-BaOgrre2.js";import"./useButton-t5R6kj5U.js";import"./Collection-BhtaIeGW.js";import"./index-D8YkModO.js";import"./ListBox-NzwogLlC.js";import"./DragAndDrop-BRskZKWf.js";import"./getScrollParent-Dq4fhNtW.js";import"./scrollIntoView-DBMDSy5d.js";import"./Separator-BIDPX2cs.js";import"./SelectionManager-DB_94EiV.js";import"./useEvent-DVRAM3tp.js";import"./SelectionIndicator-CGFWM2ho.js";import"./useDescription-dwaNU5x1.js";import"./useControlledState-BBsvM9kd.js";import"./ListKeyboardDelegate-BWtdwWAL.js";import"./RSPContexts-DXTG3gDc.js";import"./Text-DzxGqire.js";import"./inertValue-dq2TUNv-.js";import"./useListState-CJ4xqPdm.js";import"./useHighlightSelectionDescription-B7uYbxMN.js";import"./useUpdateEffect-DZBWjP1i.js";import"./useLocalizedStringFormatter-5pmANXVH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BOsy1MSq.js";import"./useField-iVPYIdbg.js";import"./clsx-Ciqy0D92.js";import"./Button-DLxZ5Dos.js";import"./Button.module-CcWMkJAG.js";import"./x-pszGEmFp.js";import"./createLucideIcon-trxrrXoi.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
