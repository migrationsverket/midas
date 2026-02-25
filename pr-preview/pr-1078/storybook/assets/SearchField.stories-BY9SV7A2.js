import{r as m,f as l,j as t}from"./iframe-Y9Fx-e1B.js";import{S as d}from"./SearchField-Cw6npQMm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CIH2OY-x.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dt63NuRp.js";import"./utils-tjsFOw4T.js";import"./useLocalizedStringFormatter-Cz-yREfr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cb1_A-1n.js";import"./useFocusRing-DMFWV4N3.js";import"./index-rl_t3oro.js";import"./index-CoUwmbWb.js";import"./useFormValidation-BeD7naen.js";import"./useField-T8mwG7bw.js";import"./Button-C7bYDuo2.js";import"./Hidden-C5yYJ2g8.js";import"./useLabels-D5SCo0gw.js";import"./useButton-BIY4kkQ2.js";import"./search-BHFfGKAg.js";import"./createLucideIcon-CkeYV7Jq.js";import"./ClearButton-DyZF6Vfo.js";import"./Button-k0gPOjAM.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CKHZ7v8y.js";import"./VisuallyHidden-uQrH2dzx.js";import"./x-CxSKMliu.js";import"./FieldError-BP9Y13vD.js";import"./Text-Rwl3gWWv.js";import"./Text-By_wui5t.js";import"./RSPContexts-SJiJ_uHO.js";import"./Collection-DL_ASsG3.js";import"./index-G7Co38C3.js";import"./DragAndDrop--uM-5WOA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DO9xWdRa.js";import"./SelectionManager-D8wjYhYM.js";import"./useEvent-IYNS4JE3.js";import"./useDescription-B2vMFsED.js";import"./inertValue-Cru4F5Ou.js";import"./useHighlightSelectionDescription-RcnaZ9ye.js";import"./useUpdateEffect-9zGNWO65.js";import"./ListKeyboardDelegate-BRLf6YZa.js";import"./useHasTabbableChild-BjeyCwlY.js";import"./Checkbox-pygImnBE.js";import"./Form-DOzPcMFX.js";import"./check-DCY_ZV9K.js";import"./useToggleState-aSPpfXpT.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
