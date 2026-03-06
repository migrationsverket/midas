import{r as m,f as l,j as t}from"./iframe-DyBiNx2q.js";import{S as d}from"./SearchField-DvnGSNhn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-t-nqkWLM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Q0-sVA1t.js";import"./utils-B5dKaEwK.js";import"./useLocalizedStringFormatter-CjE048XI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Boay7tH5.js";import"./useFocusRing-wn7y19LG.js";import"./index-Buskhl-p.js";import"./index-4ysC-kQu.js";import"./useFormValidation-CBFd9wPD.js";import"./useField-DmnvQ3tf.js";import"./Button-BJJCCEqe.js";import"./Hidden-Cb-0RftD.js";import"./useLabels-CLX48ijd.js";import"./useButton-CHwzBhtJ.js";import"./search-DbZZWos9.js";import"./createLucideIcon-C_ZTugQV.js";import"./ClearButton-DLgZyuz7.js";import"./Button-DowFNeCQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-bUUJR2W9.js";import"./VisuallyHidden-rSrQGzQd.js";import"./x-DRhGVBqX.js";import"./FieldError-SXTa4faB.js";import"./Text-CvUxrlBC.js";import"./Text-ByDcSGxm.js";import"./RSPContexts-D9jYRv23.js";import"./Collection-WQ9upkmY.js";import"./index-DjNeHl00.js";import"./DragAndDrop-sisd1KMK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEhCheiQ.js";import"./SelectionManager-wh13-yOm.js";import"./useEvent-BM6vajM-.js";import"./useDescription-BoU-4n_-.js";import"./inertValue-BDiNMXVw.js";import"./useHighlightSelectionDescription-BVUklFwG.js";import"./useUpdateEffect-aQsidOGa.js";import"./ListKeyboardDelegate-UyVUUCf3.js";import"./useHasTabbableChild-D6vZmkCU.js";import"./Checkbox-Do0DZTIV.js";import"./Form-CV4_UMc2.js";import"./check-DTQnXmjY.js";import"./useToggleState-CwLk1YYU.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
