import{r as m,f as l,j as t}from"./iframe-BWYHj7v3.js";import{S as d}from"./SearchField-BGV_6OJX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DlMJ8MHa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2pxdcvN.js";import"./clsx-B-dksMZM.js";import"./Form-8H488Lu1.js";import"./useFocusRing-Dyg95bXZ.js";import"./index-7oEDLDPj.js";import"./index-9pfm-tft.js";import"./Input-ClZASIEz.js";import"./Hidden-B4Hoeqhu.js";import"./Button-wGSaEaEO.js";import"./useLabel-CMMx43mY.js";import"./useLabels-DZpMO0Qr.js";import"./useButton-xg-vHwOd.js";import"./FieldError-BSBdPgF-.js";import"./Text-C4Gl7LUF.js";import"./clsx-Ciqy0D92.js";import"./Text-7TDSW4-z.js";import"./RSPContexts-Cti5diL6.js";import"./Group-CNUH6ghx.js";import"./useControlledState-DsTneGsr.js";import"./useLocalizedStringFormatter-C_LLFDGY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CEdyPAro.js";import"./useField-DGT7cjYh.js";import"./TextField.module-DdivwlC8.js";import"./search--KSjybyE.js";import"./createLucideIcon-Dbzq6jGp.js";import"./x-BuNpvuba.js";import"./useLocalizedStringFormatter-BfKsi0NO.js";import"./Button-DEdirHEy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CBrM5tre.js";import"./Collection-Dku4YGez.js";import"./index-D44Hxb6u.js";import"./DragAndDrop-CjOtAjQi.js";import"./getScrollParent-DoohMUen.js";import"./scrollIntoView-DbvRPzab.js";import"./SelectionIndicator-DOs2NO6p.js";import"./SelectionManager-naoen6to.js";import"./useEvent-y7Reijfp.js";import"./useDescription-DkSuF9rM.js";import"./inertValue-BjYrVjjJ.js";import"./useHighlightSelectionDescription-C1DGceSm.js";import"./useUpdateEffect-DsuH9gAI.js";import"./ListKeyboardDelegate-o0zsP83E.js";import"./useHasTabbableChild-DI2G9dAv.js";import"./Checkbox-Cn8ttPOY.js";import"./check-Dh2KwMn4.js";import"./useToggleState-B0z64ft7.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
