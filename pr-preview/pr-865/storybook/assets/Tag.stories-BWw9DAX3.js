import{j as a}from"./iframe-DzJ_VHqL.js";import{T as o,a as i,s as D}from"./Tag-C8AZklrR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dqaqm8iD.js";import"./utils-Dc7aqk5n.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPpD6W0V.js";import"./useFocusRing-ov0wUtoy.js";import"./index-BdMeSNVy.js";import"./index-Bg7tArcw.js";import"./useLabels-ZQu4DjEm.js";import"./useButton-D_S1A397.js";import"./Collection-DD5Kca19.js";import"./index-CJud6AVB.js";import"./ListBox-DGIzeenS.js";import"./DragAndDrop--gr5knCN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cnx9JVDZ.js";import"./SelectionManager-CWBYKFBE.js";import"./useEvent-D-PK61S9.js";import"./FocusScope-C-F2lppL.js";import"./useDescription-sw1rETAj.js";import"./useControlledState-BNnwpJBg.js";import"./context-CCS_8Xa3.js";import"./Text-DvtKvFOU.js";import"./inertValue-BWOrq5KW.js";import"./useListState-1jS016Os.js";import"./useHighlightSelectionDescription-C7rNwIc4.js";import"./useUpdateEffect-C6P2Yq1Y.js";import"./useLocalizedStringFormatter-BabxDlti.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BBNC8aeY.js";import"./useField-HHRIq82j.js";import"./clsx-Ciqy0D92.js";import"./Button-BRKMaoGh.js";import"./Button.module-CcWMkJAG.js";import"./x-DczP4Bad.js";import"./createLucideIcon-BIb5Wuzx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
