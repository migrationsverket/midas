import{r as m,f as l,j as t}from"./iframe-CM9gzC_-.js";import{S as d}from"./SearchField-CtpXgktB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BvlRoji8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXcBw8mX.js";import"./clsx-B-dksMZM.js";import"./Form-C7eTyKCv.js";import"./useFocusRing-Bz17EpSW.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./Input-Cgewi5HM.js";import"./Hidden-D0XxjEDh.js";import"./Button-4PfHMxFE.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./FieldError-Br-BXIw9.js";import"./Text-Bft1iTTC.js";import"./clsx-Ciqy0D92.js";import"./Text-DvQTbzsU.js";import"./RSPContexts-BGBhlXAt.js";import"./Group-CFJbaa2e.js";import"./useControlledState-D7RofSAB.js";import"./useLocalizedStringFormatter-DGUVN_Wt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BsaCBvZg.js";import"./useField-DZeEaImT.js";import"./TextField.module-DdivwlC8.js";import"./search-DcqpQ_H1.js";import"./createLucideIcon-gLaeDi4P.js";import"./x-CRr9CCYv.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./Button-DVDe5XTB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CyPA52id.js";import"./Collection-BtQP2I1Q.js";import"./index-BDQxevPm.js";import"./DragAndDrop-BT8nfd50.js";import"./getScrollParent-B7Te1-pw.js";import"./scrollIntoView-3rRtgk00.js";import"./SelectionIndicator-CXNqpn4L.js";import"./SelectionManager-CoSHJlpm.js";import"./useEvent-CmguT4Gg.js";import"./useDescription-BQW7Zq6D.js";import"./inertValue-Drt515ki.js";import"./useHighlightSelectionDescription-BbjpRuFL.js";import"./useUpdateEffect-CdFwj8T2.js";import"./ListKeyboardDelegate-DZJ2K8C0.js";import"./useHasTabbableChild-q2kzMOIK.js";import"./Checkbox-DU66hm4C.js";import"./check-BFOc9BMq.js";import"./useToggleState-DzOz3edW.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
