import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Fi as r,Vi as i,t as a}from"./iframe-CaLoeHNH.js";import{t as o}from"./src-B3DXJ8V_.js";import{t as s}from"./SearchField-HhW-rrYF.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Table-Dam9x9B2.js";var m,h,g,_,v;e((()=>{m=t(n(),1),r(),o(),h=a(),g={title:`Examples/Search`,tags:[`autodocs`],argTypes:{}},_={args:{},render:function(){let e=[{name:`Frukt`,id:`fruit`,isRowHeader:!0},{name:`Beskrivning`,id:`description`}],[t,n]=(0,m.useState)(``),[r]=(0,m.useState)(()=>i.map((e,t)=>({id:t+1,fruit:e.name,description:e.description}))),a=r.filter(e=>e.fruit.toLowerCase().includes(t.toLowerCase()));return(0,h.jsxs)(`div`,{style:{maxWidth:`400px`,margin:`0 auto`},children:[(0,h.jsx)(s,{placeholder:`Sök efter en frukt...`,buttonText:`Sök`,onSubmit:n,style:{width:`100%`}}),t.length>0&&(a.length===0?(0,h.jsx)(`p`,{style:{marginTop:`10px`},children:`Inga träffar`}):(0,h.jsx)(`div`,{style:{marginTop:`20px`},children:(0,h.jsxs)(l,{"aria-label":`Fruit Table`,style:{width:`100%`},children:[(0,h.jsx)(d,{children:e.map(e=>(0,h.jsx)(u,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),(0,h.jsx)(c,{children:a.map(t=>(0,h.jsx)(f,{children:e.map(e=>(0,h.jsx)(p,{children:t[e.id]},e.id))},t.id))})]})}))]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`SimpleSearch`]}))();export{_ as SimpleSearch,v as __namedExportsOrder,g as default};