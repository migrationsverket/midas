import{r as l,j as e,o as Le,f as Ve}from"./iframe-BAD2oBME.js";import{$ as _e}from"./Collection-Ct0sFRjJ.js";import{L as I,a as w}from"./ListBoxSection-DFFdFDFh.js";import{c as He}from"./clsx-Ciqy0D92.js";import{y as je}from"./useFocusRing-CnvRr1yt.js";import{T as ve,a as Ie}from"./Tooltip-qfHuFu7k.js";import{T as Ke}from"./Text-mQ1mTn7E.js";import{S as A}from"./Select-Bty2SLII.js";import{L as r}from"./ListBoxItem-BtopwXNV.js";import"./preload-helper-Dp1pzeXC.js";import"./Hidden-DOeF9HzD.js";import"./index-BeUCRj-s.js";import"./index-Dq00JW0u.js";import"./index-BtEzLQYr.js";import"./ListBox-CZRN3xK7.js";import"./utils-DDoAX05_.js";import"./clsx-B-dksMZM.js";import"./DragAndDrop-9qfG2Y0S.js";import"./getScrollParent-BUIISbtX.js";import"./scrollIntoView-BAJSfBvH.js";import"./Separator-CJ0JaLOJ.js";import"./SelectionManager-C2GQhLzw.js";import"./useEvent-BouCu6gS.js";import"./SelectionIndicator-7w45rsXt.js";import"./useDescription-CS-muIG2.js";import"./useControlledState-KqO0k409.js";import"./ListKeyboardDelegate-DximPOc0.js";import"./RSPContexts-DCXN6GD4.js";import"./Text-DBGZ9VGo.js";import"./inertValue-BMrbDN63.js";import"./Button-D3nLP1Qh.js";import"./useLabels-BH36IPYm.js";import"./useButton-BzcdgyTW.js";import"./useListState-BRFgApp6.js";import"./OverlayArrow-BV88xs75.js";import"./useResizeObserver-BnVomOkg.js";import"./FieldError-DjZbBax_.js";import"./Form-CiqXUwDh.js";import"./useFormValidation-BGcUeQEY.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-BoWmVJMQ.js";import"./PressResponder-DQ1Y6rYU.js";import"./useLocalizedStringFormatter-CtFZRk8P.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-C2WhNuEH.js";import"./useField-B24J3Lcu.js";import"./Label-eJevLwxf.js";import"./useLocalizedStringFormatter-CTjYvhjj.js";import"./Button-BcbcYxEj.js";import"./Button.module-CcWMkJAG.js";import"./x-CatWLWvq.js";import"./createLucideIcon-KTzp_MKY.js";import"./Heading-BrKguVub.js";import"./info-DH23xMaB.js";import"./Popover-DPMe0W1E.js";import"./Checkbox-Cu8JaiiB.js";import"./useToggleState-CSltzvek.js";import"./Tag-DFbqdiqQ.js";import"./useHighlightSelectionDescription-Y8CZ0ZL2.js";import"./useUpdateEffect-B0mlHk9-.js";import"./useHasTabbableChild-hUtvCT4C.js";import"./chevron-down-mJW65Lru.js";import"./Virtualizer-DGP3XfIC.js";const Me=()=>{const t=l.useRef(null),[s,a]=l.useState(!1),[j,i]=l.useState({});function we(n,De){let V;return(...Ae)=>{clearTimeout(V),V=window.setTimeout(()=>n(...Ae),De)}}const v=we(()=>i({}),300);return l.useEffect(()=>{const n=t.current;return window.addEventListener("resize",v),a(n?n.offsetWidth<n.scrollWidth||n.offsetHeight<n.scrollHeight:!1),()=>{window.removeEventListener("resize",v)}},[j,v]),{ref:t,isTruncated:s}},Ee="_text_1332g_1",We="_truncated_1332g_6",_={text:Ee,truncated:We},D=({className:t,children:s,...a})=>{const{ref:j,isTruncated:i}=Me();return e.jsxs(ve,{isDisabled:!i,children:[e.jsx(je,{children:e.jsx("div",{role:"button",tabIndex:i?void 0:-1,className:He(t,_.text,{[_.truncated]:i}),ref:j,children:e.jsx(Ke,{...a,children:s})})}),e.jsx(Ie,{style:{maxWidth:"none"},placement:"bottom",children:s})]})};try{D.displayName="TruncatedText",D.__docgenInfo={description:"",displayName:"TruncatedText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body-01"'},{value:'"body-02"'}]}},isExpressive:{defaultValue:null,description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const zt={component:A,title:"Components/Select",tags:["autodocs"],args:{children:t=>e.jsx(r,{...t,children:t.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:Le,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},d={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Hello"}),e.jsx(r,{children:"Goodbye"})]})}},o={},m={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},p={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:Le.map(({id:t})=>t)}},u={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},x={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},g={args:{isInvalid:!0,errorMessage:"Error msg"}},h={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},b={args:{selectionMode:"multiple",isSelectableAll:!0}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:t=>{const[s,a]=l.useState(null);return e.jsx(A,{...t,value:s,onChange:a,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:[e.jsx(w,{children:"Fruit"}),e.jsx(r,{id:"Apple",children:"Apple"}),e.jsx(r,{id:"Banana",children:"Banana"})]}),e.jsxs(I,{children:[e.jsx(w,{children:"Vegetables"}),e.jsx(r,{id:"Cabbage",children:"Cabbage"}),e.jsx(r,{id:"Broccoli",children:"Broccoli"})]})]})}},y={args:{...o.args,items:Ve,children:t=>e.jsxs(I,{id:t.name,children:[e.jsx(w,{children:t.name}),e.jsx(_e,{items:t.children,children:s=>e.jsx(r,{id:s.id,children:s.name})})]})}},T={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:t=>e.jsxs("form",{onSubmit:s=>{s.preventDefault()},children:[e.jsx(A,{...t}),e.jsx("button",{type:"submit",children:"submit"})]})},c="Flaggstångsknoppsmålarbyxor",B={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{textValue:c,children:e.jsx(D,{children:c})}),e.jsx(r,{children:"Hello"})]})}},L={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{textValue:c,children:e.jsxs(ve,{delay:1500,children:[e.jsx(je,{children:e.jsx("div",{role:"button",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c})}),e.jsx(Ie,{style:{maxWidth:"none"},placement:"bottom",children:c})]})}),e.jsx(r,{children:"Hello"})]})}};var H,K,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var E,W,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var C,F,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,$,O;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...(O=($=p.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var N,P,z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    },
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  },
  args: {
    isDisabled: true
  }
}`,...(z=(P=u.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var G,U,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(J=(U=x.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,ne;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ae,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Primary.args,
    selectionMode: 'single',
    label: 'Ärende',
    placeholder: 'Välj ärende'
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Key | null>(null);
    return <Select {...args} value={selectedKey} onChange={setSelectedKey} items={[{
      id: '12',
      name: 'tolv'
    }, {
      id: '1',
      name: 'ett'
    }, {
      id: '2',
      name: 'två'
    }]} />;
  }
}`,...(ie=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,ce,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxSection>
          <ListBoxHeader>Fruit</ListBoxHeader>
          <ListBoxItem id='Apple'>Apple</ListBoxItem>
          <ListBoxItem id='Banana'>Banana</ListBoxItem>
        </ListBoxSection>
        <ListBoxSection>
          <ListBoxHeader>Vegetables</ListBoxHeader>
          <ListBoxItem id='Cabbage'>Cabbage</ListBoxItem>
          <ListBoxItem id='Broccoli'>Broccoli</ListBoxItem>
        </ListBoxSection>
      </>
  }
}`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    items: optionsWithSections,
    children: section => <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
  }
}`,...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var xe,ge,he;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    selectionMode: 'single',
    isRequired: true
  },
  render: args => <form onSubmit={e => {
    e.preventDefault();
  }}>
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>
}`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,Se,fe;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxItem textValue={longText}>
          <TruncatedText>{longText}</TruncatedText>
        </ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
      </>
  }
}`,...(fe=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ye,Te,Be;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListBoxItem textValue={longText}>
          <TooltipTrigger delay={1500}>
            <Focusable>
              <div role='button' style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
                {longText}
              </div>
            </Focusable>
            <Tooltip style={{
            maxWidth: 'none'
          }} placement='bottom'>
              {longText}
            </Tooltip>
          </TooltipTrigger>
        </ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
      </>
  }
}`,...(Be=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};const Gt=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect","TruncationAndTooltip","TruncationAndTooltipWithDelay"];export{p as AllKeysSelected,S as DS872,m as DefaultValue,u as Disabled,x as DisabledOption,y as DynamicSections,g as Invalid,o as Primary,T as RequiredSingleSelect,b as SelectAllEnabled,d as StaticItems,f as StaticSections,B as TruncationAndTooltip,L as TruncationAndTooltipWithDelay,h as WithTags,Gt as __namedExportsOrder,zt as default};
