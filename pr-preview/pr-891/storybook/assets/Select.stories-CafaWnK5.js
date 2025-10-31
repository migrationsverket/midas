import{o as f,j as e,c as y,r as j}from"./iframe-WskM-gQy.js";import{$ as I}from"./Collection-fCRO0Zar.js";import{L as x,a as h}from"./ListBoxSection-DMCQyuaG.js";import{S as B}from"./Select-CI36DmYu.js";import{L as s}from"./ListBoxItem-DqTzQUrm.js";import"./preload-helper-Ct5FWWRu.js";import"./Hidden-CGOCYihM.js";import"./index-DQ5MGmqD.js";import"./index-BUVNGicR.js";import"./useFocusRing-VjDIWbHo.js";import"./utils-PiplYHk9.js";import"./clsx-B-dksMZM.js";import"./index-BbS57Ctg.js";import"./ListBox-keFgaoND.js";import"./DragAndDrop-DvrNkcdL.js";import"./getScrollParent-BGKmcE_e.js";import"./scrollIntoView-D1wNzGzn.js";import"./Separator-BmKr4wkA.js";import"./SelectionManager-DMfdVO-o.js";import"./useEvent-BPAOxkP6.js";import"./SelectionIndicator-D6F0MjDz.js";import"./useDescription-B9cpVcNh.js";import"./useControlledState-D9EpcS-3.js";import"./ListKeyboardDelegate-C4R6fMGT.js";import"./RSPContexts-BWosIfet.js";import"./Text-ZMEsASHW.js";import"./inertValue-CW9CT6rJ.js";import"./Button-D8QLfFfX.js";import"./useLabels-CP12Ou_e.js";import"./useButton-DKOsPuai.js";import"./useListState-BoGwJJr7.js";import"./clsx-Ciqy0D92.js";import"./FieldError-DJyd5OaV.js";import"./Text-Dtog7EZC.js";import"./Form-BIBxJMyA.js";import"./useFormValidation-CRpeXhTc.js";import"./intlStrings-ZMTSFH_M.js";import"./Dialog-a0f2_WbA.js";import"./OverlayArrow-332kmpMz.js";import"./useResizeObserver-BYhuoZww.js";import"./PressResponder-BkavgcA1.js";import"./useLocalizedStringFormatter-DZmX7KtP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-Dwq3rn_j.js";import"./useField-DeXtnrJc.js";import"./Label-Z7rXIYx1.js";import"./useLocalizedStringFormatter-DmtdD_MQ.js";import"./Button-DPo6WJUv.js";import"./Button.module-CtQ1deO8.js";import"./x-BDUUVzbP.js";import"./createLucideIcon-VhmxKnBe.js";import"./Heading-CyF5dkrn.js";import"./info-bBzFTbum.js";import"./Popover-Cvs-U6ZT.js";import"./Checkbox-D6Ql0czo.js";import"./check-BCqsWvvR.js";import"./useToggleState-CeCPnAdw.js";import"./Tag-B4ATKjmc.js";import"./useHighlightSelectionDescription-Cjwzxxx4.js";import"./useUpdateEffect-CS9ZE1zR.js";import"./useHasTabbableChild-CXX8wAWz.js";import"./chevron-down-DZCvitvI.js";import"./Virtualizer-DHKzaLUH.js";const ke={component:B,title:"Components/Select",tags:["autodocs"],args:{children:r=>e.jsx(s,{...r,children:r.name}),description:"Description",isDisabled:!1,isSelectableAll:!1,label:"Label",items:f,placeholder:"Select an option",selectionMode:"single",showTags:!1,errorPosition:"top",size:"large"}},a={args:{label:"label",description:"static",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Hello"}),e.jsx(s,{children:"Goodbye"})]})}},o={},i={args:{description:"Kiwi and banana are pre-selected",defaultValue:["kiwi","banana"],selectionMode:"multiple"}},n={args:{selectionMode:"multiple",description:"All options are selected",defaultValue:f.map(({id:r})=>r)}},c={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{isDisabled:!0}},l={args:{description:"Kiwi is disabled",disabledKeys:["kiwi"]}},d={args:{isInvalid:!0,errorMessage:"Error msg"}},m={args:{selectionMode:"multiple",showTags:!0,defaultValue:["apple","kiwi"]}},p={args:{selectionMode:"multiple",isSelectableAll:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...o.args,selectionMode:"single",label:"Ärende",placeholder:"Välj ärende"},render:r=>{const[t,L]=j.useState(null);return e.jsx(B,{...r,value:t,onChange:L,items:[{id:"12",name:"tolv"},{id:"1",name:"ett"},{id:"2",name:"två"}]})}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Fruit"}),e.jsx(s,{id:"Apple",children:"Apple"}),e.jsx(s,{id:"Banana",children:"Banana"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Vegetables"}),e.jsx(s,{id:"Cabbage",children:"Cabbage"}),e.jsx(s,{id:"Broccoli",children:"Broccoli"})]})]})}},b={args:{...o.args,items:y,children:r=>e.jsxs(x,{id:r.name,children:[e.jsx(h,{children:r.name}),e.jsx(I,{items:r.children,children:t=>e.jsx(s,{id:t.id,children:t.name})})]})}},S={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{selectionMode:"single",isRequired:!0},render:r=>e.jsxs("form",{onSubmit:t=>{t.preventDefault()},children:[e.jsx(B,{...r}),e.jsx("button",{type:"submit",children:"submit"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    description: 'static',
    children: <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({
      id
    }) => id)
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi']
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Ee=["StaticItems","Primary","DefaultValue","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","DS872","StaticSections","DynamicSections","RequiredSingleSelect"];export{n as AllKeysSelected,u as DS872,i as DefaultValue,c as Disabled,l as DisabledOption,b as DynamicSections,d as Invalid,o as Primary,S as RequiredSingleSelect,p as SelectAllEnabled,a as StaticItems,g as StaticSections,m as WithTags,Ee as __namedExportsOrder,ke as default};
