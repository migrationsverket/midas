import{j as a}from"./iframe-B4WgE5wG.js";import{T as o,a as i,s as D}from"./Tag-DtcKhf0q.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CixslBCH.js";import"./utils-Dsgs2maq.js";import"./clsx-B-dksMZM.js";import"./Hidden-D26_ueeN.js";import"./useFocusRing-CgU4lrrU.js";import"./index-C4k6hED0.js";import"./index-B6mqhHiX.js";import"./useLabels-DC3WGby7.js";import"./useButton-B2voWa44.js";import"./Collection-Dv8cMDZE.js";import"./index-WXEF8Z0S.js";import"./ListBox-Co4VGWIH.js";import"./DragAndDrop-DexhPacf.js";import"./getScrollParent-BAFBl_Cx.js";import"./scrollIntoView-N4Zso3Dc.js";import"./Separator-_b7NNY6o.js";import"./SelectionManager-Y1TdOkVc.js";import"./useEvent-C7y-DpnP.js";import"./SelectionIndicator-fFj6kMF0.js";import"./useDescription-DyWvtQB5.js";import"./useControlledState-CZfDu9GF.js";import"./ListKeyboardDelegate-CmATCigI.js";import"./RSPContexts-DwJSUvjV.js";import"./Text-C26Vlxsx.js";import"./inertValue-BvUw6ql0.js";import"./useListState-DUd6UYwY.js";import"./useHighlightSelectionDescription-Tyc7geZN.js";import"./useUpdateEffect-q4QmMNRH.js";import"./useLocalizedStringFormatter-DX13DcEN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-J0WF64Mf.js";import"./useField-DJjcY9qC.js";import"./clsx-Ciqy0D92.js";import"./Button-DX442Sus.js";import"./Button.module-CcWMkJAG.js";import"./x-DuqBXglt.js";import"./createLucideIcon-TU8nHykS.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
