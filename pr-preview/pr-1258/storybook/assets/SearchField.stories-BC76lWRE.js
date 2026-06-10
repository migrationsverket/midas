import{r as m,f as l,j as t}from"./iframe-Bsevwbh7.js";import{S as d}from"./SearchField-DJPnLeMr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DLE4n9C8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BjUYJUY7.js";import"./clsx-B-dksMZM.js";import"./Form-iwCra6U3.js";import"./useFocusRing-DBBFiexc.js";import"./index-0Uf6_8UJ.js";import"./index-CpU-YPFf.js";import"./Input-DIhOLcQb.js";import"./Hidden-BzElwnOz.js";import"./Button-BBqJQ0vW.js";import"./useLabel-DSPZXDj4.js";import"./useLabels-CDo4fr32.js";import"./useButton-CLSd70bQ.js";import"./FieldError-BOklNagG.js";import"./Text-C73-jwg3.js";import"./clsx-Ciqy0D92.js";import"./Text-DtHsSzf4.js";import"./RSPContexts-BP83SwVZ.js";import"./Group-N6yrWHuu.js";import"./useControlledState-J6z6hn1D.js";import"./useLocalizedStringFormatter-Cz7KI8RO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-E5OriAto.js";import"./useField-C9u-Vza6.js";import"./TextField.module-DdivwlC8.js";import"./search-Yb3FVn0L.js";import"./createLucideIcon-DFszj1HS.js";import"./x-CPgoGNLm.js";import"./useLocalizedStringFormatter-DXTgKJtU.js";import"./Button-Dtn1R1va.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrA1NcJU.js";import"./Collection-Bo81diqN.js";import"./index-B9Ve_shz.js";import"./DragAndDrop-bKCvYZ3o.js";import"./getScrollParent-DtUBJ-GV.js";import"./scrollIntoView-DwEkoOWU.js";import"./SelectionIndicator-D1XFv4Ic.js";import"./SelectionManager-D_20TfLf.js";import"./useEvent-DnUBwNrU.js";import"./useDescription-CGMCUMbk.js";import"./inertValue-B6_oPtdt.js";import"./useHighlightSelectionDescription-BkCEnbrf.js";import"./useUpdateEffect-DLPUqa33.js";import"./ListKeyboardDelegate-DJ089RfI.js";import"./useHasTabbableChild-DoLfbr7v.js";import"./Checkbox-Dv9r_yP7.js";import"./check-MNzV3cXa.js";import"./useToggleState-eIhW-NiL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
