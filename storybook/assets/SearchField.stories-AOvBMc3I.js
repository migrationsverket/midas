import{r as m,f as l,j as t}from"./iframe-CWkvuWTT.js";import{S as d}from"./SearchField-Ne_WbsQt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B0q-75By.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-iyG7ALqN.js";import"./utils-DyJgWfbB.js";import"./useLocalizedStringFormatter-DWk1Wejp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dehuj20F.js";import"./useFocusRing-BH2MioRm.js";import"./index-BqsuNAQb.js";import"./index-BFnZ93le.js";import"./useFormValidation-CEtdWlS3.js";import"./useField-hL8cI8qW.js";import"./Button-CENR_dMZ.js";import"./Hidden-BVluWMB8.js";import"./useLabels-jLhadwWQ.js";import"./useButton-3lWcEg9J.js";import"./search-yn-n663H.js";import"./createLucideIcon-CVtV5ZX2.js";import"./ClearButton-BRlGzA45.js";import"./Button-zWAgsDfI.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bt6bRdGE.js";import"./VisuallyHidden-mePKQ-Q7.js";import"./x-qMOEwESg.js";import"./FieldError-Cc11gFwP.js";import"./Text-CWck0lXA.js";import"./Text-wpzgiqlm.js";import"./RSPContexts-CIYffl3s.js";import"./Collection-DIo67PKg.js";import"./index-4YJTRRmu.js";import"./DragAndDrop-Dj5PiMXR.js";import"./getScrollParent-nBJbQA_k.js";import"./scrollIntoView-Ca_THshf.js";import"./SelectionIndicator-C6PBn6_W.js";import"./SelectionManager-BKOtOz1J.js";import"./useEvent-BRuRWZXg.js";import"./useDescription-x0L1qKYy.js";import"./inertValue-DdqsRyLH.js";import"./useHighlightSelectionDescription-DgGULVm2.js";import"./useUpdateEffect-8IpJFns8.js";import"./ListKeyboardDelegate-BkLJXRXi.js";import"./useHasTabbableChild-DTmdqzFD.js";import"./Checkbox-aU0ROrL5.js";import"./Form-wzSlB-uy.js";import"./check-BX_7vycp.js";import"./useToggleState-Bu3_HISK.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
