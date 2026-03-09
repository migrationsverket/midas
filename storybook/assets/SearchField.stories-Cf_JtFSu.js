import{r as m,f as l,j as t}from"./iframe-CZ4pIpgM.js";import{S as d}from"./SearchField-JBLyq6i6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BENKQA0P.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DloD9_PZ.js";import"./utils-BKAqyTPp.js";import"./useLocalizedStringFormatter-BPfhaoOQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-sYR35YUp.js";import"./useFocusRing-CC14X5Ag.js";import"./index--Vrw-Eoy.js";import"./index-DhnAxJyh.js";import"./useFormValidation-B2pDzUXQ.js";import"./useField-3e9SwQn9.js";import"./Button-Bzfpb552.js";import"./Hidden-eVbRi0Ga.js";import"./useLabels-Cqjt9RJx.js";import"./useButton-BLx5WIcY.js";import"./search-BSUf3TQF.js";import"./createLucideIcon-NleWcVUk.js";import"./ClearButton-CYG69ZpA.js";import"./Button-BsOyBqD3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-2rZubXmi.js";import"./VisuallyHidden-B6O2-97V.js";import"./x-DkZopY_b.js";import"./FieldError-CAfz9m6m.js";import"./Text-BQl4iJz3.js";import"./Text-DIdbWBzS.js";import"./RSPContexts-D88SRWR9.js";import"./Collection-D0DooXtn.js";import"./index-A8oFdD54.js";import"./DragAndDrop-BkSfPvYM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-6cVNcxEy.js";import"./SelectionManager-Bpvam3Hj.js";import"./useEvent-D9H4FF1-.js";import"./useDescription-DpS_jdsI.js";import"./inertValue-C01hD1_N.js";import"./useHighlightSelectionDescription-DWQKgL9c.js";import"./useUpdateEffect-DkEeYd8o.js";import"./ListKeyboardDelegate-Bwq3uVzn.js";import"./useHasTabbableChild-Daf64Zht.js";import"./Checkbox-DFXAtT4Q.js";import"./Form-Ds7umKf_.js";import"./check-DdDRsr95.js";import"./useToggleState-BYCRmu5b.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
