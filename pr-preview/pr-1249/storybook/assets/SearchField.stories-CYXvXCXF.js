import{r as m,f as l,j as t}from"./iframe-DwYJYgGb.js";import{S as d}from"./SearchField-gyR6Y9-6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-dL3634rl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-fIJ7LVq8.js";import"./clsx-B-dksMZM.js";import"./Form-CF6mtsDJ.js";import"./useFocusRing-CXC08Tq5.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./Input-_uPRWUXT.js";import"./Hidden-CwjkXMFO.js";import"./Button-Ddo8eX0a.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./FieldError-8dF8Tbve.js";import"./Text-B4syvpmZ.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhOo0fu.js";import"./RSPContexts-DE3QJKMh.js";import"./Group-C2t1rW1T.js";import"./useControlledState-CxwoTKvB.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYPEtwKi.js";import"./useField-mcTKDTGz.js";import"./TextField.module-DdivwlC8.js";import"./search-C9tAf1QT.js";import"./createLucideIcon-CCgdfoT7.js";import"./x-CX4TJhGN.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./Button-DpQdXJp1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0sEyNoY.js";import"./Collection-Du3GdM9A.js";import"./index-BXWU9W6R.js";import"./DragAndDrop-CzhnO9ik.js";import"./getScrollParent-Dee46RGf.js";import"./scrollIntoView-BsKOETet.js";import"./SelectionIndicator-D5viv05a.js";import"./SelectionManager-Bzzdwe4i.js";import"./useEvent-exXZI4Sz.js";import"./useDescription-DtI32Oaq.js";import"./inertValue-e1xljGr9.js";import"./useHighlightSelectionDescription-Cp0m9Ilw.js";import"./useUpdateEffect-BHkSbq6F.js";import"./ListKeyboardDelegate-Cm-sBpbt.js";import"./useHasTabbableChild-DKU0UdBn.js";import"./Checkbox-CDMmWNO7.js";import"./check-pMJtBoxa.js";import"./useToggleState-UNbpMwQX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
