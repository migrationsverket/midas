import{r as m,f as l,j as t}from"./iframe-BbEdCWTo.js";import{S as d}from"./SearchField-D9w_Isl5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cqnqmi69.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DT2KBo_t.js";import"./utils-0gBzt-f2.js";import"./useLocalizedStringFormatter-Cfy9D9E4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-tT76rN.js";import"./useFocusRing-B954SIvz.js";import"./index-th6eAN9q.js";import"./index-ObLB26ub.js";import"./useFormValidation-BlLsmx8B.js";import"./useField-3HP9Ota5.js";import"./Button-D-EmDY8c.js";import"./Hidden-dhoH6OsW.js";import"./useLabels-CB9mJaEq.js";import"./useButton-Brl3oMd-.js";import"./search-OQc8Jn1g.js";import"./createLucideIcon-DVbOGhvF.js";import"./ClearButton-CDllESzu.js";import"./Button-FljdEIyw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHJJdt5x.js";import"./VisuallyHidden-Ci4G53k_.js";import"./x-uEbSzWQI.js";import"./FieldError-ClDhUf0E.js";import"./Text-UryQGSay.js";import"./Text-w6pc7bdl.js";import"./RSPContexts-C3UWmBTv.js";import"./Collection-SkhSxcSu.js";import"./index-A6hdIoEh.js";import"./DragAndDrop-DxMi21ay.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DAOIAWPz.js";import"./SelectionManager-3MK6y6kK.js";import"./useEvent-BtmHdsI2.js";import"./useDescription-yyfT0KSm.js";import"./inertValue-Da55cLb2.js";import"./useHighlightSelectionDescription-C5gaSM49.js";import"./useUpdateEffect-BH4-Fego.js";import"./ListKeyboardDelegate-BF-2O97_.js";import"./useHasTabbableChild-CNqq_WsV.js";import"./Checkbox-DpJc7WIf.js";import"./Form-Dmk665yv.js";import"./check-S2MF_jIZ.js";import"./useToggleState-BxwGerHr.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
