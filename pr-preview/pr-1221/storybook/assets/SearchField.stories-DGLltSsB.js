import{r as m,f as l,j as t}from"./iframe-D1Yo_ASl.js";import{S as d}from"./SearchField-BKsA6mAI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-QiLjN2oe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtPCKdFP.js";import"./clsx-B-dksMZM.js";import"./Form-BTzQwVTd.js";import"./useFocusRing-B1B12oVM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./Input-bSTNyt_1.js";import"./Hidden-BeKvJ1wg.js";import"./Button-M2F6_Qz4.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./FieldError-BrTiJca0.js";import"./Text-CC_-JfUc.js";import"./clsx-Ciqy0D92.js";import"./Text-Cm1JxqTj.js";import"./RSPContexts-TtF35Naa.js";import"./Group-CAMsnLF6.js";import"./useControlledState-DI2wiQtX.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BXYFaxrk.js";import"./useField--yXn37df.js";import"./TextField.module-DdivwlC8.js";import"./search-BsLvG9mQ.js";import"./createLucideIcon-B2W31-43.js";import"./x-Dx4ggZKu.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Button-DcFviok1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BaAY3BDc.js";import"./Collection-BHwdqdom.js";import"./index-BgxIfYNz.js";import"./DragAndDrop-4GTLm9po.js";import"./getScrollParent-CqYMlGok.js";import"./scrollIntoView-BpMLfVQa.js";import"./SelectionIndicator-BkCDLdi0.js";import"./SelectionManager-Cl2qeWIC.js";import"./useEvent-CR9RVJbO.js";import"./useDescription-DFWHaatp.js";import"./inertValue-CxTIaMMc.js";import"./useHighlightSelectionDescription-DXyOHdh8.js";import"./useUpdateEffect-O-Y4uWUh.js";import"./ListKeyboardDelegate-C-tPikMB.js";import"./useHasTabbableChild-CigW9Ldv.js";import"./Checkbox-CbP2jKQq.js";import"./check-Bw3OGSgT.js";import"./useToggleState-CI0HlWh1.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
