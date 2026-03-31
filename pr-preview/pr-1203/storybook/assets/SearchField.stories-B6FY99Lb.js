import{r as m,f as l,j as t}from"./iframe-BAIFV8Yb.js";import{S as d}from"./SearchField-BbzTDPnO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CVqWB8R3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4qL7h-Q.js";import"./clsx-B-dksMZM.js";import"./Form-Ck4aH0QB.js";import"./useFocusRing-btLeUPqX.js";import"./index-mpJUQRSx.js";import"./index-Baj0KArx.js";import"./Input-BrLA4Eyl.js";import"./Hidden-I3OO9ryl.js";import"./Button-F9PaMeiW.js";import"./useLabel-BgyZguEJ.js";import"./useLabels-CWgWqrCK.js";import"./useButton-CcTZ9cV8.js";import"./FieldError-Y1vkCgJL.js";import"./Text-CmPtR76W.js";import"./clsx-Ciqy0D92.js";import"./Text-ygME-eTj.js";import"./RSPContexts-0G2A7Cpm.js";import"./Group-DjhcnqMw.js";import"./useControlledState-CleADvs5.js";import"./useLocalizedStringFormatter-B_HxKguN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-4k4bOKUa.js";import"./useField-BY0XbHIO.js";import"./TextField.module-DdivwlC8.js";import"./search-DKpjCqQA.js";import"./createLucideIcon-CRLMORiX.js";import"./x-BbXy3uH4.js";import"./useLocalizedStringFormatter-geOfM1X1.js";import"./Button-CqpMDFXh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-FRjMpRtC.js";import"./Collection-BD2NM9el.js";import"./index-BgNa46qe.js";import"./DragAndDrop-BGevbgWv.js";import"./getScrollParent-Dq1fMLPX.js";import"./scrollIntoView-ChGKlCh8.js";import"./SelectionIndicator-D4XjwJOB.js";import"./SelectionManager-BLAgjyob.js";import"./useEvent-VqD0bu_T.js";import"./useDescription-OhYwP_vB.js";import"./inertValue-DfVCjtO5.js";import"./useHighlightSelectionDescription-aSWK9drW.js";import"./useUpdateEffect-Dbv7MDp_.js";import"./ListKeyboardDelegate-BGul-hJ7.js";import"./useHasTabbableChild-DY7DrHph.js";import"./Checkbox-CkbrAgQP.js";import"./check-Bkhvl8Tz.js";import"./useToggleState-CAibhu_f.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
