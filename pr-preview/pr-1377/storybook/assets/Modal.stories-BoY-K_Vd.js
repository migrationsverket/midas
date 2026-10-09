import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n,t as r}from"./Dialog-B7kpvJEk.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./Table-DGpnZf7_.js";import{n as d,o as f,u as p}from"./iframe-Ce2l8AjE.js";import{n as m,t as h}from"./Button-r0MzOSIx.js";import{n as g,t as _}from"./ButtonGroup-BQ-cJ815.js";import{n as v,t as y}from"./Heading-DujlmWyt.js";import{n as b,t as x}from"./Modal-mhYvp5Am.js";import{n as S,t as C}from"./Text-O0scd_U-.js";import{n as w,t as T}from"./Select-EW1FNeXi.js";import{n as E,t as D}from"./ListBoxItem-CVZfS5Dq.js";var O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{f(),O=t(),n(),b(),m(),g(),w(),E(),S(),l(),v(),k=d(),A=[1,2,3,4,5,6].map(e=>(0,k.jsx)(C,{elementType:`p`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque.`},e)),j={component:x,subcomponents:{DialogTrigger:r},title:`Components/Modal`,tags:[`autodocs`],parameters:{layout:`centered`},render:e=>(0,k.jsxs)(r,{children:[(0,k.jsx)(h,{children:`Öppna`}),(0,k.jsx)(x,{title:`Enter your name`,...e})]}),args:{children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{autoFocus:!0,placeholder:`Select...`,defaultValue:[`kiwi`],label:`Select fruits`,selectionMode:`multiple`,items:p,isSelectableAll:!1,children:e=>(0,k.jsx)(D,{...e,children:e.name})}),(0,k.jsx)(h,{slot:`close`,children:`Submit`})]})}},M={args:{isDismissable:!0}},N={},P={decorators:[e=>(0,k.jsxs)(`div`,{children:[(0,k.jsx)(y,{level:1,children:`Läs riktlinjer för användning! `}),(0,k.jsx)(e,{})]})],parameters:{},args:{hideCloseButton:!0,isKeyboardDismissDisabled:!0,title:`Close button hidden`,children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(C,{children:`This modal cannot be closed from the header`}),(0,k.jsx)(h,{slot:`close`,children:`Agree`})]})}},F={args:{title:null,children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(C,{children:`This is a simple modal with no title.`}),(0,k.jsx)(h,{slot:`close`,children:`Close`})]})}},I={args:{title:`Read all the text`,children:(0,k.jsxs)(k.Fragment,{children:[A,(0,k.jsx)(h,{slot:`close`,children:`Submit`})]})}},L={args:{title:`Read all the text`,children:A,footer:(0,k.jsxs)(_,{children:[(0,k.jsx)(h,{slot:`close`,children:`Submit`}),(0,k.jsx)(h,{slot:`close`,variant:`secondary`,children:`Cancel`})]})}},R={tags:[`!dev`,`!autodocs`,`!snapshot`],render:()=>{let[e,t]=(0,O.useState)(null),n=[`apple`,`banana`].map(e=>({id:e,name:e}));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(a,{"aria-label":`tabell`,children:[(0,k.jsx)(s,{children:(0,k.jsx)(o,{isRowHeader:!0,children:`Actions`})}),(0,k.jsx)(i,{children:e&&e.map(e=>(0,k.jsx)(c,{children:(0,k.jsx)(u,{children:(0,k.jsxs)(r,{children:[(0,k.jsx)(h,{children:`View`}),(0,k.jsx)(x,{children:e})]})})},e))})]}),(0,k.jsxs)(r,{children:[(0,k.jsx)(h,{children:`Add entry`}),(0,k.jsx)(x,{children:(0,k.jsx)(T,{autoFocus:!0,label:`test`,items:n,onChange:e=>e&&t(t=>t?[...t,e]:[e]),children:e=>(0,k.jsx)(D,{...e,children:e.name})})})]})]})}},z={args:{title:`This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar`,children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(C,{children:`This modal has a very long title.`}),(0,k.jsx)(h,{slot:`close`,children:`Close`})]})}},B=[`Default`,`NotDismissable`,`HiddenCloseButton`,`EmptyTitle`,`Scrollable`,`ScrollableWithFooter`,`DS1282`,`LongTitle`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isDismissable: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`For special cases when modal should not be closable without taking further action`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: null,
    children: <>
        <Text>This is a simple modal with no title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Read all the text',
    children: <>
        {longFormParagraphs}
        <Button slot='close'>Submit</Button>
      </>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Read all the text',
    children: longFormParagraphs,
    footer: <ButtonGroup>
        <Button slot='close'>Submit</Button>
        <Button slot='close' variant='secondary'>
          Cancel
        </Button>
      </ButtonGroup>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar',
    children: <>
        <Text>This modal has a very long title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...z.parameters?.docs?.source}}}})))()}V();export{R as DS1282,M as Default,F as EmptyTitle,P as HiddenCloseButton,z as LongTitle,N as NotDismissable,I as Scrollable,L as ScrollableWithFooter,B as __namedExportsOrder,j as default};