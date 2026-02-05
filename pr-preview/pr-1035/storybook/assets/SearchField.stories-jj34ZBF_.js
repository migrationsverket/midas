import{r as m,f as l,j as t}from"./iframe-jXOFY8ly.js";import{S as d}from"./SearchField-Czat4DZn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BaToDJrL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B_hf4unm.js";import"./utils-DMRbnQmp.js";import"./useLocalizedStringFormatter-CKvY-tar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-uxEsjRQI.js";import"./useFocusRing-D6lwjUZF.js";import"./index-DDRSGRcW.js";import"./index-BFn5LmJz.js";import"./useFormValidation-Q4VomWZv.js";import"./useField-d3f_aUfY.js";import"./Button-_V1yAu90.js";import"./Hidden-C1RMCDHa.js";import"./useLabels-BUsfJ8Q5.js";import"./useButton-Br-Tw6Wj.js";import"./search-WPd2KUj9.js";import"./createLucideIcon-CZVrkezG.js";import"./ClearButton-Chm9Dqje.js";import"./Button-BJ-Glf4b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dr7Dpfz9.js";import"./VisuallyHidden-B9izHnXN.js";import"./x-CoKzMXDs.js";import"./FieldError-DpwWyisz.js";import"./Text-NASTJ5SQ.js";import"./Text-DBF8n_Yj.js";import"./RSPContexts-uCM8UasA.js";import"./Collection-BVIzqqsG.js";import"./index-LDBGwil4.js";import"./DragAndDrop-gCeGg8EB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dy3GAmbU.js";import"./SelectionManager-ygzmuEbh.js";import"./useEvent-Dx7k8S5m.js";import"./useDescription-DuiYQhpC.js";import"./inertValue-B0xCVTjQ.js";import"./useHighlightSelectionDescription-DEvMuk0a.js";import"./useUpdateEffect-BTpp0IST.js";import"./ListKeyboardDelegate-DXqM7Z8I.js";import"./useHasTabbableChild-DMIenxCt.js";import"./Checkbox-D_nC9nzj.js";import"./Form-Td99cGHp.js";import"./check-BULYkbZs.js";import"./useToggleState-CdfG7wRA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
