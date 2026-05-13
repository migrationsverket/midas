import{r as m,f as l,j as t}from"./iframe-XCmPjT_D.js";import{S as d}from"./SearchField-2qb2WRw6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BrStArkE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UE4RAygH.js";import"./clsx-B-dksMZM.js";import"./Form-ClIjAo6w.js";import"./useFocusRing-Ow3seqvj.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./Input-PfFttH7r.js";import"./Hidden-YeCUxupi.js";import"./Button-CNsl3901.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./FieldError-Ddp3ZKWY.js";import"./Text-BuJILbtP.js";import"./clsx-Ciqy0D92.js";import"./Text-RTx-QT4L.js";import"./RSPContexts-BqTpYPqw.js";import"./Group-C1BkV6KF.js";import"./useControlledState-CJRuvBEJ.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzF4rdmg.js";import"./useField-a2ZWKilV.js";import"./TextField.module-DdivwlC8.js";import"./search-BWZ8zxKN.js";import"./createLucideIcon-dj1Mp7UM.js";import"./x-DXC51em7.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Button-BoCs2oV6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DTL2Sb6w.js";import"./Collection-DDyfzr5r.js";import"./index-yftg3tvi.js";import"./DragAndDrop-Cd5Z8WTJ.js";import"./getScrollParent-BZMbo4m2.js";import"./scrollIntoView-Dci8aQFD.js";import"./SelectionIndicator-DJNyyuP1.js";import"./SelectionManager-bkciLoD-.js";import"./useEvent-CkgGcE1e.js";import"./useDescription-DSdmSZs4.js";import"./inertValue-wqG7nvLC.js";import"./useHighlightSelectionDescription-DvSncxeD.js";import"./useUpdateEffect-BLisHd76.js";import"./ListKeyboardDelegate-C8lf82aC.js";import"./useHasTabbableChild-DMPsDUYC.js";import"./Checkbox-DW9hQChm.js";import"./check-C8kXMXtn.js";import"./useToggleState-Ba6KNzYf.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
