import{r as m,f as l,j as t}from"./iframe-Bh3VWgCW.js";import{S as d}from"./SearchField-DNDoxcNc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DYjItUC8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CEpZVo0k.js";import"./utils-BIL3a6ib.js";import"./useLocalizedStringFormatter-Ca1HzZqp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CEnwoLc0.js";import"./useFocusRing-0AZg0skd.js";import"./index-N6QzfeSJ.js";import"./index-CqYODit3.js";import"./useFormValidation-Cv_mqAb6.js";import"./useField-Bsmsq1ab.js";import"./Button-DwNgNAHT.js";import"./Hidden-471kEs7D.js";import"./useLabels-db71Wl0y.js";import"./useButton-DQTLzfh-.js";import"./search-CBDiZTMM.js";import"./createLucideIcon-_2yVZkpy.js";import"./ClearButton-DdnVuXMs.js";import"./Button-DI241M-e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRrSbQCy.js";import"./VisuallyHidden-BYkApvtM.js";import"./x-pBvU2hIn.js";import"./FieldError-DE6lH482.js";import"./Text-GPAWAUKl.js";import"./Text-rR-9MpjH.js";import"./RSPContexts-eTOZoUex.js";import"./Collection-DR-2fi6L.js";import"./index-DwcmB1sB.js";import"./DragAndDrop-B48ngfcm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BCO4Ph4I.js";import"./SelectionManager-Np_WmImU.js";import"./useEvent-C3iLfYya.js";import"./useDescription-B6uYpxUN.js";import"./inertValue-W_b5pOhY.js";import"./useHighlightSelectionDescription-5hrMQkWM.js";import"./useUpdateEffect-DOh4kS6s.js";import"./ListKeyboardDelegate-eTZICZ-y.js";import"./useHasTabbableChild-C5k4VFzo.js";import"./Checkbox-vkj7DVEs.js";import"./Form-UctQMwsb.js";import"./check-BZABxoNJ.js";import"./useToggleState-DtaZKCgt.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
