import{r as m,f as l,j as t}from"./iframe-C97-KldL.js";import{S as d}from"./SearchField-D3fZ4plK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DOr_66Ud.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BASohq_6.js";import"./utils-CT49lX3Q.js";import"./useLocalizedStringFormatter-CDO2zV2D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BQuT8hc1.js";import"./useFocusRing-BaDVQaIN.js";import"./index-C9-aWDE9.js";import"./index-DcQl-zHv.js";import"./useFormValidation-CPmiIrH4.js";import"./useField-VNtVV8X6.js";import"./Button-By32KbkP.js";import"./Hidden-Cns8g0IT.js";import"./useLabels-DbdYa4IU.js";import"./useButton-C3jqDXTt.js";import"./search-D7LsdtjY.js";import"./createLucideIcon-DyW2bSMY.js";import"./ClearButton-PXXHfHuR.js";import"./Button-TcfJGFPW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWWYhU2v.js";import"./VisuallyHidden-cBRDBRce.js";import"./x-Cjd9f1_p.js";import"./FieldError-CzHY_m0E.js";import"./Text-BWtrJhgb.js";import"./Text-kfKvhgrO.js";import"./RSPContexts-CVaQzuT2.js";import"./Collection-HncGmFQp.js";import"./index-QjpHXcWP.js";import"./DragAndDrop-DwJvcsK5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeibBvL7.js";import"./SelectionManager-CW0pq1_s.js";import"./useEvent-CjzdKbLS.js";import"./useDescription-B32pZrdJ.js";import"./inertValue-Dzg1Saux.js";import"./useHighlightSelectionDescription-rQ-_XTI_.js";import"./useUpdateEffect-COwk1XTI.js";import"./ListKeyboardDelegate-DOWibJoJ.js";import"./useHasTabbableChild-DnWKp8JB.js";import"./Checkbox-Cv7tJ66E.js";import"./Form-Dg1us4eS.js";import"./check-CgtpV47X.js";import"./useToggleState-CaIpr3x1.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
