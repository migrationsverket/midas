import{j as a}from"./iframe-C_obIzbf.js";import{T as o,a as i,s as D}from"./Tag-CRsn_-X-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BO4mvVmI.js";import"./utils-BBrYdkl4.js";import"./clsx-B-dksMZM.js";import"./Hidden-J78tifnX.js";import"./useFocusRing-CLZ5aSsg.js";import"./index-BEHfWMff.js";import"./index-xIq6wIqT.js";import"./useLabels-xfylfpE8.js";import"./useButton-aMcyveWX.js";import"./Collection-tEtPEKkW.js";import"./index-CF8BoBuy.js";import"./ListBox-BMA1iXVo.js";import"./DragAndDrop-B3w3s8X1.js";import"./getScrollParent-CvVatt00.js";import"./scrollIntoView-DZKNuyUj.js";import"./Separator-BUAuilS1.js";import"./SelectionManager-FOtyycza.js";import"./useEvent-5LJLScl4.js";import"./SelectionIndicator-DA-aitKi.js";import"./useDescription-DfS9mPdm.js";import"./useControlledState-DhuM32g_.js";import"./ListKeyboardDelegate-B8BtL6OU.js";import"./RSPContexts-DdicDoAv.js";import"./Text-D2W2P0-C.js";import"./inertValue-Bi9FWAWv.js";import"./useListState-6gFiDMXi.js";import"./useHighlightSelectionDescription-Bkgr7rBl.js";import"./useUpdateEffect-CIeDG1Of.js";import"./useLocalizedStringFormatter-Coueo5-Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dxynr4MI.js";import"./useField-BkFqu-3q.js";import"./clsx-Ciqy0D92.js";import"./Button-DRS2iVD1.js";import"./Button.module-CcWMkJAG.js";import"./x-Dov9LUgm.js";import"./createLucideIcon-CDEhoK3T.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
