import{r as m,f as l,j as t}from"./iframe-BbWt9Hzs.js";import{S as d}from"./SearchField-h5eZXWP5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dwc2x46C.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-KZAH4xlx.js";import"./clsx-B-dksMZM.js";import"./Form-D6MDpADX.js";import"./useFocusRing-B9bvRRmX.js";import"./index-DFc29hw1.js";import"./index-62xMHUAX.js";import"./Input-Chi9cHrw.js";import"./Hidden-BJHG9IZy.js";import"./Button-EJIqjvoq.js";import"./useLabel-Dajww4Y_.js";import"./useLabels-B8_jQ6mB.js";import"./useButton-B5rDFFBS.js";import"./FieldError-BzVhs6Ln.js";import"./Text-DSe1JSn0.js";import"./clsx-Ciqy0D92.js";import"./Text-DLXHrpA7.js";import"./RSPContexts-DKdTaTdn.js";import"./Group-D86u_bqU.js";import"./useControlledState-DkbXJDJp.js";import"./useLocalizedStringFormatter-Dq1sm40s.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cphjw6_m.js";import"./useField-Cv-osmis.js";import"./TextField.module-DdivwlC8.js";import"./search-BCkKMoh_.js";import"./createLucideIcon-BJCyfpuO.js";import"./x-B6r1o7zQ.js";import"./useLocalizedStringFormatter-Cp8lRc68.js";import"./Button-C0W8ghEp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-zJEwCiu7.js";import"./Collection-C7TRCN5d.js";import"./index-Q9j86bkX.js";import"./DragAndDrop-HT0qmtlA.js";import"./getScrollParent-D7jC5O_o.js";import"./scrollIntoView-CPHUDPPP.js";import"./SelectionIndicator-CvTQi0Y7.js";import"./SelectionManager-DCnzOW-V.js";import"./useEvent-ngzT0EBz.js";import"./useDescription-B5vJv64Z.js";import"./inertValue-BU5n8TYl.js";import"./useHighlightSelectionDescription-c4Qb0Y_k.js";import"./useUpdateEffect-C-4xU-qa.js";import"./ListKeyboardDelegate-4yWuaQa1.js";import"./useHasTabbableChild-DtKIMeHo.js";import"./Checkbox-CZiIAM3F.js";import"./check-CaqSTZW2.js";import"./useToggleState-B7UuUpX8.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
