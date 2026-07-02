import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Fi as r,t as i,zi as a}from"./iframe-bnPsM8Kg.js";import{t as o,xt as s}from"./import-DXMrPBaf.js";import{t as c}from"./Button-zhncyVts.js";import{t as l}from"./button-CrkqfAcN.js";import{t as u}from"./Heading-DKUOif07.js";import{t as d}from"./heading-BSnos8Is.js";import{t as f}from"./Text-Da9osrQs.js";import{t as p}from"./text-B8jR9ti4.js";import{o as m,s as h}from"./Label-L37VAPsm.js";import{t as g}from"./ListBoxItem-DAuxIoQJ.js";import{t as _}from"./list-box-DQJe2CsV.js";import{t as v}from"./Select-BPzLiXgG.js";import{n as y,t as b}from"./table-CniSi3Mg.js";import{a as x,i as S,n as C,o as w,r as T,t as E}from"./Table-CXsp6PkH.js";var D,O,k,A,j,M,N,P,F,I,L;e((()=>{r(),D=t(n(),1),o(),h(),l(),y(),_(),p(),b(),d(),O=i(),k={component:m,subcomponents:{DialogTrigger:s},title:`Components/Modal`,tags:[`autodocs`],parameters:{layout:`centered`},render:e=>(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`Öppna`}),(0,O.jsx)(m,{title:`Enter your name`,...e})]}),args:{children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(v,{autoFocus:!0,placeholder:`Select...`,defaultValue:[`kiwi`],label:`Select fruits`,selectionMode:`multiple`,items:a,isSelectableAll:!1,children:e=>(0,O.jsx)(g,{...e,children:e.name})}),(0,O.jsx)(c,{slot:`close`,children:`Submit`})]})}},A={args:{isDismissable:!0}},j={},M={decorators:[e=>(0,O.jsxs)(`div`,{children:[(0,O.jsx)(u,{level:1,children:`Läs riktlinjer för användning! `}),(0,O.jsx)(e,{})]})],parameters:{},args:{hideCloseButton:!0,isKeyboardDismissDisabled:!0,title:`Close button hidden`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{children:`This modal cannot be closed from the header`}),(0,O.jsx)(c,{slot:`close`,children:`Agree`})]})}},N={args:{title:null,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{children:`This is a simple modal with no title.`}),(0,O.jsx)(c,{slot:`close`,children:`Close`})]})}},P={args:{title:`Read all the text`,children:(0,O.jsxs)(O.Fragment,{children:[[1,2,3,4,5,6].map(e=>(0,O.jsx)(f,{elementType:`p`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat magni est veniam, ratione, totam quo eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, laborum praesentium deserunt incidunt minima doloremque eligendi odio iure officia sunt, delectus rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor saepe nam fugit provident asperiores voluptas! Molestiae, cumque.`},e)),(0,O.jsx)(c,{slot:`close`,children:`Submit`})]})}},F={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:()=>{let[e,t]=(0,D.useState)(null),n=[`apple`,`banana`].map(e=>({id:e,name:e}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(S,{"aria-label":`tabell`,children:[(0,O.jsx)(w,{children:(0,O.jsx)(C,{isRowHeader:!0,children:`Actions`})}),(0,O.jsx)(x,{children:e&&e.map(e=>(0,O.jsx)(T,{children:(0,O.jsx)(E,{children:(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`View`}),(0,O.jsx)(m,{children:e})]})})},e))})]}),(0,O.jsxs)(s,{children:[(0,O.jsx)(c,{children:`Add entry`}),(0,O.jsx)(m,{children:(0,O.jsx)(v,{autoFocus:!0,label:`test`,items:n,onChange:e=>e&&t(t=>t?[...t,e]:[e]),children:e=>(0,O.jsx)(g,{...e,children:e.name})})})]})]})}},I={args:{title:`This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar`,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{children:`This modal has a very long title.`}),(0,O.jsx)(c,{slot:`close`,children:`Close`})]})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
        {[1, 2, 3, 4, 5, 6].map(n => <Text key={n} elementType='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            saepe atque necessitatibus pariatur aliquam vel incidunt blanditiis
            rem maxime. Modi enim dolorem optio id error reprehenderit nisi non
            iste? Natus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Itaque, dolores eligendi rerum distinctio dignissimos repellat
            magni est veniam, ratione, totam quo eius aperiam dolorum quod
            minima corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
            incidunt minima doloremque eligendi odio iure officia sunt, delectus
            rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Facilis
            provident, dolorem perspiciatis nesciunt dicta explicabo sequi
            doloremque neque fugit? Ratione adipisci dolor saepe nam fugit
            provident asperiores voluptas! Molestiae, cumque.
          </Text>)}
        <Button slot='close'>Submit</Button>
      </>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar',
    children: <>
        <Text>This modal has a very long title.</Text>
        <Button slot='close'>Close</Button>
      </>
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`NotDismissable`,`HiddenCloseButton`,`EmptyTitle`,`Scrollable`,`DS1282`,`LongTitle`]}))();export{F as DS1282,A as Default,N as EmptyTitle,M as HiddenCloseButton,I as LongTitle,j as NotDismissable,P as Scrollable,L as __namedExportsOrder,k as default};