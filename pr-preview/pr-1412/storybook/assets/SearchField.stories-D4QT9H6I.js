import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Table-B97jjizG.js";import{n as l,t as u}from"./SearchField-BSda25Uo.js";import{f as d,n as f,o as p}from"./iframe-Ba7UZEal.js";var m,h,g,_,v;function y(){return(y=e((()=>{m=t(),p(),l(),s(),h=f(),g={title:`Examples/Search`,tags:[`autodocs`],argTypes:{}},_={args:{},render:function(){let e=[{name:`Frukt`,id:`fruit`,isRowHeader:!0},{name:`Beskrivning`,id:`description`}],[t,s]=(0,m.useState)(``),[l]=(0,m.useState)(()=>d.map((e,t)=>({id:t+1,fruit:e.name,description:e.description}))),f=l.filter(e=>e.fruit.toLowerCase().includes(t.toLowerCase()));return(0,h.jsxs)(`div`,{style:{maxWidth:`400px`,margin:`0 auto`},children:[(0,h.jsx)(u,{placeholder:`Sök efter en frukt...`,buttonText:`Sök`,onSubmit:s,style:{width:`100%`}}),t.length>0&&(f.length===0?(0,h.jsx)(`p`,{style:{marginTop:`10px`},children:`Inga träffar`}):(0,h.jsx)(`div`,{style:{marginTop:`20px`},children:(0,h.jsxs)(r,{"aria-label":`Fruit Table`,style:{width:`100%`},children:[(0,h.jsx)(a,{children:e.map(e=>(0,h.jsx)(i,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),(0,h.jsx)(n,{children:f.map(t=>(0,h.jsx)(o,{children:e.map(e=>(0,h.jsx)(c,{children:t[e.id]},e.id))},t.id))})]})}))]})}},v=[`SimpleSearch`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as SimpleSearch,v as __namedExportsOrder,g as default};