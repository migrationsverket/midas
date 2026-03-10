import{r as m,f as l,j as t}from"./iframe-bMlrIVqx.js";import{S as d}from"./SearchField-rAH8TLhz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-COr4FcgI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B1Wdr8nI.js";import"./utils-CiQjpS3V.js";import"./useLocalizedStringFormatter-CMgAZYok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CIhs8AK4.js";import"./useFocusRing-D8WCTnIg.js";import"./index-bHuBvRtH.js";import"./index-RO-R4BZE.js";import"./useFormValidation-eHx-WVAV.js";import"./useField-DVMTtL6M.js";import"./Button-v8dNK1Nl.js";import"./Hidden-hGkg45bv.js";import"./useLabels-1BtgXQl_.js";import"./useButton-d-Sb4YVS.js";import"./search-CGXITiKm.js";import"./createLucideIcon-BpTSGys0.js";import"./ClearButton-jOT1Ao_r.js";import"./Button-BN-gP6-P.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CTQktmvu.js";import"./VisuallyHidden-3-YJbPrh.js";import"./x-CcCCRFo_.js";import"./FieldError-BuQ4lPqn.js";import"./Text-Bx2VBQkS.js";import"./Text-Bdt-QSsh.js";import"./RSPContexts-DoPn5P63.js";import"./Collection-CMNy8xwo.js";import"./index-fcuKGEAb.js";import"./DragAndDrop-BMuC6Sl3.js";import"./getScrollParent-CjAAh5mb.js";import"./scrollIntoView-CDYKtDZ7.js";import"./SelectionIndicator-D_gtTXsF.js";import"./SelectionManager-VLtppM1E.js";import"./useEvent-DP6lgkls.js";import"./useDescription-DpC2r11h.js";import"./inertValue-BbdPdIhQ.js";import"./useHighlightSelectionDescription-7rIFCR97.js";import"./useUpdateEffect-CXmeNXDj.js";import"./ListKeyboardDelegate-D5YpQ5fx.js";import"./useHasTabbableChild-DWndl-xk.js";import"./Checkbox-CEB4VWfr.js";import"./Form-CHbmSbh0.js";import"./check-D0aLA1fr.js";import"./useToggleState-vqeMXzFJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
