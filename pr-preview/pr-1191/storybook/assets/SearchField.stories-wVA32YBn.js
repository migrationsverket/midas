import{r as m,f as l,j as t}from"./iframe-BmAdb1PA.js";import{S as d}from"./SearchField-Di6YV35v.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D149Zx6q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CCClzR0P.js";import"./clsx-B-dksMZM.js";import"./Form-DuBFRND4.js";import"./useFocusRing-DjzcYn69.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./Input-wS3uVeCW.js";import"./Hidden-B3pD7GY2.js";import"./Button-MRSjvKjG.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./FieldError-BFmjoeTz.js";import"./Text-CWRsvaQ5.js";import"./clsx-Ciqy0D92.js";import"./Text-GqXtxiSt.js";import"./RSPContexts-C9Yi9HqJ.js";import"./Group-DHPBGzHI.js";import"./useControlledState-Dv2Kshwg.js";import"./useLocalizedStringFormatter-DY8Y5mpq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DB_mL8mV.js";import"./useField-CiSiXV_i.js";import"./TextField.module-DdivwlC8.js";import"./search-DtDSL7nU.js";import"./createLucideIcon-CbxvyYW-.js";import"./x-BgO40Plk.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./Button-Cxe1PoSr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDq5yWsw.js";import"./Collection-YyAEhVk9.js";import"./index-BlhtBE4W.js";import"./DragAndDrop-9wJBDeJP.js";import"./getScrollParent-7DjJo_eW.js";import"./scrollIntoView-BvBTMwmY.js";import"./SelectionIndicator-D0ZbJgrH.js";import"./SelectionManager-DiqOcHkc.js";import"./useEvent-CnZp3rBE.js";import"./useDescription-Dk0a0Fsb.js";import"./inertValue-vkTapp6s.js";import"./useHighlightSelectionDescription-6j41GiZJ.js";import"./useUpdateEffect-DCc_7wSp.js";import"./ListKeyboardDelegate-DxdtfhPW.js";import"./useHasTabbableChild-DSEzZtfi.js";import"./Checkbox-K6lm5hfX.js";import"./check-Dd0URqZZ.js";import"./useToggleState-rPcyEIuy.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
