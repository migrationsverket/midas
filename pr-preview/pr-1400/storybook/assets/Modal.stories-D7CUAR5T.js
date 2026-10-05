import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n,t as r}from"./Dialog-DTPgE880.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./Table-4MSvc8ys.js";import{n as d,o as f,u as p}from"./iframe-xXf8zoNU.js";import{n as m,t as h}from"./Button-4FD5Bh4Y.js";import{n as g,t as _}from"./Heading-BjVctbss.js";import{n as v,t as y}from"./Modal-BYIKgTdX.js";import{n as b,t as x}from"./Text-CS4GThEd.js";import{n as S,t as C}from"./Select-CSGtfv6o.js";import{n as w,t as T}from"./ListBoxItem-DyJ1Da_f.js";var E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{f(),E=t(),n(),v(),m(),S(),w(),b(),l(),g(),D=d(),O=[1,2,3,4,5,6].map(e=>(0,D.jsx)(x,{elementType:`p`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque.`},e)),k={component:y,subcomponents:{DialogTrigger:r},title:`Components/Modal`,tags:[`autodocs`],parameters:{layout:`centered`},render:e=>(0,D.jsxs)(r,{children:[(0,D.jsx)(h,{children:`Öppna`}),(0,D.jsx)(y,{title:`Enter your name`,...e})]}),args:{children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(C,{autoFocus:!0,placeholder:`Select...`,defaultValue:[`kiwi`],label:`Select fruits`,selectionMode:`multiple`,items:p,isSelectableAll:!1,children:e=>(0,D.jsx)(T,{...e,children:e.name})}),(0,D.jsx)(h,{slot:`close`,children:`Submit`})]})}},A={args:{isDismissable:!0}},j={},M={decorators:[e=>(0,D.jsxs)(`div`,{children:[(0,D.jsx)(_,{level:1,children:`Läs riktlinjer för användning! `}),(0,D.jsx)(e,{})]})],parameters:{},args:{hideCloseButton:!0,isKeyboardDismissDisabled:!0,title:`Close button hidden`,children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x,{children:`This modal cannot be closed from the header`}),(0,D.jsx)(h,{slot:`close`,children:`Agree`})]})}},N={args:{title:null,children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x,{children:`This is a simple modal with no title.`}),(0,D.jsx)(h,{slot:`close`,children:`Close`})]})}},P={args:{title:`Read all the text`,children:(0,D.jsxs)(D.Fragment,{children:[O,(0,D.jsx)(h,{slot:`close`,children:`Submit`})]})}},F={args:{title:`Read all the text`,children:O,footer:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{slot:`close`,children:`Submit`}),(0,D.jsx)(h,{slot:`close`,variant:`secondary`,children:`Cancel`})]})}},I={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,E.useState)(null),n=[`apple`,`banana`].map(e=>({id:e,name:e}));return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(a,{"aria-label":`tabell`,children:[(0,D.jsx)(s,{children:(0,D.jsx)(o,{isRowHeader:!0,children:`Actions`})}),(0,D.jsx)(i,{children:e&&e.map(e=>(0,D.jsx)(c,{children:(0,D.jsx)(u,{children:(0,D.jsxs)(r,{children:[(0,D.jsx)(h,{children:`View`}),(0,D.jsx)(y,{children:e})]})})},e))})]}),(0,D.jsxs)(r,{children:[(0,D.jsx)(h,{children:`Add entry`}),(0,D.jsx)(y,{children:(0,D.jsx)(C,{autoFocus:!0,label:`test`,items:n,onChange:e=>e&&t(t=>t?[...t,e]:[e]),children:e=>(0,D.jsx)(T,{...e,children:e.name})})})]})]})}},L={args:{title:`This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar`,children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x,{children:`This modal has a very long title.`}),(0,D.jsx)(h,{slot:`close`,children:`Close`})]})}},R=[`Default`,`NotDismissable`,`HiddenCloseButton`,`EmptyTitle`,`Scrollable`,`ScrollableWithFooter`,`DS1282`,`LongTitle`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isDismissable: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`For special cases when modal should not be closable without taking further action`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: null,
    children: <>
        <Text>This is a simple modal with no title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Read all the text',
    children: <>
        {longFormParagraphs}
        <Button slot='close'>Submit</Button>
      </>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar',
    children: <>
        <Text>This modal has a very long title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{I as DS1282,A as Default,N as EmptyTitle,M as HiddenCloseButton,L as LongTitle,j as NotDismissable,P as Scrollable,F as ScrollableWithFooter,R as __namedExportsOrder,k as default};