import{r as m,f as l,j as t}from"./iframe-570mREhY.js";import{S as d}from"./SearchField-Bef5Pk6W.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DZHfUPgO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bk880GAa.js";import"./utils-BqlcL5rx.js";import"./useLocalizedStringFormatter-CImBKygC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ClwVu4Jc.js";import"./useFocusRing-D77kJS_m.js";import"./index-Bvld532n.js";import"./index-C5HPQFby.js";import"./useFormValidation-CR3Ou1E_.js";import"./useField-DLWgoaNu.js";import"./Button-C_kwnSXE.js";import"./Hidden-B4VHltGi.js";import"./useLabels-C-WDIhaI.js";import"./useButton-TVehMT5u.js";import"./search-BNCPCb-g.js";import"./createLucideIcon-BAw__jnC.js";import"./ClearButton-LrDr6T7F.js";import"./Button-dcNBfXXf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DkAO2Z2_.js";import"./VisuallyHidden-BOerlFrD.js";import"./x-DUSrueAG.js";import"./FieldError-yE8YByGw.js";import"./Text-Bv6LeWEW.js";import"./Text-Dj2VLQFh.js";import"./RSPContexts-Cb-2UirY.js";import"./Collection-MjJwGCCq.js";import"./index-Bh5caC_l.js";import"./DragAndDrop-D8hAantA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D0FkfzIY.js";import"./SelectionManager-DiKYdGU5.js";import"./useEvent-BqxQVWwN.js";import"./useDescription-2ZAZ1q0L.js";import"./inertValue-DGSchp6p.js";import"./useHighlightSelectionDescription-Cxw5Uyj5.js";import"./useUpdateEffect-C_wpqgOl.js";import"./ListKeyboardDelegate-CEuvSmDQ.js";import"./useHasTabbableChild-CfhiwDp2.js";import"./Checkbox-DTNHvSHe.js";import"./Form-Dra-fnmO.js";import"./check-cKH59LOM.js";import"./useToggleState-DoSIS8yA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
