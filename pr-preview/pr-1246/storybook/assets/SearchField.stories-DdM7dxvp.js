import{r as m,f as l,j as t}from"./iframe-D9EwWE8M.js";import{S as d}from"./SearchField-C1GWlt92.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D5wlF7r9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VDmJlITu.js";import"./clsx-B-dksMZM.js";import"./Form-R2R1TL4A.js";import"./useFocusRing-BivnDFw5.js";import"./index-DAH1O1Iu.js";import"./index-BR2as-GY.js";import"./Input-CuTxManu.js";import"./Hidden-BsKNJICf.js";import"./Button-T_q17eYt.js";import"./useLabel-Bss4QgXi.js";import"./useLabels-C5o1EFbo.js";import"./useButton-BXxscPHn.js";import"./FieldError-BbtBJcYl.js";import"./Text-DTRaBlNQ.js";import"./clsx-Ciqy0D92.js";import"./Text-D4q9EFLH.js";import"./RSPContexts-BNUf7IyR.js";import"./Group-DY5AWnbs.js";import"./useControlledState-D4c56bPB.js";import"./useLocalizedStringFormatter-Bshgwq-R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oEloXr52.js";import"./useField-AuOq5rL1.js";import"./TextField.module-DdivwlC8.js";import"./search-CovSzaoN.js";import"./createLucideIcon-DiPE6Ful.js";import"./x-Cx3dk2Wl.js";import"./useLocalizedStringFormatter-C2YbnlKW.js";import"./Button-EDaj_92B.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D48zSaf7.js";import"./Collection-DkbGTE8G.js";import"./index-BZtrve2X.js";import"./DragAndDrop-DFnCfOyY.js";import"./getScrollParent-Bc3C6zu_.js";import"./scrollIntoView-COj35Dws.js";import"./SelectionIndicator-BCxJECYe.js";import"./SelectionManager-BEbr8vYA.js";import"./useEvent-DbELLyrS.js";import"./useDescription-C0gXCY7I.js";import"./inertValue-DxzR19Up.js";import"./useHighlightSelectionDescription-BKejgjFB.js";import"./useUpdateEffect-BHI_hYNU.js";import"./ListKeyboardDelegate-DswhUtaR.js";import"./useHasTabbableChild-7NgriJRd.js";import"./Checkbox-a2wlsgJl.js";import"./check-DgkYfv4o.js";import"./useToggleState-BYPn_yuM.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
