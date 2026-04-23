import{r as m,f as l,j as t}from"./iframe-BNflmq3A.js";import{S as d}from"./SearchField-ddIbNjnG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Uui918yy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7V63oD4.js";import"./clsx-B-dksMZM.js";import"./Form-ClPIoKYv.js";import"./useFocusRing-C6RlaKsx.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./Input-P4PAFc0_.js";import"./Hidden-fjlvP_hk.js";import"./Button-DJfxBrz6.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./FieldError-CpZNXgM0.js";import"./Text-Bnz2t9Ql.js";import"./clsx-Ciqy0D92.js";import"./Text-BlWLVQLi.js";import"./RSPContexts-CIYDedK3.js";import"./Group-DjoYRNGK.js";import"./useControlledState-DuXs14gL.js";import"./useLocalizedStringFormatter-CAvVK8gZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSiaFglU.js";import"./useField-D3c7IL7J.js";import"./TextField.module-DdivwlC8.js";import"./search-B4ss-Rdf.js";import"./createLucideIcon-BQvoQkeP.js";import"./x-DbG6WDA3.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./Button-Cyp4EM5w.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ITIWhviF.js";import"./Collection-BCi67oTX.js";import"./index-D9RdZJbp.js";import"./DragAndDrop-6LbVRgC5.js";import"./getScrollParent-BjbBQLw-.js";import"./scrollIntoView-DZi0I4zG.js";import"./SelectionIndicator-C21eoo8L.js";import"./SelectionManager-uSE9FSHJ.js";import"./useEvent-DMh1OLFP.js";import"./useDescription-B_uvSpwC.js";import"./inertValue-Diu_uMY_.js";import"./useHighlightSelectionDescription-DgaZoyD9.js";import"./useUpdateEffect-DlJZVJmb.js";import"./ListKeyboardDelegate-DTCudMFJ.js";import"./useHasTabbableChild-DySCZq4-.js";import"./Checkbox-DHQfrwsk.js";import"./check-C0NBLqZL.js";import"./useToggleState-DWWVpExB.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
