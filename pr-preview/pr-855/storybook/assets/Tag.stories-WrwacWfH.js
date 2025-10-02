import{j as a}from"./iframe-C0kb1Mnw.js";import{T as o,a as i,s as D}from"./Tag-NFQskaus.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcSrPQOd.js";import"./utils-CiJc4u5c.js";import"./clsx-B-dksMZM.js";import"./Hidden-CZ56ug1e.js";import"./useFocusRing-C5gf_rbC.js";import"./index-sBs2a_qf.js";import"./index-D0aZej62.js";import"./useLabels-C08fs0ko.js";import"./useButton-CYNGbsAM.js";import"./Collection-CijGxlkg.js";import"./index-DnbQQ5An.js";import"./ListBox-Cj-RsPCZ.js";import"./DragAndDrop-B_oic9XF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D3W7hp86.js";import"./SelectionManager-CDfDI6-I.js";import"./useEvent-Ch2AsfG5.js";import"./FocusScope-DWFCS2M9.js";import"./useDescription-IfZU3yYW.js";import"./useControlledState-NRXn2_My.js";import"./context-ERf0qt37.js";import"./Text-Bchsm5mU.js";import"./inertValue-DDB1eg-3.js";import"./useListState-D5hHe4-N.js";import"./useHighlightSelectionDescription-5WeJresU.js";import"./useUpdateEffect-D4SDmLV1.js";import"./useLocalizedStringFormatter-BZQtJ-zk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BN-V9h0o.js";import"./useField-90UDbHWT.js";import"./clsx-Ciqy0D92.js";import"./Button-Brn5oSEK.js";import"./Button.module-DRhvPh0f.js";import"./x-Dil7kdzA.js";import"./createLucideIcon-DlAFQOvG.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
