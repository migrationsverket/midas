import{r as m,f as l,j as t}from"./iframe-BouJzQQI.js";import{S as d}from"./SearchField-D4qmsjgL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D5JtuYZU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DpPiTef7.js";import"./utils-DjMpdX5f.js";import"./useLocalizedStringFormatter-DMqmuQ22.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B48X4aPN.js";import"./useFocusRing-DLAN_On1.js";import"./index-Mk5PyGJk.js";import"./index-CdrImusv.js";import"./useFormValidation-BnrePAfb.js";import"./useField-DYm5lQPT.js";import"./Button-CGcz2bXe.js";import"./Hidden-Bml1-NzX.js";import"./useLabels-rV452Poa.js";import"./useButton-CJHkKL18.js";import"./search-BbZaJpir.js";import"./createLucideIcon-C49CaP5m.js";import"./ClearButton-0-0DPjb0.js";import"./Button-McxTSLwF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5s11YDl.js";import"./VisuallyHidden-DJQNz0Bi.js";import"./x-BuD-pvTX.js";import"./FieldError-BSX4JMis.js";import"./Text-BC2cfNMW.js";import"./Text-B0v4i5dp.js";import"./RSPContexts-AGIfMDJp.js";import"./Collection-DlgC-mQp.js";import"./index-DMRjCPV0.js";import"./DragAndDrop-B3gHYC63.js";import"./getScrollParent-DhXY10Gw.js";import"./scrollIntoView-BXxHZrWR.js";import"./SelectionIndicator-DaQ2UpOz.js";import"./SelectionManager-CCn4U8_w.js";import"./useEvent-DCCwBm7e.js";import"./useDescription-Mcf3LJqp.js";import"./inertValue-DRX01HXM.js";import"./useHighlightSelectionDescription-CidnfqqU.js";import"./useUpdateEffect-Bztm0A4_.js";import"./ListKeyboardDelegate-CPjjqkUk.js";import"./useHasTabbableChild-C-NfLs2Y.js";import"./Checkbox-BRV0UswS.js";import"./Form-3Uv5jiVi.js";import"./check-DQFApeyj.js";import"./useToggleState-Z9DF_y9e.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
