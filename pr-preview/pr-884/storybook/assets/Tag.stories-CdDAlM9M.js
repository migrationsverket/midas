import{j as a}from"./iframe-hDtBDR1c.js";import{T as o,a as i,s as D}from"./Tag-OE9fpSar.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D3mZNJja.js";import"./utils-BcHjSfM0.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIIPF4tn.js";import"./useFocusRing-Csg--o-C.js";import"./index-DJ1gCrw8.js";import"./index-B77ei32X.js";import"./useLabels-CzownRkl.js";import"./useButton-Cl9E8kJl.js";import"./Collection-DTNcbD5d.js";import"./index--jhKlJ4M.js";import"./ListBox-NuyoeAT2.js";import"./DragAndDrop-Bm1YZ5Wl.js";import"./getScrollParent-B5t7_nZ5.js";import"./scrollIntoView-BgB9ZOZt.js";import"./Separator-CVpdzjYb.js";import"./SelectionManager-BA7JmOVY.js";import"./useEvent-rIZfVoNV.js";import"./SelectionIndicator-DK6KpJSG.js";import"./useDescription-wVhC8iEI.js";import"./useControlledState-BniQRER_.js";import"./ListKeyboardDelegate-Dk0Umf_8.js";import"./RSPContexts-CbMfB2-4.js";import"./Text-Kws7xylb.js";import"./inertValue-Q7y-sb1y.js";import"./useListState-DSOb1V22.js";import"./useHighlightSelectionDescription-9H-DquXJ.js";import"./useUpdateEffect-Br308fw_.js";import"./useLocalizedStringFormatter-DAMkbIpM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-nL7wDTSC.js";import"./useField-BB5LgRC0.js";import"./clsx-Ciqy0D92.js";import"./Button-Tvn-OE65.js";import"./Button.module-CcWMkJAG.js";import"./x-fkQfJsdV.js";import"./createLucideIcon-C7Pz6SM8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
