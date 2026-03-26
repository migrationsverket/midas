import{r as m,f as l,j as t}from"./iframe-Cd0-ZcsP.js";import{S as d}from"./SearchField-DfK-732W.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-y4xLxbNz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhqpUTpA.js";import"./clsx-B-dksMZM.js";import"./Form-CVMbYt33.js";import"./useFocusRing-Dfp5Gp4o.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./Input-D97QSq7i.js";import"./Hidden-CPmKijlW.js";import"./Button-7ELWuSQK.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./FieldError-1WFTuS_h.js";import"./Text-DyAmcS7z.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw2Ugvgy.js";import"./RSPContexts-Co104av2.js";import"./Group-L4zEm_4E.js";import"./useControlledState-d4JhcqA_.js";import"./useLocalizedStringFormatter-eRJpNzx7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BwqM3_Fh.js";import"./useField-DAxwXtOh.js";import"./TextField.module-DdivwlC8.js";import"./search-fy7IDt52.js";import"./createLucideIcon-BVwfSxcn.js";import"./x-DC2j07Yv.js";import"./useLocalizedStringFormatter-DOvNyG8w.js";import"./Button-pofFgtnZ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUU_0XCx.js";import"./Collection-5Ew_XIc7.js";import"./index-D_ztscsY.js";import"./DragAndDrop-Dh-da_hc.js";import"./getScrollParent-CsyNiD_a.js";import"./scrollIntoView-CK4U69Q7.js";import"./SelectionIndicator-CllVl-sk.js";import"./SelectionManager-B0xhOmDq.js";import"./useEvent-sNCkpNtj.js";import"./useDescription-D_MdrsUa.js";import"./inertValue--xB0UjV9.js";import"./useHighlightSelectionDescription-dginAtln.js";import"./useUpdateEffect-ReQETEeO.js";import"./ListKeyboardDelegate-D6mn5I9l.js";import"./useHasTabbableChild-DHk2Faj0.js";import"./Checkbox-fSIDsRSp.js";import"./check-p29FIlB4.js";import"./useToggleState-Dzx0_ers.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
