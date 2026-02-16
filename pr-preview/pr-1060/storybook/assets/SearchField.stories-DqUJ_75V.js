import{r as m,f as l,j as t}from"./iframe-DzQsNUlN.js";import{S as d}from"./SearchField-Ca8hm6xN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-15H79L_e.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BDeuRVdh.js";import"./utils-BK4Wbdgl.js";import"./useLocalizedStringFormatter-BKtb_iAs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B_FDF847.js";import"./useFocusRing-DIV-BtF4.js";import"./index-71dlSlec.js";import"./index-BenUNj7q.js";import"./useFormValidation-D42naTnG.js";import"./useField-B2ZM_ZrS.js";import"./Button-B-ooyoCL.js";import"./Hidden-BJckUxlD.js";import"./number-DfkVkf0F.js";import"./useLabels-Cj-mzHSD.js";import"./useButton-CefvlXlx.js";import"./search-Dvk9t6xx.js";import"./createLucideIcon-BcyF_Y89.js";import"./ClearButton-Zj0UVoyx.js";import"./Button-D9Fs-ZCK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNjAMkiD.js";import"./VisuallyHidden-ukn47BBG.js";import"./x-euwJmRQG.js";import"./FieldError-DdUwEQrU.js";import"./Text-B9j4IbHz.js";import"./Text-DQ3iFp2f.js";import"./RSPContexts-Bo3qcagQ.js";import"./Collection-DfWP-8XQ.js";import"./index-CG45YEOG.js";import"./DragAndDrop-ufUCrBIo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-KGcuLJQY.js";import"./SelectionManager-G1dsFni-.js";import"./useEvent-DPJfrH0C.js";import"./useDescription-CghOEtAM.js";import"./inertValue-DLjfQkDI.js";import"./useHighlightSelectionDescription-DKPmrDgg.js";import"./useUpdateEffect-CscfdfxB.js";import"./ListKeyboardDelegate-C7E5D8Pm.js";import"./useHasTabbableChild-AUv5JIdi.js";import"./Checkbox-Cbyp8FES.js";import"./Form-BeAR6TLt.js";import"./check-C9oHi_RA.js";import"./useToggleState-a0alaVyJ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
