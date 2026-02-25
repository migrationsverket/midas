import{r as m,f as l,j as t}from"./iframe-BTWMpxaw.js";import{S as d}from"./SearchField-B0vCQWKa.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DpcHm42I.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CRbmL-GT.js";import"./useObjectRef-CQ0wbjO8.js";import"./useLocalizedStringFormatter-CCWRThSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZgdgsNE.js";import"./useFocusRing-D_JbvpzL.js";import"./useFocusable-DroJBjVA.js";import"./index-BcRiH35A.js";import"./index-BRI9nXbv.js";import"./useFormValidation-5p1jo9Ru.js";import"./useField-WQlJsGjc.js";import"./Button-CAgd8sZK.js";import"./utils-C3lx9DX-.js";import"./Hidden-BQDZ_Wq1.js";import"./number-DfkVkf0F.js";import"./useLabels-Qrrl1VgB.js";import"./useButton-BrhFQfMI.js";import"./search-CjRMw92-.js";import"./createLucideIcon-D3byJH39.js";import"./ClearButton-ByLOhS0L.js";import"./Button-B7QanPQQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BCu2gt1L.js";import"./VisuallyHidden-BZ8ApsH8.js";import"./x-CZObjwQc.js";import"./FieldError-CapQEyCl.js";import"./Text-AwkOgpRf.js";import"./Text-XH9vDvn5.js";import"./RSPContexts-CgrWNIj5.js";import"./Collection-B_b2ppV7.js";import"./CollectionBuilder-BLs7TzFW.js";import"./index-BQuq6Vq-.js";import"./DragAndDrop-BZFqYn2o.js";import"./getScrollParent-DRdm8xm-.js";import"./scrollIntoView-Q7175gbP.js";import"./SelectionIndicator-Db6mgl97.js";import"./SelectionManager-jBp3qQ-Y.js";import"./useEvent-BLDn_e3Q.js";import"./useDescription-DVX_PCr4.js";import"./inertValue-BGTfS2AF.js";import"./useHighlightSelectionDescription-1SBQBsHj.js";import"./useUpdateEffect-BnRbzrEI.js";import"./ListKeyboardDelegate-COwUALGh.js";import"./useHasTabbableChild-DlGaWw1a.js";import"./Checkbox-DlIqAqki.js";import"./Form-D7825GY6.js";import"./check-jyMn1QHS.js";import"./useToggleState-DFwODKVo.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
