import{r as m,f as l,j as t}from"./iframe-BpGtKQe1.js";import{S as d}from"./SearchField-BmlHxl6O.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BxqDZ-Je.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-MlmZVz50.js";import"./utils-BKq0-BjK.js";import"./useLocalizedStringFormatter-ByTL2pAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B6DY9W_n.js";import"./useFocusRing-DM78EYAE.js";import"./index-WHmZXjR5.js";import"./index-A40XJ3N3.js";import"./useFormValidation-DkBdVNDk.js";import"./useField-CWTTVHZk.js";import"./Button-C7_RBjc4.js";import"./Hidden-C6AmhJiF.js";import"./useLabels-Bl-mky30.js";import"./useButton-eFtWSIwf.js";import"./search-o1Ao4ql0.js";import"./createLucideIcon-Bd7t5Cp9.js";import"./ClearButton-D05E4U_V.js";import"./Button-D8xW_9uS.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTV9lzwh.js";import"./VisuallyHidden-BXvACDV4.js";import"./x-CUMp7a-i.js";import"./FieldError-CvO6Yv2r.js";import"./Text-Bsc-Zvgg.js";import"./Text-DVPUkm5u.js";import"./RSPContexts-BV3PZIKk.js";import"./Collection-CPXh_Pmt.js";import"./index-vDgNzL0x.js";import"./DragAndDrop-D8ClRR5h.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DQ6hjTXS.js";import"./SelectionManager-DLjlteTg.js";import"./useEvent-ITPJf9hS.js";import"./useDescription-BHH3LopT.js";import"./inertValue-CdG1GWtt.js";import"./useHighlightSelectionDescription-Ct8h6pNz.js";import"./useUpdateEffect-DG4KleRJ.js";import"./ListKeyboardDelegate-CCvsmqiC.js";import"./useHasTabbableChild-NsN5ubDR.js";import"./Checkbox-DsQc5iPa.js";import"./Form-D_AK0U6l.js";import"./check-wlm_Q8np.js";import"./useToggleState-tItmmBpo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
