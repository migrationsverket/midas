import{r as m,f as l,j as t}from"./iframe-BQjBM75C.js";import{S as d}from"./SearchField-vsiW4-hd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CNCmbQ8n.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BSV0ImVH.js";import"./clsx-B-dksMZM.js";import"./Form-BapHbVlL.js";import"./useFocusRing-gicmbIfS.js";import"./index-DYrIRKkS.js";import"./index-Voaa81LI.js";import"./Input-0cyk7DqD.js";import"./Hidden-DsiXMF_M.js";import"./Button-CleE5i4u.js";import"./useLabel--h21IWG8.js";import"./useLabels-CtGdXDZ4.js";import"./useButton-BZFew9pY.js";import"./FieldError-DR3ilOc-.js";import"./Text-ByOtvKGn.js";import"./clsx-Ciqy0D92.js";import"./Text-CSQrQWbM.js";import"./RSPContexts-ifp6jpNf.js";import"./Group-DeIYa1Er.js";import"./useControlledState-C34v6o9-.js";import"./useLocalizedStringFormatter-1UgPp4Q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-05yk7D0M.js";import"./useField-zeoSjeSc.js";import"./TextField.module-DdivwlC8.js";import"./search-Dv63to9O.js";import"./createLucideIcon-CfIBoofS.js";import"./x-CzDTAgEv.js";import"./useLocalizedStringFormatter-C1cV6AoF.js";import"./Button-BrUsIHUW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUlqTjt1.js";import"./Collection-DoWsB1Mg.js";import"./index-SmeZxf3H.js";import"./DragAndDrop-XXsAWl-P.js";import"./getScrollParent-DRx-xlpO.js";import"./scrollIntoView-ClzIkG2v.js";import"./SelectionIndicator-CD-IXRpl.js";import"./SelectionManager-vW658jsf.js";import"./useEvent-Bf_J53mB.js";import"./useDescription-CBsnfRLo.js";import"./inertValue-CBWb1JCx.js";import"./useHighlightSelectionDescription-wx092Ews.js";import"./useUpdateEffect-CRNjg0Ce.js";import"./ListKeyboardDelegate-BK_gcn-A.js";import"./useHasTabbableChild-DPx0Mup9.js";import"./Checkbox-CMwhf1Ge.js";import"./check-CU_NWJIN.js";import"./useToggleState-BpLH4UF7.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
