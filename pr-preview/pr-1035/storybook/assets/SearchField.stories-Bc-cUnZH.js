import{r as m,f as l,j as t}from"./iframe-BQBOUe4L.js";import{S as d}from"./SearchField-5s24fBOD.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-tT4-vN3c.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DM-5-Rrt.js";import"./utils-CRMkcUEf.js";import"./useLocalizedStringFormatter-B5gaEHvL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Vk17g3pG.js";import"./useFocusRing-DansQnno.js";import"./index-yiTGV0Ad.js";import"./index-B5FT88Na.js";import"./useFormValidation-DspKaQyW.js";import"./useField-CPvbugzP.js";import"./Button-CvEjFmDh.js";import"./Hidden-DlSKSdAn.js";import"./useLabels-CAK16zbU.js";import"./useButton-B_yguids.js";import"./search-DcO30Y2T.js";import"./createLucideIcon-DCYizV4H.js";import"./ClearButton-v4Ttyd3b.js";import"./Button-Cim8R03s.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lzSK34iS.js";import"./VisuallyHidden-DljAyihR.js";import"./x-Cp8v8-j6.js";import"./FieldError-U_WPsfks.js";import"./Text-4aw7o7le.js";import"./Text-B_t0zTpM.js";import"./RSPContexts-CvjO9LUS.js";import"./Collection-DA9nos4X.js";import"./index-DPtY_q6d.js";import"./DragAndDrop-Czj9AWTD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTndX8cd.js";import"./SelectionManager-CnZFBJPA.js";import"./useEvent-5ECDfKWj.js";import"./useDescription-C0HCyUwc.js";import"./inertValue-DR94txFM.js";import"./useHighlightSelectionDescription-C0T0eAFj.js";import"./useUpdateEffect-of8x0zcV.js";import"./ListKeyboardDelegate-CLrR3jmQ.js";import"./useHasTabbableChild-BIio-tgx.js";import"./Checkbox-Chcysf29.js";import"./Form-mxlt6ylo.js";import"./check-DznLR02y.js";import"./useToggleState-BUiXNMTm.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
