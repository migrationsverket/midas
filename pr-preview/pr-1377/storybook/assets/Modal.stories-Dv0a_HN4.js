import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Qt as r,nn as i,t as a}from"./iframe-B92wKxiE.js";import{t as o,xt as s}from"./exports-DoflE5gH.js";import{t as c}from"./Button-DRKpCZDb.js";import{t as l}from"./button-CMpp_Wzp.js";import{t as u}from"./Heading-CNC1EHVu.js";import{t as d}from"./heading-oz5FoSmc.js";import{t as f}from"./Text-7DSUA0Bj.js";import{t as p}from"./text-CXY8i2u9.js";import{n as m,r as h}from"./modal-D0zarWKc.js";import{a as g}from"./ListBoxHeader-3ImmRZxS.js";import{t as _}from"./list-box-CYaCdCK4.js";import{t as v}from"./Select-DLbO8YCN.js";import{t as y}from"./select-CtWzlZBg.js";import{a as b,i as x,n as S,o as C,r as w,t as T}from"./Table-GddH-mkU.js";import{t as E}from"./table-CyrgdCQw.js";var D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{r(),D=t(n(),1),o(),h(),l(),y(),_(),p(),E(),d(),O=a(),k=[1,2,3,4,5,6].map(e=>(0,O.jsx)(f,{elementType:`p`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque.`},e)),A={component:m,subcomponents:{DialogTrigger:s},title:`Components/Modal`,tags:[`autodocs`],parameters:{layout:`centered`},render:e=>(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`Öppna`}),(0,O.jsx)(m,{title:`Enter your name`,...e})]}),args:{children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(v,{autoFocus:!0,placeholder:`Select...`,defaultValue:[`kiwi`],label:`Select fruits`,selectionMode:`multiple`,items:i,isSelectableAll:!1,children:e=>(0,O.jsx)(g,{...e,children:e.name})}),(0,O.jsx)(c,{slot:`close`,children:`Submit`})]})}},j={args:{isDismissable:!0}},M={},N={decorators:[e=>(0,O.jsxs)(`div`,{children:[(0,O.jsx)(u,{level:1,children:`Läs riktlinjer för användning! `}),(0,O.jsx)(e,{})]})],parameters:{},args:{hideCloseButton:!0,isKeyboardDismissDisabled:!0,title:`Close button hidden`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{children:`This modal cannot be closed from the header`}),(0,O.jsx)(c,{slot:`close`,children:`Agree`})]})}},P={args:{title:null,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{children:`This is a simple modal with no title.`}),(0,O.jsx)(c,{slot:`close`,children:`Close`})]})}},F={args:{title:`Read all the text`,children:(0,O.jsxs)(O.Fragment,{children:[k,(0,O.jsx)(c,{slot:`close`,children:`Submit`})]})}},I={args:{title:`Read all the text`,children:k,footer:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{slot:`close`,children:`Submit`}),(0,O.jsx)(c,{slot:`close`,variant:`secondary`,children:`Cancel`})]})}},L={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,D.useState)(null),n=[`apple`,`banana`].map(e=>({id:e,name:e}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(x,{"aria-label":`tabell`,children:[(0,O.jsx)(C,{children:(0,O.jsx)(S,{isRowHeader:!0,children:`Actions`})}),(0,O.jsx)(b,{children:e&&e.map(e=>(0,O.jsx)(w,{children:(0,O.jsx)(T,{children:(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`View`}),(0,O.jsx)(m,{children:e})]})})},e))})]}),(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`Add entry`}),(0,O.jsx)(m,{children:(0,O.jsx)(v,{autoFocus:!0,label:`test`,items:n,onChange:e=>e&&t(t=>t?[...t,e]:[e]),children:e=>(0,O.jsx)(g,{...e,children:e.name})})})]})]})}},R={args:{title:`This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{children:`This modal has a very long title.`}),(0,O.jsx)(c,{slot:`close`,children:`Close`})]})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isDismissable: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Heading level={1}>Läs riktlinjer för användning! </Heading>
        <Story />
      </div>],
  parameters: {},
  args: {
    hideCloseButton: true,
    isKeyboardDismissDisabled: true,
    title: 'Close button hidden',
    children: <>
        <Text>This modal cannot be closed from the header</Text>
        <Button slot='close'>Agree</Button>
      </>
  }
}`,...N.parameters?.docs?.source},description:{story:`For special cases when modal should not be closable without taking further action`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: null,
    children: <>
        <Text>This is a simple modal with no title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Read all the text',
    children: <>
        {longFormParagraphs}
        <Button slot='close'>Submit</Button>
      </>
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Read all the text',
    children: longFormParagraphs,
    footer: <>
        <Button slot='close'>Submit</Button>
        <Button slot='close' variant='secondary'>
          Cancel
        </Button>
      </>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => {
    const [selectedFruit, setSelectedFruit] = useState<Key[] | null>(null);
    const options = ['apple', 'banana'].map(fruit => ({
      id: fruit,
      name: fruit
    }));
    return <>
        <Table aria-label='tabell'>
          <TableHeader>
            <Column isRowHeader>Actions</Column>
          </TableHeader>
          <TableBody>
            {selectedFruit && selectedFruit.map(fruit => <Row key={fruit}>
                  <Cell>
                    <DialogTrigger>
                      <Button>View</Button>
                      <Modal>{fruit}</Modal>
                    </DialogTrigger>
                  </Cell>
                </Row>)}
          </TableBody>
        </Table>
        <DialogTrigger>
          <Button>Add entry</Button>
          <Modal>
            <Select autoFocus label='test' items={options} onChange={value => value && setSelectedFruit(previousValue => previousValue ? [...previousValue, value] : [value])}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </Modal>
        </DialogTrigger>
      </>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar',
    children: <>
        <Text>This modal has a very long title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`NotDismissable`,`HiddenCloseButton`,`EmptyTitle`,`Scrollable`,`ScrollableWithFooter`,`DS1282`,`LongTitle`]}))();export{L as DS1282,j as Default,P as EmptyTitle,N as HiddenCloseButton,R as LongTitle,M as NotDismissable,F as Scrollable,I as ScrollableWithFooter,z as __namedExportsOrder,A as default};