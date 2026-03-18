import{r as m,f as l,j as t}from"./iframe-gH8ABtWn.js";import{S as d}from"./SearchField-DdTSHQhq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BaLxYwyX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CxcfWzqE.js";import"./utils-Dr0NplXF.js";import"./useLocalizedStringFormatter-DY58p06X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BopRX0iY.js";import"./useFocusRing-BzsOph_O.js";import"./index-C3LVocIP.js";import"./index-BXReFhAr.js";import"./useFormValidation-CK0TKrXv.js";import"./useField-DPi7PJOQ.js";import"./Button-BNQc1T02.js";import"./Hidden-LWIlbl0l.js";import"./useLabels-7BQEP7LD.js";import"./useButton-BwMcnHkP.js";import"./search-DuHagiTn.js";import"./createLucideIcon-BESY5gGm.js";import"./ClearButton-B65LXV-H.js";import"./x-Cw1h_T-8.js";import"./Button-BbxyNHP5.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CwcPRwvH.js";import"./VisuallyHidden-CA2YzQGk.js";import"./FieldError-B2F_p8LM.js";import"./Text-CfaWjhbQ.js";import"./Text-CW1FG424.js";import"./RSPContexts-JH-s2nvd.js";import"./Collection-D1QokVuM.js";import"./index-BGx-91uj.js";import"./DragAndDrop-ComiUtJI.js";import"./getScrollParent-CLH27qmc.js";import"./scrollIntoView-BqHSzV05.js";import"./SelectionIndicator-BjSkIjXo.js";import"./SelectionManager-Iv778hvw.js";import"./useEvent-Bt_gQioX.js";import"./useDescription-Cs18I91_.js";import"./inertValue-DQQ17G4K.js";import"./useHighlightSelectionDescription-DCwtPgAy.js";import"./useUpdateEffect-CnbVc4MV.js";import"./ListKeyboardDelegate-Chu4c7a7.js";import"./useHasTabbableChild-Bu3hbcbn.js";import"./Checkbox-GCpPP2Kp.js";import"./Form-B6vf0-_o.js";import"./check-D7I0wIV2.js";import"./useToggleState-COXsesrJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
