import{r as m,f as l,j as t}from"./iframe-BqNGaS3Q.js";import{S as d}from"./SearchField-D043kvo_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-HSA5tSOL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-YRMroG4N.js";import"./clsx-B-dksMZM.js";import"./Form-BK4969P0.js";import"./useFocusRing-CGkrrHUz.js";import"./index-84uqcsRw.js";import"./index-Vj0nGHdt.js";import"./Input-DSv9zuHY.js";import"./Hidden-DSU9xJ9h.js";import"./Button-DSR7b1dw.js";import"./useLabel-EeiXtDoW.js";import"./useLabels-adoQ0dml.js";import"./useButton-DOhwhZT1.js";import"./FieldError-C9gz52yQ.js";import"./Text-1jSgyZAH.js";import"./clsx-Ciqy0D92.js";import"./Text-CJgdTp0n.js";import"./RSPContexts-BStQ6TrK.js";import"./Group-DDpWCvq1.js";import"./useControlledState-CmrGw6Qp.js";import"./useLocalizedStringFormatter-Dy-KyAJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CAOKavmj.js";import"./useField-DFaQy0Xo.js";import"./TextField.module-DdivwlC8.js";import"./search-BAcN5y5b.js";import"./createLucideIcon-DCKEqRJ8.js";import"./x-CxJTxXmL.js";import"./useLocalizedStringFormatter-Y9axLppZ.js";import"./Button-o-Kbu0N5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bp1KH-we.js";import"./Collection-BR8w3g5X.js";import"./index-DYyYHmLM.js";import"./DragAndDrop-CAiy6e3t.js";import"./getScrollParent-D3JQJWO2.js";import"./scrollIntoView-DqdmP0Ox.js";import"./SelectionIndicator-BTVq9xT9.js";import"./SelectionManager-Daec-eOD.js";import"./useEvent-CbShBTQB.js";import"./useDescription-qTJacu0G.js";import"./inertValue-DLNvc6Eg.js";import"./useHighlightSelectionDescription-DxnI71zi.js";import"./useUpdateEffect-BORWL9Av.js";import"./ListKeyboardDelegate-B0AvXnDg.js";import"./useHasTabbableChild-CUtZT3lC.js";import"./Checkbox-BCcNNpoh.js";import"./check-C4IyJfK2.js";import"./useToggleState-DEJGTGwi.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
