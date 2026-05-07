import{r as m,f as l,j as t}from"./iframe-OzXVe_TX.js";import{S as d}from"./SearchField-Bh3yhP4i.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DgJf545y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-tCr9uINw.js";import"./clsx-B-dksMZM.js";import"./Form-9T3ORTNA.js";import"./useFocusRing-DizgMThA.js";import"./index-BxX1Tua9.js";import"./index-D0VI0fBs.js";import"./Input-_dhISMKx.js";import"./Hidden-B1yqLm5L.js";import"./Button-CQhvXyK9.js";import"./useLabel-T42JMCw1.js";import"./useLabels-DsiX80-5.js";import"./useButton-BhVS9jHL.js";import"./FieldError-homDiWH4.js";import"./Text-DQmoUTPX.js";import"./clsx-Ciqy0D92.js";import"./Text-C8tynj-R.js";import"./RSPContexts-DzC-BhmG.js";import"./Group-iCUipsL9.js";import"./useControlledState-CLatC1WA.js";import"./useLocalizedStringFormatter-CQl_xHp6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CqobKicN.js";import"./useField-DcJnjYwN.js";import"./TextField.module-DdivwlC8.js";import"./search-BjnQoW9N.js";import"./createLucideIcon-COmw-XaN.js";import"./x-BQ6XFr0a.js";import"./useLocalizedStringFormatter-MRi_Bu-E.js";import"./Button-BPALFDJW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bi7DvSRw.js";import"./Collection-Clk-CiQ7.js";import"./index-DarIc387.js";import"./DragAndDrop-BNZ62tp_.js";import"./getScrollParent-MM6xXv8T.js";import"./scrollIntoView-B2EduiaM.js";import"./SelectionIndicator-B6nqEXJJ.js";import"./SelectionManager-SS5akqNZ.js";import"./useEvent-Ch2KziZH.js";import"./useDescription-w2FiPpGY.js";import"./inertValue-Ba3Eiy5K.js";import"./useHighlightSelectionDescription-Bk7kKg7J.js";import"./useUpdateEffect-CuaxLaOM.js";import"./ListKeyboardDelegate-77l68lVC.js";import"./useHasTabbableChild-B1qhYE8-.js";import"./Checkbox-BtP5QYYV.js";import"./check-D9LxFL35.js";import"./useToggleState-eq5Mgbig.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
